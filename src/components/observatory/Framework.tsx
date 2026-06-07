const layers = [
  {
    layer: "Demand & adoption",
    desc: "Real AI use across enterprise, government, and consumers — the surface where value is realized.",
    indicators: ["Enterprise pilot rate", "Gov service deployments", "Consumer AI use"],
  },
  {
    layer: "Talent & skills",
    desc: "The pool of researchers, builders, and operators with frontier-relevant capability.",
    indicators: ["Frontier-model engineers", "Applied AI graduates", "Net inbound talent"],
  },
  {
    layer: "Capital & founders",
    desc: "Founders forming companies and capital available to scale them in-region.",
    indicators: ["AI-native startups", "Early-stage AI capital", "Late-stage rounds"],
  },
  {
    layer: "Infrastructure & compute",
    desc: "The compute, data, and connectivity substrate that determines what can be built locally.",
    indicators: ["Sovereign GPU capacity", "Data center power", "Sector data availability"],
  },
  {
    layer: "Governance & trust",
    desc: "The rules, institutions, and assurances that make Dubai a credible place to deploy AI.",
    indicators: ["AI regulation clarity", "Model assurance regime", "Cross-border data rules"],
  },
  {
    layer: "Market access",
    desc: "How easily global AI firms and capital reach Dubai-based opportunities.",
    indicators: ["Free-zone onboarding", "Visa & residency speed", "Public procurement access"],
  },
];

export function Framework() {
  return (
    <section id="framework" className="py-24 lg:py-32 bg-muted/40 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-teal-deep">Chapter 03 · Framework</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-3 leading-[1.05] text-ink">
              Six layers of
              <br />
              <span className="italic">AI economy readiness.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg text-ink/70 self-end leading-relaxed">
            Readiness is not a single score. The Observatory decomposes it into six
            interlocking layers — adoption, talent, capital, infrastructure, governance,
            and market access — so that strengths and gaps remain legible at the layer
            where action is actually taken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {layers.map((l, i) => (
            <div key={l.layer} className="bg-background p-8 lg:p-9 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                  L.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 bg-teal rounded-full" />
              </div>
              <h3 className="font-serif text-2xl mt-5 text-ink leading-snug">
                {l.layer}
              </h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed flex-1">{l.desc}</p>
              <ul className="mt-6 pt-5 border-t border-ink/10 space-y-1.5">
                {l.indicators.map((ind) => (
                  <li key={ind} className="font-mono text-[11px] text-muted-foreground tracking-wide">
                    → {ind}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}