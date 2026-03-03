"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";

interface DailyMood {
    moodText?: string;
    generatedPost?: string;
    date?: string;
}

export default function Hero({ mood }: { mood: DailyMood }) {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-bg", {
            opacity: 0,
            scale: 1.1,
            duration: 2,
        })
            .from(".hero-badge", {
                opacity: 0,
                y: 20,
                duration: 1,
            }, "-=1")
            .from(".hero-title", {
                opacity: 0,
                y: 30,
                duration: 1.2,
                stagger: 0.2,
            }, "-=0.8")
            .from(".hero-description", {
                opacity: 0,
                y: 20,
                duration: 1,
            }, "-=0.6");
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="hero-bg absolute inset-0 z-0">
                <Image
                    src="/images/alt_cafe_background.png" // We'll need to move/copy the generated image here
                    alt="Premium Cafe Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">
                <div className="hero-badge inline-block px-4 py-1 rounded-full border border-white/20 glass text-[10px] tracking-[0.3em] uppercase opacity-70 mb-4">
                    Today's Atmosphere
                </div>

                <h1 className="hero-title text-4xl md:text-7xl leading-tight font-serif tracking-tighter">
                    旬の感性を、<br />
                    <span className="gradient-text">AIと共に。</span>
                </h1>

                <p className="hero-description text-sm md:text-lg text-white/60 leading-relaxed font-sans max-w-2xl mx-auto">
                    {mood?.generatedPost || "店主の微かな「今の空気感」や直感的な「インスピレーション」をAIが汲み取り、その瞬間のベストな体験をメニューと空間へ翻訳します。"}
                </p>

                <div className="pt-8 hero-description">
                    <button className="px-8 py-4 bg-white text-black font-sans text-xs uppercase tracking-widest hover:bg-[var(--ai-primary)] hover:text-white transition-all duration-300 rounded-full">
                        Discover Today's Selection
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30">
                <span className="text-[8px] tracking-[0.4em] uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
