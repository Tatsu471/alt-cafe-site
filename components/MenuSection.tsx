"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/utils/gsap-setup";

interface MenuItem {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    aiTag?: string;
}

interface MenuSectionProps {
    items: MenuItem[];
}

export default function MenuSection({ items }: MenuSectionProps) {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".menu-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <section ref={container} className="w-full py-24 px-6 md:px-12 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Today's Selection</h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        AIが見極めた「今の空気感」に寄り添う、本日のおすすめメニューです。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="menu-card group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--ai-primary)]/10 text-[var(--ai-primary)] mb-3">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[var(--ai-primary)] transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <span className="text-lg font-mono font-medium">
                                    ¥{item.price}
                                </span>
                            </div>

                            <p className="text-foreground/70 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                {item.description}
                            </p>

                            {item.aiTag && (
                                <div className="pt-4 border-t border-black/5 dark:border-white/5">
                                    <p className="text-xs italic text-[var(--ai-primary)] opacity-80">
                                        # {item.aiTag}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
