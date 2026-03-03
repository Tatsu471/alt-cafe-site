import { defineType, defineField } from 'sanity'

export const menuItem = defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: '商品名',
            description: 'メニューに表示される名前です。',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: '商品の説明',
            description: 'AIによって生成された、または手動で入力された商品の魅力的な紹介文です。',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: '価格',
            type: 'number',
        }),
        defineField({
            name: 'category',
            title: 'カテゴリー',
            type: 'string',
            options: {
                list: [
                    { title: 'ドリンク', value: 'Drink' },
                    { title: 'フード', value: 'Food' },
                    { title: 'その他', value: 'Other' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'aiTag',
            title: 'AIタグ（雰囲気/役割）',
            description: 'AIがこの商品をどのように解釈したか（例：リラックス、集中力アップ）。',
            type: 'string',
        }),
        defineField({
            name: 'weatherContext',
            title: 'Weather Context',
            type: 'object',
            fields: [
                { name: 'temperature', type: 'number', title: 'Temperature (°C)' },
                { name: 'condition', type: 'string', title: 'Condition (e.g., Rain, Sunny)' },
                { name: 'humidity', type: 'number', title: 'Humidity (%)' },
            ],
        }),
    ],
})
