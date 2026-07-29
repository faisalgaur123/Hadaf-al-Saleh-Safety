import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
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
  { icon: Target, titleKey: "ourMission" as const, descKey: "ourMissionDesc" as const },
  { icon: Eye, titleKey: "ourVision" as const, descKey: "ourVisionDesc" as const },
  { icon: Heart, titleKey: "ourPromise" as const, descKey: "ourPromiseDesc" as const },
];

function AboutPage() {
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
          <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">{t("aboutUs")}</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>
                  حماية الأرواح. <span className="text-gradient-fire">تأمين المستقبل.</span>
                </>
              ) : (
                <>
                  Protecting people. <span className="text-gradient-fire">Securing futures.</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {t("aboutSubtitle")}
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{t("whoWeAre")}</div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
                {isAr ? (
                  <>
                    هندسة بأيدي خبراء، <span className="text-gradient-fire">وموضع ثقة القطاع.</span>
                  </>
                ) : (
                  <>
                    Engineered by experts, <span className="text-gradient-fire">trusted by industry.</span>
                  </>
                )}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("whoWeAreDesc")}
              </p>
              <ul className="mt-8 space-y-3">
                {(["checkPillar1", "checkPillar2", "checkPillar3", "checkPillar4", "checkPillar5"] as const).map((k) => (
                  <li key={k} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium">{t(k)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
                  <Link to="/contact">
                    {t("workWithUs")}{" "}
                    <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
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
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">{t("ourFoundations")}</div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
                {isAr ? (
                  <>
                    الرسالة. الرؤية. <span className="text-gradient-fire">العهد.</span>
                  </>
                ) : (
                  <>
                    Mission. Vision. <span className="text-gradient-fire">Promise.</span>
                  </>
                )}
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.titleKey} className="rounded-xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                    <p.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white">{t(p.titleKey)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{t(p.descKey)}</p>
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