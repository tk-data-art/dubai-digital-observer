import { ExhibitFrame, UnitBar } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

export function Benchmark() {
  const peers = [
    { city: "United Arab Emirates", gov: "12", digital: "9", adoption: "1", note: "1st in MENA on AI readiness" },
    { city: "Singapore",            gov: "2",  digital: "3", adoption: "2", note: "Sustained top-3 on readiness" },
    { city: "United States",        gov: "1",  digital: "1", adoption: "—", note: "Leads on foundations and capital" },
    { city: "United Kingdom",       gov: "5",  digital: "20", adoption: "—", note: "Strong governance, slower diffusion" },
    { city: "Saudi Arabia",         gov: "≈30", digital: "24", adoption: "—", note: "Largest Gulf VC market in 2025" },
    { city: "China",                gov: "≈15", digital: "14", adoption: "—", note: "Scale-led, state-directed build-out" },
  ];

  return (
    <section id="benchmark" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 03 · Benchmark"
          title="Dubai leans into what AI can diffuse, not just what it can automate"
          context="Against global peers, the UAE's distinguishing result is diffusion rather than institutional rank alone."
        />

        <Block label="Key finding" accent>
          <p>
            Compared with global peers, the UAE's distinguishing result is diffusion:
            first globally for workplace AI adoption in Microsoft's Q1 2026 diffusion
            report, ahead of Singapore, Norway, Ireland and France, with workplace
            usage above 70 percent (<em>Exhibit 06</em>).
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            On institutional measures the position is strong but not first: 12th
            globally and first in MENA on Oxford Insights' 2024 Government AI
            Readiness Index, and 9th of 69 economies on IMD's 2025 World Digital
            Competitiveness Ranking—5th on its future-readiness sub-pillar
            (<em>Exhibit 07</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={6}
          title="The UAE leads the world on workplace AI diffusion, and adoption has compounded through 2025–26."
          subtitle="Reported workplace AI usage and enterprise deployment indicators, % (UAE unless stated)"
          source="Microsoft Global AI Diffusion Reports, H2 2025 and Q1 2026; IBM Global AI Adoption Index 2024"
          footnotes={
            <div>
              Workplace usage measured across employees; enterprise deployment
              measured across companies with more than 1,000 employees.
            </div>
          }
        >
          <div className="space-y-1">
            <UnitBar label="UAE workplace AI usage (May 2026)"      count={49} total={70} value={70} />
            <UnitBar label="UAE employees using AI daily (Nov 2025)" count={42} total={70} value={60} />
            <UnitBar label="UAE IT teams reporting faster rollout"   count={46} total={70} value={65} />
            <UnitBar label="Large UAE enterprises with AI deployed"  count={29} total={70} value={42} />
            <UnitBar label="AI share of MENA venture funding, 2025"  count={15} total={70} value={22} />
          </div>
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={7}
          title="The UAE ranks top-15 on institutional readiness and first on adoption—an unusual combination."
          subtitle="Global rank on published indices (lower is better); adoption rank from Microsoft diffusion data"
          source="Oxford Insights Government AI Readiness Index 2024; IMD World Digital Competitiveness Ranking 2025; Microsoft Global AI Diffusion Report Q1 2026"
          footnotes={
            <div>
              Ranks marked ≈ are approximate placements read from the published
              index bands. Workplace-adoption ranks are published only for the
              leading cohort; other economies are recorded as a data gap (—).
            </div>
          }
        >
          <div className="-mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink align-bottom">
                  <th className="text-left font-semibold py-3 pr-3">Economy</th>
                  <th className="text-right font-semibold py-3 px-2 w-28">Gov. AI readiness</th>
                  <th className="text-right font-semibold py-3 px-2 w-28">Digital competitiveness</th>
                  <th className="text-right font-semibold py-3 px-2 w-28 bg-brand-pale/40">Workplace adoption</th>
                  <th className="text-left font-semibold py-3 pl-4">Observatory note</th>
                </tr>
              </thead>
              <tbody>
                {peers.map((p) => (
                  <tr
                    key={p.city}
                    className={`border-b border-rule ${p.city === "United Arab Emirates" ? "bg-brand-pale/30 font-semibold" : ""}`}
                  >
                    <td className="py-3 pr-3 align-middle">{p.city}</td>
                    <td className="py-3 px-2 text-right align-middle font-mono text-[13px] tabular-nums">{p.gov}</td>
                    <td className="py-3 px-2 text-right align-middle font-mono text-[13px] tabular-nums">{p.digital}</td>
                    <td className="py-3 px-2 text-right align-middle font-mono text-[13px] tabular-nums bg-brand-pale/30">{p.adoption}</td>
                    <td className="py-3 pl-4 align-middle text-muted-foreground font-normal">{p.note}</td>
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
