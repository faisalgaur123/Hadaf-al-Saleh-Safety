import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, CheckCircle2, ShieldCheck, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/hero-fire-safety.jpg";
import vision2030Img from "@/assets/vision2030.png";

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
  {
    icon: Target,
    titleEn: "Our Mission",
    titleAr: "رسالتنا",
    descEn: "To safeguard lives, property, and business continuity across Saudi Arabia by engineering, installing, and maintaining standard-compliant fire protection systems.",
    descAr: "حماية الأرواح والممتلكات واستمرارية الأعمال في جميع أنحاء المملكة من خلال تصميم وتثبيت وصيانة أنظمة حماية من الحرائق متوافق مع المعايير.",
  },
  {
    icon: Eye,
    titleEn: "Our Vision",
    titleAr: "رؤيتنا",
    descEn: "To be the Kingdom's most trusted partner for complete fire safety equipment and engineering solutions, setting the benchmark for quality and compliance.",
    descAr: "أن نكون الشريك الأكثر ثقة في المملكة لمعدات السلامة من الحرائق والحلول الهندسية، وأن نضع المعيار للجودة والامتثال.",
  },
  {
    icon: Heart,
    titleEn: "Our Promise",
    titleAr: "عهدنا",
    descEn: "Uncompromising attention to detail, rapid emergency response, and 100% adherence to Saudi Civil Defense and NFPA codes on every project.",
    descAr: "اهتمام لا يهاود بالتفاصيل، واستجابة سريعة للطوارئ، وامتثال بنسبة 100% لأكواد الدفاع المدني السعودي وNFPA في كل مشروع.",
  },
];



