import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import logoImg from "@/assets/title-logo.PNG";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAr } = useLanguage();

  const phone = "966501946981"; // Primary WhatsApp contact
  const messageEn = encodeURIComponent("Hello Hadaf Al Sahel Safety, I would like to inquire about fire protection solutions.");
  const messageAr = encodeURIComponent("السلام عليكم، أود الاستفسار عن حلول وأنظمة السلامة من الحرائق لديكم.");
  const whatsappUrl = `https://wa.me/${phone}?text=${isAr ? messageAr : messageEn}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* ── Chat Window Popup ── */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-emerald-600 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={logoImg}
                  alt="Hadaf Al Sahel Safety"
                  className="h-10 w-10 rounded-full border border-white/20 bg-white object-contain p-1"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-emerald-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {isAr ? "هدف الساحل للسلامة" : "Hadaf Al Sahel Safety"}
                </h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {isAr ? "متصل الآن — يرد خلال دقائق" : "Online — Replies instantly"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-slate-900/90 p-5 space-y-4">
            <div className="rounded-2xl rounded-tl-sm bg-slate-800 p-4 border border-white/5 text-sm leading-relaxed text-slate-200 shadow-sm">
              <p className="font-semibold text-white mb-1">
                {isAr ? "أهلاً بك في هدف الساحل للسلامة! 👋" : "Welcome to Hadaf Al Sahel Safety! 👋"}
              </p>
              <p className="text-xs text-slate-300">
                {isAr
                  ? "كيف يمكننا مساعدتك اليوم في تصميم، توريد، أو صيانة أنظمة الحماية من الحرائق؟"
                  : "How can we assist you today with fire protection design, equipment supply, or maintenance?"}
              </p>
              <span className="mt-2 block text-[10px] text-slate-400 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-slate-950 p-4 border-t border-white/5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-emerald-500 py-3 px-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/30 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              <span>{isAr ? "ابدأ المحادثة عبر واتساب" : "Start Chat on WhatsApp"}</span>
            </a>
          </div>

        </div>
      )}

      {/* ── Floating Pill Button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl shadow-emerald-500/30 ring-1 ring-emerald-700/20 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing outer glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-md transition-all group-hover:opacity-60 animate-pulse" />

        {/* Pulsing White Online Dot Badge */}
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/25">
          <span className="h-3.5 w-3.5 rounded-full bg-white shadow-sm animate-pulse" />
        </div>

        {/* WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="relative h-6 w-6 shrink-0">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>

        {/* Text Label */}
        <span className="relative font-bold tracking-tight text-base whitespace-nowrap">
          {isAr ? "تحدث معنا" : "Chat with us"}
        </span>
      </button>
    </div>
  );
}
