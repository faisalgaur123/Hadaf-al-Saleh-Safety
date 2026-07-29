import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, Hotel, Warehouse, ShoppingBag, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/hero-fire-safety.jpg";

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
  { icon: Factory, title: "Industrial & Manufacturing", titleAr: "المشاريع الصناعية والإنتاجية", desc: "Plant-wide detection, foam and clean-agent suppression tuned to your process risks.", descAr: "كشف على مستوى المصنع، وإخماد رغوي وبعوامل نظيفة متوافق مع مخاطر عملياتكم." },
  { icon: Fuel, title: "Oil, Gas & Petrochemical", titleAr: "النفط والغاز والبتروكيماويات", desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards.", descAr: "أنظمة الرغوة والغمر وكشف الغاز للمخاطر العالية المصممة وفقاً لمعايير NFPA وAPI." },
  { icon: Building2, title: "Commercial Buildings", titleAr: "المباني التجارية والإدارية", desc: "Sprinkler, alarm and passive protection for office towers and mixed-use developments.", descAr: "رشاشات وإنذار وحماية سلبية للأبراج الإدارية والمشاريع متعددة الاستخدامات." },
  { icon: Hotel, title: "Hospitality & Public", titleAr: "قطاع الضيافة والمرافق العامة", desc: "Life-safety systems for hotels, malls and public venues — code-compliant and guest-friendly.", descAr: "أنظمة سلامة الأرواح للفنادق والمراكز التجارية والمرافق العامة — متوافقة مع الكود وسهلة الاستخدام." },
  { icon: Warehouse, title: "Logistics & Warehousing", titleAr: "الخدمات اللوجستية والمستودعات", desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression.", descAr: "حماية التخزين عالي التكديس باستخدام رشاشات ESFR والإخماد داخل الرفوف." },
  { icon: ShoppingBag, title: "Retail & Data Centers", titleAr: "مراكز التجزئة ومراكز البيانات", desc: "FM200, Novec 1230 and CO2 clean-agent systems for mission-critical environments.", descAr: "أنظمة عوامل نظيفة FM200 وNovec 1230 وثاني أكسيد الكربون لبيئات الأعمال الحساسة." },
];

function ProjectsPage() {
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
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in">{t("projectsSectors")}</div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>
                  موثوقون في أكثر <span className="text-gradient-fire">القطاعات صعوبة في المملكة.</span>
                </>
              ) : (
                <>
                  Trusted across the <span className="text-gradient-fire">Kingdom's toughest sectors.</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {isAr ? (
                <>
                  من مصانع البتروكيماويات إلى الفنادق الفاخرة — قمنا بهندسة أنظمة السلامة من الحرائق للبيئات التي لا يقبل فيها الخطأ.
                </>
              ) : (
                <>
                  From petrochemical plants to five-star hotels — we've engineered fire safety for the environments where failure is not an option.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase tracking-tight">{isAr ? s.titleAr : s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{isAr ? s.descAr : s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-dark py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-black uppercase sm:text-3xl">
                {isAr ? "هل لديكم مشروع ترغبون بالبدء فيه؟" : "Have a project in mind?"}
              </h2>
              <p className="mt-2 text-white/70">
                {isAr ? "أخبرونا عن منشأتكم وسنقوم بإعداد مقترح مخصص للسلامة من الحرائق." : "Tell us about your facility and we'll prepare a tailored fire safety proposal."}
              </p>
            </div>
            <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95 cursor-pointer">
              <Link to="/contact">
                {isAr ? "ابدأ مشروعاً معنا" : "Start a Project"}{" "}
                <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}