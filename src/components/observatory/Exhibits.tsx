import { type ReactNode } from "react";
import { Tag } from "./Editorial";

export function ExhibitFrame({
  number,
  title,
  subtitle,
  children,
  source,
  footnotes,
  tag = "reported",
}: {
  number: number;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  source: string;
  footnotes?: ReactNode;
  tag?: "reported" | "observatory" | "gap" | "interpretation";
}) {
  return (
    <figure className="my-14 max-w-4xl mx-auto border-t-2 border-ink pt-5">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="eyebrow text-[0.68rem] tracking-[0.14em] text-ink">
          Exhibit {String(number).padStart(2, "0")}
        </span>
        <Tag kind={tag} />
      </div>
      <h3 className="exhibit-title mb-2 text-balance">{title}</h3>
      {subtitle && (
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-6 max-w-[70ch]">
          {subtitle}
        </p>
      )}
      <div className="rule-thin pt-6">{children}</div>
      <figcaption className="mt-6 pt-4 border-t border-rule text-xs leading-relaxed text-muted-foreground space-y-1">
        <div>
          <span className="font-semibold text-ink/70">Source:</span> {source}
        </div>
        {footnotes && (
          <div>
            <span className="font-semibold text-ink/70">Methodology:</span>{" "}
            <span className="[&_div]:inline">{footnotes}</span>
          </div>
        )}
        <div className="pt-3 font-serif italic text-foreground">
          Dubai Chamber of Digital Economy
        </div>
      </figcaption>
    </figure>
  );
}


/** Donut: pct out of 100, with big numeric center */
export function Donut({ pct, label }: { pct: number; label: ReactNode }) {
  const r = 56;
  const c = 2 * Math.PI * r;
  const filled = (pct / 100) * c;
  return (
    <div className="flex flex-col items-center text-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="14" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="var(--brand-soft)"
          strokeWidth="14"
          strokeDasharray={`${filled} ${c - filled}`}
          strokeLinecap="butt"
        />
        <text
          x="70"
          y="76"
          textAnchor="middle"
          className="rotate-90 origin-center"
          transform="rotate(90 70 70)"
          style={{ fontFamily: "Bodoni Moda, serif", fontSize: 30, fill: "var(--brand-soft)", fontWeight: 500 }}
        >
          {pct}%
        </text>
      </svg>
      <div className="mt-3 text-sm leading-snug text-panel-foreground/90 max-w-[14rem]">{label}</div>
    </div>
  );
}

/** Waffle 10×10 grid filled to pct */
export function Waffle({
  pct,
  label,
  big,
  onPanel = false,
}: {
  pct: number;
  label: ReactNode;
  big?: string;
  onPanel?: boolean;
}) {
  const filled = Math.round(pct);
  const cells = Array.from({ length: 100 }, (_, i) => i < filled);
  const fill = onPanel ? "var(--brand-soft)" : "var(--brand)";
  const empty = onPanel ? "rgba(255,255,255,0.12)" : "var(--brand-pale)";
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="grid grid-cols-10 gap-[3px]"
        style={{ width: 140, height: 140 }}
      >
        {cells.map((on, i) => (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              background: on ? fill : empty,
            }}
          />
        ))}
      </div>
      <div
        className="mt-4 font-serif"
        style={{ fontSize: 32, lineHeight: 1, color: fill, fontWeight: 500 }}
      >
        {big ?? `${pct}%`}
      </div>
      <div className={`mt-2 text-sm leading-snug max-w-[14rem] ${onPanel ? "text-panel-foreground/90" : "text-ink"}`}>
        {label}
      </div>
    </div>
  );
}

/** Horizontal unit bar — n filled squares out of total */
export function UnitBar({
  label,
  count,
  total = 28,
  value,
}: {
  label: string;
  count: number;
  total?: number;
  value?: string | number;
}) {
  return (
    <div className="grid grid-cols-[8rem_1fr_2.75rem] sm:grid-cols-[14rem_1fr_3rem] items-center gap-3 sm:gap-4 py-2">
      <div className="text-sm text-ink">{label}</div>
      <div className="flex gap-[3px] flex-wrap">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              background: i < count ? "var(--brand)" : "transparent",
              border: i < count ? "none" : "1px solid var(--rule)",
            }}
          />
        ))}
      </div>
      <div className="text-sm font-semibold text-ink text-right">{value ?? count}</div>
    </div>
  );
}

/** Stacked vertical bar — segments top to bottom */
export function StackedBar({
  segments,
}: {
  segments: { label: string; sub: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  return (
    <div className="flex items-stretch gap-4 sm:gap-6 max-w-2xl mx-auto">
      <div className="text-xs text-muted-foreground self-center">100%</div>
      <div className="w-20 flex flex-col" style={{ height: 360 }}>
        {segments.map((s) => (
          <div
            key={s.label}
            style={{ background: s.color, flexBasis: `${(s.value / total) * 100}%` }}
            className="flex items-center justify-center text-white font-semibold"
          >
            {s.value}
          </div>
        ))}
      </div>
      <div className="flex flex-col" style={{ height: 360 }}>
        {segments.map((s) => (
          <div
            key={s.label}
            style={{ flexBasis: `${(s.value / total) * 100}%` }}
            className="flex items-start pt-1"
          >
            <div>
              <div className="text-sm font-semibold text-ink">
                <span className="font-serif italic">{s.label}</span>
              </div>
              <div className="text-sm text-muted-foreground max-w-xs">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Familiarity-style data table (% bars across 4 levels) */
export function MaturityTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: number[] }[];
}) {
  return (
    <div className="w-full -mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0">
      <table className="w-full min-w-[560px] text-sm">

        <thead>
          <tr className="rule-thin border-b border-ink/80">
            <th className="text-left font-semibold py-3 w-1/3">Readiness dimension</th>
            {columns.map((c) => (
              <th key={c} className="text-left font-semibold py-3 px-2">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-rule">
              <td className="py-4 pr-4 align-middle text-ink">{r.label}</td>
              {r.values.map((v, i) => (
                <td key={i} className="py-4 px-2 align-middle">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-5"
                      style={{
                        width: `${v * 1.4}px`,
                        background:
                          i === 0
                            ? "var(--brand)"
                            : i === 1
                              ? "var(--brand-soft)"
                              : i === 2
                                ? "var(--brand-pale)"
                                : "var(--muted)",
                      }}
                    />
                    <span className="text-ink tabular-nums">{v}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}