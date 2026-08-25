import { MaturityTable, ExhibitFrame } from "./Exhibits";

export function KeyQuestions() {
  return (
    <section className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          The front door of AI value is moving upstream—and Dubai is already walking through it
        </h2>
        <p>
          Those questions are not theoretical. The UAE has ranked first globally
          for workplace AI adoption in successive Microsoft diffusion reports, and
          by May 2026 workplace usage had crossed 70 percent of employees. At the
          enterprise layer the picture is earlier but directionally similar: IBM's
          adoption index put active AI deployment among large UAE companies at 42
          percent, with 65 percent of UAE IT professionals reporting an accelerated
          rollout (<em>Exhibit 1</em>).
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={1}
          title="Dubai's readiness rests on published commitments and measured adoption, not on intent alone."
          subtitle="Observatory assessment of maturity by capability layer, using publicly reported indicators"
          source="Microsoft Global AI Diffusion Report Q1 2026; IBM Global AI Adoption Index 2024; Oxford Insights Government AI Readiness Index 2024; IMD World Digital Competitiveness Ranking 2025"
          footnotes={
            <div>
              Maturity bands are an Observatory judgement mapped from the cited
              public indicators; they are directional, not survey-derived.
            </div>
          }
        >
          <MaturityTable
            columns={["Embedded", "In production", "Piloting", "Early"]}
            rows={[
              { label: "Workplace AI assistants (individual use)", values: [70, 18, 9, 3] },
              { label: "Enterprise AI deployment (large firms)", values: [42, 26, 21, 11] },
              { label: "Government AI services & chief AI officers", values: [38, 32, 22, 8] },
              { label: "Sovereign compute & data-centre capacity", values: [20, 30, 35, 15] },
              { label: "Agentic / multi-step autonomous AI", values: [8, 22, 40, 30] },
            ]}
          />
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose mt-8">
        <p>
          Clearly, this goes far beyond novelty. The macro expectation is equally
          explicit: PwC-derived estimates reported in 2025 put AI's contribution at
          roughly 13.6 percent of UAE GDP by 2031—the highest share in the GCC—
          equivalent to more than USD 96 billion (<em>Exhibit 2</em>).
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={2}
          title="AI is expected to contribute a larger share of GDP in the UAE than anywhere else in the Gulf."
          subtitle="Projected AI contribution to GDP by 2030–31, % of output"
          source="PwC estimates as reported by Khaleej Times and Emirates NBD Research, June 2025"
          footnotes={
            <div>
              UAE figure equates to more than USD 96 billion by 2031, with 20–30%
              annual growth in AI-linked output. Global average shown for reference.
            </div>
          }
        >
          <div className="flex items-end justify-center gap-2 h-44">
            {[
              { label: "Global avg.", v: 8, color: "var(--brand-pale)" },
              { label: "Rest of GCC", v: 8.2, color: "var(--brand-pale)" },
              { label: "Saudi Arabia", v: 12.4, color: "var(--brand-soft)" },
              { label: "UAE", v: 13.6, color: "var(--brand)" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center w-28">
                <div className="font-serif text-2xl text-ink mb-1">{b.v}</div>
                <div
                  className="w-full"
                  style={{ background: b.color, height: `${b.v * 10}px` }}
                />
                <div className="mt-2 text-xs text-muted-foreground">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm font-semibold">
            <span className="text-brand text-2xl font-serif">$96bn</span>{" "}
            <span className="text-muted-foreground">expected AI contribution to UAE GDP by 2031</span>
          </div>
        </ExhibitFrame>
      </div>
    </section>
  );
}
