const questions = [
  {
    q: "Where can Dubai scale AI fastest and most credibly?",
    a: "Fintech, logistics, and government services show the deepest stack of policy, infrastructure, and demand-side readiness.",
  },
  {
    q: "Which capability layers are the binding constraint?",
    a: "Frontier-model talent density and sovereign compute capacity, not policy or capital, sit furthest behind peer cities.",
  },
  {
    q: "Is Dubai's AI ecosystem broad-based or concentrated?",
    a: "Activity remains concentrated in three free zones; widening participation is the central scale-up question.",
  },
  {
    q: "How does trust translate into competitive advantage?",
    a: "Clear, early-mover governance is becoming a market-entry asset for global AI firms — Dubai's strongest soft advantage.",
  },
];

export function KeyQuestions() {
  return (
    <section id="questions" className="py-24 lg:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-teal-deep">Chapter 02</span>
            <h2 className="font-serif text-4xl lg:text-5xl mt-3 leading-[1.05] text-ink">
              The four questions
              <br />
              <span className="italic">this Observatory answers.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-ink/70 self-end leading-relaxed">
            The PRD framing for this report begins with the questions chamber leadership,
            policymakers, and investors most often ask. Each is treated as a thread that
            runs through every chapter that follows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/15">
          {questions.map((item, i) => (
            <div key={i} className="bg-background p-8 lg:p-10 flex gap-6">
              <span className="font-serif text-5xl text-teal-deep leading-none tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ink leading-snug">
                  {item.q}
                </h3>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}