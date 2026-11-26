import { useState, useEffect } from "react";

// ── VERIFIED PROFILE METADATA ──────────────────────────────────────────
const PROFILE = {
  name: "Abdusalam Oumer",
  fullName: "Abdusalam Oumer Aman",
  title: "Software Engineer & AI Systems Architect",
  tagline: "Founder at Gebere 360 · 3rd-Year Software Engineering at AAU",
  location: "Addis Ababa, Ethiopia",
  coordinates: "9.0227° N, 38.7468° E",
  timezone: "GMT+3",
  phone: "+251934978247",
  phoneDisplay: "+251 934 978 247",
  email: "oumersalah2@gmail.com",
  github: "https://github.com/oumersalah2-cmd",
  linkedin: "https://www.linkedin.com/in/abdusalam-oumer-aman-200291389",
  twitter: "https://x.com/titanic66834",
  telegramChannel: "https://t.me/ggedAbdusay",
  upwork: "https://www.upwork.com/freelancers/~013401fa91baaa52d5",
  leetcode: "https://leetcode.com",
  cvUrl: "/cv.pdf",
};

// ── KEY CREDENTIAL METRICS ─────────────────────────────────────────────
const HIGHLIGHT_METRICS = [
  { value: "20+", label: "Live Systems Shipped", meta: "Production & Deployments" },
  { value: "Year 3", label: "Software Engineering", meta: "Addis Ababa University (AAU)" },
  { value: "METI × EAII", label: "UniPods AI Winner", meta: "Gebere 360 Venture" },
  { value: "INSA Cohort", label: "Full-Stack & App Security", meta: "Software Security Trainee" },
];

// ── TOP NAVIGATION PILLS (FROM SCREENSHOT 2) ───────────────────────────
const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "work", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "algorithmic-foundation", label: "Rigor & Chess" },
  { id: "recognition", label: "Recognition" },
  { id: "notes", label: "Notes" },
];

// ── SECTION 01: SELECTED LIVE PROJECTS ─────────────────────────────────
const LIVE_PROJECTS = [
  {
    id: "lamif-platform",
    num: "01",
    title: "LAMIF Digital Platform",
    category: "Full-Stack Web Monorepo",
    tag: "Live Production Platform",
    status: "Live & Active",
    description:
      "Production-grade educational tutor marketplace monorepo connecting students with qualified instructors. Features role-based JWT authentication, instructor curriculum vetting, verified booking schedules, and automated session coordination.",
    stack: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Vercel"],
    demoUrl: "https://lamif-platfor.me/",
    demoLabel: "Visit Live Platform ↗",
    githubUrl: null,
    githubLabel: null,
    highlights: ["Role-based JWT sessions", "Automated booking schedules", "Responsive React client"],
  },
  {
    id: "hikaya",
    num: "02",
    title: "Hikaya Tour & Travel",
    category: "Production Client Web App",
    tag: "Live Commercial System",
    status: "Live & Active",
    description:
      "Comprehensive travel and tour management web platform featuring custom inquiry and booking workflows, responsive destination showcases, client consultation scheduling, and cross-device performance optimization.",
    stack: ["React / Next.js", "Node.js", "Tailwind CSS", "REST APIs"],
    demoUrl: "https://hikayatourandtravel.com",
    demoLabel: "Visit Live Site ↗",
    githubUrl: null,
    githubLabel: null,
    highlights: ["Custom tour booking flow", "Destination catalog showcases", "Modern mobile-first design"],
  },
  {
    id: "lucy-csr",
    num: "03",
    title: "LUCY CSR — AI Support Resolution",
    category: "AI Support Resolution Platform",
    tag: "Vision Vertex × AAU ISHUB",
    status: "Live & Active",
    description:
      "AI-powered customer service support resolution platform engineered for the Vision Vertex × ISHUB Hackathon at Addis Ababa University. Features automated customer inquiry triage, contextual multi-turn resolution, and real-time support escalation.",
    stack: ["React", "TypeScript", "Node.js", "Express", "AI Support Engine", "PostgreSQL", "Vercel"],
    demoUrl: "https://ishub-hackathon.vercel.app/",
    demoLabel: "Launch Live App ↗",
    githubUrl: null,
    githubLabel: null,
    highlights: ["AI customer support triage", "Contextual resolution workflows", "Live hackathon deployment"],
  },
  {
    id: "aau-cafe-system",
    num: "04",
    title: "AAU Cafe & Stipend Management System",
    category: "Enterprise Campus Engine",
    tag: "Live Production Platform",
    status: "Live Deployed @ AAU",
    description:
      "High-throughput student stipend disbursement and campus dining management engine engineered for Addis Ababa University. Enforces strict ACID database constraints, student meal quota validations, role-based bursary reconciliations, and audit-logged financial disbursements.",
    stack: ["Java / C++", "PostgreSQL", "ACID Constraints", "Enterprise Security", "Linux", "Vercel"],
    demoUrl: "https://addis-ababa-university-cafe-managem.vercel.app/",
    demoLabel: "Launch Live App ↗",
    githubUrl: null,
    githubLabel: null,
    highlights: [
      "ACID meal quota validations",
      "High-concurrency cafeteria throughput",
      "Automated stipend ledger reconciliation",
    ],
  },
  {
    id: "gebere-vision-ai",
    num: "05",
    title: "Gebere Vision AI",
    category: "Applied Computer Vision Bot",
    tag: "METI × EAII UniPods Venture",
    status: "Live on Telegram",
    description:
      "Sub-800ms vision diagnostic bot powered by Groq Llama 3.2 Vision models, funded by METI in collaboration with the Ethiopian Artificial Intelligence Institute (EAII) and UniPods. Delivers localized organic treatments for Ethiopian smallholder farmers in native Amharic and Afaan Oromoo scripts directly within Telegram.",
    stack: ["Groq Llama 3.2 Vision", "Telegram Bot API", "Supabase pgvector", "PostgreSQL"],
    demoUrl: "https://t.me/gebere_vision_bot",
    demoLabel: "Launch Telegram Bot ↗",
    githubUrl: null,
    githubLabel: null,
    highlights: ["Sub-800ms inference time", "Amharic & Afaan Oromoo localization", "Zero-app download required"],
  },
  {
    id: "edubridge",
    num: "06",
    title: "EduBridge",
    category: "AI Accessibility & Inclusive Education",
    tag: "AI Accessibility Platform",
    status: "Open Source Platform",
    description:
      "Inclusive educational accessibility platform engineered to bridge learning gaps for diverse learners. Designed with screen-reader optimizations, high-contrast accessible UI, simplified multi-lingual content pathways, and assistive tools adhering to WCAG standards.",
    stack: ["React", "TypeScript", "Accessibility (WCAG)", "Node.js", "AI Assistance"],
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/oumersalah2-cmd/EduBridge",
    githubLabel: "GitHub Repo ↗",
    highlights: [
      "WCAG accessibility standards compliance",
      "Multi-lingual assistive learning pathways",
      "High-contrast screen-reader optimized UI",
    ],
  },
  {
    id: "ethiobucks",
    num: "07",
    title: "EthioBucks",
    category: "Task-Based Earning & Fintech Architecture",
    tag: "Django Micro-Fintech",
    status: "Production Architecture",
    description:
      "Django web application for task-based earning with multi-tier referral rewards, automated task proof submission pipelines, real-time transaction tracking, and secure mobile money withdrawal request workflows.",
    stack: ["Python 3", "Django", "PostgreSQL", "Tailwind CSS", "REST APIs", "Fintech Rails"],
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/oumersalah2-cmd/EthioBucks",
    githubLabel: "GitHub Repo ↗",
    highlights: [
      "Task-based earning & proof verification",
      "Multi-tier referral rewards engine",
      "Automated transaction tracking & withdrawals",
    ],
  },
  {
    id: "smartbiz-erp",
    num: "08",
    title: "SmartBiz ERP Lite",
    category: "Offline-First Enterprise Engine",
    tag: "Vector Clock Deltas",
    status: "Deterministic Sync PWA",
    description:
      "100% local-first PWA with client-side IndexedDB mutations and deterministic vector-clock synchronization. Eliminates transaction dropouts and reconciles batches without data loss during grid power cuts and cellular blackouts.",
    stack: ["Next.js", "NestJS", "IndexedDB", "Vector Clocks", "PWA"],
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/oumersalah2-cmd",
    githubLabel: "GitHub Repo ↗",
    highlights: ["Offline-first IndexedDB cache", "Vector clock conflict resolution", "Zero data loss during outages"],
  },
];

