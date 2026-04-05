"use client";
import { motion } from "framer-motion";

export default function Hero({ t, lang }: { t: any, lang: string }) {
  // Mapping the 5 languages to your specific hardcoded words
  const content: any = {
    en: { software: "Software", engineer: "Engineer", exp: "Experience", proj: "Projects", loc: "Location", avail: "Availability", status: "Open to Work" },
    fr: { software: "Ingénieur", engineer: "Logiciel", exp: "Expérience", proj: "Projets", loc: "Localisation", avail: "Disponibilité", status: "Disponible" },
    es: { software: "Ingeniero", engineer: "Software", exp: "Experiencia", proj: "Proyectos", loc: "Ubicación", avail: "Disponibilidad", status: "Disponible" },
    de: { software: "Software", engineer: "Ingenieur", exp: "Erfahrung", proj: "Projekte", loc: "Standort", avail: "Verfügbarkeit", status: "Verfügbar" },
    zh: { software: "软件", engineer: "工程师", exp: "经验", proj: "项目", loc: "地点", avail: "可用性", status: "开放工作" }
  };

  const active = content[lang] || content.en;

  return (
    <section className="relative pt-32 pb-10 px-6 max-w-[1400px] mx-auto overflow-hidden border-b border-blue-500/20">
      {/* Glow Effects - Fixed Colors */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full" />
      
      {/* Top Metadata Line */}
      <div className="flex justify-between items-center mb-12 border-b border-blue-500/10 pb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Full-Stack Engineer
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Prosper Obeng-Gyan
        </span>
        <span className="px-4 py-2 border border-blue-600 text-[10px] font-black uppercase tracking-widest text-blue-600">
          {lang.toUpperCase()}
        </span>
      </div>

      <div className="relative z-10">
        {/* Massive Brutalist Headline - Fixed Blue/Slate */}
        <motion.h1 
          key={lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-4 text-slate-800"
        >
          {active.software} <br /> 
          <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">{active.engineer}</span>
        </motion.h1>

        {/* Tags - Green Accents */}
        <div className="flex flex-wrap gap-4 mt-12 mb-24">
          {['React.js', 'Next.js', 'TypeScript', 'Node.js'].map((tag) => (
            <span key={tag} className="px-5 py-2.5 border border-emerald-500/30 bg-emerald-500/5 text-[10px] font-black uppercase tracking-widest text-emerald-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Informational Footer Grid - Static Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-blue-500/10">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{active.exp}</p>
            <p className="text-4xl font-black italic tracking-tighter uppercase text-slate-800">4+ Years</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{active.proj}</p>
            <p className="text-4xl font-black italic tracking-tighter uppercase text-slate-800">20+</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{active.loc}</p>
            <p className="text-xl font-black italic tracking-tighter uppercase text-blue-600">Remote / GH</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{active.avail}</p>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
               <p className="text-xl font-black italic tracking-tighter uppercase text-emerald-600">{active.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}