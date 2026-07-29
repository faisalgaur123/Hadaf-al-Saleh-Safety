import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/site-data";
import heroImg from "@/assets/hero-fire-safety.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Fire Safety Services — Hadaf Al Sahel Safety Saudi Arabia" },
      { name: "description", content: "Full portfolio of fire protection services: sprinklers, FM200, Novec 1230, CO2, foam, fire alarms, pumps, extinguishers and fire doors across Saudi Arabia." },
      { property: "og:title", content: "Fire Safety Services — Hadaf Al Sahel Safety" },
      { property: "og:description", content: "Detection, suppression and passive protection engineered for Saudi Arabia's toughest environments." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, isAr } = useLanguage();

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
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">{t("ourServices")}</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>
                  حقيبة متكاملة <span className="text-gradient-fire">للحماية من الحرائق</span>
                </>
              ) : (
                <>
                  Complete <span className="text-gradient-fire">Fire Protection</span> Portfolio
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {t("servicesPageSubtitle")}
            </p>
          </div>
        </section>

        <section className="bg-gradient-dark py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.titleKey} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.06]">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-fire opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                      <s.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white">{t(s.titleKey)}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{t(s.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
                <Link to="/contact">
                  {t("requestQuote")}{" "}
                  <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}