// ── SECTION 02: WORK & INSTITUTIONAL RIGOR ─────────────────────────────
const WORK_EXPERIENCES = [
  {
    id: "gebere360",
    role: "Founder & Lead Systems Architect",
    company: "Gebere 360",
    period: "2025 — Present",
    tag: "METI × EAII UniPods Funded",
    description:
      "Architecting sub-800ms vision diagnostic pipelines powered by Groq Llama 3.2 Vision models localized for Ethiopian smallholder farmers in native Amharic and Afaan Oromoo scripts directly in Telegram. Funded by METI in collaboration with the Ethiopian Artificial Intelligence Institute (EAII) and UniPods.",
    stack: ["Groq Llama 3.2 Vision", "Node.js", "Supabase pgvector", "PostgreSQL", "Telegram Bot API"],
    link: "https://t.me/gebere_vision_bot",
    linkLabel: "Launch Bot ↗",
  },
  {
    id: "insa-ctc",
    role: "Full-Stack Development Trainee",
    company: "Information Network Security Administration · Internship",
    period: "Jun 2026 — Present · 6 mos",
    location: "Addis Ababa, Ethiopia · Hybrid",
    tag: "Cyber Talent Camp (CTC 5th Batch)",
    description:
      "Currently participating in the Cyber Talent Camp (CTC 5th Batch) training program within the development track. Key areas of focus and ongoing training include:\n• Software Engineering: Training in full-stack web development and mobile app development.\n• DevSecOps & Infrastructure: Gaining hands-on experience with Docker containerization and website security best practices.\n• Cognitive & Personal Growth: Developing strategic logic and problem-solving skills through regular chess training, alongside dedicated modules on self-awareness.",
    stack: ["Full-Stack Development", "DevOps", "Docker", "Software Security", "Mobile Dev", "Chess Strategy"],
    link: "https://www.linkedin.com/in/abdusalam-oumer-a-200291389/",
    linkLabel: "LinkedIn Position ↗",
  },
  {
    id: "sof-omar",
    role: "Software Engineering Intern",
    company: "Sof Omar Technologies",
    period: "Jun 2026 — Sep 2026",
    tag: "Production Engineering",
    description:
      "Shipped production web client features and cross-platform mobile services in an agile engineering sprint cadence with strict CI/CD and unit testing standards.",
    stack: ["Flutter", "Dart", "Node.js", "REST APIs", "Git", "PostgreSQL"],
    link: "https://github.com/oumersalah2-cmd",
    linkLabel: "GitHub ↗",
  },
  {
    id: "aau-research",
    role: "Software Systems Researcher & Engineer",
    company: "Addis Ababa University (AAU)",
    period: "2022 — Present",
    tag: "Software Engineering Core",
    description:
      "Specializing in distributed systems, ACID database constraints, vector-clock synchronization, and high-throughput algorithmic analysis at the Department of Software Engineering (School of Information Technology & Engineering).",
    stack: ["Distributed Systems", "ACID Constraints", "PostgreSQL", "Algorithms", "Java / C++"],
    link: "https://addis-ababa-university-cafe-managem.vercel.app/",
    linkLabel: "Live Deployment ↗",
  },
];

