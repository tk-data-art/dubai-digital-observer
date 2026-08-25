import { ExhibitFrame } from "./Exhibits";

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
    label: "Regulatory Intelligence ecosystem",
    detail: "Cabinet approved the first integrated ecosystem, including AI-assisted legislative drafting, 14 April 2025",
    status: "Building",
  },
  {
    group: "Emirate-level",
    label: "Dubai Universal Blueprint for Artificial Intelligence",
    detail: "Launched 29 April 2024; projected AED 100bn annual uplift",
    status: "In delivery",
  },
  {
    group: "",
    label: "Chief AI Officers across Dubai government entities",
    detail: "Approved by the Executive Council, October 2025",
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
    detail: "Governs personal data processed through autonomous and semi-autonomous systems",
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
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          Trust becomes a form of infrastructure
        </h2>
        <p>
          If the front door of AI is moving upstream, trust is becoming as important
          as bandwidth. The UAE has moved early on the declaratory layer—a national
          AI charter, a strategy with explicit economic targets, and, since April
          2025, a cabinet-approved regulatory intelligence ecosystem that uses AI in
          legislative drafting itself. At emirate level, the Universal Blueprint,
          chief AI officers in every government entity, and the One Million Prompters
          programme give the agenda institutional owners.
        </p>
        <p>
          What is thinner is the assurance layer: audit capability, model
          accountability standards, and public redress mechanisms. The Observatory
          records these as data gaps rather than weaknesses—no public instrument
          exists to measure (<em>Exhibit 8</em>).
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={8}
          title="Dubai's declaratory and delivery layers are well populated; the assurance layer is not yet observable."
          subtitle="Published AI governance instruments relevant to Dubai, by layer and status"
          source="UAE Legislation portal; UAE Cabinet, 14 April 2025; Dubai Government Media Office, April 2024 and October 2025; DIFC Commissioner of Data Protection"
          footnotes={
            <div>
              "Data gap" indicates that no published instrument or public register
              was identified as of August 2026; it is not a judgement that the
              capability is absent.
            </div>
          }
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="text-left py-3 font-semibold w-1/5">Layer</th>
                <th className="text-left py-3 font-semibold">Instrument</th>
                <th className="text-right py-3 font-semibold w-28">Status</th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((r, i) => (
                <tr key={i} className="border-b border-rule">
                  <td className="py-3 pr-4 align-top font-semibold text-ink">{r.group}</td>
                  <td className="py-3">
                    <div className="text-ink">{r.label}</div>
                    <div className="text-muted-foreground text-[13px] mt-0.5">{r.detail}</div>
                  </td>
                  <td className="py-3 text-right align-top">
                    <span
                      className={`inline-block px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${
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
