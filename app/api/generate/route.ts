import { createClient } from '@sanity/client'
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'

// Sanityの書き込み用クライアント設定
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2024-03-03',
})

export async function POST(req: Request) {
    try {
        const { temperature, condition, humidity, moodMemo } = await req.json();

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

        // JSON形式で確実に返させるためのスキーマ定義
        const schema: any = {
            description: "Cafe mood and menu recommendation based on weather",
            type: SchemaType.OBJECT,
            properties: {
                blogPost: { type: SchemaType.STRING, description: "A poetic blog post about the current mood" },
                primaryColor: { type: SchemaType.STRING, description: "HEX color code reflecting the mood" },
                fontStyle: { type: SchemaType.STRING, description: "serif or sans-serif" },
                menuItem: {
                    type: SchemaType.OBJECT,
                    properties: {
                        title: { type: SchemaType.STRING },
                        description: { type: SchemaType.STRING },
                        price: { type: SchemaType.NUMBER },
                        category: { type: SchemaType.STRING },
                        aiTag: { type: SchemaType.STRING }
                    },
                    required: ["title", "description", "price", "category", "aiTag"]
                }
            },
            required: ["blogPost", "primaryColor", "fontStyle", "menuItem"]
        };

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema,
            }
        });

        const prompt = `
            あなたは「Alt-Café」の店主の感性を翻訳するAIパートナーです。
            以下の環境情報を元に、今日のおたより（ブログ記事）と、その雰囲気にぴったりの「今日の一皿」を1つ提案してください。
            また、サイトの雰囲気を変えるためのカラーコード（1つ）とフォントスタイルも提案してください。

            環境情報:
            - 天気: ${condition}
            - 気温: ${temperature}°C
            - 湿度: ${humidity}%
            - 店主の今の気分: ${moodMemo}

            店主の感性を拡張するような、クリエイティブで没入感のある内容にしてください。
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const data = JSON.parse(responseText);

        // 1. Daily Moodの作成
        const moodDoc = {
            _type: 'dailyMood',
            date: new Date().toISOString().split('T')[0],
            moodText: moodMemo,
            generatedPost: data.blogPost,
            uiThemeTokens: {
                primaryColor: data.primaryColor,
                fontStyle: data.fontStyle,
            },
            soundscapeId: condition === 'Rain' ? 'rain-ambient' : 'cafe-vibe'
        };

        const createdMood = await client.create(moodDoc);

        // 2. Menu Itemの作成（おすすめとして追加）
        const menuDoc = {
            _type: 'menuItem',
            title: data.menuItem.title,
            description: data.menuItem.description,
            price: data.menuItem.price,
            category: data.menuItem.category,
            aiTag: data.menuItem.aiTag,
            weatherContext: {
                temperature,
                condition,
                humidity
            }
        };

        const createdMenu = await client.create(menuDoc);

        return Response.json({
            success: true,
            mood: createdMood,
            menu: createdMenu
        });

    } catch (error: any) {
        console.error('AI Generation Error:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}