// ── SECTION 04: AWARDS & RECOGNITION ───────────────────────────────────
const RECOGNITIONS = [
  {
    year: "2025",
    title: "METI × EAII Funded UniPods AI Venture Grant",
    organization: "Ministry of Enterprise, Trade & Industry (METI) in collaboration with Ethiopian Artificial Intelligence Institute (EAII) & UniPods",
    category: "Venture Grant & Incubation",
    description:
      "Selected for national AI venture funding, compute access, and executive mentorship to engineer Gebere Vision AI for rural smallholder farmers.",
  },
  {
    year: "2026",
    title: "Vision Vertex × ISHUB Hackathon Finalist — LUCY CSR",
    organization: "Vision Vertex Solutions & Addis Ababa University ISHUB",
    category: "Technical Hackathon Finalist",
    description:
      "Recognized for engineering LUCY CSR, an AI-powered customer support resolution engine with rapid full-stack architecture at Addis Ababa University.",
  },
  {
    year: "2026",
    title: "National Talent Summer Camp Graduate — Full-Stack & Software Security",
    organization: "Information Network Security Administration (INSA)",
    category: "National Engineering Cohort",
    description:
      "Graduated from Ethiopia's premier national summer talent cohort focusing on modern full-stack web engineering, API authentication, and defensive software security standards.",
  },
  {
    year: "2026",
    title: "MIT Universal AI Scholar — All 16 Modules Completed",
    organization: "MIT Open Learning · Prof. Dimitris Bertsimas (Boeing Prof. of Operations Research)",
    category: "Academic Fellowship & Certification",
    description:
      "Completed all 16 graduate modules in Universal AI, mixed-integer programming (MIP), combinatorial optimization, and operations research.",
  },
];

