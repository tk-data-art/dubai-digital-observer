import heroImg from "@/assets/hero-dubai.jpg";

export function Hero() {
  return (
    <section id="top" className="pt-20 lg:pt-28 pb-0 bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 mb-10">
          <div>
            <div className="font-serif text-2xl text-ink leading-tight">
              Dubai Chamber<br />
              <span className="text-base text-muted-foreground italic">of Digital Economy</span>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <p className="eyebrow text-brand text-[0.68rem] tracking-[0.14em]">Digital Economy Practice</p>
              <span className="hidden sm:inline h-px w-8 bg-rule" />
              <p className="eyebrow text-[0.68rem] tracking-[0.14em] text-muted-foreground">Edition 01</p>
            </div>
            <h1 className="display-xl text-ink text-[2.4rem] sm:text-5xl lg:text-[4.2rem] text-balance">
              When ambition meets infrastructure: Dubai's readiness to scale AI across the economy
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink/85 leading-snug max-w-3xl">
              With sectors moving from AI pilots to production, the strategic question for
              Dubai is no longer whether to lead, but where readiness will convert intent
              into compounding economic value.
            </p>
            <p className="mt-6 border-l-2 border-rule pl-4 text-[13px] leading-relaxed italic text-muted-foreground max-w-2xl">
              This edition is a collaborative observation drawing on Dubai-wide sector
              indicators, executive interviews, and global benchmarks—representing the
              ongoing assessment of the Dubai Chamber of Digital Economy.
            </p>
          </div>

        </div>
      </div>
      <div className="w-full bg-ink">
        <img
          src={heroImg}
          alt="Dubai's Downtown skyline at dawn seen from a boardroom window, with Burj Khalifa at the centre"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-6 text-sm text-muted-foreground flex justify-between">
        <span>Edition 01 · Evidence checked September 2026</span>
        <span className="hidden md:inline">A living assessment</span>
      </div>
    </section>
  );
}