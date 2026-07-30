import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/context/LanguageContext";

import heroImg from "@/assets/hero-fire-safety.jpg";
import sprinklerImg from "@/assets/services/sprinkler_system_1785405689681.png";
import co2Img from "@/assets/services/co2_suppression_1785405701252.png";
import fm200Img from "@/assets/services/fm200_system_1785405714839.png";
import foamImg from "@/assets/services/foam_suppression_1785405733968.png";
import novecImg from "@/assets/services/novec_1230_1785405742368.png";
import alarmImg from "@/assets/services/fire_alarm_1785405753399.png";
import pumpImg from "@/assets/services/fire_pump_1785405771385.png";
import extinguisherImg from "@/assets/services/fire_extinguisher_1785405784694.png";
import doorImg from "@/assets/services/fire_door_1785405794327.png";

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

const servicesData = [
  {
    image: sprinklerImg,
    titleEn: "Water Base Sprinkler System",
    titleAr: "نظام رشاشات مياه الإطفاء",
    descEn: "Automatic sprinkler arrays connected to a water supply through networked pipes and fire hose cabinets — the most widely deployed fire protection system in the world. Our engineers design systems to NFPA 13 / NFPA 14 specifications, ensuring full coverage for every occupancy type.",
    descAr: "شبكات رشاشات تلقائية متصلة بمصدر مياه عبر أنابيب شبكية وخزانات خراطيم إطفاء — النظام الأكثر انتشاراً في العالم لحماية المنشآت. يصمم مهندسونا الأنظمة وفق مواصفات NFPA 13/14 لضمان التغطية الكاملة لكل نوع من أنواع الشغل.",
    featuresEn: ["Wet, Dry & Pre-Action pipe variants", "NFPA 13 / 14 code compliant design", "UL listed sprinkler heads", "Integration with fire alarm control panel"],
    featuresAr: ["أنواع: رطب، جاف، ومسبق التشغيل", "تصميم متوافق مع NFPA 13/14", "رؤوس رشاشات مدرجة من UL", "تكامل مع لوحة التحكم بإنذار الحريق"],
    standards: ["NFPA 13", "NFPA 14", "Saudi Civil Defense"],
    badge: "Most Popular",
    badgeAr: "الأكثر طلباً",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "border-blue-500/40",
  },
  {
    image: co2Img,
    titleEn: "CO₂ Fire Suppression",
    titleAr: "نظام إخماد الحرائق بثاني أكسيد الكربون",
    descEn: "Carbon-dioxide suppression extinguishes fires by displacing oxygen in the protected zone. Ideal for data centers, electrical switchrooms and industrial machinery — fast-acting, residue-free and non-conductive. We engineer both total-flooding and local-application systems.",
    descAr: "يعمل نظام إخماد ثاني أكسيد الكربون على إطفاء الحرائق بإزاحة الأكسجين في المنطقة المحمية. مثالي لمراكز البيانات وغرف التوزيع الكهربائية والمعدات الصناعية — سريع التأثير ولا يترك آثاراً. نصمم أنظمة الغمر الكلي والتطبيق المحلي.",
    featuresEn: ["Total-flooding & local-application", "Residue-free clean discharge", "Safe for electrical environments", "Automatic & manual release modes"],
    featuresAr: ["غمر كلي وتطبيق محلي", "تفريغ نظيف بدون آثار متبقية", "آمن للبيئات الكهربائية", "أوضاع تلقائية ويدوية للتشغيل"],
    standards: ["NFPA 12", "ISO 6183"],
    color: "from-slate-500/20 to-gray-500/10",
    accent: "border-slate-500/40",
  },
  {
    image: fm200Img,
    titleEn: "FM 200 Suppression",
    titleAr: "نظام إخماد FM 200",
    descEn: "A waterless heptafluoropropane (HFC-227ea) agent that discharges within 10 seconds — breaking the fire triangle by simultaneously removing heat and free radicals. No residue, no water damage, safe for occupied spaces. Widely used in IT rooms, archives and control rooms.",
    descAr: "عامل هيبتافلوروبروبان (HFC-227ea) عديم الماء يتفرغ خلال 10 ثوانٍ — يكسر مثلث الحريق بإزالة الحرارة والجذور الحرة في آنٍ واحد. لا يترك آثاراً ولا يتلف المعدات، وآمن للأماكن المأهولة.",
    featuresEn: ["10-second discharge time", "Zero ozone depletion potential", "Safe for occupied areas", "Electrically non-conductive"],
    featuresAr: ["وقت التفريغ 10 ثوانٍ", "لا يُسهم في استنزاف طبقة الأوزون", "آمن للمناطق المأهولة", "غير موصل للكهرباء"],
    standards: ["NFPA 2001", "ISO 14520"],
    color: "from-red-500/20 to-orange-500/10",
    accent: "border-red-500/40",
  },
  {
    image: foamImg,
    titleEn: "Foam Suppression System",
    titleAr: "نظام إخماد الحرائق بالرغوة",
    descEn: "A highly effective solution for protecting flammable and combustible liquids. Foam blankets the fuel surface to exclude oxygen and prevent re-ignition, making it indispensable for fuel storage tanks, aircraft hangars, marine facilities and petrochemical plants.",
    descAr: "حل فعال للغاية لحماية السوائل القابلة للاشتعال. تعمل الرغوة على تغطية سطح الوقود لمنع الأكسجين والوقاية من إعادة الاشتعال — لا غنى عنه في خزانات الوقود وأحواض الطائرات والمنشآت البحرية والمحطات البتروكيماوية.",
    featuresEn: ["AFFF, AR-AFFF, FFFP agents", "Fixed & semi-fixed systems", "High-expansion foam for hangars", "Subsurface injection for tanks"],
    featuresAr: ["عوامل AFFF وAR-AFFF وFFFP", "أنظمة ثابتة وشبه ثابتة", "رغوة توسع عالٍ للأحواض", "حقن تحت السطح للخزانات"],
    standards: ["NFPA 11", "NFPA 16"],
    color: "from-amber-500/20 to-yellow-500/10",
    accent: "border-amber-500/40",
  },
  {
    image: novecImg,
    titleEn: "Novec 1230 Suppression",
    titleAr: "نظام إخماد Novec 1230",
    descEn: "A clean-agent halon replacement offering the highest safety margin for human occupancy among all modern clean agents. Fluoroketone-based, it extinguishes fire through heat absorption with an extremely low global-warming potential and zero ozone depletion.",
    descAr: "بديل Halon النظيف الذي يوفر أعلى هامش أمان للأماكن المأهولة من بين جميع العوامل النظيفة الحديثة. يعتمد على فلوروكيتون ويُطفئ الحريق عبر امتصاص الحرارة مع تأثير إجمالي منخفض جداً على الاحترار العالمي.",
    featuresEn: ["Highest human-safety margin", "Global Warming Potential: 1", "Zero ozone depletion", "Suitable for occupied spaces"],
    featuresAr: ["أعلى هامش أمان بشري", "إمكانية الاحترار العالمي: 1", "لا يُستنزف طبقة الأوزون", "مناسب للأماكن المأهولة"],
    standards: ["NFPA 2001", "ISO 14520"],
    color: "from-green-500/20 to-emerald-500/10",
    accent: "border-green-500/40",
  },
  {
    image: alarmImg,
    titleEn: "Fire Alarm System",
    titleAr: "نظام إنذار الحريق",
    descEn: "Addressable and conventional detection systems for early fire, smoke and carbon-monoxide warning. Our installations include photoelectric detectors, heat detectors, manual call points, audio-visual notification appliances and full integration with suppression and BMS systems.",
    descAr: "أنظمة كشف قابلة للعنونة وتقليدية للإنذار المبكر من الحريق والدخان وثاني أكسيد الكربون. تشمل تركيباتنا كاشفات ضوئية وحرارية ونقاط استدعاء يدوية وأجهزة إنذار سمعية وبصرية مع تكامل كامل مع أنظمة الإخماد وإدارة المباني.",
    featuresEn: ["Addressable & conventional panels", "Smoke, heat & CO detectors", "Audio-visual alarm devices", "BMS & suppression integration"],
    featuresAr: ["لوحات قابلة للعنونة وتقليدية", "كاشفات دخان وحرارة وأول أكسيد الكربون", "أجهزة إنذار سمعية وبصرية", "تكامل مع BMS وأنظمة الإخماد"],
    standards: ["NFPA 72", "EN 54"],
    color: "from-rose-500/20 to-pink-500/10",
    accent: "border-rose-500/40",
  },
  {
    image: pumpImg,
    titleEn: "Fire Pump System",
    titleAr: "نظام مضخة الحريق",
    descEn: "NFPA 20-compliant centrifugal and vertical turbine fire pumps — electric-driven and diesel-driven — for commercial, industrial and high-rise applications. Each installation includes the jockey pump, controller, pressure gauges and flow test connections, sized and commissioned by certified engineers.",
    descAr: "مضخات حريق طاردة مركزية وعمودية متوافقة مع NFPA 20 — كهربائية وديزل — للتطبيقات التجارية والصناعية والأبراج الشاهقة. تشمل كل عملية تركيب مضخة الضغط المساعدة ووحدة التحكم وقياسات الضغط ووصلات اختبار التدفق.",
    featuresEn: ["Electric & diesel driver options", "Jockey pump & controller included", "NFPA 20 sizing & commissioning", "UL listed / FM Approved"],
    featuresAr: ["خيارات محرك كهربائي وديزل", "تشمل مضخة الضغط ووحدة التحكم", "تحديد الحجم والتشغيل وفق NFPA 20", "معتمدة من UL وFM"],
    standards: ["NFPA 20", "UL 448"],
    color: "from-orange-500/20 to-red-500/10",
    accent: "border-orange-500/40",
  },
  {
    image: extinguisherImg,
    titleEn: "Fire Extinguishers",
    titleAr: "طفايات الحريق",
    descEn: "Supply, installation and maintenance of portable fire extinguishers rated for every fire class — water, foam, dry powder, CO₂ and wet-chemical. We survey your site to determine the correct extinguisher type, size and placement in accordance with NFPA 10 and Civil Defense requirements.",
    descAr: "توريد وتركيب وصيانة طفايات الحريق المحمولة لكل فئات الحريق — مياه ورغوة ومسحوق جاف وثاني أكسيد الكربون وكيماوي رطب. نُجري مسحاً لموقعك لتحديد النوع والحجم والمكان الصحيح وفقاً لـ NFPA 10 واشتراطات الدفاع المدني.",
    featuresEn: ["All fire classes: A, B, C, D, K", "NFPA 10 placement survey", "Annual inspection & recharge", "Civil Defense compliant labeling"],
    featuresAr: ["جميع فئات الحريق: A وB وC وD وK", "مسح موقعي وفق NFPA 10", "فحص سنوي وإعادة شحن", "ملصقات متوافقة مع الدفاع المدني"],
    standards: ["NFPA 10", "Saudi Civil Defense"],
    color: "from-red-600/20 to-rose-500/10",
    accent: "border-red-600/40",
  },
  {
    image: doorImg,
    titleEn: "Fire Doors",
    titleAr: "أبواب الحريق",
    descEn: "UL-listed, fire-rated steel and composite doors engineered to contain fire and smoke for 20, 45, 60 or 90 minutes — protecting escape routes in shopping centers, hospitals, hotels and industrial facilities. Supplied with self-closing devices, intumescent seals and rated hardware.",
    descAr: "أبواب فولاذية ومركبة مقاومة للحريق ومدرجة من UL مصممة للحد من انتشار الحريق والدخان لمدة 20 أو 45 أو 60 أو 90 دقيقة — تحمي مسارات الهروب في المراكز التجارية والمستشفيات والفنادق والمنشآت الصناعية.",
    featuresEn: ["20 / 45 / 60 / 90 min fire ratings", "Self-closing & self-latching hardware", "Intumescent smoke seals", "UL listed, Civil Defense approved"],
    featuresAr: ["درجات مقاومة 20/45/60/90 دقيقة", "تجهيزات إغلاق تلقائي وتشبيك ذاتي", "ختم مانع للدخان متمدد حرارياً", "مدرجة من UL ومعتمدة من الدفاع المدني"],
    standards: ["NFPA 80", "UL 10C"],
    color: "from-purple-500/20 to-indigo-500/10",
    accent: "border-purple-500/40",
  },
];

