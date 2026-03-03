"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        number: "01",
        label: "AI × Seasonal Menu",
        title: "その日の天気と気分に、\n寄り添うメニューを。",
        body: "Gemini AIが当日の天気・気温・店主のバイオリズムを解析し、「今日あなたに飲んでほしい一杯」を提案します。固定メニューになかった、一期一会の出会いがここにあります。",
        image: "/images/feature_ai_menu.png",
        alt: "AIが選定したカフェメニューのフラットレイ",
    },
    {
        number: "02",
        label: "Third Place Design",
        title: "創造し、思索するための\n「第三の場所」。",
        body: "自宅でも職場でもない、自分だけの時間が流れる空間。フリーランスやクリエイターが「次のアイデア」と出会うために設計された、静かで豊かなサードプレイスです。",
        image: "/images/feature_ambiance.png",
        alt: "夜のカフェでラップトップを開くクリエイター",
    },
    {
        number: "03",
        label: "Craftsman's Cup",
        title: "一杯に込めた、\n妥協なき技術と温度。",
        body: "バリスタが一杯ずつ丁寧に仕上げるスペシャルティコーヒー。豆の産地から抽出温度まで、AIと人間の感性が交差する瞬間が、あなたのカップに注がれています。",
        image: "/images/feature_barista.png",
        alt: "バリスタがラテアートを描く手元",
    },
];

export default function FeaturesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const rows = gsap.utils.toArray<HTMLElement>(".feature-row");
        rows.forEach((row) => {
            const img = row.querySelector(".feature-img");
            const content = row.querySelector(".feature-content");
            const number = row.querySelector(".feature-number");

            gsap.from(img, {
                opacity: 0,
                scale: 0.92,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: { trigger: row, start: "top 75%" },
            });

            gsap.from(content, {
                opacity: 0,
                x: 60,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: { trigger: row, start: "top 75%" },
            });

            gsap.from(number, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: { trigger: row, start: "top 75%" },
            });
        });

        // Horizontal divider line reveal
        gsap.from(".feature-divider", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1.5,
            ease: "power3.inOut",
            stagger: 0.3,
            scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--ai-primary)]">Our Features</span>
                        <h2 className="text-4xl md:text-6xl font-serif">なぜ、Alt-Caféを<br />選ぶのか。</h2>
                    </div>
                    <p className="mt-6 md:mt-0 text-white/40 text-sm max-w-xs leading-loose font-sans">
                        ここでしか体験できない、AIと人間の感性が交わる場所。
                    </p>
                </div>

                {/* Feature Rows */}
                <div className="space-y-0">
                    {features.map((feature, idx) => {
                        const isEven = idx % 2 === 1;
                        return (
                            <div key={feature.number}>
                                <div className="feature-divider h-[1px] bg-white/10 w-full mb-16 md:mb-24" />
                                <div
                                    className={`feature-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24 ${isEven ? "md:[direction:rtl]" : ""}`}
                                >
                                    {/* Image */}
                                    <div className={`feature-img relative rounded-[2rem] overflow-hidden aspect-square h-auto ${isEven ? "md:[direction:ltr]" : ""}`}>
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className={`feature-content space-y-8 ${isEven ? "md:[direction:ltr]" : ""}`}>
                                        <span
                                            className="feature-number text-[80px] leading-none font-serif block select-none"
                                            style={{ WebkitTextStroke: "1px rgba(192, 132, 252, 0.3)", color: "transparent" }}
                                        >
                                            {feature.number}
                                        </span>
                                        <div className="space-y-3 -mt-8">
                                            <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--ai-primary)" }}>
                                                {feature.label}
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-serif leading-snug whitespace-pre-line">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-white/60 leading-loose font-sans text-base">
                                            {feature.body}
                                        </p>
                                        {/* Decorative dot-line */}
                                        <div className="flex items-center space-x-3 pt-4">
                                            <span className="w-2 h-2 rounded-full bg-[var(--ai-primary)]" />
                                            <span className="flex-1 h-[1px] bg-gradient-to-r from-[var(--ai-primary)] to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="feature-divider h-[1px] bg-white/10 w-full" />
                </div>
            </div>
        </section>
    );
}
