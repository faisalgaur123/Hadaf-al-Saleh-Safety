import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Wrench, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";

import heroImg from "@/assets/hero-fire-safety.jpg";
import industrialImg from "@/assets/projects/project_industrial_1785406596127.png";
import oilgasImg from "@/assets/projects/project_oilgas_1785406607264.png";
import commercialImg from "@/assets/projects/project_commercial_1785406617048.png";
import hotelImg from "@/assets/projects/project_hotel_1785406638829.png";
// Reuse service assets for warehouse & data center
import warehouseImg from "@/assets/services/foam_suppression_1785405733968.png";
import datacenterImg from "@/assets/services/novec_1230_1785405742368.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Sectors — Hadaf Al Sahel Safety" },
      { name: "description", content: "Fire safety projects delivered across industrial, commercial, hospitality, oil & gas, retail and warehousing sectors in Saudi Arabia." },
      { property: "og:title", content: "Projects & Sectors — Hadaf Al Sahel Safety" },
      { property: "og:description", content: "Trusted fire protection delivery across the Kingdom's most demanding sectors." },
    ],
  }),
  component: ProjectsPage,
});

const sectors = [
  {
    image: industrialImg,
    titleEn: "Industrial & Manufacturing",
    titleAr: "المشاريع الصناعية والإنتاجية",
    descEn: "Plant-wide detection, foam and clean-agent suppression tuned to your process risks. We deliver NFPA-compliant protection for chemical plants, food processing, steel mills and production lines across the Kingdom.",
    descAr: "كشف على مستوى المصنع وإخماد بالرغوة والعوامل النظيفة متوافق مع مخاطر عملياتكم. نقدم حماية متوافقة مع NFPA لمصانع الكيماويات ومعالجة الأغذية ومصانع الصلب وخطوط الإنتاج في المملكة.",
    scopeEn: ["Foam deluge systems", "Gas detection networks", "Emergency shutdown integration", "NFPA 72 alarm systems"],
    scopeAr: ["أنظمة الغمر بالرغوة", "شبكات كشف الغاز", "تكامل الإغلاق الطارئ", "أنظمة إنذار NFPA 72"],
    stats: { projects: "80+", tagEn: "Industrial Projects", tagAr: "مشروع صناعي" },
    color: "from-orange-500/30 to-amber-500/10",
    accent: "border-orange-500/40",
    badgeEn: "High Hazard",
    badgeAr: "مخاطر عالية",
  },
  {
    image: oilgasImg,
    titleEn: "Oil, Gas & Petrochemical",
    titleAr: "النفط والغاز والبتروكيماويات",
    descEn: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards. Purpose-built for refineries, pipeline stations, loading terminals and offshore support facilities.",
    descAr: "أنظمة الرغوة والغمر وكشف الغاز للمخاطر العالية المصممة وفق معايير NFPA وAPI. مصممة خصيصاً للمصافي ومحطات الأنابيب ومحطات الشحن والمنشآت البحرية.",
    scopeEn: ["AFFF foam systems", "Deluge valve stations", "API 610 pump protection", "Hydrocarbon gas detection"],
    scopeAr: ["أنظمة رغوة AFFF", "محطات صمام الغمر", "حماية مضخات API 610", "كشف غاز الهيدروكربون"],
    stats: { projects: "45+", tagEn: "Energy Projects", tagAr: "مشروع طاقة" },
    color: "from-yellow-500/30 to-red-500/10",
    accent: "border-yellow-500/40",
    badgeEn: "Critical Infrastructure",
    badgeAr: "بنية تحتية حيوية",
  },
  {
    image: commercialImg,
    titleEn: "Commercial Buildings",
    titleAr: "المباني التجارية والإدارية",
    descEn: "Sprinkler, alarm and passive protection for office towers and mixed-use developments. From design-stage BIM coordination to final Civil Defense inspection — full project lifecycle management.",
    descAr: "رشاشات وإنذار وحماية سلبية للأبراج الإدارية والمشاريع متعددة الاستخدامات. من تنسيق BIM في مرحلة التصميم حتى الفحص النهائي للدفاع المدني — إدارة دورة حياة المشروع بالكامل.",
    scopeEn: ["Wet & dry sprinkler systems", "Addressable fire alarm panels", "Fire-rated doors & partitions", "Civil Defense approvals"],
    scopeAr: ["أنظمة رشاشات رطبة وجافة", "لوحات إنذار قابلة للعنونة", "أبواب وحواجز مقاومة للنار", "موافقات الدفاع المدني"],
    stats: { projects: "120+", tagEn: "Commercial Projects", tagAr: "مشروع تجاري" },
    color: "from-blue-500/30 to-cyan-500/10",
    accent: "border-blue-500/40",
    badgeEn: "Most Common",
    badgeAr: "الأكثر شيوعاً",
  },
  {
    image: hotelImg,
    titleEn: "Hospitality & Public Venues",
    titleAr: "قطاع الضيافة والمرافق العامة",
    descEn: "Life-safety systems for hotels, malls and public venues — code-compliant and guest-friendly. Discreet integration of detection and suppression technology into high-end architectural interiors.",
    descAr: "أنظمة سلامة الأرواح للفنادق والمراكز التجارية والمرافق العامة — متوافقة مع الكود وسهلة الاستخدام. تكامل خفي لتقنيات الكشف والإخماد في التصميمات الداخلية الراقية.",
    scopeEn: ["Concealed sprinkler heads", "Addressable voice evacuation", "Kitchen hood suppression", "UL listed fire doors"],
    scopeAr: ["رؤوس رشاشات مخفية", "إخلاء صوتي قابل للعنونة", "إخماد مظلة المطبخ", "أبواب حريق مدرجة UL"],
    stats: { projects: "60+", tagEn: "Hospitality Projects", tagAr: "مشروع ضيافة" },
    color: "from-rose-500/30 to-pink-500/10",
    accent: "border-rose-500/40",
    badgeEn: "Premium Fit-Out",
    badgeAr: "تجهيز فاخر",
  },
  {
    image: warehouseImg,
    titleEn: "Logistics & Warehousing",
    titleAr: "الخدمات اللوجستية والمستودعات",
    descEn: "High-pile storage protection with ESFR sprinklers and in-rack suppression. Designed for the unique challenges of automated and manual storage facilities handling mixed commodities.",
    descAr: "حماية التخزين عالي التكديس باستخدام رشاشات ESFR والإخماد داخل الرفوف. مصمم للتحديات الفريدة لمرافق التخزين الآلية واليدوية التي تتعامل مع بضائع متنوعة.",
    scopeEn: ["ESFR ceiling sprinklers", "In-rack suppression systems", "Smoke curtain integration", "Early warning smoke detection"],
    scopeAr: ["رشاشات سقف ESFR", "أنظمة إخماد داخل الرفوف", "تكامل ستائر الدخان", "كشف دخان الإنذار المبكر"],
    stats: { projects: "35+", tagEn: "Warehouse Projects", tagAr: "مشروع مستودع" },
    color: "from-green-500/30 to-emerald-500/10",
    accent: "border-green-500/40",
    badgeEn: "High-Pile Storage",
    badgeAr: "تخزين عالي التكديس",
  },
  {
    image: datacenterImg,
    titleEn: "Retail & Data Centers",
    titleAr: "مراكز التجزئة ومراكز البيانات",
    descEn: "FM200, Novec 1230 and CO₂ clean-agent systems for mission-critical environments. Zero residue, ultra-fast discharge — protecting servers and electronic assets without disruption.",
    descAr: "أنظمة عوامل نظيفة FM200 وNovec 1230 وثاني أكسيد الكربون لبيئات الأعمال الحساسة. لا يترك آثاراً، تفريغ فائق السرعة — يحمي الخوادم والأصول الإلكترونية دون تعطل.",
    scopeEn: ["FM200 / Novec 1230 systems", "Under-floor suppression", "VESDA aspirating detection", "Emergency power-off integration"],
    scopeAr: ["أنظمة FM200 / Novec 1230", "إخماد تحت الأرضية", "كشف تنفس VESDA", "تكامل إيقاف الطوارئ"],
    stats: { projects: "25+", tagEn: "Tech Projects", tagAr: "مشروع تقني" },
    color: "from-purple-500/30 to-indigo-500/10",
    accent: "border-purple-500/40",
    badgeEn: "Mission Critical",
    badgeAr: "بالغ الحساسية",
  },
];

