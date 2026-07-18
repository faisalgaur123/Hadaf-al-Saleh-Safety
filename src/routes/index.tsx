import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ArrowRight, CheckCircle2, ShieldCheck, Award, FileCheck2, Clock, Check, Mail, MapPin, Phone, Star, Quote, Building2, Factory, Fuel, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services, values } from "@/lib/site-data";
import heroImg from "@/assets/hero-fire-safety.jpg";
import vision2030Asset from "@/assets/vision2030.png";

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

const embers = [
  { id: 1, left: "10%", size: "4px", delay: "0s", duration: "8s", opacity: 0.4 },
  { id: 2, left: "25%", size: "3px", delay: "2s", duration: "11s", opacity: 0.3 },
  { id: 3, left: "40%", size: "5px", delay: "1s", duration: "7s", opacity: 0.5 },
  { id: 4, left: "55%", size: "2px", delay: "4s", duration: "13s", opacity: 0.2 },
  { id: 5, left: "70%", size: "4px", delay: "3s", duration: "9s", opacity: 0.4 },
  { id: 6, left: "85%", size: "3px", delay: "5s", duration: "10s", opacity: 0.3 },
  { id: 7, left: "18%", size: "5px", delay: "6s", duration: "8s", opacity: 0.5 },
  { id: 8, left: "33%", size: "2px", delay: "7s", duration: "12s", opacity: 0.2 },
  { id: 9, left: "48%", size: "4px", delay: "2s", duration: "9s", opacity: 0.4 },
  { id: 10, left: "63%", size: "3px", delay: "8s", duration: "10s", opacity: 0.3 },
  { id: 11, left: "78%", size: "5px", delay: "1.5s", duration: "7.5s", opacity: 0.45 },
  { id: 12, left: "93%", size: "2px", delay: "5.5s", duration: "14s", opacity: 0.25 },
  { id: 13, left: "5%", size: "3px", delay: "3.5s", duration: "10.5s", opacity: 0.35 },
  { id: 14, left: "50%", size: "4px", delay: "4.5s", duration: "8.5s", opacity: 0.4 },
  { id: 15, left: "80%", size: "3px", delay: "6.5s", duration: "11.5s", opacity: 0.3 },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial fire protection"
          className="h-full w-full object-cover object-bottom animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Ember Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className="absolute bottom-0 rounded-full bg-amber-500 animate-ember-drift blur-[1px]"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              animationDelay: ember.delay,
              "--drift-duration": ember.duration,
              opacity: ember.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex animate-hero-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-accent animate-pulse" /> Fire Safety • Saudi Arabia
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
              <div key={s.l} className="transition-transform duration-300 hover:scale-105">
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

const homeSectors = [
  { icon: Factory, title: "Industrial & Manufacturing", desc: "Plant-wide detection, foam and clean-agent suppression tuned to manufacturing hazards." },
  { icon: Fuel, title: "Oil, Gas & Petrochemical", desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards." },
  { icon: Warehouse, title: "Logistics & Warehousing", desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression." },
  { icon: Building2, title: "Commercial Buildings", desc: "Sprinkler, alarm and passive protection for office towers and commercial developments." },
];

function ProjectsPreview() {
  return (
    <section className="bg-background py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Sectors We Serve</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Tough Sectors. <span className="text-gradient-fire">Proven Protection.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From high-hazard petrochemical plants to critical logistics hubs — we engineer fire safety for the environments where failure is not an option.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeSectors.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-fire opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-fire group-hover:text-primary-foreground group-hover:shadow-fire">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
            <Link to="/projects">View All Sectors & Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


function WhyChooseUs() {
  return (
    <section className="bg-background py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* Left Column: Context & Badge */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Your Certified <span className="text-gradient-fire">Fire Safety</span> Partner in KSA
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hadaf Al Sahel Safety is a fully licensed contractor specializing in modern fire protection solutions. From complex industrial facilities to commercial complexes, we ensure full compliance with Saudi Civil Defense and SASO regulations.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Licensed by Saudi Civil Defense",
                "Strict compliance with NFPA standards",
                "Experienced & certified safety engineers",
                "Premium UL-listed & FM-approved hardware"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
                <Link to="/contact">Request a Site Survey</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Grid Cards */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: FileCheck2,
                title: "Civil Defense Licensed",
                desc: "Fully authorized by Saudi authorities to design, install, inspect, and certify fire safety systems."
              },
              {
                icon: ShieldCheck,
                title: "100% Code Compliant",
                desc: "All designs conform strictly to Saudi Building Code (SBC-801) and NFPA regulations."
              },
              {
                icon: Award,
                title: "UL-Listed & FM-Approved",
                desc: "We exclusively install internationally recognized and certified hardware to guarantee reliability."
              },
              {
                icon: Clock,
                title: "24/7 Support & Maintenance",
                desc: "Comprehensive testing, commissioning, and round-the-clock emergency support to keep systems active."
              }
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-fire opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-fire group-hover:text-primary-foreground group-hover:shadow-fire">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 text-white border-t border-white/5 sm:py-28">
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-fire opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left Column: Context & Details */}
          <div>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
              Ready to protect <span className="text-gradient-fire">your facility?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Our engineers will assess your site and recommend a compliant, cost-effective fire safety solution.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Location</div>
                  <div className="mt-0.5 font-medium text-white">Kingdom of Saudi Arabia</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Call Us</div>
                  <div className="mt-0.5 font-medium text-white">[phone — to be added]</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email Support</div>
                  <div className="mt-0.5 font-medium text-white">[email — to be added]</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Clock className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Business Hours</div>
                  <div className="mt-0.5 font-medium text-white">Sunday – Thursday: 8:00 AM – 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 relative"
          >
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">Request a Free Site Assessment</h3>
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
              <Textarea required rows={4} placeholder="Tell us about your facility and requirements..." className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
              Send Request <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Eng. Abdulaziz Al-Otaibi",
    role: "Director of Facilities",
    company: "Riyadh Logistics Park",
    quote: "Hadaf Al Sahel delivered our ESFR sprinkler system upgrade ahead of schedule. Their understanding of Saudi Civil Defense regulations made the certification process seamless.",
    rating: 5,
  },
  {
    name: "Mohammad Al-Harbi",
    role: "HSE Manager",
    company: "Jeddah Industrial City Factory",
    quote: "We contracted Hadaf for our clean-agent FM-200 installation in our server rooms. Absolute engineering precision and professional commissioning.",
    rating: 5,
  },
  {
    name: "Eng. Fahad Al-Qahtani",
    role: "Project Director",
    company: "Dammam Commercial Center",
    quote: "Their team installed and tested over 200 fire-rated doors and a complex addressable alarm network. Full compliance and excellent post-installation support.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-muted/40 py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Testimonials</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Trusted by <span className="text-gradient-fire">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            See what our industrial and commercial partners say about our fire protection engineering and execution.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
            >
              <div className="absolute right-6 top-6 opacity-[0.08] text-primary transition-opacity duration-300 group-hover:opacity-[0.15]">
                <Quote className="h-10 w-10 fill-current" />
              </div>
              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mt-6 text-base italic leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.role}
                </div>
                <div className="mt-1.5 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Vision2030Section() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-12 text-white border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-fire opacity-10 blur-2xl" />

          <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl">
            <div className="flex shrink-0 items-center justify-center rounded-xl bg-white p-4 w-40 h-24 shadow-md">
              <img src={vision2030Asset} alt="Saudi Vision 2030" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                Aligning with <span className="text-gradient-fire">Saudi Vision 2030</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Hadaf Al Sahel Safety is proud to support the Kingdom's Vision 2030. By safeguarding critical industrial plants, warehousing networks, and urban developments, we secure the foundations of Saudi Arabia's vibrant economy and sustainable future.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center shrink-0">

            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-accent">Infrastructure</div>
              <div className="text-sm font-semibold mt-0.5 text-white">Securing Assets</div>
            </div>
          </div>

        </div>
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
        <ProjectsPreview />
        <WhyChooseUs />
        <Vision2030Section />
        <Testimonials />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}