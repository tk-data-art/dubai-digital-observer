const peers = [
  { city: "Singapore", policy: 92, startup: 88, talent: 90, infra: 89, gba: 94, dubai: false },
  { city: "London", policy: 86, startup: 94, talent: 95, infra: 87, gba: 91, dubai: false },
  { city: "Dubai", policy: 84, startup: 76, talent: 68, infra: 78, gba: 90, dubai: true },
  { city: "Abu Dhabi", policy: 82, startup: 70, talent: 72, infra: 85, gba: 80, dubai: false },
  { city: "Tel Aviv", policy: 78, startup: 93, talent: 91, infra: 75, gba: 79, dubai: false },
  { city: "Riyadh", policy: 80, startup: 72, talent: 66, infra: 80, gba: 78, dubai: false },
  { city: "Bangalore", policy: 70, startup: 89, talent: 92, infra: 70, gba: 74, dubai: false },
];

const cols: { key: keyof (typeof peers)[number]; label: string }[] = [
  { key: "policy", label: "Policy clarity" },
  { key: "startup", label: "Startup intensity" },
  { key: "talent", label: "Talent concentration" },
  { key: "infra", label: "Digital infrastructure" },
  { key: "gba", label: "Global business attractiveness" },
];

function Cell({ value, highlight }: { value: number; highlight: boolean }) {
  return (
    <td className="py-4 px-4 align-middle">
      <div className="flex items-center gap-3">
        <span
          className={`font-mono tabular-nums text-sm w-10 ${highlight ? "text-ink font-semibold" : "text-ink/70"}`}
        >
          {value}
        </span>
        <div className="flex-1 h-1 bg-ink/10 relative">
          <div
            className={`absolute inset-y-0 left-0 ${highlight ? "bg-teal-deep" : "bg-ink/40"}`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </td>
  );
}

export function Benchmark() {
  return (
    <section id="benchmark" className="py-24 lg:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <span className="eyebrow text-teal-deep">Chapter 05 · Benchmark</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-3 leading-[1.05] text-ink">
              Readiness is relative,
              <br />
              <span className="italic">not absolute.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-ink/70 self-end leading-relaxed">
            Comparison with six peer ecosystems where source methods are comparable.
            Where methods diverge, the cell is shown blank rather than estimated.
          </p>
        </div>

        <div className="border border-ink/15 bg-card overflow-x-auto">
          <table className="w-full min-w-[820px]">
            <thead>
              <tr className="border-b border-ink/15 bg-muted/30">
                <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  City
                </th>
                {cols.map((c) => (
                  <th
                    key={c.key}
                    className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {peers.map((p) => (
                <tr
                  key={p.city}
                  className={`border-b border-ink/10 last:border-0 ${p.dubai ? "bg-teal/[0.06]" : ""}`}
                >
                  <td className="py-4 px-4 font-serif text-lg text-ink whitespace-nowrap">
                    {p.dubai && <span className="text-teal-deep mr-2">▸</span>}
                    {p.city}
                  </td>
                  {cols.map((c) => (
                    <Cell key={c.key} value={p[c.key] as number} highlight={p.dubai} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Figure 5 · Composite scores 0–100 · Source: Observatory composite, 2026 ·
          Comparability note: policy clarity indices harmonized to OECD AI Policy
          Observatory taxonomy.
        </p>
      </div>
    </section>
  );
}