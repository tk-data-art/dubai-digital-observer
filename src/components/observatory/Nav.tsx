import { useEffect, useState } from "react";

const sections = [
  { id: "thesis", label: "The thesis" },
  { id: "numbers", label: "By the numbers" },
  { id: "framework", label: "Four zones" },
  { id: "sectors", label: "Sectors" },
  { id: "trust", label: "Trust" },
  { id: "agenda", label: "What it means" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-serif text-xl leading-none text-ink">
            Dubai Chamber<span className="block text-[11px] tracking-wider uppercase font-sans font-semibold text-muted-foreground mt-1">
              of Digital Economy
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[13px] text-ink/80 hover:text-brand transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="#agenda"
          className="hidden md:inline-flex items-center gap-2 text-[12px] font-semibold text-brand hover:underline"
        >
          Subscribe →
        </a>
      </div>
    </header>
  );
}