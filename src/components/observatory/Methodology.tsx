const rules = [
  "Every factual statement links to a source.",
  "Every metric shows source, date, geography, and definition.",
  "Derived indicators disclose formula and inputs.",
  "Benchmark comparisons note methodology limitations.",
  "Missing data is labeled as unavailable, never estimated.",
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="border border-ink/15 bg-card/50 p-8 lg:p-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow text-teal-deep">Methodology</span>
            <h2 className="font-serif text-3xl lg:text-4xl mt-3 text-ink leading-tight">
              About the research
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              The Observatory draws only on trusted, attributable evidence, prioritizing
              official Dubai and UAE government sources, Dubai Chambers publications,
              regulators, multilateral institutions, and transparent industry datasets.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We distinguish between <span className="text-ink font-medium">verified
              facts</span>, <span className="text-ink font-medium">derived indicators</span>,
              <span className="text-ink font-medium"> expert interpretation</span>, and
              <span className="text-ink font-medium"> data gaps</span>. Claims that
              could not be validated were excluded — not inferred.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow text-muted-foreground mb-5">Method rules</p>
            <ol className="space-y-4">
              {rules.map((r, i) => (
                <li key={i} className="flex gap-5 pb-4 border-b border-ink/10 last:border-0">
                  <span className="font-mono text-xs text-teal-deep tabular-nums pt-1">
                    R.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-lg lg:text-xl text-ink leading-snug">
                    {r}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Verified fact", "Derived metric", "Interpretation", "Data gap"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] border border-ink/25 px-3 py-1.5 text-ink/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}