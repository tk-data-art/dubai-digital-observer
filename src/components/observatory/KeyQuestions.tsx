import { MaturityTable, ExhibitFrame } from "./Exhibits";

export function KeyQuestions() {
  return (
    <section className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          The front door of AI value is moving upstream—and Dubai is already walking through it
        </h2>
        <p>
          Those questions are not theoretical. Dubai enterprises are already using AI
          in meaningful ways—and they are satisfied with what they are getting
          (<em>Exhibit 1</em>). The Observatory finds that 87 percent of surveyed
          enterprises have deployed generative AI in at least one function, with 54
          percent reporting <em>frequent</em>, embedded use. Sixty-eight percent
          have rebuilt at least one workflow around AI decisioning; and 41 percent
          report active pilots of agentic systems—autonomous chains that take action
          across multiple internal systems.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={1}
          title="Dubai enterprises have embraced generative AI; agentic and autonomous capabilities are next."
          subtitle="Familiarity with AI capability classes, % of Dubai enterprise respondents"
          source="Dubai Executive Sentiment Pulse 2026"
          footnotes={<div>Respondents with ≥1 deployed AI workload in past 6 months (n = 96).</div>}
        >
          <MaturityTable
            columns={["Embedded", "In production", "Piloting", "Aware only"]}
            rows={[
              { label: "Generative AI assistants (copilots)", values: [54, 33, 11, 2] },
              { label: "AI decisioning / scoring engines", values: [42, 31, 19, 8] },
              { label: "Computer vision & document AI", values: [36, 38, 21, 5] },
              { label: "Personalisation & recommendation", values: [28, 36, 27, 9] },
              { label: "Agentic / multi-step autonomous AI", values: [12, 29, 41, 18] },
            ]}
          />
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose mt-8">
        <p>
          Clearly, this goes far beyond novelty or experimentation. Seventy-nine
          percent of Dubai executives report either "high" or "very high" confidence
          in the city's near-term AI trajectory, and only 6 percent describe themselves
          as sceptical (<em>Exhibit 2</em>).
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={2}
          title="Nearly four in five Dubai executives express high confidence in the city's near-term AI trajectory."
          subtitle="Executive confidence in Dubai's AI economy, % of respondents"
          source="Dubai Executive Sentiment Pulse 2026"
          footnotes={<div>Responses on a 1–10 scale: 1–3 "low," 4–6 "medium," 7–8 "high," 9–10 "very high." (n = 96).</div>}
        >
          <div className="flex items-end justify-center gap-2 h-44">
            {[
              { label: "Low", v: 6, color: "var(--brand-pale)" },
              { label: "Medium", v: 15, color: "var(--brand-pale)" },
              { label: "High", v: 47, color: "var(--brand-soft)" },
              { label: "Very high", v: 32, color: "var(--brand)" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center w-28">
                <div className="font-serif text-2xl text-ink mb-1">{b.v}</div>
                <div
                  className="w-full"
                  style={{ background: b.color, height: `${b.v * 3}px` }}
                />
                <div className="mt-2 text-xs text-muted-foreground">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm font-semibold">
            <span className="text-brand text-2xl font-serif">79</span>{" "}
            <span className="text-muted-foreground">% report high or very high confidence</span>
          </div>
        </ExhibitFrame>
      </div>
    </section>
  );
}