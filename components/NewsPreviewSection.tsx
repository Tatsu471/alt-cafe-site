"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Mock news data (will be replaced by Sanity fetch in the future)
const mockNews = [
    {
        date: "2026.03.10",
        category: "NEW",
        title: "春限定「桜ラテ」スタート。AIが毎朝、あなたの朝に最適な一杯を提案します。",
        slug: "#",
    },
    {
        date: "2026.03.05",
        category: "EVENT",
        title: "3/20（金）：「AIと感性の夜話」トークイベント開催決定。クリエイターと語る、次世代の創造論。",
        slug: "#",
    },
    {
        date: "2026.02.28",
        category: "INFO",
        title: "Alt-Café公式LINEをリリース。AIがあなたのその日の気分を診断し、おすすめメニューをお届けします。",
        slug: "#",
    },
];

export default function NewsPreviewSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".news-header", {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        });

        gsap.from(".news-item", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="news-header flex items-end justify-between mb-16">
                    <div className="space-y-3">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--ai-primary)]">News & Events</span>
                        <h2 className="text-3xl md:text-5xl font-serif">最新情報</h2>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center space-x-3 text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--ai-primary)] transition-colors group"
                    >
                        <span>View All</span>
                        <span className="w-8 h-[1px] bg-white/20 group-hover:bg-[var(--ai-primary)] group-hover:w-12 transition-all" />
                    </Link>
                </div>

                {/* News Items */}
                <div className="space-y-0">
                    {mockNews.map((item, idx) => (
                        <Link key={idx} href={item.slug} className="news-item block group">
                            <div className="grid grid-cols-[120px_100px_1fr] gap-6 py-7 border-b border-white/8 items-start">
                                <span className="text-[11px] text-white/30 font-sans pt-1">{item.date}</span>
                                <span
                                    className="text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border self-start"
                                    style={{
                                        borderColor: "var(--ai-primary)",
                                        color: "var(--ai-primary)",
                                    }}
                                >
                                    {item.category}
                                </span>
                                <div className="flex items-start justify-between">
                                    <p className="text-sm md:text-base font-sans leading-relaxed group-hover:text-[var(--ai-primary)] transition-colors flex-1 pr-6">
                                        {item.title}
                                    </p>
                                    <span className="opacity-0 group-hover:opacity-100 text-[var(--ai-primary)] transition-all translate-x-[-8px] group-hover:translate-x-0 pt-1">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile: View All link */}
                <div className="mt-10 md:hidden">
                    <Link
                        href="/news"
                        className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--ai-primary)] transition-colors flex items-center space-x-3"
                    >
                        <span>View All News</span>
                        <span className="w-8 h-[1px] bg-white/20" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
