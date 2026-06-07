import heroImg from "@/assets/hero-dubai.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ink" />
              <span className="eyebrow text-ink">Edition 01 · Living edition</span>
            </div>
            <h1 className="display-xl text-[clamp(2.75rem,6.5vw,5.75rem)] text-ink">
              Dubai's AI economy,
              <br />
              <span className="italic text-teal-deep">measured in real time.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-ink/75 max-w-2xl leading-relaxed">
              A verified, evidence-backed assessment of where Dubai is ready to scale
              artificial intelligence across sectors, infrastructure, talent, governance,
              and capital — and where the next constraints sit.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#thesis"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-[12px] font-mono uppercase tracking-[0.15em] hover:bg-teal-deep transition-colors"
              >
                Explore findings →
              </a>
              <a
                href="#methodology"
                className="inline-flex items-center gap-2 border border-ink/30 px-6 py-3.5 text-[12px] font-mono uppercase tracking-[0.15em] hover:border-ink transition-colors"
              >
                Methodology
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/20 pt-6">
              <div>
                <dt className="eyebrow text-muted-foreground">Published by</dt>
                <dd className="mt-2 font-serif text-lg text-ink leading-snug">
                  Dubai Chamber of <br />Digital Economy
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Last updated</dt>
                <dd className="mt-2 font-serif text-lg text-ink leading-snug">
                  June 2026
                  <br />
                  <span className="text-sm text-muted-foreground">Refreshed quarterly</span>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Coverage</dt>
                <dd className="mt-2 font-serif text-lg text-ink leading-snug">
                  8 sectors · 6 peer cities
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Indicators</dt>
                <dd className="mt-2 font-serif text-lg text-ink leading-snug">
                  142 tracked · 100% sourced
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 relative">
          <img
            src={heroImg}
            alt="Dubai skyline at dawn"
            width={1920}
            height={1280}
            className="w-full h-[420px] lg:h-[560px] object-cover grayscale-[20%] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-paper">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-ink/70 backdrop-blur px-3 py-1.5">
              Figure 0 · Dubai, June 2026
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-ink/70 backdrop-blur px-3 py-1.5">
              Source: Observatory composite
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}