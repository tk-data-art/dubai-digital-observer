import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/observatory/Nav";
import { Hero } from "@/components/observatory/Hero";
import { Thesis } from "@/components/observatory/Thesis";
import { Methodology } from "@/components/observatory/Methodology";
import { ByTheNumbers } from "@/components/observatory/ByTheNumbers";
import { KeyQuestions } from "@/components/observatory/KeyQuestions";
import { Framework } from "@/components/observatory/Framework";
import { Sectors } from "@/components/observatory/Sectors";
import { Benchmark } from "@/components/observatory/Benchmark";
import { Trust } from "@/components/observatory/Trust";
import { ActionAgenda } from "@/components/observatory/ActionAgenda";
import { Footer } from "@/components/observatory/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dubai AI Economy Readiness Observatory — Dubai Chamber of Digital Economy" },
      {
        name: "description",
        content:
          "A living, evidence-backed assessment of Dubai's readiness to scale artificial intelligence across sectors, infrastructure, talent, governance, and capital. Published by Dubai Chamber of Digital Economy.",
      },
      { property: "og:title", content: "Dubai AI Economy Readiness Observatory" },
      {
        property: "og:description",
        content:
          "A flagship, living research product tracking Dubai's AI economy readiness — sector by sector, indicator by indicator.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Methodology />
        <ByTheNumbers />
        <KeyQuestions />
        <Framework />
        <Sectors />
        <Benchmark />
        <Trust />
        <ActionAgenda />
      </main>
      <Footer />
    </div>
  );
}
