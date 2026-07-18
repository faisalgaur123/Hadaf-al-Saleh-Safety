import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-fire-safety.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hadaf Al Sahel Safety — Fire Safety Experts in Saudi Arabia" },
      { name: "description", content: "Learn about Hadaf Al Sahel Safety — our mission, vision and values in delivering world-class fire protection across the Kingdom of Saudi Arabia." },
      { property: "og:title", content: "About Hadaf Al Sahel Safety" },
      { property: "og:description", content: "Certified engineers, NFPA-aligned design, UL/FM approved equipment — protecting people and securing futures." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To design and deliver fire and life-safety systems that meet the highest international standards — protecting people, property and business continuity across Saudi Arabia." },
  { icon: Eye, title: "Our Vision", desc: "To be the Kingdom's most trusted fire safety partner — recognized for engineering excellence, reliability and long-term client relationships." },
  { icon: Heart, title: "Our Promise", desc: "Every system we deliver is code-compliant, tested and commissioned to perform when it matters most. No shortcuts, no compromises." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="h-full w-full object-cover object-bottom animate-ken-burns" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">About Us</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              Protecting people. <span className="text-gradient-fire">Securing futures.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              A Saudi-based fire safety company committed to world-class engineering, code-compliant design and lifetime partnership with our clients.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Who We Are</div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
                Engineered by experts, <span className="text-gradient-fire">trusted by industry.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Hadaf Al Sahel Safety is fully equipped and staffed with expert personnel to design, install, test and commission fire protection systems and safety supplies across Saudi Arabia — from single-building retrofits to full industrial deployments.
              </p>
              <ul className="mt-8 space-y-3">
                {["Certified engineers and technicians", "UL Listed / FM Approved equipment", "End-to-end project delivery", "Preventive maintenance contracts", "24/7 emergency response"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
                  <Link to="/contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-fire opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img src={heroImg} alt="Fire protection at work" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-dark py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Foundations</div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
                Mission. Vision. <span className="text-gradient-fire">Promise.</span>
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                    <p.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}