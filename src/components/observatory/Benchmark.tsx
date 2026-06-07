import { ExhibitFrame, UnitBar } from "./Exhibits";

export function Benchmark() {
  const peers = [
    { city: "Singapore",     foundations: 82, adoption: 74, velocity: 68, stewardship: 71, overall: 74 },
    { city: "Dubai",         foundations: 76, adoption: 68, velocity: 81, stewardship: 52, overall: 69 },
    { city: "London",        foundations: 79, adoption: 72, velocity: 58, stewardship: 76, overall: 71 },
    { city: "San Francisco", foundations: 88, adoption: 82, velocity: 75, stewardship: 61, overall: 77 },
    { city: "Riyadh",        foundations: 71, adoption: 58, velocity: 72, stewardship: 44, overall: 61 },
    { city: "Shenzhen",      foundations: 84, adoption: 79, velocity: 86, stewardship: 41, overall: 73 },
    { city: "Abu Dhabi",     foundations: 80, adoption: 65, velocity: 74, stewardship: 58, overall: 69 },
  ];

  return (
    <section id="benchmark" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          Dubai leans into what AI can <em>interpret</em>, not just what it can automate
        </h2>
        <p>
          Compared with global peers, Dubai overindexes on velocity and customer
          experience use cases, and underindexes on stewardship infrastructure
          (<em>Exhibit 6</em>). The strategic intent is clear: Dubai expects the
          relationship between AI and growth to remain operator-led, with the city
          providing the rails.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={6}
          title="Dubai executives are especially excited about using AI to accelerate customer experience and operational efficiency."
          subtitle="Sources of excitement for executives related to AI scaling, number of respondents (n = 96, top-2 selection)"
          source="Dubai Executive Sentiment Pulse 2026"
          footnotes={<div>Respondents could select up to 2 options. Of 96, 84% selected the top item.</div>}
        >
          <div className="space-y-1">
            <UnitBar label="Customer experience uplift"   count={56} total={70} value={81} />
            <UnitBar label="Operational efficiency gains" count={47} total={70} value={68} />
            <UnitBar label="New revenue / product lines"  count={31} total={70} value={45} />
            <UnitBar label="Talent productivity"          count={26} total={70} value={38} />
            <UnitBar label="Risk & compliance automation" count={17} total={70} value={25} />
            <UnitBar label="Sustainability optimisation"  count={11} total={70} value={16} />
          </div>
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={7}
          title="Dubai leads peer cities on velocity, but trails on stewardship infrastructure."
          subtitle="Composite AI readiness benchmark, normalised 0–100 by zone"
          source="Dubai Observatory peer benchmark; OECD, World Bank, Tortoise Global AI Index, public filings (2026)"
          footnotes={<div>Dubai indicators current to May 2026; peer indicators current to latest available filing 2025–26.</div>}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="text-left font-semibold py-3">City</th>
                  <th className="text-right font-semibold py-3 px-2">Foundations</th>
                  <th className="text-right font-semibold py-3 px-2">Adoption</th>
                  <th className="text-right font-semibold py-3 px-2">Velocity</th>
                  <th className="text-right font-semibold py-3 px-2">Stewardship</th>
                  <th className="text-right font-semibold py-3 px-2 bg-brand-pale/40">Overall</th>
                </tr>
              </thead>
              <tbody>
                {peers.map((p) => (
                  <tr
                    key={p.city}
                    className={`border-b border-rule ${p.city === "Dubai" ? "bg-brand-pale/30 font-semibold" : ""}`}
                  >
                    <td className="py-3">{p.city}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{p.foundations}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{p.adoption}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{p.velocity}</td>
                    <td className="py-3 px-2 text-right tabular-nums">{p.stewardship}</td>
                    <td className="py-3 px-2 text-right tabular-nums bg-brand-pale/30">{p.overall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExhibitFrame>
      </div>
    </section>
  );
}