import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services, values } from "@/lib/site-data";
import heroImg from "@/assets/hero-fire-safety.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hadaf Al Sahel Safety — Fire Safety Systems in Saudi Arabia" },
      { name: "description", content: "World-class fire protection design, installation and commissioning across Saudi Arabia. Sprinklers, FM200, Novec 1230, CO2, fire alarms and more." },
      { property: "og:title", content: "Hadaf Al Sahel Safety — Fire Safety Saudi Arabia" },
      { property: "og:description", content: "Engineered fire protection systems for industrial, commercial and public facilities across the Kingdom." },
    ],
  }),
  component: HomePage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial fire protection"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex animate-hero-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-accent" /> Fire Safety • Saudi Arabia
          </div>
          <h1 className="animate-hero-in text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl [animation-delay:120ms]">
            Your Safety Is Our <span className="text-gradient-fire">Absolute Priority</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-hero-in text-lg leading-relaxed text-white/85 sm:text-xl [animation-delay:240ms]">
            Hadaf Al Sahel Safety designs, installs, tests and commissions world-class fire protection systems across the Kingdom — engineered by experts, built to code, trusted by industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-hero-in [animation-delay:360ms]">
            <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire transition-transform hover:-translate-y-0.5 hover:opacity-95">
              <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-hero-in [animation-delay:480ms]">
            {[
              { n: "9+", l: "Core Systems" },
              { n: "100%", l: "NFPA Aligned" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-white sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-gradient-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">What We Do</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Fire Safety <span className="text-gradient-fire">Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A complete portfolio of detection, suppression and passive protection — engineered for Saudi Arabia's toughest environments.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.06]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-fire opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
            <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ValuesStrip() {
  return (
    <section className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Built on principles, <span className="text-gradient-fire">delivered with expertise.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold uppercase tracking-tight">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 text-white">
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-fire opacity-20 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
            Ready to protect your facility?
          </h2>
          <p className="mt-3 max-w-xl text-white/70">
            Our engineers will assess your site and recommend a compliant, cost-effective fire safety solution.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {["Site survey & risk assessment", "Design & shop drawings", "Turnkey installation", "Annual maintenance"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
          <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ServicesPreview />
        <ValuesStrip />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}