import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-fire-safety.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hadaf Al Sahel Safety — Fire Safety Saudi Arabia" },
      { name: "description", content: "Get in touch with Hadaf Al Sahel Safety for a free fire safety consultation, site survey or project proposal in Saudi Arabia." },
      { property: "og:title", content: "Contact Hadaf Al Sahel Safety" },
      { property: "og:description", content: "Free consultations, site surveys and tailored fire protection proposals across the Kingdom." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="h-full w-full object-cover animate-ken-burns" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">Get In Touch</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              Request a <span className="text-gradient-fire">Free Consultation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              Tell us about your facility. Our engineers will assess your fire-safety requirements and prepare a tailored proposal.
            </p>
          </div>
        </section>

        <section className="bg-gradient-dark py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                Talk to our <span className="text-gradient-fire">engineers.</span>
              </h2>
              <p className="mt-4 text-white/70">
                Whether it's a new build, a retrofit or a maintenance contract — we're here to help.
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
              <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
                Send Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}