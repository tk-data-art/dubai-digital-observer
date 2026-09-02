import { type ReactNode } from "react";

type TagKind =
  | "reported"
  | "projection"
  | "observatory"
  | "gap"
  | "interpretation";

const TAG_COPY: Record<TagKind, string> = {
  reported: "Reported indicator",
  projection: "Projection",
  observatory: "Observatory assessment",
  gap: "Data gap",
  interpretation: "Interpretation",
};

const TAG_STYLE: Record<TagKind, string> = {
  reported: "border-brand text-brand",
  projection: "border-brand/50 text-brand/80",
  observatory: "border-ink/45 text-ink/75",
  gap: "border-muted-foreground/50 text-muted-foreground",
  interpretation: "border-ink/25 text-muted-foreground",
};

/** Small uppercase provenance label distinguishing evidence from judgement. */
export function Tag({ kind, children }: { kind: TagKind; children?: ReactNode }) {
  return (
    <span
      className={`inline-block border px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.09em] leading-none align-middle ${TAG_STYLE[kind]}`}
    >
      {children ?? TAG_COPY[kind]}
    </span>
  );
}

/** Section label → analytical headline → short supporting context. */
export function SectionHead({
  label,
  title,
  context,
  className = "",
}: {
  label: string;
  title: ReactNode;
  context?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-brand shrink-0" />
        <span className="eyebrow text-brand text-[0.68rem] tracking-[0.14em]">{label}</span>
      </div>
      <h2 className="font-serif text-[1.7rem] md:text-[2.1rem] text-ink leading-[1.15] tracking-[-0.01em] text-balance">
        {title}
      </h2>
      {context && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-[62ch]">
          {context}
        </p>
      )}
    </header>
  );
}

/** Labelled analytical block: Key finding / Evidence / Implication. */
export function Block({
  label,
  children,
  accent = false,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`mt-8 ${accent ? "border-l-2 border-brand pl-5" : "border-l border-rule pl-5"}`}>
      <div className="eyebrow text-[0.66rem] tracking-[0.14em] text-muted-foreground mb-2">
        {label}
      </div>
      <div className="body-prose [&>p:last-child]:mb-0">{children}</div>
    </div>
  );
}

/** Source / methodology note used beneath tables and inline evidence. */
export function SourceNote({
  source,
  methodology,
  className = "",
}: {
  source: string;
  methodology?: string;
  className?: string;
}) {
  return (
    <div className={`mt-4 text-xs leading-relaxed text-muted-foreground space-y-1 ${className}`}>
      <div>
        <span className="font-semibold text-ink/70">Source:</span> {source}
      </div>
      {methodology && (
        <div>
          <span className="font-semibold text-ink/70">Methodology:</span> {methodology}
        </div>
      )}
    </div>
  );
}

/** Standardised statistic block: value → definition → period / geography / population / source. */
export function StatMeta({
  period,
  geography,
  source,
  population,
  status,
  onPanel = false,
}: {
  period: string;
  geography: string;
  source: string;
  population?: string;
  status?: string;
  onPanel?: boolean;
}) {
  const dim = onPanel ? "text-panel-foreground/55" : "text-muted-foreground";
  const key = onPanel ? "text-panel-foreground/75" : "text-ink/70";
  return (
    <dl className={`mt-3 text-[11px] leading-[1.5] ${dim} space-y-[2px]`}>
      <div>
        <dt className={`inline font-semibold ${key}`}>Period: </dt>
        <dd className="inline">{period}</dd>
      </div>
      <div>
        <dt className={`inline font-semibold ${key}`}>Geography: </dt>
        <dd className="inline">{geography}</dd>
      </div>
      {population && (
        <div>
          <dt className={`inline font-semibold ${key}`}>Population: </dt>
          <dd className="inline">{population}</dd>
        </div>
      )}
      {status && (
        <div>
          <dt className={`inline font-semibold ${key}`}>Status: </dt>
          <dd className="inline">{status}</dd>
        </div>
      )}
      <div>
        <dt className={`inline font-semibold ${key}`}>Source: </dt>
        <dd className="inline">{source}</dd>
      </div>
    </dl>
  );
}
