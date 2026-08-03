import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
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
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">{t("getInTouch")}</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>
                  طلب <span className="text-gradient-fire">استشارة مجانية</span>
                </>
              ) : (
                <>
                  Request a <span className="text-gradient-fire">Free Consultation</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {isAr ? (
                <>
                  أخبرونا عن منشأتكم. سيقوم مهندسونا بتقييم متطلبات السلامة من الحرائق الخاصة بكم وإعداد مقترح مخصص.
                </>
              ) : (
                <>
                  Tell us about your facility. Our engineers will assess your fire-safety requirements and prepare a tailored proposal.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="bg-gradient-dark py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                {isAr ? (
                  <>
                    تحدثوا إلى <span className="text-gradient-fire">مهندسينا.</span>
                  </>
                ) : (
                  <>
                    Talk to our <span className="text-gradient-fire">engineers.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-white/70">
                {isAr ? "سواء كان مبنى جديداً، أو تحديثاً، أو عقد صيانة سنوي — نحن هنا للمساعدة دائماً." : "Whether it's a new build, a retrofit or a maintenance contract — we're here to help."}
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">{t("location")}</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=7424+Al+Khalifah+Al+Maamoun,+3650,+Al+Khalidiyyah,+Riyadh+12873,+Saudi+Arabia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 font-medium text-white hover:text-accent transition-colors inline-flex items-center gap-1.5"
                    >
                      {t("kingdomSaudiArabia")}
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">{t("email")}</div>
                    <div className="mt-1 font-medium text-white">
                      <a href="mailto:info@hadafalsahel.com" className="hover:text-accent transition-colors">info@hadafalsahel.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">{t("phone")}</div>
                    <div className="mt-1 font-medium text-white">
                      <a href="tel:+966501946981" className="hover:text-accent transition-colors">+966 501946981</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Clock className="h-5 w-5 text-primary-foreground" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">{t("businessHours")}</div>
                    <div className="mt-1 font-medium text-white">{t("businessHoursVal")}</div>
                    <div className="text-sm text-white/60">{t("businessHoursVal2")}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">{t("connectWithUs")}</div>
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
              onSubmit={(e) => { e.preventDefault(); alert(t("successMsg")); }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">{t("fullName")}</label>
                  <Input required placeholder={t("namePlaceholder")} className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">{isAr ? "الشركة" : "Company"}</label>
                  <Input placeholder={isAr ? "اسم شركتكم الموقرة" : "Company name"} className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">{t("email")}</label>
                  <Input required type="email" placeholder="you@example.com" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">{t("phone")}</label>
                  <Input placeholder="+966 ..." className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70">{isAr ? "تفاصيل المشروع" : "Project Details"}</label>
                <Textarea required rows={5} placeholder={t("messagePlaceholder")} className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
                {t("sendRequest")} <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
              </Button>
            </form>
          </div>
        </section>

        <section className="bg-gradient-dark border-t border-white/5 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {isAr ? "موقعنا على الخريطة" : "Our Location"}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {isAr ? "7424 شارع الخليفة المأمون، 3650، حي الخالدية، الرياض 12873، المملكة العربية السعودية" : "7424 Al Khalifah Al Maamoun, 3650, Al Khalidiyyah, Riyadh 12873, Saudi Arabia"}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7424+Al+Khalifah+Al+Maamoun,+3650,+Al+Khalidiyyah,+Riyadh+12873,+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-fire px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-fire transition-all hover:opacity-95 self-start sm:self-auto"
              >
                <MapPin className="h-4 w-4" />
                {isAr ? "فتح في خرائط جوجل" : "Open in Google Maps"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur">
              <div className={`absolute top-5 ${isAr ? "right-5" : "left-5"} z-10 flex items-center gap-3 rounded-xl border border-white/20 bg-slate-950/90 px-4 py-3 backdrop-blur-md shadow-2xl`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                  <MapPin className="h-5 w-5 text-primary-foreground animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-white tracking-wide">
                    {isAr ? "مؤسسة هدف الساحل للسلامة" : "Hadaf Al Sahel Safety"}
                  </div>
                  <div className="text-xs text-white/70">
                    {isAr ? "7424 شارع الخليفة المأمون - حي الخالدية - الرياض" : "7424 Al Khalifah Al Maamoun, Al Khalidiyyah, Riyadh"}
                  </div>
                </div>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Hadaf%20Al%20Sahel%20Safety%20-%20%D9%87%D8%AF%D9%81%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AD%D9%84%20%D9%84%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9@24.625109,46.7529149&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl transition-all duration-300 opacity-95 hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}