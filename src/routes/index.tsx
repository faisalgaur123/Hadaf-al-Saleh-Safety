import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ArrowRight, Check, Mail, MapPin, Phone, Star, Quote, Building2, Factory, Fuel, Warehouse, FileCheck2, ShieldCheck, Award, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/site-data";
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
  const { t, isAr } = useLanguage();

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
            <Flame className="h-3.5 w-3.5 text-accent animate-pulse" /> {t("heroTag")}
          </div>
          <h1 className="animate-hero-in text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl [animation-delay:120ms]">
            {isAr ? (
              <>
                سلامتكم هي <span className="text-gradient-fire">أولويتنا المطلقة</span>
              </>
            ) : (
              <>
                Your Safety Is Our <span className="text-gradient-fire">Absolute Priority</span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-2xl animate-hero-in text-lg leading-relaxed text-white/85 sm:text-xl [animation-delay:240ms]">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-hero-in [animation-delay:360ms]">
            <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire transition-transform hover:-translate-y-0.5 hover:opacity-95">
              <Link to="/contact">
                {isAr ? "احصل على استشارة مجانية" : "Get a Free Consultation"}{" "}
                <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white">
              <Link to="/services">{t("viewServices")}</Link>
            </Button>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-hero-in [animation-delay:480ms]">
            {[
              { n: "350+", l: t("quoteCount") },
              { n: "100%", l: t("engineerCount") },
              { n: "24/7", l: t("hoursCount") },
            ].map((s) => (
              <div key={s.l} className="transition-transform duration-300 hover:scale-105">
                <div className="text-2xl font-black text-white sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t, isAr } = useLanguage();

  return (
    <section className="bg-gradient-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">{t("whatWeDo")}</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            {isAr ? (
              <>
                حلول <span className="text-gradient-fire">السلامة من الحرائق</span>
              </>
            ) : (
              <>
                Fire Safety <span className="text-gradient-fire">Solutions</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {t("servicesSubtitle")}
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
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
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
            <Link to="/services">
              {isAr ? "عرض جميع الخدمات" : "View All Services"}{" "}
              <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const homeSectors = [
  { icon: Factory, titleKey: "industrial" as const, desc: "Plant-wide detection, foam and clean-agent suppression tuned to manufacturing hazards.", descAr: "كشف على مستوى المصنع، وإخماد رغوي وبعوامل نظيفة متوافق مع مخاطر التصنيع." },
  { icon: Fuel, titleKey: "srvFoamSuppression" as const, desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards.", descAr: "أنظمة الرغوة والغمر وكشف الغاز للمخاطر العالية المصممة وفقاً لمعايير NFPA وAPI." },
  { icon: Warehouse, titleKey: "industrialWarehouse" as const, desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression.", descAr: "حماية التخزين عالي التكديس باستخدام رشاشات ESFR والإخماد داخل الرفوف." },
  { icon: Building2, titleKey: "commercial" as const, desc: "Sprinkler, alarm and passive protection for office towers and commercial developments.", descAr: "رشاشات وإنذار وحماية سلبية للأبراج الإدارية والمجمعات التجارية." },
];

function ProjectsPreview() {
  const { t, isAr } = useLanguage();

  return (
    <section className="bg-background py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{t("sectorsServe")}</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            {isAr ? (
              <>
                قطاعات صعبة. <span className="text-gradient-fire">حماية مثبتة.</span>
              </>
            ) : (
              <>
                Tough Sectors. <span className="text-gradient-fire">Proven Protection.</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("sectorsSubtitle")}
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeSectors.map((s) => (
            <div
              key={s.titleKey}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-fire opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-fire group-hover:text-primary-foreground group-hover:shadow-fire">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-foreground">{t(s.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{isAr ? s.descAr : s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
            <Link to="/projects">
              {isAr ? "عرض جميع القطاعات والمشاريع" : "View All Sectors & Projects"}{" "}
              <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const { t, isAr } = useLanguage();

  return (
    <section className="bg-background py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* Left Column: Context & Badge */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary animate-pulse">
              {t("whoWeAre")}
            </div>
            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {isAr ? (
                <>
                  شريككم المعتمد <span className="text-gradient-fire">للسلامة من الحرائق</span> في المملكة
                </>
              ) : (
                <>
                  Your Certified <span className="text-gradient-fire">Fire Safety</span> Partner in KSA
                </>
              )}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("whoWeAreDesc")}
            </p>

            <div className="mt-8 space-y-4">
              {[
                isAr ? "مرخص ومصنف من الدفاع المدني السعودي" : "Licensed by Saudi Civil Defense",
                isAr ? "التزام صارم بمعايير الكود والـ NFPA" : "Strict compliance with NFPA standards",
                isAr ? "مهندسو سلامة ذوو خبرة واعتمادات رسمية" : "Experienced & certified safety engineers",
                isAr ? "معدات وأجهزة معتمدة ومدرجة في الهيئات العالمية" : "Premium UL-listed & FM-approved hardware"
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
                <Link to="/contact">{isAr ? "طلب معاينة للموقع" : "Request a Site Survey"}</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Grid Cards */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: FileCheck2,
                title: "Civil Defense Licensed",
                titleAr: "مرخص من الدفاع المدني",
                desc: "Fully authorized by Saudi authorities to design, install, inspect, and certify fire safety systems.",
                descAr: "معتمد بالكامل من الجهات السعودية لتصميم وتركيب وفحص واعتماد أنظمة السلامة من الحرائق."
              },
              {
                icon: ShieldCheck,
                title: "100% Code Compliant",
                titleAr: "متوافق 100% مع الأكواد",
                desc: "All designs conform strictly to Saudi Building Code (SBC-801) and NFPA regulations.",
                descAr: "تتوافق جميع التصاميم تماماً مع كود البناء السعودي (SBC-801) ولوائح الدفاع المدني والـ NFPA."
              },
              {
                icon: Award,
                title: "UL-Listed & FM-Approved",
                titleAr: "مدرج في UL ومصادق عليه من FM",
                desc: "We exclusively install internationally recognized and certified hardware to guarantee reliability.",
                descAr: "نحن نركب حصرياً أجهزة ومعدات معترف بها دولياً ومعتمدة لضمان أقصى درجات الموثوقية والأمان."
              },
              {
                icon: Clock,
                title: "24/7 Support & Maintenance",
                titleAr: "دعم وصيانة على مدار الساعة",
                desc: "Comprehensive testing, commissioning, and round-the-clock emergency support to keep systems active.",
                descAr: "خدمات اختبار وتشغيل شاملة ودعم طوارئ على مدار الساعة للحفاظ على جهوزية الأنظمة دائماً."
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
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-foreground">{isAr ? card.titleAr : card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{isAr ? card.descAr : card.desc}</p>
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
  const { t, isAr } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20 text-white border-t border-white/5 sm:py-28">
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-fire opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left Column: Context & Details */}
          <div>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
              {isAr ? (
                <>
                  هل أنت مستعد لحماية <span className="text-gradient-fire">منشأتك؟</span>
                </>
              ) : (
                <>
                  Ready to protect <span className="text-gradient-fire">your facility?</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {t("ctaSubtitle")}
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t("location")}</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7424+Al+Khalifah+Al+Maamoun,+3650,+Al+Khalidiyyah,+Riyadh+12873,+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 font-medium text-white hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    {t("kingdomSaudiArabia")}
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t("callUs")}</div>
                  <div className="mt-0.5 font-medium text-white">
                    <a href="tel:+966501946981" className="hover:text-accent transition-colors">+966 501946981</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t("emailSupport")}</div>
                  <div className="mt-0.5 font-medium text-white">
                    <a href="mailto:info@hadafalsahel.com" className="hover:text-accent transition-colors">info@hadafalsahel.com</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire"><Clock className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t("businessHours")}</div>
                  <div className="mt-0.5 font-medium text-white">{t("businessHoursVal")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert(t("successMsg")); }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 relative"
          >
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
              {isAr ? "طلب معاينة مجانية للموقع" : "Request a Free Site Assessment"}
            </h3>
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
              <Textarea required rows={4} placeholder={t("messagePlaceholder")} className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
              {t("sendRequest")} <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
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
    nameAr: "م. عبدالعزيز العتيبي",
    role: "Director of Facilities",
    roleAr: "مدير المرافق اللوجستية",
    company: "Riyadh Logistics Park",
    companyAr: "مجمع الرياض اللوجستي",
    quote: "Hadaf Al Sahel delivered our ESFR sprinkler system upgrade ahead of schedule. Their understanding of Saudi Civil Defense regulations made the certification process seamless.",
    quoteAr: "نجحت مؤسسة هدف الساحل في ترقية نظام رشاشات ESFR قبل الجدول الزمني المحدد. إن فهمهم العميق للوائح الدفاع المدني السعودي جعل عملية الترخيص والاعتماد سلسة للغاية.",
    rating: 5,
  },
  {
    name: "Mohammad Al-Harbi",
    nameAr: "محمد الحربي",
    role: "HSE Manager",
    roleAr: "مدير الصحة والسلامة والبيئة",
    company: "Jeddah Industrial City Factory",
    companyAr: "مصنع المدينة الصناعية بجدة",
    quote: "We contracted Hadaf for our clean-agent FM-200 installation in our server rooms. Absolute engineering precision and professional commissioning.",
    quoteAr: "تعاقدنا مع هدف لتثبيت عامل نظيف FM-200 في غرف الخوادم الخاصة بنا. دقة هندسية مطلقة وتشغيل احترافي مميز.",
    rating: 5,
  },
  {
    name: "Eng. Fahad Al-Qahtani",
    nameAr: "م. فهد القحطاني",
    role: "Project Director",
    roleAr: "مدير المشاريع الإنشائية",
    company: "Dammam Commercial Center",
    companyAr: "المركز التجاري بالدمام",
    quote: "Their team installed and tested over 200 fire-rated doors and a complex addressable alarm network. Full compliance and excellent post-installation support.",
    quoteAr: "قام فريقهم بتركيب واختبار أكثر من 200 باب مقاوم للحريق وشبكة إنذار معنونة معقدة. امتثال كامل ودعم ممتاز بعد التركيب.",
    rating: 5,
  },
];

function Testimonials() {
  const { t, isAr } = useLanguage();

  return (
    <section className="bg-muted/40 py-20 border-b border-border/40 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{t("testimonials")}</div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            {isAr ? (
              <>
                موضع ثقة <span className="text-gradient-fire">رواد الصناعة</span>
              </>
            ) : (
              <>
                Trusted by <span className="text-gradient-fire">Industry Leaders</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("testimonialsSubtitle")}
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((tItem) => (
            <div
              key={tItem.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
            >
              <div className="absolute right-6 top-6 opacity-[0.08] text-primary transition-opacity duration-300 group-hover:opacity-[0.15]">
                <Quote className="h-10 w-10 fill-current" />
              </div>
              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: tItem.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mt-6 text-base italic leading-relaxed text-muted-foreground">
                  "{isAr ? tItem.quoteAr : tItem.quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <div className="font-bold text-foreground">{isAr ? tItem.nameAr : tItem.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isAr ? tItem.roleAr : tItem.role}
                </div>
                <div className="mt-1.5 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {isAr ? tItem.companyAr : tItem.company}
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
  const { isAr } = useLanguage();

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
                {isAr ? (
                  <>
                    المساهمة في تحقيق <span className="text-gradient-fire">رؤية المملكة 2030</span>
                  </>
                ) : (
                  <>
                    Aligning with <span className="text-gradient-fire">Saudi Vision 2030</span>
                  </>
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {isAr ? (
                  <>
                    تفخر مؤسسة هدف الساحل لأجهزة السلامة بدعم رؤية المملكة 2030. من خلال حماية المنشآت الصناعية الحيوية وشبكات المستودعات والتطورات الحضرية، فإننا نؤمن ركائز الاقتصاد السعودي القوي ومستقبله المستدام.
                  </>
                ) : (
                  <>
                    Hadaf Al Sahel Safety is proud to support the Kingdom's Vision 2030. By safeguarding critical industrial plants, warehousing networks, and urban developments, we secure the foundations of Saudi Arabia's vibrant economy and sustainable future.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center shrink-0">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-accent">{isAr ? "البنية التحتية" : "Infrastructure"}</div>
              <div className="text-sm font-semibold mt-0.5 text-white">{isAr ? "حماية الأصول" : "Securing Assets"}</div>
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