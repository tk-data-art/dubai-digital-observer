import { SectionHead } from "./Editorial";

const actions = [
  {
    title: "Build signature AI experiences in flagship sectors",
    why: "Not shinier copilots, but Dubai-authored interpretation layers in fintech, logistics, and government services that demonstrate how the city thinks.",
    implication:
      "Translate open-ended intent into curation and service that feels aligned with Dubai's operating ethos—and ensure that ethos travels across owned and external surfaces.",
  },
  {
    title: "Pre-commit stewardship capacity before it is the bottleneck",
    why: "The Observatory's weakest zone is the one most expensive to retrofit.",
    implication:
      "Invest now in audit capability, model assurance, redress mechanisms, and AI literacy for regulators—so that the speed advantage is not consumed by trust debt three years from now.",
  },
  {
    title: "Convert the velocity advantage into compounding capital flows",
    why: "Dubai's short policy-to-deployment cycle is a real advantage—but only if the freed cycles are redeployed into the next workload.",
    implication:
      "Build a coordinated capital stack (sovereign, family-office, venture) that funds the year between pilot and P&L impact, particularly outside the free zones.",
  },
  {
    title: "Treat data estates as critical infrastructure",
    why: "Domain-specific data—health, logistics, energy, public services—is the unfair advantage Dubai can build that compute alone cannot replicate.",
    implication:
      "Sovereign data products, with clear consent and access frameworks, are the missing rail between Foundations and Adoption.",
  },
  {
    title: "Codify a talent compact that scales with the workload, not the headcount",
    why: "AI changes the unit economics of expertise.",
    implication:
      "The next 100,000 AI-fluent operators in Dubai will not arrive through immigration alone; they will be cultivated through structured reskilling, university partnerships, and platforms that let SMEs share scarce capability.",
  },
];

export function ActionAgenda() {
  return (
    <section id="agenda" className="py-20 bg-secondary/30 border-t border-rule">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Recommendations · What it means"
          title="What this means for Dubai leaders"
          context="Five priorities implied by the evidence above, each with the reason it matters and the strategic consequence of acting late."
        />

        <div className="body-prose">
          <p>
            AI scaling will not change <em>what</em> Dubai is. Over time it will
            change <em>how</em> the city's enterprises make decisions and how they
            engage with markets across an increasingly broad range of categories.
          </p>
          <p>
            Operators already bring intent to a range of preferred AI surfaces—
            evenly spread across global foundation-model platforms, regional clouds,
            and Dubai-resident solutions. So the front door is no longer a single
            destination. Dubai's institutions will need to meet operators where they
            are, and where they are going.
          </p>
          <p>That implies a different capability agenda than many "AI in cities" discussions.</p>
        </div>

        <ol className="mt-10 space-y-10 list-none">
          {actions.map((a, i) => (
            <li key={a.title} className="border-t border-rule pt-6">
              <div className="flex gap-5 md:gap-6">
                <div className="font-serif text-3xl md:text-4xl text-brand leading-none w-10 md:w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-ink leading-tight text-balance">
                    {a.title}
                  </h3>
                  <div className="mt-4">
                    <div className="eyebrow text-[0.63rem] tracking-[0.14em] text-muted-foreground mb-1">
                      Why it matters
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink/85">{a.why}</p>
                  </div>
                  <div className="mt-4">
                    <div className="eyebrow text-[0.63rem] tracking-[0.14em] text-muted-foreground mb-1">
                      Strategic implication
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink/85">{a.implication}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 rule-thick pt-8">
          <p className="font-serif italic text-xl text-ink leading-snug">
            "The winners will not be determined by how much of the economy becomes
            AI-mediated, but by who governs the interpretation of intent as
            mediation scales."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            — Dubai AI Economy Readiness Observatory, Edition 01
          </p>
        </div>
      </div>
    </section>
  );
}
