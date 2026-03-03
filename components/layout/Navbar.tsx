"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Menu", href: "/menu" },
    { name: "News", href: "/news" },
    { name: "Access", href: "/access" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "glass py-2" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif tracking-tighter">
                    Alt-Café<span className="text-sm align-top ml-1 opacity-50">AI</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-sans tracking-widest uppercase hover:text-[var(--ai-primary)] transition-colors relative group",
                                pathname === link.href ? "text-[var(--ai-primary)]" : "text-white/70"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--ai-primary)] transition-all duration-300 group-hover:w-full",
                                pathname === link.href && "w-full"
                            )} />
                        </Link>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    {/* Mobile Menu Placeholder */}
                    <span className="text-xs opacity-50">MENU</span>
                </div>
            </div>
        </nav>
    );
}
