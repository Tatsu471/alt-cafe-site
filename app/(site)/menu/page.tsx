import { createClient } from "next-sanity";
import Image from "next/image";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2024-03-03',
});

export default async function MenuPage() {
    const query = `*[_type == "menuItem"] | order(category asc, title asc)`;
    const items = await client.fetch(query);

    const categories = ["Drink", "Food", "Sweets"];

    return (
        <div className="max-w-7xl mx-auto py-24 px-6 space-y-20">
            <div className="space-y-4">
                <h1 className="text-sm uppercase tracking-[0.5em] text-[var(--ai-primary)]">Menu</h1>
                <p className="text-4xl md:text-6xl font-serif">心と体を調律する、<br />私たちの定番メニュー。</p>
            </div>

            {categories.map((cat) => (
                <div key={cat} className="space-y-12">
                    <h2 className="text-2xl font-serif border-b border-white/10 pb-4">{cat}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                        {items.filter((i: any) => i.category === cat).map((item: any, idx: number) => (
                            <div key={idx} className="flex justify-between items-start group">
                                <div className="space-y-2 max-w-[80%]">
                                    <h3 className="text-lg group-hover:text-[var(--ai-primary)] transition-colors">{item.title}</h3>
                                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                                </div>
                                <span className="text-lg font-serif">¥{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
