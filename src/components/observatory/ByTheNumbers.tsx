const stats = [
  {
    value: "AED 100B",
    label: "Annual contribution target",
    note: "from digital transformation by 2033",
    source: "Dubai Economic Agenda D33",
    tier: "Verified",
  },
  {
    value: "+50%",
    label: "Productivity uplift goal",
    note: "across Dubai's economy under D33",
    source: "Dubai Government Media Office",
    tier: "Verified",
  },
  {
    value: "1 of 4",
    label: "Federal AI strategies",
    note: "UAE was the first nation to appoint an AI Minister",
    source: "UAE Cabinet, 2017",
    tier: "Verified",
  },
  {
    value: "8",
    label: "Sectors with active AI mandates",
    note: "under the Dubai Universal Blueprint for AI",
    source: "Dubai Universal Blueprint, 2024",
    tier: "Verified",
  },
  {
    value: "62%",
    label: "Enterprise AI pilot rate",
    note: "of surveyed Dubai firms running ≥1 AI pilot",
    source: "Derived · 2025 ecosystem survey",
    tier: "Derived",
  },
  {
    value: "n/a",
    label: "City-level GenAI compute capacity",
    note: "no publicly comparable figure currently exists",
    source: "Observatory data gap",
    tier: "Data gap",
  },
];

const tierColor: Record<string, string> = {
  Verified: "text-teal-deep",
  Derived: "text-amber-300",
  "Data gap": "text-rose-300",
};

export function ByTheNumbers() {
  return (
    <section id="numbers" className="bg-panel text-panel-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-teal">By the numbers</span>
            <h2 className="font-serif text-4xl lg:text-6xl mt-4 leading-[1.05]">
              Six facts that frame
              <br />
              <span className="italic text-teal">Dubai's AI position.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-sm text-panel-foreground/70 leading-relaxed self-end">
            Each figure carries a source, a date, and a confidence tier. Where the
            evidence base does not yet support a comparable number, we say so.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-panel-foreground/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-r border-panel-foreground/15 last:border-r-0 p-8 lg:p-10 flex flex-col group hover:bg-panel-foreground/[0.03] transition-colors"
            >
              <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${tierColor[s.tier]}`}>
                ● {s.tier}
              </div>
              <div className="font-serif text-5xl lg:text-6xl mt-6 leading-none tracking-tight">
                {s.value}
              </div>
              <div className="mt-6 font-serif text-lg text-panel-foreground/95 leading-snug">
                {s.label}
              </div>
              <div className="mt-2 text-sm text-panel-foreground/65 leading-relaxed">
                {s.note}
              </div>
              <div className="mt-6 pt-4 border-t border-panel-foreground/15 font-mono text-[10px] uppercase tracking-[0.12em] text-panel-foreground/55">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}