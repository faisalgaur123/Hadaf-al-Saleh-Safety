import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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
            <img src={heroImg} alt="" className="h-full w-full object-cover object-bottom animate-ken-burns" />
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
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Clock className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">Business Hours</div>
                    <div className="mt-1 font-medium text-white">Sunday – Thursday: 8:00 AM – 5:00 PM</div>
                    <div className="text-sm text-white/60">Friday & Saturday: Closed</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Connect With Us</div>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#0077b5] hover:text-white hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-black hover:text-white hover:scale-110 border border-white/5 hover:border-white/20"
                      aria-label="Twitter / X"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-gradient-to-tr hover:from-[#f9ce3f] hover:via-[#e1306c] hover:to-[#833ab4] hover:text-white hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#1877f2] hover:text-white hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
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

        <section className="bg-gradient-dark border-t border-white/5 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:text-left">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Our <span className="text-gradient-fire">Location</span>
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Find us in Riyadh, Kingdom of Saudi Arabia
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115915.6888497678!2d46.61868352686121!3d24.71358045749717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489301%3A0x256384985a72c5f0!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl grayscale invert contrast-125 opacity-75 transition-all duration-300 hover:grayscale-0 hover:invert-0 hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}