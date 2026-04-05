export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  category: string;
  image: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "Education" | "Venture" | "Impact";
}

export const translations = {
  en: {
    hero: "Architecting digital excellence through precision engineering.",
    works: "Selected Portfolio",
    all: "All Projects",
    projects: [
      { id: 1, title: "Richcourt Hotel", description: "Sophisticated hospitality platform optimizing direct bookings and guest management.", tags: ["TypeScript", "API"], category: "Hospitality", link: "https://richcourt-hotel.vercel.app", github: "https://github.com/Phresy/richcourt-hotel", image: "/images/richcourt.png" },
      { id: 2, title: "Treehouse Restaurant", description: "Immersive digital experience for a luxury culinary brand, featuring seamless reservation flows.", tags: ["Next.js", "Tailwind"], category: "Web Design", link: "https://treehouse-restaurant.vercel.app", github: "https://github.com/Phresy/treehouse-restaurant", image: "/images/treehouse.png" },
      { id: 3, title: "Passion Clinic", description: "Clinical infrastructure and healthcare management system for modern medical ecosystems.", tags: ["Next.js", "Healthcare", "Supabase"], category: "Infrastructure", link: "https://passion-clinic.vercel.app", github: "https://github.com/Phresy/passion-clinic", image: "/images/pc1.png" },
      { id: 4, title: "Fund Education Bridge", description: "A platform dedicated to supporting students through financial aid and hardware provision.", tags: ["Next.js", "FinTech", "Impact"], category: "Impact", link: "https://fundedubridge.vercel.app/", github: "https://github.com/Phresy/fundedubridge", image: "/images/fundedu.png" },
      { id: 5, title: "Sua Ade", description: "Interactive kids learning platform integrated with curated educational YouTube content.", tags: ["React Native", "Education", "APK"], category: "EdTech", link: "https://expo.dev/artifacts/eas/cbjCy9KaGphgMHxWmxhUCa.apk", github: "https://github.com/Phresy/sua-ade", image: "/images/suaade.jpeg" },
      { id: 6, title: "BusinessOS Africa", description: "A comprehensive SaaS ecosystem designed to scale enterprise operations across the continent.", tags: ["Next.js", "SaaS", "PostgreSQL"], category: "Enterprise", link: "#", github: "https://github.com/Phresy", image: "/images/businessos.png" }
    ]
  },
  fr: {
    hero: "L'ingénierie de précision au service de l'excellence numérique.",
    works: "Portfolio Sélectionné",
    all: "Tous les Projets",
    projects: [
      { id: 1, title: "Richcourt Hotel", description: "Plateforme hôtelière sophistiquée optimisant les flux de réservation.", tags: ["TypeScript", "API"], category: "Hôtellerie", link: "https://richcourt-hotel.vercel.app", github: "https://github.com/Phresy/richcourt-hotel", image: "/images/richcourt.png" },
      { id: 2, title: "Treehouse Restaurant", description: "Expérience numérique immersive pour une marque culinaire de luxe.", tags: ["Next.js", "Tailwind"], category: "Design Web", link: "https://treehouse-restaurant.vercel.app", github: "https://github.com/Phresy/treehouse-restaurant", image: "/images/treehouse.png" },
      { id: 3, title: "Passion Clinic", description: "Infrastructure clinique et système de gestion de la santé pour les écosystèmes médicaux.", tags: ["Next.js", "Santé"], category: "Infrastructure", link: "https://passion-clinic.vercel.app", github: "https://github.com/Phresy/passion-clinic", image: "/images/pc1.png" },
      { id: 4, title: "Fund Education Bridge", description: "Plateforme dédiée au soutien des étudiants par l'aide financière et le matériel.", tags: ["Next.js", "FinTech"], category: "Impact", link: "https://fundedubridge.vercel.app/", github: "https://github.com/Phresy/fundedubridge", image: "/images/fundedu.png" },
      { id: 5, title: "Sua Ade", description: "Plateforme d'apprentissage pour enfants avec contenu YouTube éducatif sélectionné.", tags: ["React Native", "Éducation"], category: "EdTech", link: "https://expo.dev/artifacts/eas/cbjCy9KaGphgMHxWmxhUCa.apk", github: "https://github.com/Phresy/sua-ade", image: "/images/suaade.jpeg" },
      { id: 6, title: "BusinessOS Africa", description: "Écosystème SaaS complet conçu pour mettre à l'échelle les opérations des entreprises.", tags: ["Next.js", "SaaS"], category: "Entreprise", link: "#", github: "https://github.com/Phresy", image: "/images/businessos.png" }
    ]
  },
  es: {
    hero: "Arquitectando la excelencia digital mediante ingeniería de precisión.",
    works: "Portafolio Seleccionado",
    all: "Todos los Proyectos",
    projects: [
      { id: 1, title: "Richcourt Hotel", description: "Plataforma de hospitalidad sofisticada que optimiza reservas directas.", tags: ["TypeScript", "API"], category: "Hospitalidad", link: "https://richcourt-hotel.vercel.app", github: "https://github.com/Phresy/richcourt-hotel", image: "/images/richcourt.png" },
      { id: 2, title: "Treehouse Restaurant", description: "Experiencia digital inmersiva para una marca culinaria de lujo.", tags: ["Next.js", "Tailwind"], category: "Diseño Web", link: "https://treehouse-restaurant.vercel.app", github: "https://github.com/Phresy/treehouse-restaurant", image: "/images/treehouse.png" },
      { id: 3, title: "Passion Clinic", description: "Infraestructura clínica y sistema de gestión para ecosistemas médicos modernos.", tags: ["Next.js", "Salud"], category: "Infraestructura", link: "https://passion-clinic.vercel.app", github: "https://github.com/Phresy/passion-clinic", image: "/images/pc1.png" },
      { id: 4, title: "Fund Education Bridge", description: "Plataforma para apoyar a estudiantes mediante ayuda financiera y hardware.", tags: ["Next.js", "FinTech"], category: "Impacto", link: "https://fundedubridge.vercel.app/", github: "https://github.com/Phresy/fundedubridge", image: "/images/fundedu.png" },
      { id: 5, title: "Sua Ade", description: "Plataforma de aprendizaje para niños con contenido educativo de YouTube.", tags: ["React Native", "Educación"], category: "EdTech", link: "https://expo.dev/artifacts/eas/cbjCy9KaGphgMHxWmxhUCa.apk", github: "https://github.com/Phresy/sua-ade", image: "/images/suaade.jpeg" },
      { id: 6, title: "BusinessOS Africa", description: "Ecosistema SaaS integral diseñado para escalar operaciones empresariales.", tags: ["Next.js", "SaaS"], category: "Empresa", link: "#", github: "https://github.com/Phresy", image: "/images/businessos.png" }
    ]
  },
  de: {
    hero: "Digitale Exzellenz durch Präzisionstechnik und Design.",
    works: "Ausgewähltes Portfolio",
    all: "Alle Projekte",
    projects: [
      { id: 1, title: "Richcourt Hotel", description: "Anspruchsvolle Hospitality-Plattform zur Optimierung von Buchungsabläufen.", tags: ["TypeScript", "API"], category: "Hotellerie", link: "https://richcourt-hotel.vercel.app", github: "https://github.com/Phresy/richcourt-hotel", image: "/images/richcourt.png" },
      { id: 2, title: "Treehouse Restaurant", description: "Immersives digitales Erlebnis für eine luxuriöse kulinarische Marke.", tags: ["Next.js", "Tailwind"], category: "Webdesign", link: "https://treehouse-restaurant.vercel.app", github: "https://github.com/Phresy/treehouse-restaurant", image: "/images/treehouse.png" },
      { id: 3, title: "Passion Clinic", description: "Klinische Infrastruktur und Managementsystem für moderne medizinische Ökosysteme.", tags: ["Next.js", "Gesundheit"], category: "Infrastruktur", link: "https://passion-clinic.vercel.app", github: "https://github.com/Phresy/passion-clinic", image: "/images/pc1.png" },
      { id: 4, title: "Fund Education Bridge", description: "Plattform zur Unterstützung von Studenten durch finanzielle Hilfe und Hardware.", tags: ["Next.js", "FinTech"], category: "Impact", link: "https://fundedubridge.vercel.app/", github: "https://github.com/Phresy/fundedubridge", image: "/images/fundedu.png" },
      { id: 5, title: "Sua Ade", description: "Lernplattform für Kinder mit kuratierten pädagogischen YouTube-Inhalten.", tags: ["React Native", "Bildung"], category: "EdTech", link: "https://expo.dev/artifacts/eas/cbjCy9KaGphgMHxWmxhUCa.apk", github: "https://github.com/Phresy/sua-ade", image: "/images/suaade.jpeg" },
      { id: 6, title: "BusinessOS Africa", description: "Umfassendes SaaS-Ökosystem zur Skalierung von Unternehmensabläufen.", tags: ["Next.js", "SaaS"], category: "Unternehmen", link: "#", github: "https://github.com/Phresy", image: "/images/businessos.png" }
    ]
  },
  zh: {
    hero: "通过精密工程构建卓越的数字化体验。",
    works: "精选作品集",
    all: "全部项目",
    projects: [
      { id: 1, title: "Richcourt Hotel", description: "优化直接预订流程的高端酒店平台。", tags: ["TypeScript", "API"], category: "酒店业", link: "https://richcourt-hotel.vercel.app", github: "https://github.com/Phresy/richcourt-hotel", image: "/images/richcourt.png" },
      { id: 2, title: "Treehouse Restaurant", description: "结合奢华视觉叙事的沉浸式餐饮数字体验。", tags: ["Next.js", "Tailwind"], category: "网页设计", link: "https://treehouse-restaurant.vercel.app", github: "https://github.com/Phresy/treehouse-restaurant", image: "/images/treehouse.png" },
      { id: 3, title: "Passion Clinic", description: "现代医疗生态系统的临床基础设施和医疗管理系统。", tags: ["Next.js", "医疗保健"], category: "基础设施", link: "https://passion-clinic.vercel.app", github: "https://github.com/Phresy/passion-clinic", image: "/images/pc1.png" },
      { id: 4, title: "Fund Education Bridge", description: "致力于通过资金援助和硬件提供支持学生的平台。", tags: ["Next.js", "FinTech"], category: "社会影响力", link: "https://fundedubridge.vercel.app/", github: "https://github.com/Phresy/fundedubridge", image: "/images/fundedu.png" },
      { id: 5, title: "Sua Ade", description: "集成了优质教育 YouTube 内容的儿童互动学习平台。", tags: ["React Native", "教育"], category: "教育科技", link: "https://expo.dev/artifacts/eas/cbjCy9KaGphgMHxWmxhUCa.apk", github: "https://github.com/Phresy/sua-ade", image: "/images/suaade.jpeg"},
      { id: 6, title: "BusinessOS Africa", description: "旨在扩展企业运营的综合 SaaS 生态系统。", tags: ["Next.js", "SaaS"], category: "企业级", link: "#", github: "https://github.com/Phresy", image: "/images/businessos.png" }
    ]
  }
};

