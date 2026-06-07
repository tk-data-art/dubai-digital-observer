import { Donut, Waffle } from "./Exhibits";

export function ByTheNumbers() {
  return (
    <section id="numbers" className="py-16 bg-paper">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="bg-panel text-panel-foreground p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-2">
            By the numbers: Dubai's AI economy opportunity.
          </h2>
          <p className="text-panel-foreground/80 text-base mb-10">
            Most Dubai sector leaders are already operationalising AI…
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-white/15 pb-12">
            <Donut
              pct={87}
              label={
                <>
                  of Dubai enterprises have <strong className="text-white">deployed
                  generative AI</strong> in at least one business function
                </>
              }
            />
            <Donut
              pct={79}
              label={
                <>
                  of senior executives report <strong className="text-white">high
                  confidence</strong> in Dubai's near-term AI trajectory
                </>
              }
            />
            <Donut
              pct={68}
              label={
                <>
                  of enterprises have used <strong className="text-white">AI-powered
                  decisioning</strong> to reshape a customer or operations workflow
                </>
              }
            />
          </div>

          <p className="text-panel-foreground/80 text-base mb-8">
            … and they are increasingly comfortable scaling agentic and autonomous
            systems, as well
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Waffle pct={62} onPanel big="62%" label={<>comfortable with AI handling <strong className="text-white">discovery and research</strong></>} />
            <Waffle pct={54} onPanel big="54%" label={<>comfortable with AI handling <strong className="text-white">execution and transactions</strong></>} />
            <Waffle pct={41} onPanel big="41%" label={<>comfortable with AI handling <strong className="text-white">customer care and resolution</strong></>} />
            <Waffle pct={33} onPanel big="33%" label={<>comfortable with AI <strong className="text-white">acting autonomously</strong> on their behalf</>} />
          </div>

          <div className="mt-10 text-xs text-panel-foreground/60 border-t border-white/15 pt-4">
            Source: Dubai Executive Sentiment Pulse 2026, April 14–28, 2026 (n = 96)
            <div className="mt-3 font-serif italic">Dubai Chamber of Digital Economy</div>
          </div>
        </div>
      </div>
    </section>
  );
}