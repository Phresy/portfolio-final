export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
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
      { id: 1, title: "BusinessOS Africa", description: "A comprehensive SaaS ecosystem designed to scale enterprise operations across the continent.", tags: ["Next.js", "SaaS", "PostgreSQL"], category: "Enterprise", link: "#", image: "/images/businessos.png" },
      { id: 2, title: "Prospixel Digital", description: "A premium agency specializing in high-performance UI/UX and bespoke digital solutions.", tags: ["React", "Motion", "Branding"], category: "Agency", link: "https://prospixel.digital", image: "/images/prospixel.png" },
      { id: 3, title: "Fund Education Bridge", description: "A platform dedicated to supporting students through financial aid and hardware provision.", tags: ["Next.js", "FinTech", "Impact"], category: "Impact", link: "https://fundedubridge.vercel.app/", image: "/images/fundedu.png" },
      { id: 4, title: "Clean Waste Cycle", description: "Dedicated platform for sustainable e-waste collection and environmental recycling management.", tags: ["React", "Sustainability"], category: "Impact", link: "https://cleanwastecycle.netlify.app", image: "/images/cleanwaste.png" },
      { id: 5, title: "Treehouse Restaurant", description: "Immersive digital experience for a luxury culinary brand, featuring seamless reservation flows.", tags: ["Next.js", "Tailwind"], category: "Web Design", link: "https://treehouse-restaurant.vercel.app", image: "/images/treehouse.png" },
      { id: 6, title: "Richcourt Hotel", description: "Sophisticated hospitality platform optimizing direct bookings and guest management.", tags: ["TypeScript", "API"], category: "Hospitality", link: "https://richcourt-hotel.vercel.app", image: "/images/richcourt.png" },
      { id: 7, title: "CheesyBlog", description: "Minimalist editorial engine focused on rapid content delivery and clean typography.", tags: ["Next.js", "Sanity.io"], category: "Full-Stack", link: "https://cheesyblog.netlify.app", image: "/images/blog.png" }
    ]
  },
  fr: {
    hero: "L'ingénierie de précision au service de l'excellence numérique.",
    works: "Portfolio Sélectionné",
    all: "Tous les Projets",
    projects: [
      { id: 1, title: "BusinessOS Africa", description: "Écosystème SaaS complet conçu pour mettre à l'échelle les opérations des entreprises.", tags: ["Next.js", "SaaS"], category: "Entreprise", link: "#", image: "/images/businessos.png" },
      { id: 2, title: "Prospixel Digital", description: "Agence premium spécialisée dans l'UI/UX haute performance et les solutions sur mesure.", tags: ["React", "Motion"], category: "Agence", link: "https://prospixel.digital", image: "/images/prospixel.png" },
      { id: 3, title: "Fund Education Bridge", description: "Plateforme dédiée au soutien des étudiants par l'aide financière et la fourniture de matériel.", tags: ["Next.js", "FinTech"], category: "Impact", link: "https://fundedubridge.vercel.app/", image: "/images/fundedu.png" },
      { id: 4, title: "Clean Waste Cycle", description: "Plateforme dédiée à la collecte durable des e-déchets et au recyclage.", tags: ["React", "Durabilité"], category: "Impact", link: "https://cleanwastecycle.netlify.app", image: "/images/cleanwaste.png" },
      { id: 5, title: "Treehouse Restaurant", description: "Expérience numérique immersive pour une marque culinaire de luxe.", tags: ["Next.js", "Tailwind"], category: "Design Web", link: "https://treehouse-restaurant.vercel.app", image: "/images/treehouse.png" },
      { id: 6, title: "Richcourt Hotel", description: "Plateforme hôtelière sophistiquée optimisant les flux de réservation.", tags: ["TypeScript", "API"], category: "Hôtellerie", link: "https://richcourt-hotel.vercel.app", image: "/images/richcourt.png" },
      { id: 7, title: "CheesyBlog", description: "Moteur éditorial minimaliste axé sur la diffusion rapide de contenu.", tags: ["Next.js", "Sanity.io"], category: "Full-Stack", link: "https://cheesyblog.netlify.app", image: "/images/blog.png" }
    ]
  },
  es: {
    hero: "Arquitectando la excelencia digital mediante ingeniería de precisión.",
    works: "Portafolio Seleccionado",
    all: "Todos los Proyectos",
    projects: [
      { id: 1, title: "BusinessOS Africa", description: "Ecosistema SaaS integral diseñado para escalar operaciones empresariales.", tags: ["Next.js", "SaaS"], category: "Empresa", link: "#", image: "/images/businessos.png" },
      { id: 2, title: "Prospixel Digital", description: "Agencia premium especializada en UI/UX de alto rendimiento y soluciones digitales.", tags: ["React", "Motion"], category: "Agencia", link: "https://prospixel.digital", image: "/images/prospixel.png" },
      { id: 3, title: "Fund Education Bridge", description: "Plataforma dedicada a apoyar a estudiantes mediante ayuda financiera y provisión de hardware.", tags: ["Next.js", "FinTech"], category: "Impacto", link: "https://fundedubridge.vercel.app/", image: "/images/fundedu.png" },
      { id: 4, title: "Clean Waste Cycle", description: "Plataforma dedicada a la recogida de residuos electrónicos y reciclaje sostenible.", tags: ["React", "Sostenibilidad"], category: "Impacto", link: "https://cleanwastecycle.netlify.app", image: "/images/cleanwaste.png" },
      { id: 5, title: "Treehouse Restaurant", description: "Experiencia digital inmersiva para una marca culinaria de lujo.", tags: ["Next.js", "Tailwind"], category: "Diseño Web", link: "https://treehouse-restaurant.vercel.app", image: "/images/treehouse.png" },
      { id: 6, title: "Richcourt Hotel", description: "Plataforma de hospitalidad sofisticada que optimiza reservas directas.", tags: ["TypeScript", "API"], category: "Hospitalidad", link: "https://richcourt-hotel.vercel.app", image: "/images/richcourt.png" },
      { id: 7, title: "CheesyBlog", description: "Motor editorial minimalista centrado en la entrega rápida de contenido.", tags: ["Next.js", "Sanity.io"], category: "Full-Stack", link: "https://cheesyblog.netlify.app", image: "/images/blog.png" }
    ]
  },
  de: {
    hero: "Digitale Exzellenz durch Präzisionstechnik und Design.",
    works: "Ausgewähltes Portfolio",
    all: "Alle Projekte",
    projects: [
      { id: 1, title: "BusinessOS Africa", description: "Umfassendes SaaS-Ökosystem zur Skalierung von Unternehmensabläufen.", tags: ["Next.js", "SaaS"], category: "Unternehmen", link: "#", image: "/images/businessos.png" },
      { id: 2, title: "Prospixel Digital", description: "Premium-Agentur für High-End UI/UX und maßgeschneiderte digitale Lösungen.", tags: ["React", "Motion"], category: "Agentur", link: "https://prospixel.digital", image: "/images/prospixel.png" },
      { id: 3, title: "Fund Education Bridge", description: "Plattform zur Unterstützung von Studenten durch finanzielle Hilfe und Hardware.", tags: ["Next.js", "FinTech"], category: "Impact", link: "https://fundedubridge.vercel.app/", image: "/images/fundedu.png" },
      { id: 4, title: "Clean Waste Cycle", description: "Plattform für nachhaltige Elektroschrott-Sammlung und Recycling.", tags: ["React", "Nachhaltigkeit"], category: "Impact", link: "https://cleanwastecycle.netlify.app", image: "/images/cleanwaste.png" },
      { id: 5, title: "Treehouse Restaurant", description: "Immersives digitales Erlebnis für eine luxuriöse kulinarische Marke.", tags: ["Next.js", "Tailwind"], category: "Webdesign", link: "https://treehouse-restaurant.vercel.app", image: "/images/treehouse.png" },
      { id: 6, title: "Richcourt Hotel", description: "Anspruchsvolle Hospitality-Plattform zur Optimierung von Buchungsabläufen.", tags: ["TypeScript", "API"], category: "Hotellerie", link: "https://richcourt-hotel.vercel.app", image: "/images/richcourt.png" },
      { id: 7, title: "CheesyBlog", description: "Minimalistische Editorial-Engine mit Fokus auf schnelle Inhaltsbereitstellung.", tags: ["Next.js", "Sanity.io"], category: "Full-Stack", link: "https://cheesyblog.netlify.app", image: "/images/blog.png" }
    ]
  },
  zh: {
    hero: "通过精密工程构建卓越的数字化体验。",
    works: "精选作品集",
    all: "全部项目",
    projects: [
      { id: 1, title: "BusinessOS Africa", description: "旨在扩展企业运营的综合 SaaS 生态系统。", tags: ["Next.js", "SaaS"], category: "企业级", link: "#", image: "/images/businessos.png" },
      { id: 2, title: "Prospixel Digital", description: "专注于高性能 UI/UX 和定制数字化方案的高端机构。", tags: ["React", "Motion"], category: "机构", link: "https://prospixel.digital", image: "/images/prospixel.png" },
      { id: 3, title: "Fund Education Bridge", description: "致力于通过资金援助和硬件提供支持学生的平台。", tags: ["Next.js", "FinTech"], category: "社会影响力", link: "https://fundedubridge.vercel.app/", image: "/images/fundedu.png" },
      { id: 4, title: "Clean Waste Cycle", description: "专门用于可持续电子垃圾收集和环境回收管理的平台。", tags: ["React", "可持续性"], category: "社会影响力", link: "https://cleanwastecycle.netlify.app", image: "/images/cleanwaste.png" },
      { id: 5, title: "Treehouse Restaurant", description: "结合奢华视觉叙事的沉浸式餐饮数字体验。", tags: ["Next.js", "Tailwind"], category: "网页设计", link: "https://treehouse-restaurant.vercel.app", image: "/images/treehouse.png" },
      { id: 6, title: "Richcourt Hotel", description: "优化直接预订流程的高端酒店平台。", tags: ["TypeScript", "API"], category: "酒店业", link: "https://richcourt-hotel.vercel.app", image: "/images/richcourt.png" },
      { id: 7, title: "CheesyBlog", description: "专注于快速内容交付和极简排版的博客引擎。", tags: ["Next.js", "Sanity.io"], category: "全栈开发", link: "https://cheesyblog.netlify.app", image: "/images/blog.png" }
    ]
  }
};

