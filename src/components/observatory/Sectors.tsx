import { ExhibitFrame, UnitBar } from "./Exhibits";

const sectors = [
  { name: "Financial services",       count: 24, value: "82" },
  { name: "Logistics & trade",        count: 22, value: "78" },
  { name: "Government services",      count: 21, value: "75" },
  { name: "Healthcare & life sciences", count: 17, value: "64" },
  { name: "Real estate & construction", count: 14, value: "56" },
  { name: "Tourism & hospitality",    count: 13, value: "52" },
  { name: "Energy & utilities",       count: 12, value: "49" },
  { name: "Creative & media",         count: 11, value: "47" },
];

export function Sectors() {
  return (
    <section id="sectors" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          Sectors expect to scale—yet capacity is contested
        </h2>
        <p>
          Dubai sectors broadly recognise the opportunity, even if they are not yet
          aligned on how fast to move. In the Sentiment Pulse, 86 percent of
          financial-services executives place themselves at the "bullish and excited
          to lead" end of the scale, alongside 79 percent in logistics, while
          construction (50 percent) and hospitality back-office (46 percent) sit
          closer to the "cautious—exploring and monitoring" middle.
        </p>
        <p>
          The posture, however, is fragmented across the value chain. Front-office,
          customer-facing workloads are scaling quickly; middle and back-office,
          where most productivity actually sits, is moving more slowly because the
          cost of getting interpretation wrong is disproportionately high.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={4}
          title="Financial services, logistics and government services lead Dubai's sector readiness; creative and energy follow."
          subtitle="Composite sector readiness scores, 0–100, with Observatory confidence weight"
          source="Dubai AI Economy Readiness Indicator Set 2026"
          footnotes={
            <div>
              Each square = one weighted indicator (max 28). Score shown is the
              normalised composite (0–100) including Foundations, Adoption, Velocity,
              and Stewardship sub-indices.
            </div>
          }
        >
          <div className="space-y-1">
            {sectors.map((s) => (
              <UnitBar key={s.name} label={s.name} count={s.count} value={s.value} />
            ))}
          </div>
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <p className="mt-8">
          It's also instructive how Dubai frames the moment relative to peers. Only 8
          percent of surveyed executives describe agentic AI as an existential threat
          to their business model, compared with 22 percent in London and 19 percent
          in Singapore. Instead, Dubai overwhelmingly reads the moment as a{" "}
          <em>productivity and service opportunity</em>, with 84 percent pointing to
          enhanced customer experience and operational efficiency as the dominant
          source of excitement (<em>Exhibit 5</em>).
        </p>
        <p>
          The lag in slower-moving sectors is not disbelief—it is selectivity. Moving
          slower because the cost of getting interpretation wrong, in a city whose
          brand depends on consistency, is disproportionately high.
        </p>
      </div>
    </section>
  );
}