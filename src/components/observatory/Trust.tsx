import { ExhibitFrame } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

const instruments: { group: string; label: string; detail: string; status: string }[] = [
  {
    group: "National frameworks",
    label: "UAE Charter for the Development and Use of AI",
    detail: "Principles for safe, fair and accountable AI, published on the federal legislation portal",
    status: "In force",
  },
  {
    group: "",
    label: "UAE National AI Strategy 2031",
    detail: "Federal strategy setting AI-in-government and AI-in-economy objectives",
    status: "In force",
  },
  {
    group: "",
    label: "UAE Artificial Intelligence and Data Authority",
    detail: "New federal authority approved June 2026 to consolidate AI and data policy across government",
    status: "Building",
  },
  {
    group: "",
    label: "Regulatory Intelligence ecosystem",
    detail: "Cabinet approved the first integrated ecosystem, including AI-assisted legislative drafting, 14 April 2025",
    status: "Building",
  },
  {
    group: "Emirate-level",
    label: "Dubai Universal Blueprint for Artificial Intelligence",
    detail: "Launched 29 April 2024; AED 100bn target contribution, no published progress figure to date",
    status: "In delivery",
  },
  {
    group: "",
    label: "Chief AI Officers across Dubai government entities",
    detail: "22 chief AI officers appointed across Dubai government entities, October 2024; 33% of surveyed UAE organisations had a chief AI officer (IBM/Dubai Future Foundation, July 2025)",
    status: "In delivery",
  },
  {
    group: "",
    label: "Dubai AI Academy",
    detail: "Dubai AI Academy launched April 2025; announced ambition to train 10,000 leaders by 2030",
    status: "In delivery",
  },
  {
    group: "",
    label: "One Million Prompters",
    detail: "Dubai Centre for AI programme to train one million people in prompt engineering over three years",
    status: "In delivery",
  },
  {
    group: "Sectoral & data",
    label: "DIFC Data Protection Regulation 10",
    detail: "Governs personal data processed through autonomous and semi-autonomous systems; in force since late 2023",
    status: "In force",
  },
  {
    group: "",
    label: "Model assurance, audit and redress capacity",
    detail: "No published emirate-wide standard or audit body identified",
    status: "Data gap",
  },
  {
    group: "",
    label: "City-level AI incident and complaints reporting",
    detail: "No public register identified",
    status: "Data gap",
  },

];

export function Trust() {
  return (
    <section id="trust" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 04 · Governance"
          title="Trust becomes a form of infrastructure"
          context="As the front door of AI moves upstream, assurance capacity becomes as material to competitiveness as compute."
        />

        <Block label="Key finding" accent>
          <p>
            The UAE has moved early on the declaratory layer—a national AI charter, a
            strategy with explicit economic targets, and, since April 2025, a
            cabinet-approved regulatory intelligence ecosystem that uses AI in
            legislative drafting itself. In June 2026 it went further, approving a
            federal Artificial Intelligence and Data Authority to consolidate policy
            across government. At emirate level, the Universal Blueprint, chief AI
            officers across government entities, the Dubai AI Academy launched in April
            2025, and the One Million Prompters programme give the agenda
            institutional owners.

          </p>
        </Block>

        <Block label="Evidence">
          <p>
            What is thinner is the assurance layer: audit capability, model
            accountability standards, and public redress mechanisms. The Observatory
            records these as data gaps rather than weaknesses—no public instrument
            exists to measure (<em>Exhibit 08</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={8}
          title="Dubai's declaratory and delivery layers are well populated; the assurance layer is not yet observable."
          subtitle="Published AI governance instruments relevant to Dubai, by layer and status"
          source="UAE Legislation portal; UAE Cabinet, 14 April 2025; UAE AI and Data Authority announcement, June 2026; Dubai Government Media Office, April 2024, October 2024, April 2025 and November 2025; DIFC Data Protection Regulation 10; DIFC FY2025 results, February 2026"
          footnotes={
            <div>
              "Data gap" indicates that no published instrument or public register
              was identified as of September 2026; it is not a judgement that the
              capability is absent.
            </div>
          }
        >
          <div className="-mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink align-bottom">
                  <th className="text-left py-3 pr-4 font-semibold w-[22%]">Layer</th>
                  <th className="text-left py-3 font-semibold">Instrument</th>
                  <th className="text-right py-3 pl-4 font-semibold w-32">Status</th>
                </tr>
              </thead>
              <tbody>
                {instruments.map((r, i) => (
                  <tr key={i} className="border-b border-rule">
                    <td className="py-4 pr-4 align-top font-semibold text-ink">{r.group}</td>
                    <td className="py-4 pr-4 align-top">
                      <div className="text-ink">{r.label}</div>
                      <div className="text-muted-foreground text-[13px] mt-1 leading-relaxed">{r.detail}</div>
                    </td>
                    <td className="py-4 pl-4 text-right align-top">
                      <span
                        className={`inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] leading-none ${
                          r.status === "Data gap"
                            ? "bg-secondary text-muted-foreground"
                            : "bg-brand-pale/60 text-ink"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
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
            Put differently, the instincts of a great regulator—discretion about what
            to allow, restraint about what to defer, and reassurance at moments of
            systemic uncertainty—must be translated into machine-readable policy and
            auditable behaviour. Only then can autonomy scale without diluting what
            makes Dubai's economy distinctive.
          </p>
        </Block>

        <Block label="Strategic implication">
          <p>
            In Dubai, trust is not only a safeguard. It is a fundamental part of what
            investors, talent, and operators are buying. A licence to operate in Dubai
            carries speed and access, but also identity and assurance. Trust,
            therefore, must be <em>city-coded</em>.
          </p>
        </Block>
      </div>
    </section>
  );
}
