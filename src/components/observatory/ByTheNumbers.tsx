import { Donut, Waffle } from "./Exhibits";
import { StatMeta } from "./Editorial";

export function ByTheNumbers() {
  return (
    <section id="numbers" className="py-16 bg-paper">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="bg-panel text-panel-foreground p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-soft shrink-0" />
            <span className="eyebrow text-[0.68rem] tracking-[0.14em] text-panel-foreground/70">
              Indicator summary
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-[1.9rem] leading-[1.2] mb-3 text-balance">
            By the numbers: Dubai's AI economy opportunity.
          </h2>
          <p className="text-panel-foreground/75 text-[15px] leading-relaxed max-w-[62ch] mb-10">
            The UAE records the highest measured national rate of AI use in
            Microsoft's diffusion data, and surveyed enterprises are putting named
            accountability behind it…
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-white/15 pb-12">
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={70}
                label={
                  <>
                    of the UAE's <strong className="text-white">working-age
                    population</strong> used AI tools — the highest national rate in
                    Microsoft's Q1 2026 diffusion data
                  </>
                }
              />
              <StatMeta
                onPanel
                period="Measurement period Q1 2026; published May 2026"
                geography="UAE"
                population="Share of the working-age population, per Microsoft's diffusion methodology — not a share of employees"
                status="Reported indicator"
                source="Microsoft AI Economy Institute, Global AI Diffusion in Q1 2026"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={33}
                label={
                  <>
                    of <strong className="text-white">surveyed UAE
                    organisations</strong> had appointed a Chief AI Officer, against
                    26% globally
                  </>
                }
              />
              <StatMeta
                onPanel
                period="Study published 15 July 2025"
                geography="UAE vs global sample"
                population="Surveyed organisations, not all UAE enterprises"
                status="Reported indicator (survey)"
                source="IBM Institute for Business Value with Dubai Future Foundation, Chief AI Officer study, July 2025"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={89}
                label={
                  <>
                    of <strong className="text-white">surveyed Middle East
                    CEOs</strong> say their organisations are embedding AI across
                    multiple workflows
                  </>
                }
              />
              <StatMeta
                onPanel
                period="Published 16 June 2026"
                geography="Middle East"
                population="c. 100 surveyed Middle East chief executives — not a UAE-wide enterprise rate"
                status="Reported indicator (survey)"
                source="IBM Institute for Business Value, Middle East CEO Study, June 2026"
              />
            </div>
          </div>


          <p className="text-panel-foreground/75 text-[15px] leading-relaxed max-w-[62ch] mb-8">
            … while the macro commitments behind that diffusion are stated targets and
            projections rather than measured outcomes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Waffle pct={100} onPanel big="AED 100bn" label={<>targeted <strong className="text-white">additional contribution to Dubai's economy</strong> from the Universal Blueprint for AI (c. USD 27.2bn)</>} />
              <StatMeta
                onPanel
                period="Target announced 29 April 2024; no published progress figure identified as of September 2026"
                geography="Dubai"
                status="Announced target — not an achieved or annual figure"
                source="Emirates News Agency (WAM), launch of the Dubai Universal Blueprint for Artificial Intelligence, 29 April 2024"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={96} onPanel big="$96bn" label={<>projected <strong className="text-white">AI contribution to UAE GDP by 2031</strong>, equal to 13.6% of output</>} />
              <StatMeta
                onPanel
                period="Published 11 June 2025; forecast year 2031"
                geography="UAE"
                status="Projection — not an observed 2026 contribution"
                source="PwC estimate as reported by Emirates NBD Research, June 2025 (latest available)"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={20} onPanel big="200 MW" label={<>initial phase of the <strong className="text-white">1 GW Stargate UAE cluster</strong>, within a planned 5 GW UAE–US AI Campus</>} />
              <StatMeta
                onPanel
                period="Cluster announced 22 May 2025; first 200 MW targeted for completion in Q3 2026"
                geography="Abu Dhabi, UAE"
                status="Announced build-out; operation not independently confirmed as of September 2026"
                source="OpenAI, Introducing Stargate UAE, May 2025; The National, December 2025"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={37} onPanel big="$941m" label={<>total <strong className="text-white">MENA startup funding in Q1 2026</strong>, down 37% year on year</>} />
              <StatMeta
                onPanel
                period="Q1 2026; published April 2026"
                geography="MENA"
                population="All venture-backed MENA startups, all sectors — not AI-only"
                status="Reported indicator"
                source="MAGNiTT Q1 2026 MENA venture data, as reported by Wamda, April 2026"
              />
            </div>
          </div>

          <div className="mt-10 text-xs leading-relaxed text-panel-foreground/60 border-t border-white/15 pt-4">
            <span className="font-semibold text-panel-foreground/80">Sources:</span>{" "}
            Microsoft AI Economy Institute, Global AI Diffusion in Q1 2026 (May 2026);
            IBM Institute for Business Value with Dubai Future Foundation, Chief AI
            Officer study (15 July 2025); IBM Institute for Business Value, Middle
            East CEO Study (16 June 2026); Emirates News Agency (WAM), Dubai Universal
            Blueprint for Artificial Intelligence (29 April 2024); PwC via Emirates NBD
            Research (11 June 2025); OpenAI, Introducing Stargate UAE (22 May 2025) and
            The National (5 December 2025); MAGNiTT Q1 2026 MENA venture data via Wamda
            (April 2026).

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-block border border-brand-soft/70 text-brand-pale px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.09em] leading-none">
                Reported and projected
              </span>
              <span className="text-panel-foreground/55">
                Every figure above is published by a third party. Survey figures
                describe the sample surveyed, not the whole population; targets and
                projections are labelled as such. No Observatory estimates appear in
                this panel.
              </span>
            </div>
            <div className="mt-3 font-serif italic">Dubai Chamber of Digital Economy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
