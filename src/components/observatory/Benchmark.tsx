import { ExhibitFrame, UnitBar } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

export function Benchmark() {
  const peers = [
    { city: "United Arab Emirates", gov: "—", digital: "9", adoption: "1", note: "Highest measured national AI use rate in Microsoft's Q1 2026 diffusion data; 9th of 69 on IMD 2025" },
    { city: "Saudi Arabia",         gov: "1 in MENA", digital: "—", adoption: "—", note: "Ranked first in MENA on Oxford Insights' 2025 index" },
    { city: "Switzerland",          gov: "—", digital: "1", adoption: "—", note: "Leads IMD's 2025 digital competitiveness ranking" },
    { city: "Singapore",            gov: "—", digital: "—", adoption: "—", note: "Per-economy ranks not confirmed from the published 2025 editions" },
    { city: "United States",        gov: "—", digital: "—", adoption: "—", note: "Per-economy ranks not confirmed from the published 2025 editions" },
    { city: "United Kingdom",       gov: "—", digital: "—", adoption: "—", note: "Per-economy ranks not confirmed from the published 2025 editions" },
    { city: "China",                gov: "—", digital: "—", adoption: "—", note: "Per-economy ranks not confirmed from the published 2025 editions" },
  ];

  return (
    <section id="benchmark" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 03 · Benchmark"
          title="Dubai leans into what AI can diffuse, not just what it can automate"
          context="Against global peers, the UAE's distinguishing published result is diffusion rather than institutional rank."
        />

        <Block label="Key finding" accent>
          <p>
            The UAE's distinguishing published result is diffusion: Microsoft's Q1
            2026 diffusion data records the UAE with the highest national AI usage
            rate measured—around 70 percent of the working-age population—and ranks
            it first globally on that measure (<em>Exhibit 06</em>).
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            On institutional measures the position is strong but narrower in what can
            be verified. The UAE ranks 9th of 69 economies on IMD's 2025 World Digital
            Competitiveness Ranking, and 5th on its future-readiness pillar. On Oxford
            Insights' Government AI Readiness Index 2025, Saudi Arabia—not the
            UAE—is reported first in MENA; the UAE's exact position in that edition
            could not be confirmed from the published index and is therefore shown as
            a data gap rather than estimated (<em>Exhibit 07</em>).
          </p>
        </Block>

      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={6}
          title="The UAE records the highest national AI usage rate in Microsoft's diffusion data, while enterprise governance indicators come from surveyed samples."
          subtitle="Published indicators, %. Note the populations differ: national working-age population, surveyed organisations and surveyed CEOs are not comparable bases."
          source="Microsoft AI Economy Institute, Global AI Diffusion in Q1 2026 (May 2026); IBM Institute for Business Value with Dubai Future Foundation, July 2025; IBM Institute for Business Value Middle East CEO Study, June 2026"
          footnotes={
            <div>
              Bars are not a like-for-like series. The diffusion figure is measured
              across the UAE's working-age population; the Chief AI Officer and CEO
              figures are self-reported results from surveyed organisations and c. 100
              surveyed Middle East chief executives respectively.
            </div>
          }
        >
          <div className="space-y-1">
            <UnitBar label="UAE AI usage, working-age population (Q1 2026)"        count={49} total={70} value={70} />
            <UnitBar label="Surveyed Middle East CEOs embedding AI (Jun 2026)"     count={62} total={70} value={89} />
            <UnitBar label="Surveyed UAE organisations with a chief AI officer (Jul 2025)" count={23} total={70} value={33} />
            <UnitBar label="Surveyed global organisations with a chief AI officer (Jul 2025)" count={18} total={70} value={26} />
          </div>
        </ExhibitFrame>

      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={7}
          title="Only a few peer positions are confirmable from the published 2025 editions; the rest are recorded as data gaps."
          subtitle="Published index positions (lower is better). Columns are separate indices measuring different things and are not additive."
          source="Oxford Insights Government AI Readiness Index 2025; IMD World Digital Competitiveness Ranking 2025; Microsoft AI Economy Institute, Global AI Diffusion in Q1 2026"
          footnotes={
            <div>
              An em dash (—) means the per-economy position was not confirmed from the
              published edition as of September 2026; it is a data gap, not a low
              score. No approximate or banded ranks are shown. Government AI readiness,
              digital competitiveness and workplace-population adoption measure
              different constructs and should not be read as one league table.
            </div>

          }
        >
          <div className="-mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink align-bottom">
                  <th className="text-left font-semibold py-3 pr-3">Economy</th>
                  <th className="text-right font-semibold py-3 px-2 w-28">Gov. AI readiness (Oxford Insights 2025)</th>
                  <th className="text-right font-semibold py-3 px-2 w-28">Digital competitiveness (IMD 2025)</th>
                  <th className="text-right font-semibold py-3 px-2 w-28 bg-brand-pale/40">AI diffusion rank (Microsoft Q1 2026)</th>
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