export const experience: Record<string, ExperienceItem[]> = {
  en: [
    { year: "2024 — Active", title: "Founding Director", company: "The Laptop Project (NGO)", description: "Equipping underprivileged students with hardware and digital skills to bridge the educational divide.", type: "Impact" },
    { year: "2023 — 2027", title: "BSc. Information Technology", company: "UPSA, Accra", description: "Enterprise system architecture and software engineering studies.", type: "Education" }
  ],
  fr: [
    { year: "2024 — Actif", title: "Directeur Fondateur", company: "The Laptop Project (ONG)", description: "Équiper les étudiants défavorisés en matériel et compétences numériques.", type: "Impact" },
    { year: "2023 — 2027", title: "Licence en TI", company: "UPSA, Accra", description: "Études en architecture de systèmes d'entreprise et génie logiciel.", type: "Education" }
  ],
  es: [
    { year: "2024 — Activo", title: "Director Fundador", company: "The Laptop Project (ONG)", description: "Equipando a estudiantes desfavorecidos con hardware y habilidades digitales.", type: "Impact" },
    { year: "2023 — 2027", title: "Licenciatura en TI", company: "UPSA, Accra", description: "Arquitectura de sistemas empresariales e ingeniería de software.", type: "Education" }
  ],
  de: [
    { year: "2024 — Aktiv", title: "Gründungsdirektor", company: "The Laptop Project (NGO)", description: "Hardware und digitale Kompetenzen für benachteiligte Studierende.", type: "Impact" },
    { year: "2023 — 2027", title: "BSc. Informationstechnologie", company: "UPSA, Accra", description: "Unternehmenssystemarchitektur und Software-Engineering.", type: "Education" }
  ],
  zh: [
    { year: "2024 — 活跃", title: "创始董事", company: "The Laptop Project (NGO)", description: "为贫困学生配备硬件和数字技能，缩小教育差距。", type: "Impact" },
    { year: "2023 — 2027", title: "信息技术学士", company: "UPSA, Accra", description: "企业系统架构和软件工程研究。", type: "Education" }
  ]
};