import { defineType, defineField } from 'sanity'

export const dailyMood = defineType({
    name: 'dailyMood',
    title: 'Daily Mood',
    type: 'document',
    fields: [
        defineField({
            name: 'date',
            title: '日付',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            }
        }),
        defineField({
            name: 'moodText',
            title: '店主のつぶやき・メモ',
            description: '今の気分や、AIに翻訳してほしい元の言葉を入力してください。',
            type: 'text',
        }),
        defineField({
            name: 'generatedPost',
            title: 'AI生成おたより',
            description: 'AIが店主のメモと環境情報を元に作成した情緒的な文章です。',
            type: 'text',
        }),
        defineField({
            name: 'uiThemeTokens',
            title: 'UIデザイン・トークン',
            description: 'AIが雰囲気に応じて自動決定したサイトのデザイン要素です。',
            type: 'object',
            fields: [
                { name: 'primaryColor', type: 'string', title: 'アクセントカラー (HEX)' },
                { name: 'fontStyle', type: 'string', title: 'フォント形式 (serif/sans-serif)' },
            ],
        }),
        defineField({
            name: 'soundscapeId',
            title: 'Soundscape / Playlist ID',
            type: 'string',
        }),
    ],
})
