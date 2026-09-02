import { ExhibitFrame } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

const layers: { label: string; band: string; basis: string }[] = [
  {
    label: "Individual AI use at work and at home",
    band: "Widely diffused",
    basis:
      "Microsoft Q1 2026 diffusion data: highest measured national usage rate, c. 70% of the UAE working-age population",
  },
  {
    label: "Enterprise AI embedded in workflows",
    band: "Scaling, survey-based evidence only",
    basis:
      "89% of c. 100 surveyed Middle East CEOs report embedding AI across multiple workflows (IBM, June 2026); no UAE-wide enterprise census identified",
  },
  {
    label: "Named AI accountability in organisations",
    band: "Established and formalising",
    basis:
      "33% of surveyed UAE organisations vs 26% globally had a Chief AI Officer (IBM/Dubai Future Foundation, July 2025); 22 chief AI officers appointed across Dubai government entities, October 2024",
  },
  {
    label: "Sovereign compute and data-centre capacity",
    band: "Announced and under construction",
    basis:
      "1 GW Stargate UAE cluster within a planned 5 GW UAE–US AI Campus; first 200 MW targeted for completion in Q3 2026; operation not independently confirmed",
  },
  {
    label: "Agentic / multi-step autonomous AI in production",
    band: "No public measurement identified",
    basis:
      "No published Dubai or UAE indicator of agentic AI deployment identified as of September 2026",
  },
];

export function KeyQuestions() {
  return (
    <section className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 01 · Adoption"
          title="The front door of AI value is moving upstream—and Dubai is already walking through it"
          context="Where value is created is shifting from execution to interpretation. The question is whether measured adoption in Dubai matches that shift."
        />

        <Block label="Key finding" accent>
          <p>
            The UAE records the highest national AI usage rate in Microsoft's Q1 2026
            diffusion data—around 70 percent of the working-age population, ranked
            first globally. That is a population-level diffusion measure, not a
            measure of enterprise deployment; at the enterprise layer the available
            evidence is survey-based and thinner.
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            An IBM Institute for Business Value study conducted with the Dubai Future
            Foundation, published in July 2025, found that 33 percent of surveyed UAE
            organisations had appointed a Chief AI Officer, compared with 26 percent
            globally. A later IBM study of Middle East chief executives, published in
            June 2026, found that 89 percent of roughly 100 surveyed CEOs say their
            organisations are embedding AI across multiple workflows. These are
            different samples and different populations, and neither is a UAE-wide
            enterprise adoption rate (<em>Exhibit 01</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={1}
          tag="observatory"
          title="Dubai's readiness is strongest where diffusion is measured, and least observable where autonomy begins."
          subtitle="Observatory assessment of maturity by capability layer, stated as qualitative bands with the published evidence behind each"
          source="Microsoft AI Economy Institute, Global AI Diffusion in Q1 2026; IBM Institute for Business Value with Dubai Future Foundation, July 2025; IBM Middle East CEO Study, June 2026; OpenAI, Introducing Stargate UAE, May 2025; The National, December 2025"
          footnotes={
            <div>
              Bands are an Observatory judgement read off the cited public indicators.
              They are deliberately qualitative: no survey measures maturity by layer
              for Dubai, so any numeric distribution would be false precision. Where
              no public indicator exists, the row records that fact rather than an
              estimate.
            </div>
          }
        >
          <div className="-mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b-2 border-ink align-bottom">
                  <th className="text-left font-semibold py-3 pr-4">Capability layer</th>
                  <th className="text-left font-semibold py-3 pr-4 w-56">Observatory band</th>
                  <th className="text-left font-semibold py-3">Published evidence basis</th>
                </tr>
              </thead>
              <tbody>
                {layers.map((l) => (
                  <tr key={l.label} className="border-b border-rule align-top">
                    <td className="py-4 pr-4 text-ink">{l.label}</td>
                    <td className="py-4 pr-4">
                      <span className="inline-block bg-brand-pale/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] leading-none text-ink">
                        {l.band}
                      </span>
                    </td>
                    <td className="py-4 text-muted-foreground text-[13px] leading-relaxed">{l.basis}</td>
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
            The macro expectation is explicit but forward-looking: a PwC estimate
            carried by Emirates NBD Research in June 2025 projects AI contributing
            13.6 percent of UAE GDP by 2031—the highest share in the GCC—equivalent to
            more than USD 96 billion. This is a projection for 2031, not an observed
            2026 contribution, and no 2026 revision has been published
            (<em>Exhibit 02</em>).
          </p>
        </Block>
      </div>




      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={2}
          tag="projection"
          title="AI is projected to contribute a larger share of GDP in the UAE than elsewhere in the Gulf."
          subtitle="Projected AI contribution to GDP by 2031, % of output — a forecast, not a measured outcome"
          source="PwC estimates as reported by Emirates NBD Research, 11 June 2025 — latest available; no 2026 revision identified"
          footnotes={
            <div>
              Forecast year 2031. The UAE figure equates to more than USD 96 billion,
              with annual growth in AI-linked output projected at 20–30%. Comparators
              are the Saudi Arabia and rest-of-GCC figures published in the same
              source; no global average is implied.
            </div>
          }

        >
          <div className="flex items-end justify-center gap-2 h-44">
            {[
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
                <div className="mt-2 text-xs text-muted-foreground text-center">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm font-semibold">
            <span className="text-brand text-2xl font-serif">$96bn</span>{" "}
            <span className="text-muted-foreground">projected AI contribution to UAE GDP by 2031</span>
          </div>
        </ExhibitFrame>
      </div>
    </section>
  );
}
