type Sector = {
  name: string;
  score: number | null;
  confidence: "High" | "Medium" | "Low" | "Data gap";
  summary: string;
  strengths: string[];
  bottlenecks: string[];
};

const sectors: Sector[] = [
  {
    name: "Fintech",
    score: 82,
    confidence: "High",
    summary:
      "Regulatory sandboxes, dense capital flows, and a deep payments stack make fintech Dubai's most scale-ready AI surface.",
    strengths: ["DFSA innovation testing license", "Strong PSP and remittance flows", "Bank-grade data hygiene"],
    bottlenecks: ["Cross-border model approval", "Mid-tier engineering supply"],
  },
  {
    name: "Logistics & trade",
    score: 78,
    confidence: "High",
    summary:
      "Port, air, and free-zone integration give logistics a working data substrate; AI moves quickly from pilot to operations.",
    strengths: ["Jebel Ali & DWC operational data", "Customs digitization", "Multimodal scale"],
    bottlenecks: ["Cross-operator data sharing", "Specialist robotics talent"],
  },
  {
    name: "Government services",
    score: 80,
    confidence: "High",
    summary:
      "Sustained digital-government investment makes the public sector both a leading adopter and a credible reference customer.",
    strengths: ["Smart Dubai platforms", "Mandate clarity", "Citizen data integration"],
    bottlenecks: ["Inter-agency model governance", "Procurement cycle length"],
  },
  {
    name: "Healthcare",
    score: 64,
    confidence: "Medium",
    summary:
      "Imaging and triage pilots are accelerating, but clinical data interoperability and outcomes evidence are still maturing.",
    strengths: ["DHA digital health backbone", "Imaging pilot density"],
    bottlenecks: ["Clinical data interoperability", "Outcomes evidence base"],
  },
  {
    name: "Real estate & urban",
    score: 61,
    confidence: "Medium",
    summary:
      "Property-tech and urban-sensing platforms are emerging; the binding question is whether data can move across operators.",
    strengths: ["Smart-city sensor density", "Transaction transparency"],
    bottlenecks: ["Operator-level data fragmentation"],
  },
  {
    name: "Retail & commerce",
    score: 58,
    confidence: "Medium",
    summary:
      "Retail AI lives at the demand layer; the lift comes from regional-scale recommender and merchandising systems.",
    strengths: ["E-commerce penetration", "Mall-anchored omnichannel"],
    bottlenecks: ["First-party data maturity"],
  },
  {
    name: "Tourism & hospitality",
    score: 55,
    confidence: "Medium",
    summary:
      "Operator-led personalization is real but uneven; opportunity sits in shared destination intelligence.",
    strengths: ["Visitor volume", "Destination marketing data"],
    bottlenecks: ["Cross-property data sharing"],
  },
  {
    name: "Education",
    score: null,
    confidence: "Data gap",
    summary:
      "Insufficient verified evidence for a full scoring this edition. Curriculum AI integration and outcome data remain opaque.",
    strengths: [],
    bottlenecks: ["Public outcomes data unavailable"],
  },
];

const confidenceStyle: Record<string, string> = {
  High: "text-teal-deep border-teal-deep/40",
  Medium: "text-amber-700 border-amber-700/30",
  Low: "text-rose-700 border-rose-700/30",
  "Data gap": "text-muted-foreground border-muted-foreground/30",
};

function Bar({ score }: { score: number | null }) {
  if (score === null) {
    return (
      <div className="font-mono text-xs text-muted-foreground italic">
        Insufficient verified data
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-serif text-5xl text-ink tabular-nums leading-none">
          {score}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          /100 readiness
        </span>
      </div>
      <div className="mt-3 h-px bg-ink/15 relative">
        <div
          className="absolute inset-y-0 left-0 bg-teal-deep h-px"
          style={{ width: `${score}%`, height: "2px", top: "-0.5px" }}
        />
      </div>
    </div>
  );
}

export function Sectors() {
  return (
    <section id="sectors" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <span className="eyebrow text-teal-deep">Chapter 04 · Sector deep dives</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-3 leading-[1.05] text-ink">
              Eight sectors,
              <br />
              <span className="italic">eight different clocks.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-ink/70 self-end leading-relaxed">
            Each sector chapter combines a readiness score, a confidence label, the
            strongest enabling assets, and the binding bottlenecks the chamber and
            ecosystem partners are best placed to address.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <article
              key={s.name}
              className="bg-card border border-ink/15 p-8 lg:p-10 flex flex-col group hover:border-ink/40 transition-colors"
            >
              <header className="flex items-center justify-between">
                <h3 className="font-serif text-3xl text-ink">{s.name}</h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.15em] border px-2.5 py-1 ${confidenceStyle[s.confidence]}`}
                >
                  ● {s.confidence} confidence
                </span>
              </header>

              <div className="mt-6">
                <Bar score={s.score} />
              </div>

              <p className="mt-6 text-base text-ink/75 leading-relaxed">{s.summary}</p>

              <div className="mt-7 grid grid-cols-2 gap-6 pt-6 border-t border-ink/10">
                <div>
                  <p className="eyebrow text-teal-deep mb-3">Strengths</p>
                  {s.strengths.length ? (
                    <ul className="space-y-1.5">
                      {s.strengths.map((x) => (
                        <li key={x} className="text-sm text-ink/80 leading-snug">
                          + {x}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">n/a</p>
                  )}
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground mb-3">Bottlenecks</p>
                  <ul className="space-y-1.5">
                    {s.bottlenecks.map((x) => (
                      <li key={x} className="text-sm text-ink/80 leading-snug">
                        − {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}