export const experience: Record<string, ExperienceItem[]> = {
  en: [
    { year: "2023 — Present", title: "Founder & Creative Lead", company: "Prospixel Digital", description: "Directing a boutique agency providing high-end UI/UX and engineering solutions for global clients.", type: "Venture" },
    { year: "2024 — Active", title: "Founding Director", company: "The Laptop Project (NGO)", description: "Equipping underprivileged students with hardware and digital skills to bridge the educational divide.", type: "Impact" },
    { year: "2023 — 2027", title: "BSc. Information Technology", company: "UPSA, Accra", description: "Enterprise system architecture and software engineering studies.", type: "Education" }
  ],
  fr: [
    { year: "2023 — Présent", title: "Fondateur et Directeur Créatif", company: "Prospixel Digital", description: "Direction d'une agence boutique fournissant des solutions UI/UX et d'ingénierie haut de gamme.", type: "Venture" },
    { year: "2024 — Actif", title: "Directeur Fondateur", company: "The Laptop Project (ONG)", description: "Équiper les étudiants défavorisés en matériel et compétences numériques.", type: "Impact" },
    { year: "2023 — 2027", title: "Licence en TI", company: "UPSA, Accra", description: "Études en architecture de systèmes d'entreprise et génie logiciel.", type: "Education" }
  ],
  es: [
    { year: "2023 — Presente", title: "Fundador y Director Creativo", company: "Prospixel Digital", description: "Dirigiendo una agencia boutique que ofrece soluciones de ingeniería y UI/UX de alto nivel.", type: "Venture" },
    { year: "2024 — Activo", title: "Director Fundador", company: "The Laptop Project (ONG)", description: "Equipando a estudiantes desfavorecidos con hardware y habilidades digitales.", type: "Impact" },
    { year: "2023 — 2027", title: "Licenciatura en TI", company: "UPSA, Accra", description: "Arquitectura de sistemas empresariales e ingeniería de software.", type: "Education" }
  ],
  de: [
    { year: "2023 — Heute", title: "Gründer & Creative Lead", company: "Prospixel Digital", description: "Leitung einer Boutique-Agentur für High-End UI/UX- und Engineering-Lösungen.", type: "Venture" },
    { year: "2024 — Aktiv", title: "Gründungsdirektor", company: "The Laptop Project (NGO)", description: "Hardware und digitale Kompetenzen für benachteiligte Studierende.", type: "Impact" },
    { year: "2023 — 2027", title: "BSc. Informationstechnologie", company: "UPSA, Accra", description: "Unternehmenssystemarchitektur und Software-Engineering.", type: "Education" }
  ],
  zh: [
    { year: "2023 — 至今", title: "创始人兼创意总监", company: "Prospixel Digital", description: "指导一家为全球客户提供高端 UI/UX 和 engineering 解决方案的精品代理机构。", type: "Venture" },
    { year: "2024 — 活跃", title: "创始董事", company: "The Laptop Project (NGO)", description: "为贫困学生配备硬件和数字技能，缩小教育差距。", type: "Impact" },
    { year: "2023 — 2027", title: "信息技术学士", company: "UPSA, Accra", description: "企业系统架构和软件工程研究。", type: "Education" }
  ]
};