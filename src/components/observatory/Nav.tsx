import { useEffect, useState } from "react";

const sections = [
  { id: "thesis", label: "Thesis" },
  { id: "methodology", label: "Methodology" },
  { id: "numbers", label: "By the numbers" },
  { id: "questions", label: "Key questions" },
  { id: "framework", label: "Framework" },
  { id: "sectors", label: "Sectors" },
  { id: "benchmark", label: "Benchmark" },
  { id: "trust", label: "Trust" },
  { id: "agenda", label: "Action agenda" },
];

export function Nav() {
  const [active, setActive] = useState("thesis");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-7 w-7 border border-ink/70 flex items-center justify-center">
            <div className="h-2.5 w-2.5 bg-teal" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              Dubai Chamber of Digital Economy
            </span>
            <span className="font-serif text-base text-ink mt-0.5">
              AI Economy Readiness Observatory
            </span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
                active === s.id
                  ? "text-ink"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="#agenda"
          className="hidden md:inline-flex items-center gap-2 border border-ink px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors"
        >
          Download PDF
        </a>
      </div>
    </header>
  );
}