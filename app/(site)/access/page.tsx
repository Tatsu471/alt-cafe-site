export default function AccessPage() {
    return (
        <div className="max-w-5xl mx-auto py-24 px-6 space-y-20">
            {/* Page Header */}
            <div className="space-y-4">
                <span
                    className="text-[10px] uppercase tracking-[0.5em] font-sans"
                    style={{ color: "var(--ai-label)" }}
                >
                    Access & Hours
                </span>
                <h1 className="text-4xl md:text-6xl font-serif">アクセス</h1>
            </div>

            {/* Map */}
            <div className="rounded-[2rem] overflow-hidden relative">
                {/* Google Map embed — using Shibuya as placeholder */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7476413488!2d139.6962459!3d35.6580339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC35Yy65L-h!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                    width="100%"
                    height="500"
                    style={{ border: 0, filter: "grayscale(30%) invert(5%) contrast(95%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alt-Café アクセスマップ（仮：渋谷）"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-widest" style={{ color: "var(--ai-label)" }}>
                    ※ 仮の地図です（渋谷を表示）
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Shop Info */}
                <div className="glass p-10 rounded-[2rem] space-y-8">
                    <h2
                        className="text-xs uppercase tracking-[0.4em] font-sans"
                        style={{ color: "var(--ai-label)" }}
                    >
                        Shop Info
                    </h2>
                    <ul className="space-y-6 text-sm font-sans leading-loose">
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">住所</span>
                            <span className="text-white/80">〒000-0000<br />東京都渋谷区○○1-2-3</span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">営業時間</span>
                            <span className="text-white/80">11:00 – 20:00<br />Last order 19:30</span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">定休日</span>
                            <span className="text-white/80">月曜日・火曜日</span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">席数</span>
                            <span className="text-white/80">16席（予約優先）</span>
                        </li>
                    </ul>
                </div>

                {/* Transit */}
                <div className="glass p-10 rounded-[2rem] space-y-8">
                    <h2
                        className="text-xs uppercase tracking-[0.4em] font-sans"
                        style={{ color: "var(--ai-label)" }}
                    >
                        How to Get Here
                    </h2>
                    <ul className="space-y-6 text-sm font-sans leading-loose">
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">電車</span>
                            <span className="text-white/80">渋谷駅（各線）<br />○○出口より徒歩5分</span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">バス</span>
                            <span className="text-white/80">渋谷駅発「○○行き」<br />「○○バス停」すぐ</span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-white/30 w-20 shrink-0">駐車場</span>
                            <span className="text-white/80">近隣コインパーキングを<br />ご利用ください</span>
                        </li>
                    </ul>
                    {/* Google Maps external link */}
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-white/20 hover:border-[var(--ai-primary)] rounded-full px-6 py-3 transition-colors"
                        style={{ color: "var(--ai-label)" }}
                    >
                        <span>Google Mapで開く</span>
                        <span>→</span>
                    </a>
                </div>
            </div>

            {/* Decorative divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Note */}
            <p className="text-center text-white/30 text-xs font-sans leading-loose">
                ご予約・お問い合わせは<a href="/contact" className="underline hover:text-[var(--ai-label)] transition-colors">コンタクトページ</a>または公式LINEよりお願いいたします。
            </p>
        </div>
    );
}
