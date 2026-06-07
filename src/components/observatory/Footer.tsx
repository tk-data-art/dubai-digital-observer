export function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-muted/20 py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 border border-ink/70 flex items-center justify-center">
                <div className="h-2.5 w-2.5 bg-teal" />
              </div>
              <span className="font-serif text-xl text-ink">
                AI Economy Readiness Observatory
              </span>
            </div>
            <p className="mt-5 text-sm text-ink/70 leading-relaxed max-w-md">
              A flagship research product of the Dubai Chamber of Digital Economy,
              tracking Dubai's readiness to scale AI across sectors, infrastructure,
              talent, governance, and capital.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow text-muted-foreground mb-4">Report</p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li><a href="#thesis" className="hover:text-teal-deep">Thesis</a></li>
              <li><a href="#methodology" className="hover:text-teal-deep">Methodology</a></li>
              <li><a href="#sectors" className="hover:text-teal-deep">Sectors</a></li>
              <li><a href="#agenda" className="hover:text-teal-deep">Action agenda</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow text-muted-foreground mb-4">Data</p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li><a href="#trust" className="hover:text-teal-deep">Source register</a></li>
              <li><a href="#benchmark" className="hover:text-teal-deep">Benchmarks</a></li>
              <li><a href="#numbers" className="hover:text-teal-deep">By the numbers</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground mb-4">Edition</p>
            <p className="font-mono text-xs text-ink/70 leading-relaxed">
              Edition 01 · June 2026
              <br />
              Refreshed quarterly
              <br />
              ISSN · pending
            </p>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-ink/15 flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          <span>© 2026 Dubai Chamber of Digital Economy · Dubai Chambers</span>
          <span>An evidence-first publication</span>
        </div>
      </div>
    </footer>
  );
}