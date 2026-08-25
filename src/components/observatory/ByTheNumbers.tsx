import { Donut, Waffle } from "./Exhibits";

export function ByTheNumbers() {
  return (
    <section id="numbers" className="py-16 bg-paper">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="bg-panel text-panel-foreground p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-2">
            By the numbers: Dubai's AI economy opportunity.
          </h2>
          <p className="text-panel-foreground/80 text-base mb-10">
            The UAE now leads the world on workplace AI diffusion, and the
            enterprise base is moving from experimentation to deployment…
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-white/15 pb-12">
            <Donut
              pct={70}
              label={
                <>
                  of UAE employees now <strong className="text-white">use AI at
                  work</strong> — the highest national rate measured globally
                </>
              }
            />
            <Donut
              pct={42}
              label={
                <>
                  of large UAE enterprises have <strong className="text-white">actively
                  deployed AI</strong>, ahead of the regional average
                </>
              }
            />
            <Donut
              pct={65}
              label={
                <>
                  of UAE IT professionals report an{" "}
                  <strong className="text-white">accelerated AI rollout</strong>{" "}
                  over the preceding 24 months
                </>
              }
            />
          </div>

          <p className="text-panel-foreground/80 text-base mb-8">
            … while the macro commitments behind that diffusion are unusually
            concrete
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Waffle pct={100} onPanel big="AED 100bn" label={<>projected annual uplift to Dubai's economy from the <strong className="text-white">Universal Blueprint for AI</strong> (~USD 27.2bn)</>} />
            <Waffle pct={96} onPanel big="$96bn" label={<>expected <strong className="text-white">AI contribution to UAE GDP by 2031</strong>, or c. 13.6% of output</>} />
            <Waffle pct={60} onPanel big="5 GW" label={<>planned capacity of the <strong className="text-white">Stargate UAE</strong> AI campus; first 200 MW online in 2026</>} />
            <Waffle pct={22} onPanel big="$858m" label={<>raised by MENA AI startups in 2025 — <strong className="text-white">22% of all regional VC</strong></>} />
          </div>

          <div className="mt-10 text-xs text-panel-foreground/60 border-t border-white/15 pt-4">
            Sources: Microsoft Global AI Diffusion Report, Q1 2026; IBM Global AI
            Adoption Index (Morning Consult), March 2024; Dubai Universal Blueprint
            for Artificial Intelligence, April 2024; PwC / Emirates NBD Research,
            June 2025; OpenAI &amp; Reuters on Stargate UAE, May and October 2025;
            MAGNiTT FY2025 State of Venture Capital of AI in MENA, February 2026.
            <div className="mt-3 font-serif italic">Dubai Chamber of Digital Economy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
