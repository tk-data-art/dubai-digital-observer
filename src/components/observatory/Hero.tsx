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
            <p className="eyebrow text-ink/80 mb-6">Digital Economy Practice</p>
            <h1 className="display-xl text-ink text-5xl md:text-6xl lg:text-[5rem]">
              When ambition meets infrastructure: Dubai's readiness to scale AI across the economy
            </h1>
            <p className="mt-8 text-xl text-ink/85 leading-snug max-w-3xl">
              With sectors moving from AI pilots to production, the strategic question for
              Dubai is no longer whether to lead, but where readiness will convert intent
              into compounding economic value.
            </p>
            <p className="mt-6 text-sm italic text-muted-foreground max-w-2xl">
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
          alt="Two executives reviewing AI sector indicators with the Dubai skyline in the background"
          width={1920}
          height={1080}
          className="w-full h-[44vh] md:h-[58vh] object-cover"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-6 text-sm text-muted-foreground flex justify-between">
        <span>Edition 01 · Last updated August 2026</span>
        <span className="hidden md:inline">A living assessment</span>
      </div>
    </section>
  );
}