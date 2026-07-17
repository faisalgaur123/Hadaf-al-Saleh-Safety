import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flame, ShieldCheck, Droplets, Wind, Sparkles, Waves, Cloud,
  BellRing, Gauge, FireExtinguisher, DoorClosed, Phone, Mail, MapPin,
  ArrowRight, CheckCircle2, Award, Users, Lightbulb, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "@/assets/hero-fire-safety.jpg";
import logoAsset from "@/assets/hadaf-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Droplets, title: "Water Base Sprinkler System", desc: "Automatic sprinkler arrays connected to a water supply through networked pipes and fire hose cabinets — the most widely deployed fire protection system in the world." },
  { icon: Wind, title: "CO2 Fire Suppression", desc: "Carbon-dioxide suppression that extinguishes fires by displacing oxygen. Ideal for data centers, electrical rooms and industrial machinery — fast-acting and residue-free." },
  { icon: Sparkles, title: "FM 200 Suppression", desc: "A waterless chemical agent that discharges within 10 seconds, breaking the fire triangle by removing heat and free radicals." },
  { icon: Waves, title: "Foam Suppression System", desc: "A highly effective solution for protecting flammable and combustible liquids across industrial and storage environments." },
  { icon: Cloud, title: "Novec 1230 Suppression", desc: "A clean-agent halon replacement offering the highest margin of safety for human occupancy among modern clean agents." },
  { icon: BellRing, title: "Fire Alarm System", desc: "Addressable and conventional systems for early detection — audio-visual devices for smoke, fire and carbon-monoxide monitoring." },
  { icon: Gauge, title: "Fire Pump", desc: "NFPA 20-designed, UL listed / FM approved pumps for commercial and industrial buildings, retrofits and foam / water-mist applications." },
  { icon: FireExtinguisher, title: "Fire Extinguishers", desc: "Supply and installation of water, foam, dry powder, CO2 and wet-chemical extinguishers rated for every fire class." },
  { icon: DoorClosed, title: "Fire Doors", desc: "UL-listed fire-rated doors engineered for high-transit environments — shopping centers, public buildings and industrial facilities." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what's right for safety, always — transparent, accountable and code-compliant on every project." },
  { icon: Award, title: "Quality", desc: "UL / FM approved equipment, NFPA-aligned design and rigorous testing and commissioning." },
  { icon: Users, title: "Customer-Centricity", desc: "Long-term partnerships built on responsiveness, clear communication and on-site expertise." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern clean-agent, addressable and hybrid systems tailored to your facility's real risk profile." },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Hadaf Al Sahel Safety" className="h-12 w-auto sm:h-14" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition hover:text-primary">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90">
            <a href="#contact">Request Quote</a>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-muted">
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 bg-gradient-fire text-primary-foreground">
              <a href="#contact" onClick={() => setOpen(false)}>Request Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Industrial fire protection" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-accent" /> Fire Safety • Saudi Arabia
          </div>
          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Safety Is Our <span className="text-gradient-fire">Absolute Priority</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Hadaf Al Sahel Safety designs, installs, tests and commissions world-class fire protection systems across the Kingdom — engineered by experts, built to code, trusted by industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90">
              <a href="#contact">Get a Free Safety Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
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
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">About Us</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Protecting people. <br />
            <span className="text-gradient-fire">Securing futures.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Hadaf Al Sahel Safety is committed to developing long-term relationships with clients by delivering value-added, world-class fire and safety protection.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We are fully equipped and staffed with expert personnel to design, install, test and commission fire protection systems and safety supplies across Saudi Arabia — from single-building retrofits to full industrial deployments.
          </p>
          <ul className="mt-8 space-y-3">
            {["Certified engineers and technicians", "UL Listed / FM Approved equipment", "End-to-end project delivery", "Preventive maintenance contracts"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-fire opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img src={heroImg} alt="Fire protection at work" className="h-full w-full object-cover" loading="lazy" width={1200} height={1400} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-gradient-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">What We Do</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Fire Safety <span className="text-gradient-fire">Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A complete portfolio of detection, suppression and passive protection systems — engineered for Saudi Arabia's toughest environments.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
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
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Built on principles, <br className="hidden sm:block" />
            <span className="text-gradient-fire">delivered with expertise.</span>
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

function Partners() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted Partners & Approved Brands
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {["Partner 01", "Partner 02", "Partner 03", "Partner 04", "Partner 05", "Partner 06"].map((p) => (
            <div key={p} className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 text-sm font-semibold text-muted-foreground/60">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-gradient-dark py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Get In Touch</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Request a <span className="text-gradient-fire">Free Consultation</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tell us about your facility. Our engineers will assess your fire-safety requirements and prepare a tailored proposal.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">Address</div>
                <div className="mt-1 font-medium text-white">Kingdom of Saudi Arabia</div>
                <div className="text-sm text-white/60">[Full address — to be added]</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Mail className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">Email</div>
                <div className="mt-1 font-medium text-white">[email — to be added]</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Phone className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">Phone</div>
                <div className="mt-1 font-medium text-white">[phone — to be added]</div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">Name</label>
              <Input required placeholder="Your name" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">Company</label>
              <Input placeholder="Company name" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">Email</label>
              <Input required type="email" placeholder="you@example.com" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">Phone</label>
              <Input placeholder="+966 ..." className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">Project Details</label>
            <Textarea required rows={5} placeholder="Tell us about your facility and requirements..." className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90">
            Send Request <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary py-12 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img src={logoAsset.url} alt="Hadaf Al Sahel Safety" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Protecting people. Securing futures. Fire and safety protection across the Kingdom of Saudi Arabia.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#why" className="hover:text-accent">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Connect</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent">Twitter / X</a></li>
            <li><a href="#" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Hadaf Al Sahel Safety. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
