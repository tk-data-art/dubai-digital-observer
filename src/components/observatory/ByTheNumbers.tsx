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
            The UAE now leads the world on workplace AI diffusion, and the
            enterprise base is moving from experimentation to deployment…
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-white/15 pb-12">
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={70}
                label={
                  <>
                    of UAE employees now <strong className="text-white">use AI at
                    work</strong> — the highest national rate measured globally
                  </>
                }
              />
              <StatMeta
                onPanel
                period="May 2026"
                geography="UAE"
                source="Microsoft Global AI Diffusion Report Q1 2026"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={33}
                label={
                  <>
                    of UAE organisations have appointed a{" "}
                    <strong className="text-white">Chief AI Officer</strong> —
                    against 26% globally
                  </>
                }
              />
              <StatMeta
                onPanel
                period="June 2026"
                geography="UAE"
                source="IBM Institute for Business Value & Dubai Future Foundation"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Donut
                pct={89}
                label={
                  <>
                    of Middle East CEOs are{" "}
                    <strong className="text-white">embedding AI into core
                    workflows</strong>, not isolated pilots
                  </>
                }
              />
              <StatMeta
                onPanel
                period="June 2026"
                geography="Middle East"
                source="IBM CEO Study 2026"
              />
            </div>
          </div>


          <p className="text-panel-foreground/75 text-[15px] leading-relaxed max-w-[62ch] mb-8">
            … while the macro commitments behind that diffusion are unusually
            concrete
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Waffle pct={100} onPanel big="AED 100bn" label={<>target <strong className="text-white">contribution to Dubai's economy</strong> under the Universal Blueprint for AI (~USD 27.2bn)</>} />
              <StatMeta
                onPanel
                period="Target set April 2024; no 2026 progress figure published"
                geography="Dubai"
                source="Dubai Universal Blueprint for Artificial Intelligence"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={96} onPanel big="$96bn" label={<>expected <strong className="text-white">AI contribution to UAE GDP by 2031</strong>, or c. 13.6% of output</>} />
              <StatMeta
                onPanel
                period="Projection to 2031 — latest available (June 2025)"
                geography="UAE"
                source="PwC estimates via Emirates NBD Research"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={20} onPanel big="200 MW" label={<>first phase of <strong className="text-white">Stargate UAE</strong> targeted live in Q3 2026, within a 1 GW build-out</>} />
              <StatMeta
                onPanel
                period="August 2026"
                geography="Abu Dhabi, UAE"
                source="G42 / Khazna build-out reporting, 2026"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <Waffle pct={31} onPanel big="$1.3bn" label={<>raised by MENA AI startups in Q1 2026 — <strong className="text-white">31% of it into the UAE</strong></>} />
              <StatMeta
                onPanel
                period="Q1 2026"
                geography="MENA"
                source="MAGNiTT Q1 2026 State of Venture Capital in MENA"
              />
            </div>
          </div>

          <div className="mt-10 text-xs leading-relaxed text-panel-foreground/60 border-t border-white/15 pt-4">
            <span className="font-semibold text-panel-foreground/80">Sources:</span>{" "}
            Microsoft Global AI Diffusion Report, Q1 2026 (May 2026); IBM Institute
            for Business Value &amp; Dubai Future Foundation, June 2026; IBM CEO
            Study 2026 (Middle East), June 2026; Dubai Universal Blueprint for
            Artificial Intelligence, April 2024 (target unchanged); PwC via Emirates
            NBD Research, June 2025 (latest available); G42 / Khazna Stargate UAE
            build-out reporting, 2026; MAGNiTT Q1 2026 State of Venture Capital in MENA.

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-block border border-brand-soft/70 text-brand-pale px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.09em] leading-none">
                Reported indicator
              </span>
              <span className="text-panel-foreground/55">
                All figures above are published third-party indicators; no Observatory estimates are included.
              </span>
            </div>
            <div className="mt-3 font-serif italic">Dubai Chamber of Digital Economy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
