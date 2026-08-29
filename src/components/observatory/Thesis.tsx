import { SectionHead } from "./Editorial";

export function Thesis() {
  return (
    <section id="thesis" className="py-16 lg:py-20 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Context · The thesis"
          title="Value creation is moving upstream, from where output is produced to where intent is expressed"
          context="Dubai's growth model has been built around destinations. Agentic and generative AI change who shapes the next wave."
        />
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 body-prose">
        <p>
          <strong>For two decades</strong>, Dubai's economic strategy has been organised
          around destinations—free zones, sector clusters, flagship projects, and a
          rapidly expanding services base. Digitisation amplified that model, but it
          did not fundamentally change who shaped the next wave of growth. The economy
          still entered a world the city designed.
        </p>
        <p>Agentic and generative AI now challenge that logic.</p>
        <p>
          As AI systems increasingly interpret, automate, and orchestrate work across
          financial services, logistics, healthcare, government and the creative
          economy, value creation is shifting <em>upstream</em>—from where output is
          produced to where intent is first expressed, modelled, and deployed. For
          Dubai, this shift is not just about technology; it is about productivity in
          a fast-growing service economy where experience, decisioning, and trust are
          essential components of the product.
        </p>
        <p>
          The strategic question, then, is not whether AI will mediate Dubai's growth,
          but whether Dubai will use it to <em>deepen</em> and <em>scale</em> its
          competitive position—or allow external platforms to define that layer on its
          behalf. The stakes are considerable. Independent estimates suggest agentic
          and generative AI could mediate{" "}
          <mark className="bg-brand-pale/60 px-1">
            USD 4.4 trillion of global productivity annually by 2030
          </mark>
          , underscoring how quickly the operating system of urban economies must be
          rebuilt—especially in a city that has historically grown by being early.
        </p>
        <p>
          Dubai, after all, is not a market in which growth simply arrives fully
          formed. It is a market where opportunity is <em>made</em>. The
          high-conviction layer—regulation, infrastructure, capital, and talent—is not
          a wrapping around the transaction; it is an essential part of it.
        </p>
        <p>
          Yet that proposition is under pressure. Global capital is more selective,
          talent is mobile, and several peer cities are now competing on the same
          AI thesis. Maintaining Dubai's distinctiveness in a context of rapid
          expansion will require a sharper view of where readiness already exists,
          where it is being built, and where the gaps are concentrated.
        </p>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0 mt-12 border-t border-rule pt-8">
        <div className="eyebrow text-[0.66rem] tracking-[0.14em] text-muted-foreground mb-3">
          Research questions
        </div>
        <h3 className="font-serif text-2xl md:text-[1.75rem] text-ink leading-[1.2] text-balance">
          The forward-looking questions sit slightly upstream.
        </h3>
        <ol className="mt-6 space-y-4">
          {[
            "How can AI deepen Dubai's productivity in its highest-value sectors?",
            "How can the city scale adviser-grade capability to firms that have never had it?",
            "And if AI mediates and frames demand before a firm reaches the market, who ultimately governs that interpretation?",
          ].map((q, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-xs text-brand pt-[5px] shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[16px] leading-relaxed text-ink">{q}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
