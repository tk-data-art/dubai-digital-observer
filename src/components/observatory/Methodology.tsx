import { Tag } from "./Editorial";

export function Methodology() {
  return (
    <section className="py-12 bg-secondary/40 border-y border-rule">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="eyebrow text-[0.66rem] tracking-[0.14em] text-muted-foreground">
            Methodology
          </span>
          <Tag kind="observatory" />
          <Tag kind="gap" />
        </div>
        <h3 className="font-serif text-xl md:text-2xl text-ink mb-4 leading-snug">
          About the Observatory
        </h3>
        <p className="text-[15px] leading-relaxed text-ink/85">
          This edition is compiled from published, citable evidence current to
          August 2026: the Dubai Universal Blueprint for Artificial Intelligence
          (April 2024) and Dubai Economic Agenda D33; the UAE National AI Strategy
          2031; Microsoft's Global AI Diffusion reports (H2 2025 and Q1 2026); the
          IBM Global AI Adoption Index; PwC-derived AI-to-GDP estimates reported in
          June 2025; Oxford Insights' Government AI Readiness Index 2024; IMD's
          World Digital Competitiveness Ranking 2025; MAGNiTT's FY2025 venture
          data; and primary regulatory instruments including the UAE Charter for
          the Development and Use of AI and DIFC Data Protection Regulation 10.
        </p>
        <p className="text-[15px] leading-relaxed text-ink/85 mt-4">
          Where a public indicator does not exist, the Observatory records a{" "}
          <em>data gap</em> rather than estimating; composite zone weightings and
          sector scores are explicitly labelled as Observatory judgements. As a{" "}
          <em>living</em> product, indicators are refreshed quarterly and should be
          read as directional snapshots in time.
        </p>
        <dl className="mt-6 border-t border-rule pt-4 grid gap-3 sm:grid-cols-3 text-[13px] leading-relaxed">
          <div>
            <dt className="font-semibold text-ink">Reported indicator</dt>
            <dd className="text-muted-foreground">Published third-party figure, cited to source.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Observatory assessment</dt>
            <dd className="text-muted-foreground">Directional judgement mapped from published indicators; not survey-derived.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Data gap</dt>
            <dd className="text-muted-foreground">No published instrument or register identified as of August 2026.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
