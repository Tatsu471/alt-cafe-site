"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ConceptSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".concept-content", {
            opacity: 0,
            x: -50,
            duration: 1.5,
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
        });
    }, { scope: container });

    return (
        <section ref={container} className="w-full py-32 px-6 relative overflow-hidden">
            {/* Background Motif */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--ai-primary)] to-transparent opacity-20" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="concept-content space-y-8">
                    <h2 className="text-sm uppercase tracking-[0.5em] font-sans" style={{ color: "var(--ai-label)" }}>Our Concept</h2>
                    <h3 className="text-4xl md:text-5xl font-serif leading-tight">なぜこのカフェが<br /><span className="gradient-text">AIを導入しているのか</span></h3>

                    <div className="space-y-8 text-white/75 leading-loose font-sans text-sm md:text-base">
                        <p>
                            店主は「その瞬間のベストな体験」を提供したいという強い思いを持っています。しかし、固定化されたメニューやマニュアル通りの接客では、繊細な空気感の差異を表現しきれませんでした。
                        </p>
                        <p>
                            そこで、言語化の難しい「今の空気感」や直感的な「インスピレーション」を瞬時に汲み取り、メニューの提案や空間デザインへと翻訳してくれるパートナーとして、Gemini（AI）を導入しました。
                        </p>
                        <p className="font-serif italic" style={{ color: "var(--ai-label)" }}>
                            AIは業務効率化のためではなく、「店主の感性を拡張し、顧客へ届けるための翻訳機」として機能しています。
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="px-8 py-3 border border-white/20 hover:border-[var(--ai-primary)] transition-colors rounded-full text-[10px] uppercase tracking-widest">
                            Read More Story
                        </button>
                    </div>
                </div>

                <div className="relative aspect-square md:aspect-auto md:h-[600px] glass rounded-3xl overflow-hidden">
                    {/* We can put an image or a complex AI aura animation here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-[var(--ai-primary)] blur-[100px] animate-aurora opacity-30" />
                        <p className="font-serif text-2xl tracking-[0.5em] opacity-50">SENSE & AI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
