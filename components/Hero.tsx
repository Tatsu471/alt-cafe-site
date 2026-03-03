"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/utils/gsap-setup";

interface HeroProps {
    mood: any;
}

export default function Hero({ mood }: HeroProps) {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Subtly animate the texts up and fade in
        gsap.from(".hero-element", {
            y: 30,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
            delay: 0.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
            {/* Dynamic Ambient Gradient Background */}
            <div
                className="absolute inset-0 opacity-[0.15] mix-blend-multiply transition-colors duration-[2000ms]"
                style={{ background: `radial-gradient(circle at center, var(--ai-primary) 0%, transparent 80%)` }}
            />

            {/* Glassmorphism Card */}
            <div className="hero-element relative z-10 max-w-4xl w-full p-8 md:p-16 backdrop-blur-2xl bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col items-center text-center">

                <div className="hero-element mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[var(--ai-primary)]/30 bg-[var(--ai-primary)]/5">
                    <span className="w-2 h-2 rounded-full bg-[var(--ai-primary)] animate-pulse" />
                    <span className="text-sm font-medium tracking-widest uppercase text-[var(--ai-primary)]">
                        Today's Vibe
                    </span>
                </div>

                <h1 className="hero-element text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                    {mood?.moodText || "旬の感性を、AIと共に。"}
                </h1>

                <p className="hero-element text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 max-w-3xl font-serif">
                    {mood?.generatedPost || "今のあなたにぴったりの一杯を。"}
                </p>

            </div>
        </section>
    );
}
