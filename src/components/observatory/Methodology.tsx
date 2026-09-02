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
        <h2 className="font-serif text-xl md:text-2xl text-ink mb-4 leading-snug">
          About the Observatory
        </h2>
        <p className="text-[15px] leading-relaxed text-ink/85">
          This edition is compiled from published, citable evidence current to
          September 2026: Microsoft's Global AI Diffusion report, Q1 2026 (May
          2026); the IBM Institute for Business Value and Dubai Future Foundation
          chief AI officer study (July 2025) and the IBM Middle East CEO Study (16 June
          2026); MAGNiTT's Q1 2026 MENA venture data; OpenAI's Stargate UAE announcement
          (May 2025) and subsequent 2025 reporting; DIFC's FY2025 results and Data
          Protection Regulation 10; the Dubai Universal
          Blueprint for Artificial Intelligence and Dubai Economic Agenda D33; the
          UAE National AI Strategy 2031; Oxford Insights' Government AI Readiness
          Index 2025; IMD's World Digital Competitiveness Ranking 2025; and primary
          regulatory instruments including the UAE Charter for the Development and
          Use of AI and DIFC Data Protection Regulation 10.
        </p>
        <p className="text-[15px] leading-relaxed text-ink/85 mt-4">
          Where the most recent primary source predates 2026—principally the
          AI-to-GDP projection for 2031 (June 2025), the AED 100bn Blueprint target
          (April 2024) and the chief AI officer survey (July 2025)—the figure is retained and explicitly labelled with its
          vintage as the latest available, rather than being updated by inference.
          Where a public indicator does not exist, the Observatory records a{" "}
          <em>data gap</em> rather than estimating; Observatory judgements are published as qualitative bands rather than numeric
          scores, and readiness is reported separately from evidence coverage so that a
          thin public record is not mistaken for low readiness. As a{" "}
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
            <dd className="text-muted-foreground">No published instrument or register identified as of September 2026.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