// ── SECTION 05: TECHNOLOGY STACK ───────────────────────────────────────
const TECH_STACK_CATEGORIES = [
  {
    title: "Applied AI & Machine Vision",
    code: "01 // APPLIED AI",
    skills: [
      { name: "Groq AI Vision", badge: "Production" },
      { name: "Llama 3.2 Vision", badge: "Production" },
      { name: "Multilingual Prompting (Amharic/Oromoo)", badge: "Specialized" },
      { name: "pgvector Semantic Search", badge: "Production" },
      { name: "Mixed-Integer Optimization (MIP)", badge: "MIT Certified" },
      { name: "Retrieval-Augmented Generation (RAG)", badge: "Production" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    code: "02 // CONCURRENCY",
    skills: [
      { name: "Node.js & Express", badge: "Production" },
      { name: "TypeScript", badge: "Production" },
      { name: "Python 3 & Django", badge: "Production" },
      { name: "NestJS", badge: "Proficient" },
      { name: "Safaricom Daraja API (M-PESA)", badge: "Fintech Rail" },
      { name: "Telegram Bot API (grammY)", badge: "Production" },
      { name: "Vector Clocks & Offline Sync", badge: "Specialized" },
      { name: "RESTful API Design & JWT", badge: "Production" },
    ],
  },
  {
    title: "Frontend & Mobile Interfaces",
    code: "03 // CLIENT",
    skills: [
      { name: "Next.js (App Router)", badge: "Production" },
      { name: "React 19", badge: "Production" },
      { name: "Tailwind CSS", badge: "Production" },
      { name: "Progressive Web Apps (PWA)", badge: "Production" },
      { name: "Telegram Mini Apps (TMA)", badge: "Production" },
      { name: "Flutter & Dart", badge: "Proficient" },
    ],
  },
  {
    title: "Databases & Persistence",
    code: "04 // PERSISTENCE",
    skills: [
      { name: "PostgreSQL", badge: "ACID Row Locks" },
      { name: "Supabase", badge: "Production" },
      { name: "MongoDB Atlas", badge: "Production" },
      { name: "IndexedDB", badge: "Local-First" },
      { name: "SQLite3", badge: "Embedded" },
      { name: "Prisma ORM", badge: "Production" },
    ],
  },
  {
    title: "Software Security & System Rigor",
    code: "05 // SECURITY",
    skills: [
      { name: "Full-Stack Software Security", badge: "INSA Certified" },
      { name: "OWASP Hardening", badge: "Defensive Coding" },
      { name: "Ubuntu Linux", badge: "Bare-Metal Daily" },
      { name: "Docker", badge: "Production" },
      { name: "Git & GitHub", badge: "Daily Rigor" },
      { name: "Vercel & Render", badge: "Production" },
    ],
  },
];

// ── SECTION 06: EDITORIAL ENGINEERING NOTES ────────────────────────────
const ENGINEERING_NOTES = [
  {
    title: "Deterministic State Synchronization with Vector Clocks in Offline-First PWAs",
    date: "OCT 2026",
    readTime: "7 MIN",
    slug: "vector-clocks-pwa",
    tag: "Distributed State",
    excerpt:
      "A deep dive into reconciling concurrent mutations in low-connectivity retail environments using logical timestamps, causal delta trees, and client-side IndexedDB queues.",
  },
  {
    title: "Sub-800ms Multilingual Vision Inference for Low-Bandwidth Agritech",
    date: "SEP 2026",
    readTime: "6 MIN",
    slug: "sub800ms-vision-agritech",
    tag: "Applied AI",
    excerpt:
      "How Gebere 360 leverages Groq LPU acceleration and structured few-shot Amharic prompt templates to diagnose crop pathogens through Telegram image messages.",
  },
  {
    title: "Defensive Software Security: Hardening Full-Stack Web Architecture Against Modern Threat Vectors",
    date: "AUG 2026",
    readTime: "8 MIN",
    slug: "software-security-hardening",
    tag: "App Security",
    excerpt:
      "Key takeaways from INSA full-stack security training: OWASP Top 10 mitigation, token forgery defense, sanitized data flow patterns, and secure API boundary design.",
  },
];

export default function App() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode as requested
  const [currentTime, setCurrentTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section during scroll to update navigation pill highlight
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const scrollPosition = window.scrollY + 220;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  // ── THEME COLORS (ATTRACTIVE SOFT MIDNIGHT SLATE DARK MODE + PRISTINE LIGHT MODE) ──
  const colors = {
    // Soft deep midnight slate instead of harsh jet black
    bg: isDark ? "#0f1422" : "#f8fafc",
    text: isDark ? "#e2e8f0" : "#1e293b",
    textHeading: isDark ? "#f8fafc" : "#09090b",
    textMuted: isDark ? "#94a3b8" : "#64748b",
    textSub: isDark ? "#cbd5e1" : "#334155",
    cardBg: isDark ? "rgba(18, 24, 38, 0.78)" : "rgba(255, 255, 255, 0.90)",
    cardBorder: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.08)",
    cardHoverBorder: isDark ? "rgba(245, 158, 11, 0.45)" : "rgba(217, 119, 6, 0.45)",
    cardHoverBg: isDark ? "rgba(24, 33, 52, 0.88)" : "rgba(255, 255, 255, 0.96)",
    accent: isDark ? "#f59e0b" : "#d97706",
    accentGlow: isDark ? "rgba(245, 158, 11, 0.22)" : "rgba(217, 119, 6, 0.12)",
    pillBg: isDark ? "rgba(24, 33, 52, 0.86)" : "rgba(241, 245, 249, 0.92)",
    pillBorder: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.08)",
    dockBg: isDark ? "rgba(18, 24, 38, 0.86)" : "rgba(255, 255, 255, 0.90)",
    dockBorder: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.1)",
    ruleBorder: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.08)",
  };

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        lineHeight: 1.65,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        position: "relative",
        transition: "background-color 0.25s ease, color 0.25s ease",
      }}
    >
      {/* ── FULL-SCREEN ATMOSPHERIC BACKDROP (WORKSPACE IN DARK, MOUNTAIN VILLA IN WHITE) ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isDark
            ? `
              linear-gradient(180deg, 
                rgba(12, 16, 28, 0.56) 0%, 
                rgba(12, 16, 28, 0.68) 45%, 
                rgba(12, 16, 28, 0.80) 100%
              ),
              url('/workspace-bg.jpg')
            `
            : `
              linear-gradient(180deg, 
                rgba(248, 250, 252, 0.56) 0%, 
                rgba(248, 250, 252, 0.74) 45%, 
                rgba(248, 250, 252, 0.86) 100%
              ),
              url('/nature-bg.jpg')
            `,
          backgroundPosition: isDark ? "center center" : "center 32%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Full-Screen Atmospheric Radial Ambient Luster */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? `
              radial-gradient(ellipse 80% 55% at 50% 15%, rgba(245, 158, 11, 0.12) 0%, transparent 70%),
              radial-gradient(ellipse 70% 50% at 85% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 65%)
            `
            : `
              radial-gradient(ellipse 80% 55% at 50% 15%, rgba(217, 119, 6, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse 70% 50% at 85% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 65%)
            `,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Full-Screen Subtle Dither Stipple Matrix Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
            : "radial-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── EMBEDDED EDITORIAL STYLES ── */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: ${colors.accent};
          color: ${isDark ? "#0f1422" : "#ffffff"};
        }

        /* Typography */
        .font-mono {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }

        .font-serif {
          font-family: 'Newsreader', Georgia, serif;
          font-optical-sizing: auto;
        }

        /* Editorial Container */
        .page-container {
          max-width: 740px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Section Header Layout */
        .section-header-row {
          width: 100% !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: baseline !important;
          gap: 1rem !important;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid ${colors.ruleBorder};
          margin-bottom: 1.5rem;
          box-sizing: border-box;
        }

        .section-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: ${colors.textHeading};
          display: flex;
          align-items: baseline;
          gap: 9px;
          flex-shrink: 0;
        }

        .section-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.76rem;
          font-weight: 700;
          color: ${colors.accent};
        }

        .section-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          color: ${colors.textMuted};
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: right;
          margin-left: auto;
        }

        /* Clean cards */
        .clean-card {
          background-color: ${colors.cardBg};
          border: 1px solid ${colors.cardBorder};
          border-radius: 8px;
          padding: 1.3rem 1.45rem;
          backdrop-filter: blur(10px);
          box-shadow: ${isDark ? "0 4px 20px rgba(0,0,0,0.35)" : "0 4px 20px rgba(0,0,0,0.03)"};
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease;
        }
        .clean-card:hover {
          background-color: ${colors.cardHoverBg};
          border-color: ${colors.cardHoverBorder};
          transform: translateY(-1px);
        }

        /* Pill badges */
        .pill-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.66rem;
          background-color: ${colors.pillBg};
          border: 1px solid ${colors.pillBorder};
          color: ${colors.textSub};
          padding: 2px 7px;
          border-radius: 4px;
        }

        /* Dock button styles */
        .dock-action {
          color: ${colors.textMuted};
          text-decoration: none;
          transition: color 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .dock-action:hover {
          color: ${colors.accent};
        }

        .dock-icon {
          color: ${colors.textMuted};
          transition: color 0.15s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .dock-icon:hover {
          color: ${colors.accent};
          transform: scale(1.1);
        }

        /* Mobile Phone Optimization: Contact actions prioritized 1st/2nd */
        @media (max-width: 640px) {
          .action-dock-container {
            padding: 12px 14px !important;
            gap: 12px !important;
          }
          .action-dock-actions {
            order: 1 !important;
            width: 100% !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .dock-action-call {
            grid-column: span 1 !important;
            justify-content: center !important;
            background-color: ${colors.accent} !important;
            color: ${isDark ? "#0f1422" : "#ffffff"} !important;
            padding: 8px 10px !important;
            border-radius: 6px !important;
            font-weight: 600 !important;
          }
          .dock-action-email {
            grid-column: span 1 !important;
            justify-content: center !important;
            background-color: ${colors.pillBg} !important;
            border: 1px solid ${colors.pillBorder} !important;
            color: ${colors.textHeading} !important;
            padding: 8px 10px !important;
            border-radius: 6px !important;
            font-weight: 600 !important;
          }
          .dock-action-cv,
          .dock-action-projects {
            grid-column: span 1 !important;
            justify-content: center !important;
            background-color: ${colors.pillBg} !important;
            border: 1px solid ${colors.pillBorder} !important;
            padding: 7px 10px !important;
            border-radius: 6px !important;
          }
          .action-dock-socials {
            order: 2 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            gap: 18px !important;
            border-top: 1px solid ${colors.ruleBorder} !important;
            padding-top: 10px !important;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${colors.bg};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? "#1e293b" : "#cbd5e1"};
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.accent};
        }
      `}</style>

      {/* ── TOP STATUS BAR (FIXED: NEVER WRAPS DATE IN DARK OR LIGHT MODE) ── */}
      <div
        className="page-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1.25rem",
          paddingBottom: "0.75rem",
          fontSize: "0.72rem",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {/* Availability Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "4px 11px",
            borderRadius: "999px",
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            backdropFilter: "blur(10px)",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 8px #10b981",
              flexShrink: 0,
            }}
          />
          <span className="font-mono" style={{ color: colors.textHeading, letterSpacing: "0.02em" }}>
            AVAILABLE FOR ROLES &amp; VENTURES
          </span>
        </div>

        {/* Right Controls: Location, Clock, and Dark/Light Mode Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <div
            className="font-mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: colors.textMuted,
              padding: "4px 11px",
              borderRadius: "999px",
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
            }}
          >
            <span>ADDIS ABABA, ET</span>
            <span style={{ color: colors.cardBorder }}>·</span>
            <span style={{ color: colors.accent, whiteSpace: "nowrap" }}>
              {PROFILE.timezone} · {currentTime || "23:10:00"}
            </span>
          </div>

          {/* Dark / Light Mode Toggle Button with fixed width to prevent wrapping */}
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              width: "78px",
              padding: "4px 0",
              borderRadius: "999px",
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
              color: colors.textHeading,
              cursor: "pointer",
              fontSize: "0.72rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.15s ease",
            }}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <span>{isDark ? "☼" : "🌙"}</span>
            <span className="font-mono" style={{ fontSize: "0.7rem" }}>{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER (SINGLE COLUMN, CENTERED) ────────── */}
      <main className="page-container" style={{ paddingTop: "0.75rem", paddingBottom: "6rem" }}>
        {/* ── HORIZONTAL NAVBAR (ABOVE EVERYTHING ON HOMEPAGE) ── */}
        <nav
          aria-label="Section Navigation"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5rem",
            marginBottom: "1.75rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "6px",
              padding: "6px 10px",
              borderRadius: "999px",
              backgroundColor: isDark ? "rgba(22, 30, 46, 0.85)" : "rgba(241, 245, 249, 0.92)",
              border: `1px solid ${colors.cardBorder}`,
              boxShadow: isDark
                ? "0 4px 20px rgba(0, 0, 0, 0.35)"
                : "0 2px 10px rgba(0, 0, 0, 0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              maxWidth: "100%",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    border: "none",
                    background: isActive
                      ? (isDark ? "rgba(245, 158, 11, 0.22)" : "#ffffff")
                      : "transparent",
                    color: isActive
                      ? (isDark ? colors.accent : "#09090b")
                      : colors.textMuted,
                    boxShadow: isActive
                      ? (isDark ? "0 1px 4px rgba(0,0,0,0.4)" : "0 1px 3px rgba(0,0,0,0.08)")
                      : "none",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = colors.textHeading;
                      e.currentTarget.style.background = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = colors.textMuted;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════════
            HERO SECTION WITH CROPPED CIRCULAR HEADSHOT (SCREENSHOT 3)
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}>
          {/* Identity Header: Circular Headshot (Above Hands) + Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            {/* Cropped Circular Picture */}
            <div
              style={{
                position: "relative",
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                padding: "2.5px",
                background: `linear-gradient(135deg, ${colors.accent}, rgba(245, 158, 11, 0.2))`,
                boxShadow: `0 0 24px ${isDark ? "rgba(245, 158, 11, 0.25)" : "rgba(217, 119, 6, 0.18)"}`,
                flexShrink: 0,
              }}
            >
              <img
                src="/profile.jpg"
                alt="Abdusalam Oumer Aman"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "3px",
                  right: "3px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  border: `2px solid ${colors.bg}`,
                  boxShadow: "0 0 8px #10b981",
                }}
                title="Active"
              />
            </div>

            <div>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2.3rem, 4.4vw, 3.1rem)",
                  fontWeight: 500,
                  color: colors.textHeading,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "0.25rem",
                }}
              >
                {PROFILE.fullName}
              </h1>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.85rem",
                  color: colors.accent,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                {PROFILE.title}
              </div>
            </div>
          </div>

          {/* Punchy First-Person Engineering Narrative */}
          <div
            style={{
              fontSize: "0.98rem",
              lineHeight: 1.74,
              color: colors.textSub,
              display: "flex",
              flexDirection: "column",
              gap: "1.05rem",
              marginBottom: "1.85rem",
            }}
          >
            <p>
              I build systems that thousands of people, farmers, and businesses rely on. As a software engineer who has shipped{" "}
              <strong style={{ color: colors.accent, fontWeight: 600 }}>20+ live production platforms and applications</strong>, I architect reliable distributed systems, offline-first engines, and localized machine intelligence. Right now that&apos;s{" "}
              <strong style={{ color: colors.textHeading, fontWeight: 600 }}>Gebere 360</strong>, localized machine intelligence for agriculture (funded by{" "}
              <strong style={{ color: colors.accent, fontWeight: 600 }}>METI in collaboration with the Ethiopian Artificial Intelligence Institute &amp; UniPods</strong>), where I am the founder and lead systems architect.
            </p>
            <p>
              My engineering combines rigorous Software Engineering education at{" "}
              <strong style={{ color: colors.textHeading, fontWeight: 600 }}>Addis Ababa University</strong> (3rd-year Software Engineering), intensive defensive software security and full-stack engineering training at Ethiopia&apos;s national{" "}
              <strong style={{ color: colors.textHeading, fontWeight: 600 }}>INSA Talent Camp</strong>, and applied operations research via{" "}
              <strong style={{ color: colors.textHeading, fontWeight: 600 }}>MIT Open Learning</strong> under Prof. Dimitris Bertsimas.
            </p>
            <p style={{ color: colors.textMuted }}>
              Building reliable infrastructure and open to challenging technical problems. Come say hi.
            </p>
          </div>

          {/* ── 4 KEY CREDENTIAL METRICS ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "10px",
              marginBottom: "1.75rem",
            }}
          >
            {HIGHLIGHT_METRICS.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 14px",
                  borderRadius: "6px",
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                }}
              >
                <div
                  className="font-mono"
                  style={{ fontSize: "1.05rem", fontWeight: 700, color: colors.accent, lineHeight: 1.2 }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: colors.textHeading, marginTop: "3px" }}>
                  {metric.label}
                </div>
                <div className="font-mono" style={{ fontSize: "0.65rem", color: colors.textMuted }}>
                  {metric.meta}
                </div>
              </div>
            ))}
          </div>

          {/* ── ACTION DOCK (WARM AMBER HOVER & CLEAN SVGS) ── */}
          <div
            className="action-dock-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 16px",
              borderRadius: "8px",
              backgroundColor: colors.dockBg,
              border: `1px solid ${colors.dockBorder}`,
              backdropFilter: "blur(12px)",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {/* Left: Social Icons (GitHub, LinkedIn, X, Telegram, Upwork) */}
            <div className="action-dock-socials" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub: oumersalah2-cmd"
                className="dock-icon"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: Abdusalam Oumer Aman"
                className="dock-icon"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
                title="X / Twitter: @titanic66834"
                className="dock-icon"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href={PROFILE.telegramChannel}
                target="_blank"
                rel="noreferrer"
                title="Telegram: @ggedAbdusay"
                className="dock-icon"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#229ED9">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>

              {/* Upwork */}
              <a
                href={PROFILE.upwork}
                target="_blank"
                rel="noreferrer"
                title="Upwork Profile"
                className="dock-icon"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.254 0-5.46 2.046-6.19 4.341l-.417 1.854C11.13 9.47 9.873 8.358 8.01 8.358c-2.88 0-5.217 2.338-5.217 5.219 0 2.88 2.337 5.217 5.217 5.217 2.88 0 5.217-2.337 5.217-5.217 0-.585-.1-1.146-.282-1.669 1.139.878 2.569 1.411 4.135 1.411 3.864 0 7.008-3.144 7.008-7.009s-3.144-7.009-7.009-7.009z" />
                </svg>
              </a>
            </div>

            {/* Right: Actions */}
            <div className="action-dock-actions" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.78rem", flexWrap: "wrap" }}>
              <a
                href={`tel:${PROFILE.phone}`}
                onClick={copyPhone}
                className="font-mono dock-action dock-action-call"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                title="Call or copy: +251 934 978 247"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A19.93 19.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
                <span>{copiedPhone ? "Copied Phone!" : PROFILE.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                onClick={copyEmail}
                className="font-mono dock-action dock-action-email"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                title="Email or copy: oumersalah2@gmail.com"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>{copiedEmail ? "Copied Email!" : "Email"}</span>
              </a>

              <button
                onClick={() => setCvModalOpen(true)}
                className="font-mono dock-action dock-action-cv"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <span>CV</span>
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="font-mono dock-action dock-action-projects"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>Projects</span>
                <span>↓</span>
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 01: SELECTED LIVE PROJECTS (8 VERIFIED SYSTEMS)
        ════════════════════════════════════════════════════════════════ */}
        <section id="projects" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">01</span>
              <span>Selected Projects</span>
            </div>
            <div className="section-meta">
              8 VERIFIED SYSTEMS · LIVE &amp; PRODUCTION
            </div>
          </div>

          {/* Clean Numbered Projects Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {LIVE_PROJECTS.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="clean-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {/* Header Row: Number, Status & Direct Links */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: colors.accent }}>
                      #{project.num}
                    </span>
                    <span className="pill-tag">{project.tag}</span>
                  </div>

                  {/* Direct Action Links */}
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          backgroundColor: isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(217, 119, 6, 0.1)",
                          color: colors.accent,
                          border: `1px solid ${isDark ? "rgba(245, 158, 11, 0.35)" : "rgba(217, 119, 6, 0.35)"}`,
                          padding: "3px 9px",
                          borderRadius: "4px",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.15s ease",
                        }}
                      >
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: colors.accent }} />
                        {project.demoLabel}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono dock-action"
                        style={{ fontSize: "0.72rem" }}
                      >
                        {project.githubLabel}
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: colors.textHeading, marginBottom: "0.15rem" }}>
                    {project.title}
                  </h3>
                  <div className="font-mono" style={{ fontSize: "0.74rem", color: colors.textMuted }}>
                    {project.category}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.86rem", color: colors.textSub, lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Highlights List */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "0.15rem" }}>
                  {project.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="font-mono" style={{ fontSize: "0.68rem", color: colors.textMuted }}>
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* Stack Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "0.3rem" }}>
                  {project.stack.map((t, idx) => (
                    <span key={idx} className="pill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 02: WORK & INSTITUTIONAL RIGOR (4 ROLES · SINCE 2022)
        ════════════════════════════════════════════════════════════════ */}
        <section id="work" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">02</span>
              <span>Experience</span>
            </div>
            <div className="section-meta">
              4 ROLES · SINCE 2022
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {WORK_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="clean-card"
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                {/* Header: Role & Period */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: colors.textHeading }}>
                      {exp.role}
                    </h3>
                    <div className="font-mono" style={{ fontSize: "0.76rem", color: colors.textMuted }}>
                      {exp.company}
                      {exp.location && (
                        <span style={{ color: colors.textMuted, marginLeft: "6px" }}>
                          · {exp.location}
                        </span>
                      )}
                      {exp.tag && (
                        <span style={{ color: colors.accent, marginLeft: "6px" }}>
                          · {exp.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-mono" style={{ fontSize: "0.7rem", color: colors.textMuted }}>
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <div style={{ fontSize: "0.86rem", color: colors.textSub, marginTop: "0.2rem" }}>
                  {exp.description.includes("•") ? (
                    <div>
                      <p style={{ marginBottom: "0.45rem", lineHeight: 1.58 }}>{exp.description.split("•")[0].trim()}</p>
                      <ul style={{ paddingLeft: "1.2rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        {exp.description
                          .split("•")
                          .slice(1)
                          .map((bullet, bIdx) => (
                            <li key={bIdx} style={{ fontSize: "0.84rem", color: colors.textSub, lineHeight: 1.55 }}>
                              {bullet.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : (
                    <p style={{ lineHeight: 1.58 }}>{exp.description}</p>
                  )}
                </div>

                {/* Tech Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", alignItems: "center", marginTop: "0.4rem" }}>
                  {exp.stack.map((t, idx) => (
                    <span key={idx} className="pill-tag">
                      {t}
                    </span>
                  ))}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono dock-action"
                      style={{ fontSize: "0.72rem", marginLeft: "auto", fontWeight: 600, color: colors.accent }}
                    >
                      {exp.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 03: ALGORITHMIC RIGOR, COMPETITIVE FOUNDATION & CHESS
        ════════════════════════════════════════════════════════════════ */}
        <section id="algorithmic-foundation" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">03</span>
              <span>Algorithmic Foundation</span>
            </div>
            <div className="section-meta">
              DISCIPLINE &amp; PROBLEM SOLVING
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {/* LeetCode & Competitive Programming */}
            <div className="clean-card" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "1.1rem" }}>⚡</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: colors.textHeading }}>
                    Competitive Programming &amp; LeetCode
                  </h3>
                </div>
                <span className="pill-tag">Data Structures &amp; Algorithms</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: colors.textSub, lineHeight: 1.6 }}>
                Maintain a disciplined daily regimen of solving complex algorithmic challenges across LeetCode, Codeforces, and HackerRank. Focus on dynamic programming, graph invariants, bitwise manipulation, and combinatorial branch-and-bound optimization.
              </p>
              <div className="font-mono" style={{ fontSize: "0.72rem", color: colors.accent, marginTop: "auto", paddingTop: "0.3rem" }}>
                → Guarantees optimal O(n log n) and O(1) runtime bounds in production architectures.
              </div>
            </div>

            {/* Chess & Strategic Theory */}
            <div className="clean-card" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "1.1rem" }}>♟️</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: colors.textHeading }}>
                    Chess &amp; Strategic Calculation
                  </h3>
                </div>
                <span className="pill-tag">Cognitive Discipline</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: colors.textSub, lineHeight: 1.6 }}>
                Active competitive chess practitioner. Translates multi-ply calculation depth, prophylactic analysis (anticipating edge-case failure modes), and positional evaluation into architecting fault-tolerant distributed consensus and offline-first state machines.
              </p>
              <div className="font-mono" style={{ fontSize: "0.72rem", color: colors.accent, marginTop: "auto", paddingTop: "0.3rem" }}>
                → Prophylactic thinking applied to zero-downtime, conflict-free state transitions.
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 04: HONORS & FELLOWSHIPS
        ════════════════════════════════════════════════════════════════ */}
        <section id="recognition" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">04</span>
              <span>Recognition</span>
            </div>
            <div className="section-meta">
              4 HONORS &amp; GRANTS
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {RECOGNITIONS.map((item, idx) => (
              <div key={idx} className="clean-card" style={{ padding: "1.1rem 1.3rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "0.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: colors.accent }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontSize: "0.96rem", fontWeight: 600, color: colors.textHeading }}>
                      {item.title}
                    </h3>
                  </div>
                  <span className="pill-tag">{item.category}</span>
                </div>
                <div className="font-mono" style={{ fontSize: "0.74rem", color: colors.textMuted, marginBottom: "0.35rem" }}>
                  {item.organization}
                </div>
                <p style={{ fontSize: "0.84rem", color: colors.textSub, lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 05: TECHNOLOGY STACK & CAPABILITIES
        ════════════════════════════════════════════════════════════════ */}
        <section id="stack" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">05</span>
              <span>Stack &amp; Runtimes</span>
            </div>
            <div className="section-meta">
              PRODUCTION CAPABILITIES
            </div>
          </div>

          <div style={{ display: "grid", gap: "1rem" }}>
            {TECH_STACK_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="clean-card" style={{ padding: "1.1rem 1.3rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem" }}>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: colors.textHeading }}>
                    {cat.title}
                  </h3>
                  <span className="font-mono" style={{ fontSize: "0.66rem", color: colors.textMuted }}>
                    {cat.code}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 8px",
                        backgroundColor: colors.pillBg,
                        border: `1px solid ${colors.pillBorder}`,
                        borderRadius: "4px",
                        fontSize: "0.74rem",
                      }}
                    >
                      <span style={{ color: colors.textHeading, fontWeight: 500 }}>{skill.name}</span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.6rem",
                          color: skill.badge.includes("Production") || skill.badge.includes("Certified") ? colors.accent : colors.textMuted,
                        }}
                      >
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 06: EDITORIAL ENGINEERING NOTES
        ════════════════════════════════════════════════════════════════ */}
        <section id="notes" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">06</span>
              <span>Engineering Notes</span>
            </div>
            <div className="section-meta">
              TECHNICAL MONOGRAPHS
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {ENGINEERING_NOTES.map((note, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{ padding: "1.15rem 1.35rem", cursor: "pointer" }}
                onClick={() => setActiveNote(activeNote === note.slug ? null : note.slug)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "0.3rem" }}>
                  <span className="pill-tag">{note.tag}</span>
                  <span className="font-mono" style={{ fontSize: "0.68rem", color: colors.textMuted }}>
                    {note.date} · {note.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: colors.textHeading, marginBottom: "0.3rem" }}>
                  {note.title}
                </h3>
                <p style={{ fontSize: "0.84rem", color: colors.textMuted, lineHeight: 1.5 }}>
                  {note.excerpt}
                </p>
                {activeNote === note.slug && (
                  <div
                    style={{
                      marginTop: "0.75rem",
                      paddingTop: "0.75rem",
                      borderTop: `1px solid ${colors.ruleBorder}`,
                      fontSize: "0.82rem",
                      color: colors.textSub,
                      lineHeight: 1.55,
                    }}
                  >
                    Full engineering monograph and benchmarks available in the GitHub repository and Telegram research series @ggedAbdusay.
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 07: TRANSMISSION & DIRECT CONTACT
        ════════════════════════════════════════════════════════════════ */}
        <section id="contact" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
          <div className="section-header-row">
            <div className="section-title">
              <span className="section-num">07</span>
              <span>Contact</span>
            </div>
            <div className="section-meta">
              START A CONVERSATION
            </div>
          </div>

          <div className="clean-card" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "1.08rem", fontWeight: 600, color: colors.textHeading, marginBottom: "0.35rem" }}>
              Have an engineering challenge or venture opportunity?
            </div>
            <p style={{ fontSize: "0.88rem", color: colors.textMuted, lineHeight: 1.6, marginBottom: "1.25rem" }}>
              I am available for senior full-stack engineering roles, applied AI systems consulting, and technical advisory. Reach out directly via phone, email, LinkedIn, or Telegram.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              {/* Copy Phone Button */}
              <button
                onClick={copyPhone}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.accent,
                  color: isDark ? "#0f1422" : "#ffffff",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.accent}`,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A19.93 19.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
                <span>{copiedPhone ? "✓ Copied Phone!" : `Call: ${PROFILE.phoneDisplay}`}</span>
              </button>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textHeading,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>{copiedEmail ? "✓ Copied Email!" : PROFILE.email}</span>
              </button>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>LinkedIn ↗</span>
              </a>

              {/* X / Twitter */}
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X: @titanic66834 ↗</span>
              </a>

              {/* Telegram */}
              <a
                href={PROFILE.telegramChannel}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#229ED9">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                <span>Telegram: @ggedAbdusay ↗</span>
              </a>

              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub ↗</span>
              </a>

              {/* FlowCV Modal Button */}
              <button
                onClick={() => setCvModalOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <span>Download CV (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────────── */}
        <footer
          style={{
            paddingTop: "2.5rem",
            borderTop: `1px solid ${colors.ruleBorder}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.74rem",
            color: colors.textMuted,
          }}
        >
          <div className="font-mono">
            © 2026 Abdusalam Oumer Aman · Software Engineering @ AAU · Addis Ababa, Ethiopia
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="font-mono dock-action" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="font-mono dock-action" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="font-mono dock-action" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X</span>
            </a>
            <a href={PROFILE.telegramChannel} target="_blank" rel="noreferrer" className="font-mono dock-action" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#229ED9">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              <span>Telegram</span>
            </a>
            <a href={PROFILE.upwork} target="_blank" rel="noreferrer" className="font-mono dock-action" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.254 0-5.46 2.046-6.19 4.341l-.417 1.854C11.13 9.47 9.873 8.358 8.01 8.358c-2.88 0-5.217 2.338-5.217 5.219 0 2.88 2.337 5.217 5.217 5.217 2.88 0 5.217-2.337 5.217-5.217 0-.585-.1-1.146-.282-1.669 1.139.878 2.569 1.411 4.135 1.411 3.864 0 7.008-3.144 7.008-7.009s-3.144-7.009-7.009-7.009z" />
              </svg>
              <span>Upwork</span>
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono dock-action"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Back to Top ↑
            </button>
          </div>
        </footer>
      </main>

      {/* ── FLOWCV VERIFIED RESUME MODAL ─────────────────────────────── */}
      {cvModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="clean-card"
            style={{
              maxWidth: "580px",
              width: "100%",
              padding: "1.75rem",
              backgroundColor: isDark ? "#121825" : "#ffffff",
              border: `1px solid ${isDark ? "rgba(245, 158, 11, 0.25)" : "rgba(217, 119, 6, 0.35)"}`,
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.95)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.7rem", color: colors.accent }}>
                  OFFICIAL CURRICULUM VITAE // 2026
                </span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: colors.textHeading, marginTop: "2px" }}>
                  Abdusalam Oumer Aman
                </h3>
              </div>
              <button
                onClick={() => setCvModalOpen(false)}
                className="font-mono dock-action"
                style={{ background: "none", border: "none", fontSize: "0.85rem", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "0.85rem", color: colors.textSub, lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Verified FlowCV edition detailing Software Engineering at Addis Ababa University (Year 3, 20+ shipped live systems), INSA National Talent Camp (Full-Stack &amp; Software Security), and MIT Open Learning Universal AI.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href={PROFILE.cvUrl}
                download="Abdusalam_Oumer_Aman_FlowCV_Resume.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: colors.accent,
                  color: isDark ? "#0f1422" : "#ffffff",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.accent}`,
                  textDecoration: "none",
                }}
              >
                📥 Download PDF
              </a>
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: colors.pillBg,
                  color: colors.textSub,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.pillBorder}`,
                  textDecoration: "none",
                }}
              >
                ↗ Open PDF in Tab
              </a>
              <button
                onClick={() => setCvModalOpen(false)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: `1px solid ${colors.pillBorder}`,
                  color: colors.textMuted,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DISCRETE FLOATING BACK-TO-TOP BUTTON ── */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to Top"
          style={{
            position: "fixed",
            bottom: "22px",
            right: "22px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            borderRadius: "999px",
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 15px rgba(0,0,0,0.08)",
            color: colors.textHeading,
            fontSize: "0.75rem",
            fontWeight: 600,
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "all 0.15s ease",
          }}
          title="Back to Top"
        >
          <span>↑</span>
          <span className="font-mono">Top</span>
        </button>
      )}
    </div>
  );
}
