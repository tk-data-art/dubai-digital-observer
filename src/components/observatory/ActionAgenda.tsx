const clusters = [
  {
    title: "Strengthen high-value sector adoption",
    horizon: "0–12 months",
    actions: [
      "Stand up sector pilot accelerators in fintech, logistics, and government services.",
      "Publish reference architectures co-developed with chamber members.",
    ],
  },
  {
    title: "Improve founder & investor access",
    horizon: "0–18 months",
    actions: [
      "Convene a chamber-backed AI capital roundtable across DIFC and ADGM.",
      "Open a single intake for global AI founders evaluating Dubai.",
    ],
  },
  {
    title: "Expand talent & skills partnerships",
    horizon: "12–36 months",
    actions: [
      "Anchor a frontier-model talent program with two global research labs.",
      "Co-design applied AI tracks with regional universities aligned to priority sectors.",
    ],
  },
  {
    title: "Improve market-entry pathways",
    horizon: "0–12 months",
    actions: [
      "Publish a one-page AI market-entry playbook for global firms.",
      "Compress procurement timelines for chamber-vetted AI solutions.",
    ],
  },
];

export function ActionAgenda() {
  return (
    <section id="agenda" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-teal-deep">Chapter 07 · Chamber action agenda</span>
            <h2 className="font-serif text-4xl lg:text-6xl mt-3 leading-[1.02] text-ink">
              From observation
              <br />
              <span className="italic text-teal-deep">to action.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-lg text-ink/70 self-end leading-relaxed">
            Four prioritized clusters where chamber-led action would most directly
            shift Dubai's readiness curve in the next 36 months.
          </p>
        </div>

        <div className="space-y-px bg-ink/15 border border-ink/15">
          {clusters.map((c, i) => (
            <div
              key={c.title}
              className="bg-background p-8 lg:p-10 grid lg:grid-cols-12 gap-6 group hover:bg-muted/30 transition-colors"
            >
              <div className="lg:col-span-1 font-serif text-5xl text-teal-deep tabular-nums leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl lg:text-3xl text-ink leading-snug">
                  {c.title}
                </h3>
                <span className="inline-block mt-3 font-mono text-[10px] uppercase tracking-[0.15em] border border-ink/25 px-2.5 py-1 text-ink/70">
                  Horizon · {c.horizon}
                </span>
              </div>
              <ul className="lg:col-span-6 space-y-3">
                {c.actions.map((a) => (
                  <li key={a} className="flex gap-3 text-base text-ink/80 leading-relaxed">
                    <span className="text-teal-deep">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-ink/15 bg-panel text-panel-foreground p-10 lg:p-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-teal">Download · Edition 01</span>
            <h3 className="font-serif text-3xl lg:text-4xl mt-3 leading-tight">
              The full Observatory report,
              <br />
              <span className="italic text-teal">with every source attached.</span>
            </h3>
            <p className="mt-5 text-panel-foreground/70 max-w-xl leading-relaxed">
              68 pages · 142 indicators · full methodology appendix and source register.
              Refreshed each quarter alongside the live Observatory.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              type="button"
              className="bg-paper text-ink px-6 py-4 text-[12px] font-mono uppercase tracking-[0.15em] hover:bg-teal hover:text-paper transition-colors text-left flex items-center justify-between"
            >
              Download PDF (8.2 MB)
              <span>↓</span>
            </button>
            <button
              type="button"
              className="border border-panel-foreground/30 px-6 py-4 text-[12px] font-mono uppercase tracking-[0.15em] hover:border-paper transition-colors text-left flex items-center justify-between"
            >
              Subscribe to updates
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}