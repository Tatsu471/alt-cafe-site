import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-sm uppercase tracking-[0.5em] text-[var(--ai-primary)]">Contact</h1>
                    <p className="text-4xl md:text-6xl font-serif">あなたの「声」を、<br />私たちに届けてください。</p>
                </div>

                <p className="text-white/50 leading-relaxed font-sans">
                    貸切のご相談、イベントの企画、または店主へのメッセージなど。<br />
                    AIがあなたの想いを汲み取り、最適なプランをご提案します。
                </p>

                <div className="space-y-8 pt-8">
                    <div className="flex items-center space-x-4">
                        <span className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--ai-primary)]">
                            <span className="text-xs font-serif italic">AI</span>
                        </span>
                        <p className="text-xs tracking-widest uppercase opacity-40">Recommended for Quick Response</p>
                    </div>
                    <button className="w-full py-4 bg-white text-black rounded-full font-sans uppercase tracking-[0.2em] text-xs hover:bg-[var(--ai-primary)] hover:text-white transition-all">
                        Contact via Official LINE
                    </button>
                </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <span className="text-[8px] tracking-[0.5em] uppercase opacity-20">Traditional Form</span>
                </div>

                <form className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest opacity-40">Your Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[var(--ai-primary)] outline-none transition-colors" placeholder="お名前" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest opacity-40">Email Address</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[var(--ai-primary)] outline-none transition-colors" placeholder="メールアドレス" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
                        <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[var(--ai-primary)] outline-none transition-colors min-h-[150px]" placeholder="メッセージをご記入ください" />
                    </div>
                    <button className="w-full py-4 border border-[var(--ai-primary)] text-[var(--ai-primary)] rounded-full text-xs uppercase tracking-widest hover:bg-[var(--ai-primary)] hover:text-white transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
