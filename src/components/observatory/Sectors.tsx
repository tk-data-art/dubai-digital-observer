import { ExhibitFrame } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

const sectors: { name: string; readiness: string; coverage: string; basis: string }[] = [
  {
    name: "Government services",
    readiness: "Advanced",
    coverage: "High",
    basis: "22 chief AI officers appointed across Dubai government entities (October 2024); federal AI and Data Authority approved June 2026",
  },
  {
    name: "Financial services & DIFC",
    readiness: "Advanced",
    coverage: "High",
    basis: "DIFC Data Protection Regulation 10 in force since late 2023; 1,677 AI, FinTech and innovation-focused companies reported in DIFC's FY2025 results",
  },
  {
    name: "Logistics & trade",
    readiness: "Established",
    coverage: "Moderate",
    basis: "Long-running customs and port digitisation programmes; no single published sector AI indicator identified",
  },
  {
    name: "Compute & data infrastructure",
    readiness: "Building",
    coverage: "Moderate",
    basis: "1 GW Stargate UAE cluster within a planned 5 GW campus; first 200 MW targeted for completion Q3 2026",
  },
  {
    name: "Healthcare & life sciences",
    readiness: "Not established from public evidence",
    coverage: "Low",
    basis: "No published Dubai-level AI deployment indicator identified as of September 2026",
  },
  {
    name: "Tourism & hospitality",
    readiness: "Not established from public evidence",
    coverage: "Low",
    basis: "No published Dubai-level AI deployment indicator identified as of September 2026",
  },
  {
    name: "Real estate & construction",
    readiness: "Not established from public evidence",
    coverage: "Low",
    basis: "No published Dubai-level AI deployment indicator identified as of September 2026",
  },
  {
    name: "Creative & media",
    readiness: "Not established from public evidence",
    coverage: "Low",
    basis: "No published Dubai-level AI deployment indicator identified as of September 2026",
  },
];

export function Sectors() {
  return (
    <section id="sectors" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 02 · Sectors"
          title="Sectors expect to scale—yet capacity is contested"
          context="Readiness is most observable where a public mandate and a clear rulebook already exist; elsewhere, what is thin is often the published evidence rather than the activity."
        />

        <Block label="Key finding" accent>
          <p>
            Dubai's most observable sectors are those with an explicit public mandate.
            Government services carry named accountability: 22 chief AI officers were
            appointed across Dubai government entities in October 2024, and the Crown
            Prince convened them again in November 2025. Financial services, anchored
            by DIFC's Regulation 10 on personal data processed through autonomous and
            semi-autonomous systems—in force since late 2023—has the clearest published
            rulebook for delegating decisions to machines; DIFC reported 1,677 AI,
            FinTech and innovation-focused companies in its FY2025 results.
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            Beyond those sectors, the Observatory found no published Dubai-level AI
            deployment indicators. That is a gap in public evidence, not a finding of
            absence, and the exhibit below reports readiness and evidence coverage in
            separate columns so that a sector is not marked down simply because fewer
            indicators are published (<em>Exhibit 04</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={4}
          tag="observatory"
          title="Where Dubai's AI readiness is publicly observable—and where only the evidence, not necessarily the activity, is missing."
          subtitle="Observatory assessment by sector, with readiness and published-evidence coverage reported separately"
          source="Dubai Government Media Office, October 2024 and November 2025; DIFC Data Protection Regulation 10 and DIFC FY2025 results (February 2026); OpenAI, Introducing Stargate UAE, May 2025; The National, December 2025"
          footnotes={
            <div>
              Readiness bands are an Observatory judgement mapped from named public
              instruments and announcements; coverage records how much published
              Dubai-specific evidence the Observatory identified. The two are separated
              deliberately so that low coverage is not read as low readiness. No
              numeric sector score is published, because no dataset measuring sector AI
              readiness in Dubai was identified.
            </div>
          }
        >
          <div className="-mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink align-bottom">
                  <th className="text-left font-semibold py-3 pr-4">Sector</th>
                  <th className="text-left font-semibold py-3 pr-4 w-52">Observatory readiness band</th>
                  <th className="text-left font-semibold py-3 pr-4 w-32">Evidence coverage</th>
                  <th className="text-left font-semibold py-3">Principal published evidence</th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((s) => (
                  <tr key={s.name} className="border-b border-rule align-top">
                    <td className="py-4 pr-4 text-ink">{s.name}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] leading-none ${
                          s.readiness.startsWith("Not established")
                            ? "bg-secondary text-muted-foreground"
                            : "bg-brand-pale/60 text-ink"
                        }`}
                      >
                        {s.readiness}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-muted-foreground text-[13px]">{s.coverage}</td>
                    <td className="py-4 text-muted-foreground text-[13px] leading-relaxed">{s.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <Block label="Implication" accent>
          <p>
            Capital is not the differentiator on current evidence. Total MENA startup
            funding across all sectors reached USD 941 million in the first quarter of
            2026, down 37 percent year on year, on MAGNiTT data reported in April 2026.
            Dubai's edge sits instead in the combination of measured diffusion,
            published regulatory clarity, and speed from announcement to delivery.
          </p>
          <p>
            The lag in slower-moving sectors is not disbelief—it is selectivity, and in
            several cases it is simply unmeasured. Where no public indicator exists,
            the Observatory records the gap rather than inferring a position.
          </p>
        </Block>
      </div>
    </section>
  );
}
