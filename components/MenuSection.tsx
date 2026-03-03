"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
    title: string;
    description: string;
    price: number;
    category: string;
}

export default function MenuSection({ items }: { items: MenuItem[] }) {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate only the section header — items are always visible via CSS
        gsap.from(".menu-section-header", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                once: true,
            },
        });
    }, { scope: container });

    return (
        <section ref={container} className="w-full py-32 px-6 bg-[var(--color-cafe-base)]">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="menu-section-header text-center space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.5em] font-sans" style={{ color: "var(--ai-label)" }}>Today's Selection</h2>
                    <p className="text-3xl md:text-5xl font-serif">AIが見極めた「今の空気感」に寄り添う、<br />本日のおすすめメニューです。</p>
                </div>

                {items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="glass p-8 rounded-3xl group hover:border-[var(--ai-primary)] transition-all duration-500"
                                style={{
                                    // Staggered CSS animation — no GSAP dependency
                                    animation: `fadeInUp 0.6s ease both`,
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--ai-label)" }}>{item.category}</span>
                                    {/* Price: white gradient for maximum readability */}
                                    <span
                                        className="text-lg font-serif"
                                        style={{
                                            background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        ¥{item.price}
                                    </span>
                                </div>
                                <h3 className="text-xl mb-4 group-hover:text-[var(--ai-primary)] transition-colors font-serif">{item.title}</h3>
                                <p className="text-sm text-white/60 leading-loose font-sans">{item.description}</p>
                                <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="text-[10px] uppercase tracking-[0.2em] flex items-center space-x-2 text-[var(--ai-primary)]">
                                        <span>Order Now</span>
                                        <span className="w-4 h-[1px] bg-[var(--ai-primary)]" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
                        <p className="text-white/30 text-sm italic font-sans">メニューデータがまだありません。Sanityから入稿するか、シードを実行してください。</p>
                    </div>
                )}
            </div>
        </section>
    );
}
