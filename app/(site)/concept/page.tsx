export default function ConceptPage() {
    return (
        <div className="max-w-4xl mx-auto py-24 px-6 space-y-20">
            <div className="space-y-4">
                <h1 className="text-sm uppercase tracking-[0.5em] text-[var(--ai-primary)]">Concept</h1>
                <p className="text-4xl md:text-6xl font-serif">旬の感性を、AIと共に。</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-white/70 font-sans leading-loose text-lg">
                <section className="space-y-8">
                    <h2 className="text-2xl font-serif text-white">なぜこのカフェがAIを導入しているのか</h2>
                    <p>
                        店主は「その瞬間のベストな体験」を提供したいという強い思いを持っています。しかし、固定化されたメニューやマニュアル通りの接客では、「雨上がりで少し蒸し暑い午後」と「乾燥して冷え込んだ冬の朝」の違いや、店主自身の「今日は静かに思策に耽りたい」といった繊細な空気感の差異を表現しきれませんでした。
                    </p>
                    <p>
                        そこで、言語化の難しい「今の空気感」や直感的な「インスピレーション」を瞬時に汲み取り、メニューの提案や空間デザイン（WebサイトのUIやトーン＆マナー）へと翻訳してくれる頼もしいパートナーとして、Gemini（AI）を導入しました。
                    </p>
                    <div className="p-8 glass rounded-3xl border-l-4 border-[var(--ai-primary)] italic">
                        AIは業務効率化のためではなく、「店主の感性を拡張し、顧客へ届けるための翻訳機」として機能しています。
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-serif text-white">顧客に提供するベネフィット（体験）</h2>
                    <p>
                        訪れる（サイトを開く）たびに、その日の天気や季節、店主のバイオリズムに完璧にシンクロした「一期一会」のメニューと空間に巡り会えます。
                    </p>
                    <p>
                        フリーランスエンジニアやクリエイターにとって、Alt-Caféは単なる作業用カフェではありません。「自分の感性を刺激し、予期せぬインスピレーションを与えてくれるサードプレイス」です。常に変化し続けるAI生成のメニューやサイトの雰囲気が、マンネリ化した思考から抜け出し、新しい視点を得るためのトリガー（プロンプト）となります。
                    </p>
                </section>
            </div>

            <div className="relative aspect-video glass rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--ai-primary)] to-transparent opacity-20 animate-aurora" />
                <p className="font-serif text-3xl tracking-[1em] opacity-30">AURA & SENSE</p>
            </div>
        </div>
    );
}
