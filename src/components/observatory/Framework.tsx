import { ExhibitFrame, StackedBar } from "./Exhibits";

const rooms = [
  {
    name: "Foundations",
    pct: 34,
    blurb: "Compute, connectivity, data estates, regulatory clarity",
    body:
      "The base layer where AI is even possible at scale. Dubai's compute density, sovereign data residency frameworks, and energy strategy decide whether the rest of the agenda is buildable. Where the city has invested early—dedicated AI capacity, the Dubai Data Law, and the DET regulatory sandbox—readiness is high. Where investment lags—particularly in domain-specific data estates—the ceiling drops.",
  },
  {
    name: "Adoption",
    pct: 31,
    blurb: "Sector deployment, talent, change capacity, capital",
    body:
      "The diffusion layer. Strong adoption signals come from fintech, logistics, and government services; weaker ones from construction, hospitality back-office, and SMEs outside the free zones. The constraint is rarely technology and almost always change capacity: managers who can redesign work around AI, and capital that funds the year between pilot and P&L impact.",
  },
  {
    name: "Velocity",
    pct: 23,
    blurb: "Time from policy to deployment, from pilot to production",
    body:
      "Dubai's distinguishing characteristic. Dubai's delivery cadence is visible in the record: the Universal Blueprint moved from launch in April 2024 to chief AI officers in every government entity by October 2025, and the UAE Cabinet approved AI-assisted legislative drafting in April 2025. Velocity is the compounding advantage—every cycle saved is a cycle that funds the next one—but velocity is also where governance debt accumulates fastest.",
  },
  {
    name: "Stewardship",
    pct: 12,
    blurb: "Trust, ethics, redress, model accountability, IP",
    body:
      "The slowest, most underweighted layer. As AI mediates more decisions, the cost of a single high-profile failure rises—and the institutions that absorb that cost (regulators, courts, auditors) need to mature in step. Stewardship is the room where Dubai's ambition is most exposed, and where deliberate investment now buys disproportionate credibility later.",
  },
];

export function Framework() {
  return (
    <section id="framework" className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 leading-tight">
          Why Dubai behaves differently in a global AI race
        </h2>
        <p>
          AI scaling is often framed as a linear march from pilot to production to
          autonomy. That framing is misleading—especially in a city like Dubai,
          where readiness is not a single curve but four distinct rooms, each with
          its own constraints and compounding behaviour.
        </p>
        <p>
          Time and capability are straightforward. As models improve and operators
          see reliable performance over repeated cycles, they delegate larger portions
          of the workflow. But <em>category dynamics</em> determine where readiness
          naturally plateaus. Where decisions carry reputational or systemic weight,
          institutions deliberately stop short—not because the technology is incapable,
          but because human governance is intrinsic to value.
        </p>
        <p>
          A useful way to translate this into Dubai-specific terms is to conceptualise
          four <em>readiness zones</em>. These do not suggest linear stages—they are
          distinct contexts of value creation, each with its own opportunities and
          its own ceiling (<em>Exhibit 3</em>).
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={3}
          title="Dubai's AI readiness is concentrated in the lower zones of the stack—Foundations and Adoption—with Stewardship lagging."
          subtitle="Composite readiness portfolio, % share of Observatory indicator weight by zone"
          source="Observatory framework weighting, informed by the Dubai Universal Blueprint for AI (2024), UAE National AI Strategy 2031 and published 2025–26 index data"
          footnotes={<div>Weightings are an Observatory judgement across 8 sectors, normalised to 100; they express indicator coverage and evidence strength, not survey responses.</div>}
        >
          <StackedBar
            segments={[
              { label: "Stewardship", sub: "Trust, ethics, redress", value: 12, color: "oklch(0.22 0.05 255)" },
              { label: "Velocity",    sub: "Pilot-to-production speed", value: 23, color: "oklch(0.35 0.15 260)" },
              { label: "Adoption",    sub: "Sector deployment, talent, capital", value: 31, color: "oklch(0.5 0.22 263)" },
              { label: "Foundations", sub: "Compute, data, regulation", value: 34, color: "oklch(0.7 0.14 255)" },
            ]}
          />
        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <p className="mt-8">
          In the context of Dubai's economic strategy, think of the four zones in this way:
        </p>
        <div className="not-prose space-y-6 mt-6">
          {rooms.map((r) => (
            <div key={r.name} className="border-l-2 border-brand pl-5">
              <div className="font-serif italic text-xl text-ink">
                The {r.name} <span className="not-italic text-muted-foreground text-base font-sans">— {r.blurb}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/85 mt-2">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}