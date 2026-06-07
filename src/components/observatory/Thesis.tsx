export function Thesis() {
  return (
    <section id="thesis" className="py-24 lg:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow text-teal-deep">Chapter 01</span>
              <h2 className="font-serif text-3xl mt-3 text-ink leading-tight">
                The strategic opening
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 space-y-6 font-serif text-2xl lg:text-[1.7rem] leading-[1.45] text-ink">
            <p className="first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-teal-deep">
              For years, AI strategy was discussed primarily as a technology agenda.
              That framing is no longer sufficient.
            </p>
            <p className="text-xl lg:text-[1.35rem] text-ink/80 leading-[1.55]">
              As AI adoption expands across public services, enterprise operations,
              talent systems, and startup ecosystems, the issue for Dubai is increasingly
              one of <em className="text-ink">economic readiness</em>: which sectors can
              scale, which capabilities are in place, and where the next constraints sit.
            </p>
            <p className="text-xl lg:text-[1.35rem] text-ink/80 leading-[1.55]">
              Dubai enters this moment with material advantages. The Dubai Universal
              Blueprint for Artificial Intelligence is designed to accelerate adoption
              across strategic sectors, support AI companies and talent, and modernize
              government services — all in service of D33's ambition to contribute
              <span className="text-ink"> AED 100 billion annually</span> through digital
              transformation and lift productivity by <span className="text-ink">50%</span>.
            </p>
            <p className="text-xl lg:text-[1.35rem] text-ink/80 leading-[1.55]">
              But readiness is uneven. A single top-line story cannot capture how
              fintech, logistics, healthcare, and government compete on different
              clocks. This Observatory exists to make that unevenness legible —
              section by section, indicator by indicator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}