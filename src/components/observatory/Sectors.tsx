import { ExhibitFrame, UnitBar } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

const sectors = [
  { name: "Government services",        count: 24, value: "High" },
  { name: "Financial services & DIFC",  count: 22, value: "High" },
  { name: "Logistics & trade",          count: 21, value: "High" },
  { name: "Compute & data infrastructure", count: 18, value: "Rising" },
  { name: "Healthcare & life sciences", count: 16, value: "Moderate" },
  { name: "Tourism & hospitality",      count: 13, value: "Moderate" },
  { name: "Real estate & construction", count: 11, value: "Early" },
  { name: "Creative & media",           count: 10, value: "Early" },
];

export function Sectors() {
  return (
    <section id="sectors" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 02 · Sectors"
          title="Sectors expect to scale—yet capacity is contested"
          context="Readiness clusters where a public mandate and a clear rulebook already exist; it thins out across the middle and back office."
        />

        <Block label="Key finding" accent>
          <p>
            Dubai's fastest-moving sectors are those with an explicit public mandate.
            Government services now carry named accountability: the Executive Council
            approved chief AI officers across every Dubai government entity in October
            2025. Financial services, anchored by DIFC's Regulation 10 on autonomous
            and semi-autonomous systems, has the clearest rulebook for delegating
            decisions to machines. Logistics and trade continue to benefit from the
            emirate's long investment in digitised customs and port operations.
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            The posture, however, is fragmented across the value chain. Front-office,
            customer-facing workloads are scaling quickly; middle and back-office,
            where most productivity actually sits, is moving more slowly because the
            cost of getting interpretation wrong is disproportionately high
            (<em>Exhibit 04</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={4}
          tag="observatory"
          title="Government services, financial services and logistics lead Dubai's sector readiness; construction and creative follow."
          subtitle="Observatory readiness assessment by sector, weighted indicator coverage"
          source="Observatory synthesis of Dubai Universal Blueprint delivery milestones, DIFC regulatory instruments, Microsoft Q1 2026 diffusion data and MAGNiTT FY2025 venture data"
          footnotes={
            <div>
              Each square denotes one indicator with published supporting evidence
              (max 28). Bands are an Observatory judgement, not a survey result;
              sectors with fewer published indicators score lower on coverage as
              well as on maturity.
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

      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <Block label="Implication" accent>
          <p>
            It is also instructive how the region frames the moment relative to peers.
            AI startups across MENA raised a record USD 858 million in 2025—22 percent
            of all regional venture funding, roughly double the prior share—while
            Saudi Arabia became the region's largest venture market by value at USD
            1.72 billion. Dubai's edge is therefore not capital volume alone; it is the
            combination of diffusion, regulatory clarity, and speed to deployment.
          </p>
          <p>
            The lag in slower-moving sectors is not disbelief—it is selectivity. Moving
            slower because the cost of getting interpretation wrong, in a city whose
            brand depends on consistency, is disproportionately high.
          </p>
        </Block>
      </div>
    </section>
  );
}
