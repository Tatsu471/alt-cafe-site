import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2024-03-03',
});

const mockNews = [
    {
        _id: "news-1",
        date: "2026.03.10",
        category: "NEW",
        title: "春限定「桜ラテ」スタート",
        body: "AIが毎朝計算する気温と湿度に合わせて、桜の抽出量を微調整します。今年の春しか出会えない、一期一会のラテです。",
    },
    {
        _id: "news-2",
        date: "2026.03.20",
        category: "EVENT",
        title: "「AIと感性の夜話」トークイベント",
        body: "エンジニア、デザイナー、カフェオーナーが語る「機械に冷たくならない創造論」。参加者限定の特別メニューもご用意。",
    },
    {
        _id: "news-3",
        date: "2026.02.28",
        category: "INFO",
        title: "公式LINE始めました",
        body: "毎朝8時に、その日のAIおすすめメニューをお届けします。天気・気温・季節に合わせた一杯を、あなたの手元へ。",
    },
];

export default async function NewsPage() {
    return (
        <div className="max-w-4xl mx-auto py-24 px-6 space-y-16">
            <div className="space-y-4">
                <h1 className="text-sm uppercase tracking-[0.5em] text-[var(--ai-primary)]">News & Events</h1>
                <p className="text-4xl md:text-6xl font-serif">最新情報</p>
            </div>

            <div className="space-y-0">
                {mockNews.map((item, idx) => (
                    <article key={item._id} className="group py-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
                        <div className="space-y-3">
                            <span className="text-[11px] text-white/40 font-sans">{item.date}</span>
                            <span
                                className="block text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border w-fit"
                                style={{ borderColor: "var(--ai-primary)", color: "var(--ai-primary)" }}
                            >
                                {item.category}
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-serif leading-snug group-hover:text-[var(--ai-primary)] transition-colors">
                                {item.title}
                            </h2>
                            <p className="text-sm text-white/50 leading-loose font-sans">{item.body}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
