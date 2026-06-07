const sources = [
  { name: "Dubai Government Media Office", tier: "Tier 1 · Official", count: 24 },
  { name: "Dubai Chambers research desks", tier: "Tier 1 · Chamber", count: 18 },
  { name: "UAE Federal Cabinet & ministries", tier: "Tier 1 · Official", count: 21 },
  { name: "OECD AI Policy Observatory", tier: "Tier 2 · Multilateral", count: 12 },
  { name: "World Bank & IMF datasets", tier: "Tier 2 · Multilateral", count: 9 },
  { name: "Industry datasets (audited)", tier: "Tier 3 · Industry", count: 14 },
];

export function Trust() {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-muted/40 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-teal-deep">Chapter 06 · Trust & evidence</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-3 leading-[1.05] text-ink">
              Every claim,
              <br />
              <span className="italic">traceable to a source.</span>
            </h2>
            <p className="mt-8 text-lg text-ink/75 leading-relaxed">
              The Observatory is built on a no-hallucination evidence layer. Each
              indicator carries a source ID, a publication date, a geography, and a
              confidence tier. Claims without supporting evidence are excluded — not
              estimated, not inferred, not adapted.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-ink/15">
              <div>
                <div className="font-serif text-4xl text-ink tabular-nums">98</div>
                <div className="eyebrow text-muted-foreground mt-1">Sources tracked</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-ink tabular-nums">142</div>
                <div className="eyebrow text-muted-foreground mt-1">Indicators</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-teal-deep tabular-nums">7</div>
                <div className="eyebrow text-muted-foreground mt-1">Open data gaps</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-muted-foreground mb-5">Source register</p>
            <ul className="border-t border-ink/15">
              {sources.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between gap-6 py-5 border-b border-ink/10"
                >
                  <div>
                    <div className="font-serif text-lg text-ink leading-snug">{s.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {s.tier}
                    </div>
                  </div>
                  <div className="font-mono text-sm text-ink/70 tabular-nums">
                    {s.count} refs
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}