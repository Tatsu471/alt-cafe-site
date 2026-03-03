import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2024-03-03',
})

const menuItems = [
    {
        _type: 'menuItem',
        title: 'ディープワーク・アメリカーノ',
        description: '集中力を極限まで高めるための、深煎り豆を使用した力強いアメリカーノ。カフェインとほのかな苦味が、あなたの「フロー状態」への没入をサポートします。雑念を払い、コードや文章と向き合いたい時に。',
        price: 550,
        category: 'Drink',
        aiTag: 'Focused, Deep Work',
        weatherContext: { temperature: 20, condition: 'Cloudy', humidity: 55 },
    },
    {
        _type: 'menuItem',
        title: 'ブレインストーミング・ジンジャーエール',
        description: '自家製ジンジャーシロップに、レモングラスとカルダモンを効かせた刺激的な微炭酸ドリンク。ピリッとした生姜の辛味が脳を覚醒させ、新しいアイデアの連鎖を生み出します。',
        price: 620,
        category: 'Drink',
        aiTag: 'Creative, Energetic',
        weatherContext: { temperature: 25, condition: 'Sunny', humidity: 40 },
    },
    {
        _type: 'menuItem',
        title: 'リファクタリング・レモンパウンド',
        description: '疲れた脳を優しくリセットする、国産レモンを丸ごと使った爽やかなパウンドケーキ。甘酸っぱいアイシングが、複雑に絡み合った思考をシンプルに解きほぐす手助けをしてくれます。',
        price: 480,
        category: 'Food',
        aiTag: 'Refresh, Reset',
        weatherContext: { temperature: 22, condition: 'Clear', humidity: 50 },
    },
    {
        _type: 'menuItem',
        title: 'アジャイル・アボカドトースト',
        description: '短時間で良質なエネルギーを補給できるオープンサンド。ライ麦パンにたっぷりのアボカドとチアシードをトッピング。スピーディな立ち上がりと持続力を約束する一皿です。',
        price: 850,
        category: 'Food',
        aiTag: 'Quick Energy, Agile',
        weatherContext: { temperature: 18, condition: 'Breezy', humidity: 60 },
    },
    {
        _type: 'menuItem',
        title: 'インスピレーション・スパイスカレー',
        description: '15種類のオリジナルスパイスを、AIがその日の湿度に合わせて配合を微調整する五感を刺激するカレー。複雑な香りのレイヤーが、行き詰まったプロジェクトに予期せぬ突破口をもたらすかもしれません。',
        price: 1200,
        category: 'Food',
        aiTag: 'Inspiration, Breakthrough',
        weatherContext: { temperature: 26, condition: 'Humid', humidity: 75 },
    },
]

const dailyMoods = [
    {
        _type: 'dailyMood',
        date: '2026-03-03',
        moodText: '雨。春の気配。しっとり落ち着いた朝。',
        generatedPost: '窓を叩く雨音が心地よいリズムを刻む朝です。少しずつ暖かくなり、春の足音が聞こえてきましたね。本日は、雨の日の憂鬱を優しさに変える「アールグレイ・ラテ」を特別にご用意しました。読書やコーディングの手が止まったら、しっとりとした空気の中で温かい一杯と一息つきませんか？皆様のインスピレーションが広がる、静かな時間を提供いたします。',
        uiThemeTokens: { primaryColor: '#5a6b7d', fontStyle: 'serif' },
        soundscapeId: 'spotify:playlist:1234RainyMorning',
    },
    {
        _type: 'dailyMood',
        date: '2026-03-05',
        moodText: '快晴。風が強い。元気が出る感じ。新しいことを始めたい。',
        generatedPost: '雲一つない青空が広がり、季節を運ぶ強い風が心地よく吹いています。今日は何か新しい挑戦を始めたくなる、そんなエネルギッシュな日ですね！Alt-Caféでは、ビタミンたっぷりの「シトラス・エスプレッソソーダ」をおすすめしています。爽快な炭酸と柑橘の刺激が、あなたの背中をそっと押し、新しいアイデアへの活力を補充してくれるはずです。',
        uiThemeTokens: { primaryColor: '#f39c12', fontStyle: 'sans-serif' },
        soundscapeId: 'spotify:playlist:5678SunnyVibes',
    },
    {
        _type: 'dailyMood',
        date: '2026-03-10',
        moodText: '満席。感謝。夜の静寂。少し疲れたけど達成感。',
        generatedPost: '多くの方に足を運んでいただいた賑やかな一日が終わり、Alt-Caféは夜の静寂に包まれています。本日もご来店いただき、心より感謝申し上げます。昼間の活気とは違う、夜のカフェは自分自身と対話するための静かな空間。心地よい疲労感と共に、明日のための活力を蓄える穏やかな時間をお過ごしください。深夜は少し照明を落とし、瞑想的なアンビエントBGMでお迎えいたします。',
        uiThemeTokens: { primaryColor: '#2c3e50', fontStyle: 'sans-serif' },
        soundscapeId: 'spotify:playlist:9101NightAmbient',
    },
]

export async function GET() {
    try {
        const results = []

        // Seed Menu Items
        for (const item of menuItems) {
            const doc = await client.create(item)
            results.push(doc)
        }

        // Seed Daily Moods
        for (const mood of dailyMoods) {
            const doc = await client.create(mood)
            results.push(doc)
        }

        return NextResponse.json({ message: 'Seed successful', createdDocs: results.length })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
