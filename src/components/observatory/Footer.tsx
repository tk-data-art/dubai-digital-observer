export function Footer() {
  return (
    <footer className="bg-panel text-panel-foreground py-12">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl">Dubai AI Economy Readiness Observatory<br /><span className="italic text-base">Independent Research · Edition 01 · Evidence checked September 2026</span></div>
          <p className="mt-4 text-sm text-panel-foreground/75 max-w-xs">
            The Observatory is a living research product. Indicators are
            refreshed quarterly; the next edition is scheduled for November 2026.
          </p>
        </div>
        <div>
          <div className="eyebrow text-panel-foreground/60 mb-3">Contents</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#thesis" className="hover:text-brand-pale">The thesis</a></li>
            <li><a href="#numbers" className="hover:text-brand-pale">By the numbers</a></li>
            <li><a href="#framework" className="hover:text-brand-pale">Four readiness zones</a></li>
            <li><a href="#sectors" className="hover:text-brand-pale">Sectors</a></li>
            <li><a href="#trust" className="hover:text-brand-pale">Trust</a></li>
            <li><a href="#agenda" className="hover:text-brand-pale">What this means</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-panel-foreground/60 mb-3">Stay current</div>
          <p className="text-sm text-panel-foreground/80">
            Receive quarterly editions, indicator updates, and future research from
            the Observatory.
          </p>
          <p className="mt-4 text-sm text-panel-foreground/80">
            The next edition is scheduled for November 2026.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 mt-10 pt-6 border-t border-white/15 flex justify-between text-xs text-panel-foreground/60">
        <span>© 2026 Dubai AI Economy Readiness Observatory · An independent research project.</span>
        <span>An assessment, not a prediction.</span>
      </div>
    </footer>
  );
}