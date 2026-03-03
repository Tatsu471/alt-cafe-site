export default function Footer() {
    return (
        <footer className="bg-[var(--color-cafe-base)] border-t border-white/5 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand & Concept */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-serif">Alt-Café<span className="text-xs align-top ml-1">AI</span></h2>
                    <p className="text-sm text-white/50 leading-relaxed font-sans">
                        AIが店主の感性を翻訳する、<br />
                        一期一会のサードプレイス。
                    </p>
                    <div className="flex space-x-4">
                        {/* SNS Icons Placeholder */}
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--ai-primary)] transition-colors">
                            <span className="text-[10px]">IG</span>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--ai-primary)] transition-colors">
                            <span className="text-[10px]">LN</span>
                        </a>
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-[0.2em] text-white/30">Shop Info</h3>
                    <address className="not-italic text-sm text-white/60 space-y-2 font-sans">
                        <p>〒000-0000 東京都渋谷区◯◯ 1-2-3</p>
                        <p>OPEN: 11:00 - 20:00</p>
                        <p>CLOSED: Monday, Tuesday</p>
                    </address>
                </div>

                {/* Navigation */}
                <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-[0.2em] text-white/30">Quick Links</h3>
                    <ul className="text-sm text-white/60 space-y-3 font-sans">
                        <li><a href="/concept" className="hover:text-white">Our Concept</a></li>
                        <li><a href="/menu" className="hover:text-white">Menu</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 tracking-widest uppercase font-sans">
                <p>© 2026 ALT-CAFÉ. BUILT WITH AI & SENSIBILITY.</p>
                <p>DESIGNED BY ANTIGRAVITY</p>
            </div>
        </footer>
    );
}
