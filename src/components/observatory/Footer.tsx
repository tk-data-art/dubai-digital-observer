export function Footer() {
  return (
    <footer className="bg-panel text-panel-foreground py-12">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl">Dubai Chamber<br /><span className="italic text-base">of Digital Economy</span></div>
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
            Receive each quarterly edition, indicator updates, and the underlying
            data appendix.
          </p>
          <a
            href="#"
            className="mt-4 inline-block border border-brand-pale/60 px-4 py-2 text-sm hover:bg-brand hover:border-brand"
          >
            Subscribe to the Observatory →
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 mt-10 pt-6 border-t border-white/15 flex justify-between text-xs text-panel-foreground/60">
        <span>© 2026 Dubai Chamber of Digital Economy. Edition 01 · Last updated June 2026.</span>
        <span>An assessment, not a prediction.</span>
      </div>
    </footer>
  );
}