const stats = [
  { numEn: "350+", numAr: "350+", labelEn: "Projects Completed", labelAr: "مشروع منجز" },
  { numEn: "6", numAr: "6", labelEn: "Sectors Served", labelAr: "قطاع مخدوم" },
  { numEn: "15+", numAr: "15+", labelEn: "Years Experience", labelAr: "سنة خبرة" },
  { numEn: "100%", numAr: "100%", labelEn: "Civil Defense Compliant", labelAr: "متوافق مع الدفاع المدني" },
];

function ProjectsPage() {
  const { isAr } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="h-full w-full object-cover object-bottom animate-ken-burns" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-36 lg:px-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">
              {isAr ? "مشاريعنا وقطاعاتنا" : "Projects & Sectors"}
            </div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>موثوقون في أكثر <span className="text-gradient-fire">القطاعات صعوبةً في المملكة.</span></>
              ) : (
                <>Trusted across the <span className="text-gradient-fire">Kingdom's toughest sectors.</span></>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {isAr
                ? "من مصانع البتروكيماويات إلى الفنادق الفاخرة — هندسنا أنظمة السلامة من الحرائق للبيئات التي لا يُقبل فيها الخطأ."
                : "From petrochemical plants to five-star hotels — we've engineered fire safety for the environments where failure is not an option."}
            </p>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap animate-hero-in [animation-delay:360ms]">
              {stats.map((s) => (
                <div key={s.labelEn} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <span className="text-2xl font-black text-gradient-fire">{isAr ? s.numAr : s.numEn}</span>
                  <span className="text-sm font-medium text-white/80">{isAr ? s.labelAr : s.labelEn}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sector Project Cards ── */}
        <section className="bg-gradient-dark py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-14 text-center">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {isAr ? "قطاعاتنا" : "Our Sectors"}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                {isAr ? "الصناعات التي نخدمها" : "Industries We Protect"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
                {isAr
                  ? "خبرة متخصصة في كل قطاع — لا حلول جاهزة، بل أنظمة مُصممة حسب مخاطرك الفعلية."
                  : "Sector-specific expertise — no off-the-shelf solutions, systems engineered around your actual risks."}
              </p>
            </div>

            {/* Single-column stacked cards with alternating image left/right */}
            <div className="space-y-10">
              {sectors.map((s, i) => (
                <div
                  key={s.titleEn}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-2xl ${s.accent}`}
                >
                  {/* glow */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className={`relative flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                    {/* Image */}
                    <div className="relative h-64 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[44%]">
                      <img
                        src={s.image}
                        alt={isAr ? s.titleAr : s.titleEn}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />

                      {/* Number badge */}
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-sm font-black text-white backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Stats badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-sm">
                        <span className="text-xl font-black text-gradient-fire">{s.stats.projects}</span>
                        <span className="text-xs font-semibold text-white/80">{isAr ? s.stats.tagAr : s.stats.tagEn}</span>
                      </div>

                      {/* Sector badge */}
                      <div className="absolute right-4 top-4 rounded-full bg-gradient-fire px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-fire">
                        {isAr ? s.badgeAr : s.badgeEn}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center gap-5 p-7 lg:p-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span className="text-xs font-bold uppercase tracking-widest text-accent">
                            {isAr ? "المملكة العربية السعودية" : "Saudi Arabia"}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                          {isAr ? s.titleAr : s.titleEn}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-white/70">
                          {isAr ? s.descAr : s.descEn}
                        </p>
                      </div>

                      {/* Scope checklist */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wrench className="h-4 w-4 text-white/40" />
                          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                            {isAr ? "نطاق العمل" : "Scope of Work"}
                          </span>
                        </div>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {(isAr ? s.scopeAr : s.scopeEn).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Compliance note */}
                      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <ShieldCheck className="h-4 w-4 text-white/30" />
                        <span className="text-xs text-white/40">
                          {isAr ? "متوافق مع كود NFPA واشتراطات الدفاع المدني السعودي" : "NFPA code compliant · Saudi Civil Defense approved"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-black to-accent/5 p-10 text-center">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {isAr ? "ابدأ مشروعك" : "Start Your Project"}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                {isAr ? "هل لديكم مشروع ترغبون بالبدء فيه؟" : "Have a project in mind?"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
                {isAr
                  ? "أخبرونا عن منشأتكم وسنقوم بإعداد مقترح مخصص للسلامة من الحرائق."
                  : "Tell us about your facility and we'll prepare a tailored fire safety proposal."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
                  <Link to="/contact">
                    {isAr ? "ابدأ مشروعاً معنا" : "Start a Project"}
                    <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-red hover:bg-white/30">
                  <Link to="/services">
                    {isAr ? "عرض خدماتنا" : "View Our Services"}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}