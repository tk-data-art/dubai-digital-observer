import { ExhibitFrame } from "./Exhibits";

const trustRows: { group: string; label: string; pct: number }[] = [
  { group: "Foundational trust anchors", label: "Transparency on AI decisioning logic", pct: 61 },
  { group: "",                            label: "Data residency & privacy safeguards", pct: 58 },
  { group: "",                            label: "Proven reliability in production",    pct: 54 },
  { group: "",                            label: "Explainability of outcomes",          pct: 47 },
  { group: "Structural control mechanisms", label: "Sector-level audit & assurance",    pct: 49 },
  { group: "",                            label: "On-shore model hosting",              pct: 46 },
  { group: "",                            label: "Per-vendor data toggles",             pct: 41 },
  { group: "",                            label: "Third-party certification badges",    pct: 38 },
  { group: "",                            label: "Portability / retention controls",    pct: 36 },
  { group: "Explicit human oversight",    label: "Human-in-the-loop intervention",     pct: 39 },
];

export function Trust() {
  return (
    <section id="trust" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          Trust becomes a form of infrastructure
        </h2>
        <p>
          If the front door of AI is moving upstream, trust is becoming as important
          as bandwidth. What's striking is the emerging alignment—along with a subtle
          Dubai-specific divergence—between operators and regulators on what creates
          trust.
        </p>
        <p>
          Among Dubai executives, trust is anchored in two requirements: being
          <em> safe</em> and being <em>consistently right</em>. Transparency on AI
          decisioning logic and data residency safeguards remain the core pillars
          (more than half include each in their top three). The more actionable
          nuance emerges in how trust is built across the AI lifecycle.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={8}
          title="Dubai operators are most likely to trust AI systems that prioritise transparency and data residency."
          subtitle="Executive-reported sources of trust, % of respondents selecting as a top-3 requirement"
          source="Dubai Executive Sentiment Pulse 2026"
          footnotes={<div>Respondents with ≥1 deployed AI workload (n = 96).</div>}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="text-left py-3 font-semibold w-1/3">Category</th>
                <th className="text-left py-3 font-semibold">Requirement</th>
                <th className="text-right py-3 font-semibold w-16">%</th>
              </tr>
            </thead>
            <tbody>
              {trustRows.map((r, i) => (
                <tr key={i} className="border-b border-rule">
                  <td className="py-3 pr-4 align-top font-semibold text-ink">{r.group}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="text-ink min-w-[16rem]">{r.label}</div>
                      <div
                        className="h-3"
                        style={{ width: `${r.pct * 2}px`, background: "var(--brand)" }}
                      />
                    </div>
                  </td>
                  <td className="py-3 text-right tabular-nums font-semibold text-ink">{r.pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <p>
          Put differently, the instincts of a great regulator—discretion about what
          to allow, restraint about what to defer, and reassurance at moments of
          systemic uncertainty—must be translated into machine-readable policy and
          auditable behaviour. Only then can autonomy scale without diluting what
          makes Dubai's economy distinctive.
        </p>
        <p>
          The strategic implication is that, in Dubai, trust is not only a safeguard.
          It is a fundamental part of what investors, talent, and operators are
          buying. A licence to operate in Dubai carries speed and access, but also
          identity and assurance. Trust, therefore, must be <em>city-coded</em>.
        </p>
      </div>
    </section>
  );
}