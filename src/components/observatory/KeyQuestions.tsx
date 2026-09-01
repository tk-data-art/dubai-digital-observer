import { MaturityTable, ExhibitFrame } from "./Exhibits";
import { SectionHead, Block } from "./Editorial";

export function KeyQuestions() {
  return (
    <section className="py-16 bg-paper">
      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <SectionHead
          label="Finding 01 · Adoption"
          title="The front door of AI value is moving upstream—and Dubai is already walking through it"
          context="Where value is created is shifting from execution to interpretation. The question is whether measured adoption in Dubai matches that shift."
        />

        <Block label="Key finding" accent>
          <p>
            The UAE has ranked first globally for workplace AI adoption in
            successive Microsoft diffusion reports, and by May 2026 workplace usage
            had crossed 70 percent of employees. At the enterprise layer the picture
            is earlier but directionally similar.
          </p>
        </Block>

        <Block label="Evidence">
          <p>
            The enterprise layer has now caught up in governance terms: a June 2026
            study by IBM's Institute for Business Value with the Dubai Future
            Foundation found 33 percent of UAE organisations had appointed a chief
            AI officer, against 26 percent globally, while 89 percent of Middle East
            CEOs report embedding AI into core workflows rather than isolated pilots
            (<em>Exhibit 01</em>).
          </p>
        </Block>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={1}
          tag="observatory"
          title="Dubai's readiness rests on published commitments and measured adoption, not on intent alone."
          subtitle="Observatory assessment of maturity by capability layer, using publicly reported indicators"
          source="Microsoft Global AI Diffusion Report Q1 2026; IBM Institute for Business Value & Dubai Future Foundation, June 2026; IBM CEO Study 2026; IMD World Digital Competitiveness Ranking 2025"
          footnotes={
            <div>
              Maturity bands are an Observatory judgement mapped from the cited
              public indicators; they are directional, not survey-derived.
            </div>
          }
        >
          <MaturityTable
            columns={["Embedded", "In production", "Piloting", "Early"]}
            rows={[
              { label: "Workplace AI assistants (individual use)", values: [70, 18, 9, 3] },
              { label: "Enterprise AI embedded in core workflows", values: [48, 27, 17, 8] },
              { label: "Government AI services & chief AI officers", values: [42, 32, 19, 7] },
              { label: "Sovereign compute & data-centre capacity", values: [24, 32, 30, 14] },
              { label: "Agentic / multi-step autonomous AI", values: [12, 26, 38, 24] },
            ]}
          />

        </ExhibitFrame>
      </div>

      <div className="mx-auto max-w-[760px] px-6 lg:px-0">
        <Block label="Implication" accent>
          <p>
            Clearly, this goes far beyond novelty. The macro expectation is equally
            explicit: PwC-derived estimates carried by Emirates NBD Research put
            AI's contribution at roughly 13.6 percent of UAE GDP by 2031—the highest
            share in the GCC—equivalent to more than USD 96 billion. No 2026 revision
            of this projection has been published, so it is reported here as the
            latest available estimate (<em>Exhibit 02</em>).
          </p>
        </Block>
      </div>




      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <ExhibitFrame
          number={2}
          title="AI is expected to contribute a larger share of GDP in the UAE than anywhere else in the Gulf."
          subtitle="Projected AI contribution to GDP by 2030–31, % of output"
          source="PwC estimates as reported by Khaleej Times and Emirates NBD Research, June 2025"
          footnotes={
            <div>
              UAE figure equates to more than USD 96 billion by 2031, with 20–30%
              annual growth in AI-linked output. Global average shown for reference.
            </div>
          }
        >
          <div className="flex items-end justify-center gap-2 h-44">
            {[
              { label: "Global avg.", v: 8, color: "var(--brand-pale)" },
              { label: "Rest of GCC", v: 8.2, color: "var(--brand-pale)" },
              { label: "Saudi Arabia", v: 12.4, color: "var(--brand-soft)" },
              { label: "UAE", v: 13.6, color: "var(--brand)" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center w-28">
                <div className="font-serif text-2xl text-ink mb-1">{b.v}</div>
                <div
                  className="w-full"
                  style={{ background: b.color, height: `${b.v * 10}px` }}
                />
                <div className="mt-2 text-xs text-muted-foreground text-center">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm font-semibold">
            <span className="text-brand text-2xl font-serif">$96bn</span>{" "}
            <span className="text-muted-foreground">expected AI contribution to UAE GDP by 2031</span>
          </div>
        </ExhibitFrame>
      </div>
    </section>
  );
}