function AboutPage() {
  const { t, isAr } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>

        {/* ── 1. HERO SECTION ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Hadaf Al Sahel Safety" className="h-full w-full object-cover object-bottom animate-ken-burns" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">
                {isAr ? "من نحن" : "About Us"}
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>حماية الأرواح. <span className="text-gradient-fire">تأمين المستقبل.</span></>
              ) : (
                <>Protecting people. <span className="text-gradient-fire">Securing futures.</span></>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {isAr
                ? "حلول سلامة وحماية من الحرائق متكاملة وموثوقة، تعتمد على التميز الهندسي والالتزام بأعلى معايير الجودة في المملكة العربية السعودية."
                : "Comprehensive, dependable fire protection solutions powered by engineering excellence and strict standard compliance across the Kingdom of Saudi Arabia."}
            </p>
          </div>
        </section>

        {/* ── 2. COMPANY OVERVIEW SECTION ── */}
        <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">

              {/* Left Column (Text & Capabilities) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  {isAr ? "عن الشركة" : "Company Profile"}
                </div>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                  {isAr ? (
                    <>هندسة بأيدي خبراء، <span className="text-gradient-fire">وموضع ثقة القطاع.</span></>
                  ) : (
                    <>Engineered by experts, <span className="text-gradient-fire">trusted by industry.</span></>
                  )}
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p className="text-foreground font-semibold">
                    {isAr ? (
                      <><span className="text-gradient-fire font-black">هدف الساحل لمعدات السلامة من الحرائق</span> شركة سعودية موثوقة متخصصة في حلول الحماية الشاملة من الحرائق. نحن مكرسون لحماية الأرواح والممتلكات والأعمال من خلال تقديم أنظمة سلامة موثوقة وعالية الجودة تتوافق مع المعايير المحلية والدولية.</>
                    ) : (
                      <><span className="text-gradient-fire font-black">HADAF AL SAHEL FOR FIRE SAFETY EQUIPMENT</span> is a trusted Saudi Arabian company specializing in comprehensive fire protection solutions. We are dedicated to safeguarding lives, properties, and businesses by delivering reliable, high-quality fire safety systems that comply with local and international standards.</>
                    )}
                  </p>

                  <p>
                    {isAr
                      ? "مع التزامنا القوي بالجودة والابتكار ورضا العملاء، نقدم خدمات حماية شاملة من الحرائق — من الاستشارة وتصميم الأنظمة إلى التوريد والتركيب والاختبار والتشغيل والصيانة والدعم الفني. يعمل فريقنا المتمرس مع العملاء بشكل وثيق لضمان حصول كل مشروع على أعلى مستوى من الاحترافية والاهتمام بالتفاصيل."
                      : "With a strong commitment to quality, innovation, and customer satisfaction, we provide end-to-end fire protection services — from consultation and system design to supply, installation, testing, commissioning, maintenance, and technical support. Our experienced team works closely with clients to ensure every project receives the highest level of professionalism and attention to detail."}
                  </p>

                  <p>
                    {isAr
                      ? "سواء كنا نخدم المباني التجارية أو المنشآت الصناعية أو المجمعات السكنية أو المؤسسات الصحية أو الحرم الجامعية أو المشاريع الحكومية — فإن مهمتنا هي خلق بيئات أكثر أماناً من خلال حلول حماية موثوقة من الحرائق."
                      : "Whether serving commercial buildings, industrial facilities, residential complexes, healthcare institutions, educational campuses, or government projects, our mission is to create safer environments through dependable fire protection solutions."}
                  </p>
                </div>

                {/* Key capabilities checklist grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border pt-6">
                  {(isAr ? [
                    "استشارة وتصميم الأنظمة",
                    "التوريد والتركيب المعتمد",
                    "الاختبار والتشغيل الفني",
                    "الصيانة والدعم الفني 24/7",
                    "توافق تام مع معايير NFPA",
                    "اعتمادات الدفاع المدني السعودي",
                  ] : [
                    "Consultation & System Design",
                    "Certified Supply & Installation",
                    "Testing & Commissioning",
                    "24/7 Maintenance & Support",
                    "Full NFPA Code Compliance",
                    "Saudi Civil Defense Approvals",
                  ]).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
                    <Link to="/contact">
                      {t("workWithUs")}{" "}
                      <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column (Visual Image Card & Stats Overlay) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  {/* Fire glow background */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-fire opacity-20 blur-2xl" />

                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                    <img src={heroImg} alt="Fire safety engineering" className="h-[480px] w-full object-cover" />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Stats strip overlaid on bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-black/40 border-t border-white/10">
                      <div className="grid grid-cols-3 gap-2 text-center text-white">
                        <div className="border-r border-white/10 pr-2">
                          <div className="text-2xl font-black text-gradient-fire">350+</div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                            {isAr ? "مشروع منجز" : "Projects"}
                          </div>
                        </div>
                        <div className="border-r border-white/10 pr-2">
                          <div className="text-2xl font-black text-gradient-fire">100%</div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                            {isAr ? "معتمدون" : "Compliant"}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-gradient-fire">24/7</div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                            {isAr ? "دعم موثوق" : "Support"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. FOUNDATIONS SECTION (MISSION / VISION / PROMISE) ── */}
        <section className="bg-gradient-dark py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {isAr ? "ركائزنا الأساسية" : "Our Foundations"}
              </div>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                {isAr ? (
                  <>الرسالة. الرؤية. <span className="text-gradient-fire">العهد.</span></>
                ) : (
                  <>Mission. Vision. <span className="text-gradient-fire">Promise.</span></>
                )}
              </h2>
              <p className="mt-4 text-sm text-white/70">
                {isAr
                  ? "قيمنا ورؤيتنا التي توجه كل مشروع ننجزه في كافة قطاعات المملكة."
                  : "Core values and principles driving every fire protection project we deliver."}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.titleEn}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-2xl"
                >
                  <div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-fire shadow-fire transition-transform duration-300 group-hover:scale-110">
                      <p.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white">
                      {isAr ? p.titleAr : p.titleEn}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {isAr ? p.descAr : p.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. VISION 2030 SECTION ── */}
        <section className="relative overflow-hidden border-t border-border bg-background py-20 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mb-16 flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-4 shadow-card">
                <img src={vision2030Img} alt="Saudi Vision 2030" className="h-14 w-auto object-contain" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {isAr ? "رؤية المملكة" : "Kingdom Vision"}
              </div>
              <h2 className="max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                {isAr ? (
                  <>شركاء فخورون في <span className="text-gradient-fire">رؤية 2030</span></>
                ) : (
                  <>Proud Partners of <span className="text-gradient-fire">Saudi Vision 2030</span></>
                )}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {isAr
                  ? "تتوافق هدف الساحل للسلامة مع مبادئ رؤية 2030 في التطوير الصناعي ورفع معايير السلامة وتوطين الخدمات التقنية المتخصصة."
                  : "Hadaf Al Sahel Safety is aligned with Saudi Vision 2030's principles of industrial development, safety standard elevation and localization of specialized technical services."}
              </p>
            </div>

            {/* Quote banner */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-background to-accent/5 p-8 sm:p-12 text-center shadow-lg">
              {/* <div className="mb-4 text-4xl">🇸🇦</div> */}
              <blockquote className="text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
                {isAr
                  ? "«نريد أن تكون المملكة دولة متقدمة يُحتذى بها في جميع المجالات.»"
                  : '"We want to be a pioneering nation that achieves excellence in all fields."'}
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-primary">
                {isAr
                  ? "صاحب السمو الملكي الأمير محمد بن سلمان — رؤية 2030"
                  : "HRH Crown Prince Mohammed bin Salman — Vision 2030"}
              </p>
              <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-muted-foreground">
                {isAr
                  ? "هدف الساحل للسلامة ملتزمة بهذه الرؤية — ببناء منشآت أكثر أماناً وقوى عاملة أكثر مهارة وصناعة أكثر استدامة في المملكة العربية السعودية."
                  : "Hadaf Al Sahel Safety is committed to this vision — building safer facilities, a more skilled workforce and a more sustainable industry in Saudi Arabia."}
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}