function ServicesPage() {
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
              {isAr ? "خدماتنا" : "Our Services"}
            </div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]">
              {isAr ? (
                <>حماية شاملة <span className="text-gradient-fire">من الحرائق</span></>
              ) : (
                <>Complete <span className="text-gradient-fire">Fire Protection</span> Portfolio</>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]">
              {isAr
                ? "أنظمة كشف وإخماد وحماية سلبية مصممة وفق كودات NFPA واشتراطات هيئة الدفاع المدني السعودية."
                : "Detection, suppression and passive protection systems engineered to NFPA codes and Saudi Civil Defense regulations."}
            </p>
            {/* Stats strip */}
            <div className="mt-12 flex flex-wrap gap-6 animate-hero-in [animation-delay:360ms]">
              {[
                { num: "9", label: isAr ? "أنظمة متخصصة" : "Specialised Systems" },
                { num: "350+", label: isAr ? "مشروع منجز" : "Projects Completed" },
                { num: "100%", label: isAr ? "مهندسون معتمدون" : "Certified Engineers" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <span className="text-2xl font-black text-gradient-fire">{s.num}</span>
                  <span className="text-sm font-medium text-white/80">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="bg-gradient-dark py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-14 text-center">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {isAr ? "ماذا نقدم" : "What We Offer"}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                {isAr ? "محفظة خدماتنا الكاملة" : "Our Full Service Portfolio"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
                {isAr
                  ? "من الكشف المبكر إلى الإخماد المتقدم — نحن نغطي كل جانب من جوانب سلامة الحرائق."
                  : "From early detection to advanced suppression — we cover every aspect of fire safety."}
              </p>
            </div>

            <div className="space-y-10">
              {servicesData.map((srv, i) => (
                <div
                  key={srv.titleEn}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/[0.03] transition-all duration-500 hover:bg-white/[0.06] ${srv.accent}`}
                >
                  {/* gradient glow blob */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${srv.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className={`relative flex flex-col gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                    {/* Image panel */}
                    <div className="relative h-64 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[42%]">
                      <img
                        src={srv.image}
                        alt={isAr ? srv.titleAr : srv.titleEn}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />

                      {/* Number badge */}
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-sm font-black text-white backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Popular badge */}
                      {srv.badge && (
                        <div className="absolute right-4 top-4 rounded-full bg-gradient-fire px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-fire">
                          {isAr ? srv.badgeAr : srv.badge}
                        </div>
                      )}
                    </div>

                    {/* Content panel */}
                    <div className="flex flex-1 flex-col justify-center gap-5 p-7 lg:p-10">

                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                          {isAr ? srv.titleAr : srv.titleEn}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-white/70">
                          {isAr ? srv.descAr : srv.descEn}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {(isAr ? srv.featuresAr : srv.featuresEn).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Standards */}
                      <div className="flex flex-wrap items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-white/40" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                          {isAr ? "المعايير:" : "Standards:"}
                        </span>
                        {srv.standards.map((s) => (
                          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-bold text-white/60">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-black to-accent/5 p-10 text-center">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {isAr ? "هل أنت مستعد؟" : "Ready to Get Protected?"}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                {isAr ? "احصل على تقييم مجاني للموقع" : "Get a Free Site Assessment"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
                {isAr
                  ? "سيقوم مهندسونا بتقييم موقعك وتوصية بحل متوافق وفعال من حيث التكلفة لسلامة الحرائق."
                  : "Our engineers will assess your site and recommend a compliant, cost-effective fire safety solution."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95">
                  <Link to="/contact">
                    {isAr ? "طلب تسعيرة" : "Request a Quote"}
                    <ArrowRight className={`ml-2 h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-red hover:bg-white/30">
                  <Link to="/projects">
                    {isAr ? "استعراض المشاريع" : "View Projects"}
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