import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, Hotel, Warehouse, ShoppingBag, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-fire-safety.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Sectors — Hadaf Al Sahel Safety" },
      { name: "description", content: "Fire safety projects delivered across industrial, commercial, hospitality, oil & gas, retail and warehousing sectors in Saudi Arabia." },
      { property: "og:title", content: "Projects & Sectors — Hadaf Al Sahel Safety" },
      { property: "og:description", content: "Trusted fire protection delivery across the Kingdom's most demanding sectors." },
    ],
  }),
  component: ProjectsPage,
});

const sectors = [
  { icon: Factory, title: "Industrial & Manufacturing", desc: "Plant-wide detection, foam and clean-agent suppression tuned to your process risks." },
  { icon: Fuel, title: "Oil, Gas & Petrochemical", desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards." },
  { icon: Building2, title: "Commercial Buildings", desc: "Sprinkler, alarm and passive protection for office towers and mixed-use developments." },
  { icon: Hotel, title: "Hospitality & Public", desc: "Life-safety systems for hotels, malls and public venues — code-compliant and guest-friendly." },
  { icon: Warehouse, title: "Logistics & Warehousing", desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression." },
  { icon: ShoppingBag, title: "Retail & Data Centers", desc: "FM200, Novec 1230 and CO2 clean-agent systems for mission-critical environments." },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="h-full w-full object-cover object-bottom animate-ken-burns" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">Projects & Sectors</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              Trusted across the <span className="text-gradient-fire">Kingdom's toughest sectors.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              From petrochemical plants to five-star hotels — we've engineered fire safety for the environments where failure is not an option.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-dark py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-black uppercase sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-2 text-white/70">Tell us about your facility and we'll prepare a tailored fire safety proposal.</p>
            </div>
            <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
              <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}