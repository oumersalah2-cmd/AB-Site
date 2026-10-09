import { useState, useEffect, useRef } from "react";

// ── BRAND & CORE METADATA ──────────────────────────────────────────────
const PROFILE = {
  name: "Abdusalam Oumer Aman",
  handle: "oumersalah2-cmd",
  title: "Software Engineering at AAU · INSA Cyber Talent Graduate · Applied AI Founder",
  headline: "Full-Stack Engineer | Specialized in Production-Ready Systems",
  heroPunchline: "Building localized, production-ready AI systems for Ethiopian infrastructure.",
  email: "oumersalah2@gmail.com",
  phone: "+251934978247",
  birthDate: "May 21, 2006",
  portfolioUrl: "https://ab-site-tawny.vercel.app/",
  github: "https://github.com/oumersalah2-cmd",
  upwork: "https://www.upwork.com/freelancers/~01d02c68660140f622",
  twitter: "https://x.com/titanic66834",
  twitterHandle: "@titanic66834",
  telegramChannel: "https://t.me/ggedAbdusay",
  telegramChannelName: "Unplugged Me",
  cvUrl: "/cv.pdf",
  location: "Addis Ababa, Ethiopia",
  institution: "Addis Ababa University (AAU)",
  securityTraining: "INSA National Cyber Talent Camp Graduate",
};

// ── 5 CLEAR PORTFOLIO PAGES / SECTIONS ────────────────────────────────
const NAV_ITEMS = [
  { id: "profile", label: "01. Profile & Manifesto" },
  { id: "projects", label: "02. Selected Projects" },
  { id: "stack", label: "03. Tech Stack" },
  { id: "credentials", label: "04. Foundations & Certs" },
  { id: "contact", label: "05. Connect & CV" },
];

// ── COMPREHENSIVE CREDENTIALS & CERTIFICATIONS (5 IN PLACE) ───────────
const CREDENTIALS_AND_CERTS = [
  {
    id: "mit-ai",
    badge: "AI FLUENCY // APPLIED OPTIMIZATION",
    title: "Introduction to Universal AI (Completed) & Ongoing Applied AI Studies",
    authority: "MIT Open Learning",
    date: "Completed Oct 7, 2026 · Ongoing Studies",
    sponsor: "Prof. Dimitris Bertsimas (MIT Vice Provost for Open Learning & Boeing Professor of Operations Research)",
    summary:
      "Mathematical optimization, mixed-integer formulations, transformer architectures, and applied operations research for resource allocation. Introduction completed, currently pursuing applied AI extensions.",
    skills: ["Decision Algorithms", "Transformer Architectures", "Combinatorial Optimization", "Operations Research"],
  },
  {
    id: "insa-sec",
    badge: "SYSTEMS SECURITY // NATIONAL CYBER CAMP",
    title: "National Ethio Cyber Talent Summer Camp Graduate",
    authority: "Information Network Security Administration (INSA)",
    date: "Jul 2026 – Nov 2026",
    sponsor: "National Systems Architecture & Defense Division",
    summary:
      "Intensive national talent training in defensive cybersecurity, network intrusion containment, Linux kernel auditing, and cryptographic ledger integrity.",
    skills: ["Defensive Cybersecurity", "Linux Kernel Audits", "Cryptographic Ledgers", "Systems Architecture"],
  },
  {
    id: "aau-se",
    badge: "ACADEMIC CORE // ADDIS ABABA UNIVERSITY",
    title: "B.Sc. in Software Engineering (Year 3 / Junior)",
    authority: "Addis Ababa University (AAU)",
    date: "2022 – Present (Junior Standing)",
    sponsor: "School of Information Technology & Engineering",
    summary:
      "Core theoretical systems engineering, relational database constraints (ACID isolation), distributed systems, and algorithmic analysis.",
    skills: ["Distributed Systems", "ACID Database Constraints", "Algorithms & Complexity", "AAU Dining Ledger"],
  },
  {
    id: "sof-omar",
    badge: "INDUSTRY EXPERIENCE // PRODUCTION ENGINEERING",
    title: "Software Engineering Internship Certificate",
    authority: "Sof Omar Technologies",
    date: "Jun 2026 – Sep 2026",
    sponsor: "Engineering & Mobile Systems Team",
    summary:
      "Shipped production web and mobile software features in an agile engineering team with strict code quality and deployment standards.",
    skills: ["Full-Stack Web", "Flutter / Dart", "Production Deployments", "Agile Sprints"],
  },
  {
    id: "udacity-android",
    badge: "MOBILE & FOUNDATIONS // UDACITY",
    title: "Android Developer & Programming Fundamentals",
    authority: "Udacity",
    date: "Sep 2025",
    sponsor: "Google & Udacity Curriculum",
    summary:
      "Core object-oriented software engineering principles, native mobile architecture, asynchronous workflows, and clean code patterns.",
    skills: ["Android Architecture", "Java / Kotlin", "OOP Principles", "REST API Consumption"],
  },
];

// ── FOUNDER PRODUCTS (BRIEF, CRISP EXPLANATIONS) ──────────────────────
const PRODUCTS = [
  {
    id: "gebere-vision-ai",
    title: "Gebere Vision AI",
    subhead: "Multilingual Agricultural Vision Diagnostic Bot",
    role: "Founder & Lead Architect",
    recognition: "Selected for METI-Funded UniPods AI Programme",
    languages: "Amharic (አማርኛ), Afaan Oromoo, English, Arabic",
    status: "Active Deployment",
    brief:
      "Sub-800ms Telegram bot powered by Groq Llama 3.2 Vision models with prompt instructions grounded in Ethiopian crops, returning localized organic treatments in native scripts to rural smallholder farmers.",
    stack: ["Groq AI Vision", "Telegram Bot API", "Supabase pgvector", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Inference Latency", value: "< 800ms via Groq" },
      { label: "Languages", value: "4 Dialects (Amharic, Oromoo, EN, AR)" },
      { label: "Programme", value: "METI UniPods AI Funded" },
    ],
    demoUrl: "https://t.me/gebere_vision_bot",
    demoLabel: "Launch Telegram Bot ↗",
    githubUrl: "https://github.com/oumersalah2-cmd/gebere-vision-ai",
  },
  {
    id: "amanatrade",
    title: "AmanaTrade",
    subhead: "Offline-First B2B Escrow & Wholesale Platform",
    role: "Full-Stack Architect",
    recognition: "B2B Supply Chain & M-PESA Wholesale",
    languages: "Amharic & English UX",
    status: "Active Architecture",
    brief:
      "Offline-first B2B platform designed to digitize supply chains and drive M-PESA adoption for wholesale transactions across Ethiopia. Solves regional counterparty trust deficits and unstable internet connectivity through milestone-based escrow, automated transaction settlements, and Safaricom Daraja API integration.",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Safaricom Daraja API",
      "M-PESA Integration",
      "Offline-First Architecture",
    ],
    metrics: [
      { label: "Trust Engine", value: "Milestone Escrow" },
      { label: "Payment Rail", value: "Safaricom Daraja API (M-PESA)" },
      { label: "Fault-Tolerance", value: "Offline-First Architecture" },
    ],
    githubUrl: "https://github.com/oumersalah2-cmd/Amana-Trading-",
  },
  {
    id: "smartbiz-erp",
    title: "SmartBiz ERP Lite",
    subhead: "Offline-First Enterprise State & POS Engine",
    role: "Architect & Systems Engineer",
    recognition: "Production Merchant Architecture",
    languages: "English, Amharic Numerics, ETB Ledger",
    status: "V2 In Production",
    brief:
      "100% local-first PWA with client-side IndexedDB mutations and deterministic vector-clock sync that eliminates transaction dropouts and reconciles batches without data loss during grid power cuts and cellular blackouts.",
    stack: ["Next.js (App Router)", "NestJS", "IndexedDB", "TypeScript", "PostgreSQL", "PWA"],
    metrics: [
      { label: "Checkout Latency", value: "0ms Local First" },
      { label: "State Layer", value: "IndexedDB + Reactive Cache" },
      { label: "Sync Engine", value: "Vector Clock Deltas" },
    ],
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/oumersalah2-cmd",
  },
  {
    id: "ace-ifa-boru",
    title: "Ace-Ifa-Boru",
    subhead: "Premium Telegram Mini App (TMA) & Exam Prep Platform",
    role: "Full-Stack Engineer & Bot Architect",
    recognition: "Native Telegram Mini App (TMA)",
    languages: "Afaan Oromoo & English UX",
    status: "Production Live",
    brief:
      "Production-ready secondary school exam preparation platform built as a native Telegram Mini App (TMA). Features responsive Oromo-centric UI, anti-leak content and screenshot protection, practice vs timed exam modes, and subscription verification via Telegram bot admin commands.",
    stack: [
      "Next.js 14",
      "Telegram Mini App SDK",
      "TypeScript",
      "Express",
      "grammY",
      "Prisma ORM",
      "PostgreSQL (Supabase)",
    ],
    metrics: [
      { label: "Platform", value: "Native Telegram Mini App (TMA)" },
      { label: "Security", value: "Anti-Leak Content Protection" },
      { label: "Database", value: "PostgreSQL on Supabase" },
    ],
    demoUrl: "https://ace-ifa-boru-frontend.vercel.app",
    demoLabel: "Launch TMA Platform ↗",
    githubUrl: "https://github.com/oumersalah2-cmd/Ace-Ifa-Boru",
  },
  {
    id: "lamif-platform",
    title: "LAMIF Educational Platform",
    subhead: "Full-Stack Tutor Marketplace & Monorepo Platform",
    role: "Full-Stack Engineer",
    recognition: "Live Monorepo Production Platform",
    languages: "English, Amharic UX",
    status: "Production Live",
    brief:
      "Full-stack monorepo platform connecting students with qualified tutors. Features role-based JWT auth, CV uploads, and session booking.",
    stack: ["React 19 (Vite)", "Node.js", "Express", "MongoDB Atlas", "Render", "Vercel"],
    metrics: [
      { label: "Architecture", value: "Full-stack Monorepo" },
      { label: "Security Flow", value: "Role-Based JWT Auth" },
      { label: "Production", value: "Vercel Client + Render API" },
    ],
    demoUrl: "https://lamif-platform.vercel.app",
    demoLabel: "Live Platform ↗",
    githubUrl: "https://github.com/oumersalah2-cmd",
  },
  {
    id: "ethio-bucks",
    title: "Ethio Bucks Backend",
    subhead: "Transaction-Isolated ETB Ledger & Task Pipeline",
    role: "Backend Architect",
    recognition: "High-Concurrency Fintech Deployment",
    languages: "Amharic & English UX",
    status: "Deployed (Live)",
    brief:
      "High-throughput microwork reward ledger with strict PostgreSQL row-level locks (`SELECT FOR UPDATE`) inside atomic transactions, eliminating race conditions and double-spending across unstable mobile networks.",
    stack: ["Django", "PostgreSQL", "Python", "JWT Auth", "Mobile Wallet Engine"],
    metrics: [
      { label: "Ledger Safety", value: "ACID Row Locks (Zero Double-Spend)" },
      { label: "Database", value: "PostgreSQL on PythonAnywhere" },
      { label: "Auth Flow", value: "Phone-Bound Session Tokens" },
    ],
    demoUrl: "http://abdusalam.pythonanywhere.com",
    demoLabel: "Live Backend Portal ↗",
    githubUrl: "https://github.com/oumersalah2-cmd",
  },
  {
    id: "campustrack-aau",
    title: "CampusTrack (AAU Café)",
    subhead: "AAU Dining Custody & 3,000 ETB Stipend System",
    role: "Full-Stack Engineer",
    recognition: "Addis Ababa University Campus Infrastructure",
    languages: "English, AAU Internal Protocol",
    status: "Deployed",
    brief:
      "Institutional dining custody system automating 3,000 ETB/month student meal stipends with unique database isolation constraints preventing duplicate claims across university dining halls.",
    stack: ["Node.js", "Express", "PostgreSQL", "SQLite3", "JWT Auth"],
    metrics: [
      { label: "Stipend Automation", value: "3,000 ETB / Mo / Student" },
      { label: "Fraud Prevention", value: "Unique DB Constraints" },
      { label: "Custody Audit", value: "Cryptographic JWT Verification" },
    ],
    demoUrl: "https://addis-ababa-university-cafe-management.onrender.com/",
    demoLabel: "Live Production App ↗",
    githubUrl: "https://github.com/oumersalah2-cmd/Addis-Ababa-University-Cafe-Management-and-Stipend-System",
  },
];

// ── COMPREHENSIVE TECH STACK & PRODUCTION CAPABILITIES ─────────────────
const TECH_STACK_DATA = [
  {
    id: "languages",
    category: "Languages & Core Runtimes",
    code: "01 // RUNTIMES",
    badge: "Production Daily",
    description:
      "Core programming languages utilized for high-throughput server backbones, web client logic, and daily algorithmic problem-solving.",
    skills: [
      { name: "TypeScript", level: "Primary", badge: "Production", context: "Next.js 14, NestJS, Node microservices & TMA SDK" },
      { name: "JavaScript (ES6+)", level: "Primary", badge: "Production", context: "Full-stack apps, Vite, DOM interaction engines" },
      { name: "Python", level: "Primary", badge: "Production", context: "Django REST APIs, AI pipeline scripts, daily LeetCode DSA" },
      { name: "Java", level: "Proficient", badge: "Core OOP", context: "Object-oriented software architecture & Android fundamentals" },
      { name: "SQL", level: "Primary", badge: "Production", context: "Relational queries, index tuning, ACID transaction locks" },
      { name: "Dart", level: "Proficient", badge: "Production", context: "Cross-platform mobile apps (Sof Omar Technologies)" },
      { name: "C / C++", level: "Applied", badge: "Academic", context: "Low-level memory decomposition & DSA foundations (AAU)" },
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Mobile Interfaces",
    code: "02 // CLIENT & INTERFACES",
    badge: "High-Performance UI",
    description:
      "Client-side frameworks and rendering engines engineered for sub-second responsiveness, offline-first execution, and mobile UX.",
    skills: [
      { name: "Next.js (App Router)", level: "Primary", badge: "Production", context: "AmanaTrade, Ace-Ifa-Boru, SSR & server actions" },
      { name: "React 19 / React", level: "Primary", badge: "Production", context: "Component architectures, reactive hooks, SPA/PWA" },
      { name: "Tailwind CSS", level: "Proficient", badge: "Production", context: "Utility-first design systems & responsive layouts" },
      { name: "Progressive Web Apps (PWA)", level: "Primary", badge: "Production", context: "SmartBiz ERP 100% offline-first local installs" },
      { name: "Telegram Mini Apps (TMA SDK)", level: "Primary", badge: "Production", context: "Native Telegram exam platform (Ace-Ifa-Boru)" },
      { name: "Flutter", level: "Proficient", badge: "Production", context: "Cross-platform mobile client shipping (Sof Omar)" },
      { name: "Vanilla CSS & HTML5", level: "Primary", badge: "Production", context: "Bespoke styling, layout engines & micro-interactions" },
    ],
  },
  {
    id: "backend",
    category: "Backend, APIs & Distributed Rails",
    code: "03 // BACKEND & CONCURRENCY",
    badge: "ACID & Concurrency",
    description:
      "High-concurrency server architectures, transaction isolation layers, and African fintech payment clearing rails.",
    skills: [
      { name: "Node.js & Express", level: "Primary", badge: "Production", context: "High-throughput microservices, AAU Café, LAMIF" },
      { name: "Django (Python)", level: "Primary", badge: "Production", context: "Fintech task ledger, row-level locks (Ethio Bucks)" },
      { name: "NestJS (TypeScript)", level: "Proficient", badge: "Production", context: "Enterprise architecture & modular service layers" },
      { name: "Safaricom Daraja API", level: "Primary", badge: "Fintech Rail", context: "M-PESA wholesale escrow & automated clearing (AmanaTrade)" },
      { name: "Telegram Bot API / grammY", level: "Primary", badge: "Production", context: "Gebere Vision AI bot & exam engine backends" },
      { name: "RESTful Architecture", level: "Primary", badge: "Production", context: "Strict contracts, JWT bearer token auth & rate limits" },
      { name: "Vector Clocks & Offline Sync", level: "Specialized", badge: "Production", context: "Deterministic conflict-free multi-client reconciliation" },
    ],
  },
  {
    id: "databases",
    category: "Databases, Ledgers & Persistence",
    code: "04 // PERSISTENCE & ACID",
    badge: "Zero-Data-Loss",
    description:
      "Storage engines configured for strict transaction isolation, low latency, and deterministic offline caching during power outages.",
    skills: [
      { name: "PostgreSQL", level: "Primary", badge: "Production", context: "ACID row locks (`SELECT FOR UPDATE`), constraints, indexes" },
      { name: "Supabase & pgvector", level: "Primary", badge: "Production", context: "Vector embeddings similarity search & managed Postgres" },
      { name: "MongoDB Atlas", level: "Proficient", badge: "Production", context: "Document storage & aggregation pipelines (LAMIF Platform)" },
      { name: "IndexedDB", level: "Specialized", badge: "Production", context: "100% local client storage for offline PWA resilience" },
      { name: "SQLite3", level: "Proficient", badge: "Production", context: "Embedded local transactional storage (AAU Café)" },
      { name: "Prisma ORM", level: "Primary", badge: "Production", context: "Type-safe migrations, queries & schema relations" },
    ],
  },
  {
    id: "ai",
    category: "Applied AI, Machine Vision & Optimization",
    code: "05 // AI & OPTIMIZATION",
    badge: "Sub-800ms Inference",
    description:
      "Production AI vision inference pipelines and operations research optimization models grounded in African real-world constraints.",
    skills: [
      { name: "Groq AI Vision API", level: "Primary", badge: "Production", context: "Sub-800ms Llama 3.2 Vision inference for crop pathology" },
      { name: "Multilingual Prompt Engineering", level: "Primary", badge: "Production", context: "Domain-grounded reasoning in Amharic & Afaan Oromoo" },
      { name: "Mathematical Optimization", level: "Specialized", badge: "MIT Validated", context: "Mixed-integer programming & operations research (MIT Bertsimas)" },
      { name: "Transformer Architectures", level: "Applied", badge: "MIT Validated", context: "Attention mechanisms & vision-language representations" },
      { name: "Vector Search & RAG", level: "Primary", badge: "Production", context: "Agronomy disease knowledge retrieval via pgvector" },
    ],
  },
  {
    id: "devops",
    category: "DevOps, Security & Systems Rigor",
    code: "06 // SYSTEMS & SECURITY",
    badge: "Hardened & Deployed",
    description:
      "Defensive cybersecurity training from INSA National Cyber Talent Camp combined with automated cloud deployment workflows.",
    skills: [
      { name: "Ubuntu Linux & Bash", level: "Primary", badge: "Environment", context: "Bare-metal daily workstation, scripting & kernel tuning" },
      { name: "Docker", level: "Proficient", badge: "Production", context: "Containerized reproducible development & deployments" },
      { name: "Git & GitHub", level: "Primary", badge: "Daily Rigor", context: "Version control, branching strategy, open source workflows" },
      { name: "Vercel & Render", level: "Primary", badge: "Production", context: "Continuous deployment for Next.js, Vite & Node services" },
      { name: "PythonAnywhere", level: "Proficient", badge: "Production", context: "WSGI Python service deployments & Postgres hosting" },
      { name: "Defensive Cybersecurity", level: "Specialized", badge: "INSA Certified", context: "Kernel audits, network intrusion containment, OWASP" },
    ],
  },
];

// ── MAIN APPLICATION COMPONENT ─────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [themeMode, setThemeMode] = useState("dark"); // Default sleek dark mode
  const [accentColor, setAccentColor] = useState("blue"); // "blue" (#0047FF) or "orange" (#E64A19)
  const [stackFilter, setStackFilter] = useState("all");

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    { type: "system", text: "AMAN-SYSTEMS KERNEL // INITIALIZED [HOST: ADDIS ABABA, ET]" },
    { type: "system", text: "Verified credentials catalog: 5 entries loaded." },
    { type: "system", text: "Telegram Channel: https://t.me/ggedAbdusay (Unplugged Me)" },
    { type: "system", text: "Type 'help' or click commands below to run queries." },
  ]);

  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", topic: "AI Engineering / Founder Role", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [formMsg, setFormMsg] = useState("");

  const terminalBottomRef = useRef(null);

  // Synchronize active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
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

  const copyEmailAddress = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(PROFILE.email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2400);
      });
    } else {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    }
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalOutput, { type: "user", text: `$ ${terminalInput}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  whoami         - Print founder biographical coordinates
  credentials    - Display verified academic and professional certificates
  projects       - List core production projects
  stack          - Categorized technical stack and systems capabilities
  channel        - Open Telegram channel: https://t.me/ggedAbdusay
  cv             - View Curriculum Vitae details
  contact        - Direct contact coordinates & channels
  clear          - Clear terminal buffer`,
        });
        break;
      case "whoami":
        newLogs.push({
          type: "output",
          text: `Abdusalam Oumer Aman
Software Engineering (AAU) · INSA Cyber Talent Graduate · Applied AI Founder
Venture: Gebere Vision AI (METI-Funded UniPods AI Programme)
Channel: Unplugged Me (https://t.me/ggedAbdusay)
Location: Addis Ababa, Ethiopia
Mission: Localized, production-ready AI systems for Ethiopian infrastructure.`,
        });
        break;
      case "credentials":
        newLogs.push({
          type: "output",
          text: `1. MIT Open Learning: Introduction to Universal AI (Completed Oct 7, 2026)
2. INSA: National Ethio Cyber Talent Summer Camp Graduate
3. Addis Ababa University (AAU): B.Sc. in Software Engineering (Year 3 / Junior)
4. Sof Omar Technologies: Software Engineering Internship Certificate
5. Udacity: Android Developer & Programming Fundamentals`,
        });
        break;
      case "projects":
        newLogs.push({
          type: "output",
          text: `1. Gebere Vision AI - Multilingual crop diagnostic bot (<800ms Groq Vision)
2. AmanaTrade - Offline-first B2B escrow & M-PESA wholesale platform (github.com/oumersalah2-cmd/Amana-Trading-)
3. SmartBiz ERP Lite - Offline-first enterprise state & POS engine (IndexedDB + vector clocks)
4. Ace-Ifa-Boru - Premium Telegram Mini App (TMA) exam prep platform (ace-ifa-boru-frontend.vercel.app)
5. LAMIF Educational Platform - Full-stack monorepo connecting students with tutors (lamif-platform.vercel.app)
6. Ethio Bucks Backend - ACID row-locked financial ledger in Django
7. CampusTrack AAU - University dining custody & 3,000 ETB stipend automation`,
        });
        break;
      case "stack":
      case "techstack":
        newLogs.push({
          type: "output",
          text: `AMAN-SYSTEMS // FULL-STACK & SYSTEMS CAPABILITIES

1. LANGUAGES & RUNTIMES:
   • TypeScript, JavaScript (ES6+), Python 3, Java, SQL, Dart, C/C++
2. FRONTEND & MOBILE:
   • Next.js 14, React 19, Tailwind CSS, Progressive Web Apps (PWA), Telegram Mini Apps (TMA), Flutter
3. BACKEND, CONCURRENCY & APIS:
   • Node.js & Express, Django, NestJS, Safaricom Daraja API (M-PESA), grammY / Telegram Bots
4. DATABASES & PERSISTENCE:
   • PostgreSQL (ACID row locks), Supabase (pgvector), MongoDB Atlas, IndexedDB, SQLite3, Prisma ORM
5. APPLIED AI & OPTIMIZATION:
   • Groq AI Vision (Llama 3.2 Vision), Prompt Engineering (Amharic/Oromoo), MIT Universal AI (MIP)
6. SYSTEMS & DEVOPS:
   • Ubuntu Linux 26.04 LTS, Docker, Git/GitHub, Vercel, Render, PythonAnywhere, INSA Kernel Security`,
        });
        break;
      case "channel":
      case "telegram":
        newLogs.push({
          type: "output",
          text: `Channel: Unplugged Me (https://t.me/ggedAbdusay)`,
        });
        if (typeof window !== "undefined") {
          window.open(PROFILE.telegramChannel, "_blank");
        }
        break;
      case "cv":
        setCvModalOpen(true);
        newLogs.push({
          type: "output",
          text: `Opening Curriculum Vitae document view...`,
        });
        break;
      case "contact":
        newLogs.push({
          type: "output",
          text: `EMAIL: oumersalah2@gmail.com
PHONE: +251934978247
LOCATION: Addis Ababa, Ethiopia
PORTFOLIO: https://ab-site-tawny.vercel.app/
TELEGRAM: https://t.me/ggedAbdusay (Unplugged Me)
TWITTER / X: https://x.com/titanic66834 (@titanic66834)
UPWORK: https://www.upwork.com/freelancers/~01d02c68660140f622
GITHUB: https://github.com/oumersalah2-cmd`,
        });
        break;
      case "clear":
        setTerminalOutput([{ type: "system", text: "Buffer cleared. Ready." }]);
        setTerminalInput("");
        return;
      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' to view valid commands.`,
        });
    }

    setTerminalOutput(newLogs);
    setTerminalInput("");
  };

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalOutput]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus("error");
      setFormMsg("Please complete all required fields before dispatching.");
      return;
    }

    setFormStatus("sending");
    setFormMsg("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          topic: formState.topic,
          message: formState.message,
          _subject: `[FOUNDER DISPATCH] ${formState.name} (${formState.topic})`,
        }),
      });

      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true || res.status === 200)) {
        setFormStatus("success");
        setFormState({ name: "", email: "", topic: "AI Engineering / Founder Role", message: "" });
        setFormMsg("Message dispatched successfully. Abdusalam will review your note shortly.");
      } else {
        throw new Error("Form dispatch returned non-200 code");
      }
    } catch {
      setFormStatus("error");
      setFormMsg(
        `Unable to reach automated dispatch worker. Please write directly to ${PROFILE.email} or on Telegram channel @ggedAbdusay.`
      );
    }
  };

  // Color Tokens based on Theme and chosen accent
  const accentHex = accentColor === "blue" ? "#0047FF" : "#E64A19";
  const isDark = themeMode === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
        color: isDark ? "#E5E5E5" : "#111111",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        ::selection {
          background: ${accentHex};
          color: #FFFFFF;
        }

        /* ── EDITORIAL TYPOGRAPHY CLASSES ── */
        .font-serif {
          font-family: 'Newsreader', Georgia, serif;
          font-optical-sizing: auto;
        }
        .font-mono {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Crystal clear borders & surfaces */
        .border-ledger {
          border-color: ${isDark ? "#222222" : "#E5E7EB"};
        }
        .bg-card {
          background-color: ${isDark ? "#121212" : "#FFFFFF"};
        }
        .bg-subtle {
          background-color: ${isDark ? "#181818" : "#F8FAFC"};
        }
        .text-ink {
          color: ${isDark ? "#FFFFFF" : "#111111"};
        }
        .text-muted {
          color: ${isDark ? "#888888" : "#64748B"};
        }

        /* Highlight Core Projects Links */
        .project-highlight-link {
          color: ${isDark ? "#FFFFFF" : "#111111"};
          text-decoration: underline;
          text-decoration-color: ${accentHex}99;
          text-underline-offset: 4px;
          font-weight: 700;
          transition: color 0.15s ease, text-decoration-color 0.15s ease;
        }
        .project-highlight-link:hover {
          color: ${accentHex};
          text-decoration-color: ${accentHex};
        }

        /* Tactile interactive elements */
        a {
          color: inherit;
          text-decoration: none;
        }
        .tactile-link {
          position: relative;
          color: ${isDark ? "#E5E5E5" : "#111111"};
          transition: color 0.15s ease;
        }
        .tactile-link:hover {
          color: ${accentHex};
        }

        .btn-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          border: 1px solid ${isDark ? "#333333" : "#111111"};
          background: ${isDark ? "#111111" : "#111111"};
          color: #FFFFFF;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }
        .btn-action:hover {
          background: ${accentHex};
          border-color: ${accentHex};
          color: #FFFFFF;
        }

        .btn-action-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          border: 1px solid ${isDark ? "#333333" : "#D1D5DB"};
          background: transparent;
          color: ${isDark ? "#E5E5E5" : "#111111"};
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }
        .btn-action-ghost:hover {
          border-color: ${accentHex};
          color: ${accentHex};
          background: ${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,71,255,0.03)"};
        }

        /* Card hover subtle lift */
        .interactive-card {
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .interactive-card:hover {
          border-color: ${accentHex} !important;
          box-shadow: 0 4px 20px ${isDark ? "rgba(0,0,0,0.4)" : "rgba(0,71,255,0.06)"};
        }

        /* Responsive layout */
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }

        @media (max-width: 860px) {
          .hero-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
          .header-nav { display: none !important; }
          .dispatch-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .meta-pill-strip { flex-direction: column !important; align-items: flex-start !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .stack-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${isDark ? "#111111" : "#F8FAFC"}; }
        ::-webkit-scrollbar-thumb { background: ${isDark ? "#333333" : "#CBD5E1"}; }
        ::-webkit-scrollbar-thumb:hover { background: ${accentHex}; }

        /* ── CV DOCUMENT & PRINT MEDIA STYLES ── */
        .cv-dot-filled {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .cv-dot-empty {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        @media print {
          @page {
            margin: 1.2cm;
            size: A4 portrait;
          }
          body {
            background: #FFFFFF !important;
            color: #111111 !important;
          }
          nav, footer, .interactive-terminal-card, #profile, #projects, #credentials, #contact, .no-print {
            display: none !important;
          }
          .cv-modal-backdrop {
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            backdrop-filter: none !important;
            inset: auto !important;
          }
          .cv-paper-container {
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            background: #FFFFFF !important;
            color: #111111 !important;
          }
          .cv-paper-container * {
            color: #111111 !important;
            background-color: transparent !important;
            box-shadow: none !important;
          }
          .cv-section-rule {
            border-bottom: 1.5px solid #111111 !important;
          }
          .cv-dot-filled {
            background-color: #111111 !important;
          }
          .cv-dot-empty {
            background-color: #D1D5DB !important;
          }
        }
      `}</style>

      {/* ── TOP MASTHEAD HEADER (4-PAGE NAVIGATION) ─────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: isDark ? "rgba(10, 10, 10, 0.94)" : "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0.85rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Brand Wordmark & Coordinates */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/profile-circle.webp"
              alt="Abdusalam avatar"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${accentHex}`,
                backgroundColor: "#000000",
              }}
            />
            <div>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: isDark ? "#FFFFFF" : "#111111",
                }}
              >
                Abdusalam Oumer Aman
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: "0.68rem",
                  color: isDark ? "#888888" : "#64748B",
                  letterSpacing: "0.02em",
                }}
              >
                AAU SOFTWARE ENG · INSA CYBER GRADUATE · MIT OPEN LEARNING
              </div>
            </div>
          </div>

          {/* Clean 4-Item Desktop Navigation */}
          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono tactile-link"
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? accentHex : isDark ? "#A0A0A0" : "#475569",
                    cursor: "pointer",
                    padding: "4px 0",
                    borderBottom: isActive ? `2px solid ${accentHex}` : "2px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Theme & Accent Controls (Customizable Canvas) */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setThemeMode(isDark ? "light" : "dark")}
              className="font-mono"
              style={{
                background: "transparent",
                border: `1px solid ${isDark ? "#333333" : "#D1D5DB"}`,
                padding: "5px 10px",
                fontSize: "0.72rem",
                color: isDark ? "#FFFFFF" : "#111111",
                cursor: "pointer",
              }}
              title="Toggle Dark / Pure White Theme"
            >
              {isDark ? "☾ DARK" : "☼ LIGHT"}
            </button>

            <button
              onClick={() => setAccentColor(accentColor === "blue" ? "orange" : "blue")}
              className="font-mono"
              style={{
                background: "transparent",
                border: `1px solid ${accentHex}`,
                padding: "5px 10px",
                fontSize: "0.72rem",
                color: accentHex,
                cursor: "pointer",
              }}
              title="Toggle Electric Blue / Engineering Orange Accent"
            >
              {accentColor === "blue" ? "● BLUE" : "● ORANGE"}
            </button>

            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="font-mono"
              style={{
                background: terminalOpen ? accentHex : "transparent",
                border: `1px solid ${accentHex}`,
                padding: "5px 10px",
                fontSize: "0.72rem",
                color: terminalOpen ? "#FFFFFF" : accentHex,
                cursor: "pointer",
              }}
              title="Toggle Integrated Terminal View"
            >
              {terminalOpen ? ">_ HIDE CLI" : ">_ CLI"}
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN EDITORIAL CANVAS ─────────────────────────────────────── */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* ════════════════════════════════════════════════════════════════
            PAGE 01: THE PROFILE & MANIFESTO
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="profile"
          style={{
            paddingTop: "2.5rem",
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "3.5rem",
          }}
        >
          {/* Metadata Ledger Bar */}
          <div
            className="meta-pill-strip"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              paddingBottom: "1.2rem",
              borderBottom: `1px solid ${isDark ? "#1C1C1C" : "#F3F4F6"}`,
              marginBottom: "2rem",
              fontSize: "0.74rem",
              color: isDark ? "#888888" : "#64748B",
            }}
          >
            <div>
              <span>PAGE 01 // </span>
              <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>FOUNDER PROFILE & MANIFESTO</strong>
              <span style={{ margin: "0 6px" }}>/</span>
              <span>ADDIS ABABA UNIVERSITY SE '26</span>
            </div>
            <div>
              <span style={{ color: accentHex }}>● PRODUCTION STATUS:</span> ACTIVE SHIPPER
            </div>
          </div>

          {/* Profile Hero Block with Compact Circular Avatar + [LEDGER // SPECIFICATIONS] */}
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 340px",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Avatar + Name + Title + Stance + Narrative + Buttons */}
            <div>
              {/* Header row: Circular Avatar + Name */}
              <div
                className="hero-header-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                {/* Circular Avatar (Compact 105px with Sleek Black Background as before) */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <img
                    src="/profile-circle.webp"
                    alt="Abdusalam Oumer Aman — Applied AI Founder & Systems Engineer"
                    style={{
                      width: "105px",
                      height: "105px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2.5px solid ${accentHex}`,
                      backgroundColor: "#000000",
                      boxShadow: isDark
                        ? "0 6px 20px rgba(0,0,0,0.8)"
                        : "0 6px 20px rgba(0, 71, 255, 0.14)",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      right: "6px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      border: `2px solid ${isDark ? "#0A0A0A" : "#FFFFFF"}`,
                    }}
                    title="Active Shipper / Online"
                  />
                </div>

                {/* Title & Coordinates */}
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: accentHex,
                      marginBottom: "0.25rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Founder & Systems Engineer · Addis Ababa, Ethiopia
                  </div>
                  <h1
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)",
                      fontWeight: 600,
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                      color: isDark ? "#FFFFFF" : "#111111",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Abdusalam Oumer Aman
                  </h1>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8rem",
                      color: isDark ? "#A0A0A0" : "#475569",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>AAU Software Engineering</span>
                    <span>·</span>
                    <span>INSA Cyber Talent Graduate</span>
                    <span>·</span>
                    <span>MIT Universal AI</span>
                  </div>
                </div>
              </div>

              {/* Founder Stance Blockquote with Tight Spacing */}
              <div
                style={{
                  borderLeft: `3px solid ${accentHex}`,
                  paddingLeft: "1rem",
                  marginTop: "0.5rem",
                  marginBottom: "0.9rem",
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.08rem, 1.4vw, 1.3rem)",
                    lineHeight: 1.35,
                    fontStyle: "italic",
                    color: isDark ? "#E5E5E5" : "#1E293B",
                    marginBottom: "0.25rem",
                  }}
                >
                  Software Engineering at AAU. INSA Cyber Talent Graduate. Applied AI Founder.
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: accentHex,
                    letterSpacing: "0.01em",
                  }}
                >
                  Building localized, production-ready AI systems for Ethiopian infrastructure.
                </p>
              </div>

              {/* Narrative Paragraphs */}
              <div style={{ marginBottom: "1.2rem" }}>
                <p
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.65,
                    color: isDark ? "#CCCCCC" : "#334155",
                    marginBottom: "0.75rem",
                  }}
                >
                  Most modern AI projects settle for generic OpenAI wrapper scripts and flashy dark-mode marketing pages. My
                  engineering work bridges third-year Software Engineering foundations at{" "}
                  <strong>Addis Ababa University</strong>, rigorous defensive cybersecurity training as a graduate of Ethiopia's national{" "}
                  <strong>INSA (Information Network Security Administration) Cyber Talent Camp</strong>, and applied optimization validated
                  through <strong>MIT Open Learning</strong> under Boeing Professor of Operations Research Dimitris Bertsimas.
                </p>

                {/* Second Paragraph Highlighting Core Projects as Interactive Links */}
                <p
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.65,
                    color: isDark ? "#A0A0A0" : "#64748B",
                  }}
                >
                  As founder of{" "}
                  <a href="#gebere-vision-ai" className="project-highlight-link">
                    <strong>Gebere Vision AI</strong> ↗
                  </a>{" "}
                  (selected for the METI-Funded UniPods AI Programme), I deploy sub-second Llama vision inference via Groq directly into rural Telegram interfaces in Amharic and Afaan
                  Oromoo. When power cuts hit retail stores, my{" "}
                  <a href="#smartbiz-erp" className="project-highlight-link">
                    <strong>SmartBiz ERP</strong> ↗
                  </a>{" "}
                  executes offline-first transactional state on local client machines with deterministic vector clocks.
                </p>
              </div>

              {/* Primary Action Buttons (Clean & Focused, No Social Duplication) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                <button onClick={() => scrollToSection("projects")} className="btn-action">
                  Inspect Core Projects ↓
                </button>
                <button onClick={() => scrollToSection("stack")} className="btn-action-ghost">
                  Technical Stack ↓
                </button>
                <button onClick={() => scrollToSection("credentials")} className="btn-action-ghost">
                  Foundations & Certs ↓
                </button>
                <button onClick={() => setCvModalOpen(true)} className="btn-action-ghost">
                  Curriculum Vitae (CV) 📄
                </button>
                <button onClick={() => scrollToSection("contact")} className="btn-action-ghost">
                  Contact & Channels ↓
                </button>
              </div>
            </div>

            {/* Right Column: [LEDGER // SPECIFICATIONS] */}
            <div
              className="border-ledger bg-card"
              style={{
                border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                padding: "1.5rem",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: accentHex,
                  paddingBottom: "0.75rem",
                  borderBottom: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                  marginBottom: "1rem",
                }}
              >
                [LEDGER // SPECIFICATIONS]
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    PRIMARY SPECIALTY
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    Applied AI & Full-Stack Systems
                  </div>
                </div>

                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    ACADEMIC INSTITUTION
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    Addis Ababa University (Year 3)
                  </div>
                </div>

                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    SYSTEMS SECURITY
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    INSA Cyber Talent Graduate
                  </div>
                </div>

                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    AI VALIDATION
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    MIT Open Learning (Universal AI)
                  </div>
                </div>

                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    LOCALIZATION ENGINE
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    Amharic (አማርኛ) & Afaan Oromoo
                  </div>
                </div>

                <div>
                  <div className="font-mono" style={{ fontSize: "0.6875rem", color: isDark ? "#888888" : "#64748B" }}>
                    CORE TECH STACK
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    TypeScript · Python · Next.js · Django · PostgreSQL · Groq AI
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.6875rem",
                      color: isDark ? "#888888" : "#64748B",
                      marginBottom: "6px",
                    }}
                  >
                    DIRECT CHANNELS
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <a
                      href={PROFILE.telegramChannel}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        color: accentHex,
                        textDecoration: "underline",
                      }}
                    >
                      Telegram: {PROFILE.telegramChannelName} ↗
                    </a>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        color: accentHex,
                        textDecoration: "underline",
                      }}
                    >
                      GitHub: {PROFILE.handle} ↗
                    </a>
                    <a
                      href={PROFILE.upwork}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        color: accentHex,
                        textDecoration: "underline",
                      }}
                    >
                      Upwork ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 02: SELECTED FOUNDER PROJECTS (BRIEF, CRISP)
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="projects"
          style={{
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "3.5rem",
          }}
        >
          {/* Section Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.74rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em" }}>
              PAGE 02 // SELECTED WORKS
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Core Projects & Systems
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "65ch", marginTop: "0.4rem" }}>
              Brief explanations of production systems built to withstand real-world African constraints: power grid outages, low-bandwidth cellular, and local language accessibility.
            </p>
          </div>

          {/* 4 Crisp Project Cards in 2x2 Grid */}
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PRODUCTS.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="border-ledger bg-card interactive-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Badge & Status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", gap: "8px" }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: accentHex,
                        backgroundColor: isDark ? "rgba(0,71,255,0.1)" : "rgba(0,71,255,0.06)",
                        padding: "3px 8px",
                        border: `1px solid ${accentHex}33`,
                      }}
                    >
                      {project.recognition}
                    </span>
                    <span className="font-mono" style={{ fontSize: "0.68rem", color: isDark ? "#888888" : "#64748B" }}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title & Subhead */}
                  <h3 className="font-serif" style={{ fontSize: "1.45rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                    {project.title}
                  </h3>
                  <div className="font-mono" style={{ fontSize: "0.78rem", color: isDark ? "#A0A0A0" : "#475569", marginBottom: "0.9rem" }}>
                    {project.subhead}
                  </div>

                  {/* Brief, Crisp Explanation */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      color: isDark ? "#CCCCCC" : "#334155",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {project.brief}
                  </p>

                  {/* Key Metrics Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.2rem" }}>
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="font-mono bg-subtle"
                        style={{
                          fontSize: "0.7rem",
                          padding: "4px 8px",
                          border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                        }}
                      >
                        <span style={{ color: isDark ? "#888888" : "#64748B" }}>{metric.label}: </span>
                        <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.4rem" }}>
                    {project.stack.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono"
                        style={{
                          fontSize: "0.68rem",
                          backgroundColor: isDark ? "#1C1C1C" : "#F1F5F9",
                          color: isDark ? "#E5E5E5" : "#334155",
                          padding: "2px 7px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", borderTop: `1px solid ${isDark ? "#1F1F1F" : "#F1F5F9"}`, paddingTop: "1rem" }}>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-action" style={{ padding: "6px 12px", fontSize: "0.74rem" }}>
                      {project.demoLabel}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-action-ghost" style={{ padding: "6px 12px", fontSize: "0.74rem" }}>
                      GitHub Repo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 03: PRODUCTION TECH STACK & SYSTEMS ENGINE
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="stack"
          style={{
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "3.5rem",
          }}
        >
          {/* Section Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.74rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em" }}>
              PAGE 03 // SYSTEMS ARCHITECTURE & TECH STACK
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Production Tech Stack & Systems Engine
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "70ch", marginTop: "0.4rem" }}>
              Categorized inventory of languages, frameworks, distributed databases, and security infrastructure deployed across live products, national talent camps, and algorithmic research.
            </p>
          </div>

          {/* Interactive Domain Filter Strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.75rem" }}>
            {[
              { id: "all", label: "All Domains" },
              { id: "languages", label: "01. Runtimes" },
              { id: "frontend", label: "02. Frontend & Mobile" },
              { id: "backend", label: "03. Backend & Concurrency" },
              { id: "databases", label: "04. Persistence & ACID" },
              { id: "ai", label: "05. Applied AI & Math" },
              { id: "devops", label: "06. Systems & Security" },
            ].map((tab) => {
              const active = stackFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setStackFilter(tab.id)}
                  className="font-mono"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    padding: "6px 12px",
                    cursor: "pointer",
                    border: `1px solid ${active ? accentHex : isDark ? "#2A2A2A" : "#E2E8F0"}`,
                    backgroundColor: active ? (isDark ? "rgba(0,71,255,0.14)" : "rgba(0,71,255,0.08)") : isDark ? "#141414" : "#F8FAFC",
                    color: active ? accentHex : isDark ? "#CCCCCC" : "#475569",
                    transition: "all 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 6 Grid Cards */}
          <div
            className="stack-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TECH_STACK_DATA
              .filter((domain) => stackFilter === "all" || stackFilter === domain.id)
              .map((domain) => (
                <div
                  key={domain.id}
                  className="border-ledger bg-card interactive-card"
                  style={{
                    border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* Card Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", gap: "8px" }}>
                      <span className="font-mono" style={{ fontSize: "0.68rem", fontWeight: 700, color: accentHex, letterSpacing: "0.04em" }}>
                        {domain.code}
                      </span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          backgroundColor: isDark ? "#1A1A1A" : "#F1F5F9",
                          color: isDark ? "#A0A0A0" : "#475569",
                          padding: "2px 7px",
                          border: `1px solid ${isDark ? "#2D2D2D" : "#E2E8F0"}`,
                        }}
                      >
                        {domain.badge}
                      </span>
                    </div>

                    <h3 className="font-serif" style={{ fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                      {domain.category}
                    </h3>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.55, color: isDark ? "#999999" : "#64748B", marginBottom: "1.2rem" }}>
                      {domain.description}
                    </p>

                    {/* Skill Items List */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {domain.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          style={{
                            padding: "8px 10px",
                            backgroundColor: isDark ? "#161616" : "#FAFAFA",
                            border: `1px solid ${isDark ? "#262626" : "#E5E7EB"}`,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "8px",
                            transition: "border-color 0.15s ease",
                          }}
                        >
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                              <strong style={{ fontSize: "0.86rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                                {skill.name}
                              </strong>
                              <span
                                className="font-mono"
                                style={{
                                  fontSize: "0.64rem",
                                  padding: "1px 5px",
                                  backgroundColor: skill.badge === "Production" ? (isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.08)") : (isDark ? "#222222" : "#EAEAEA"),
                                  color: skill.badge === "Production" ? "#10B981" : (isDark ? "#AAAAAA" : "#475569"),
                                  border: `1px solid ${skill.badge === "Production" ? "rgba(16,185,129,0.3)" : isDark ? "#333333" : "#D1D5DB"}`,
                                  fontWeight: 600,
                                }}
                              >
                                {skill.badge}
                              </span>
                            </div>
                            <div className="font-mono" style={{ fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginTop: "3px" }}>
                              {skill.context}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div
                    style={{
                      marginTop: "1.2rem",
                      paddingTop: "0.75rem",
                      borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.72rem",
                    }}
                    className="font-mono text-muted"
                  >
                    <span>{domain.skills.length} Capabilities Verified</span>
                    <button
                      onClick={() => scrollToSection("projects")}
                      style={{
                        background: "none",
                        border: "none",
                        color: accentHex,
                        cursor: "pointer",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                      }}
                    >
                      View Linked Projects →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 04: FOUNDATIONS & CREDENTIALS
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="credentials"
          style={{
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "3.5rem",
          }}
        >
          {/* Section Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.74rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em" }}>
              PAGE 04 // CREDENTIALS & ACADEMIC CORE
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Foundations & Verified Certifications
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "65ch", marginTop: "0.4rem" }}>
              Formal verification bridging AAU Software Engineering rigor, INSA national cybersecurity operations training, and MIT Open Learning applied optimization.
            </p>
          </div>

          {/* Credentials Cards in Grid */}
          <div
            className="certs-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CREDENTIALS_AND_CERTS.map((cert) => (
              <div
                key={cert.id}
                className="border-ledger bg-card interactive-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Category Badge & Date */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", gap: "8px" }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: accentHex,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cert.badge}
                    </span>
                    <span className="font-mono" style={{ fontSize: "0.68rem", color: isDark ? "#888888" : "#64748B" }}>
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Authority */}
                  <h3 className="font-serif" style={{ fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    {cert.title}
                  </h3>
                  <div className="font-mono" style={{ fontSize: "0.8rem", fontWeight: 600, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "0.5rem" }}>
                    {cert.authority}
                  </div>
                  <div className="font-mono" style={{ fontSize: "0.72rem", color: isDark ? "#999999" : "#64748B", marginBottom: "0.9rem" }}>
                    Backed by: {cert.sponsor}
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      color: isDark ? "#CCCCCC" : "#334155",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {cert.summary}
                  </p>
                </div>

                {/* Skill Competencies */}
                <div style={{ borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`, paddingTop: "0.9rem" }}>
                  <div className="font-mono text-muted" style={{ fontSize: "0.68rem", marginBottom: "6px" }}>
                    CORE COMPETENCIES:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="font-mono"
                        style={{
                          fontSize: "0.68rem",
                          backgroundColor: isDark ? "#181818" : "#F8FAFC",
                          border: `1px solid ${isDark ? "#2A2A2A" : "#E2E8F0"}`,
                          padding: "2px 6px",
                          color: isDark ? "#E5E5E5" : "#334155",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 05: CONNECT, TERMINAL CLI & DIRECT DISPATCH
        ════════════════════════════════════════════════════════════════ */}
        <section id="contact" style={{ paddingBottom: "4rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.74rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em" }}>
              PAGE 05 // DISPATCH & TERMINAL
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Direct Transmission & Command Shell
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "65ch", marginTop: "0.4rem" }}>
              Inquire about production systems, applied AI integration, or contract advisory. Alternatively query the simulated CLI kernel below.
            </p>
          </div>

          {/* Official CV Direct Access Card */}
          <div
            className="border-ledger bg-card"
            style={{
              border: `1px solid ${accentHex}44`,
              padding: "1.25rem 1.6rem",
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.2rem",
              borderRadius: "3px",
              boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            <div>
              <div className="font-mono" style={{ fontSize: "0.72rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "3px" }}>
                CURRICULUM VITAE // OFFICIAL RESUME (OCT 2026)
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111" }}>
                Abdusalam Oumer Aman — Full-Stack Engineer
              </div>
              <div className="font-mono" style={{ fontSize: "0.75rem", color: isDark ? "#888888" : "#64748B", marginTop: "3px" }}>
                AAU Software Engineering · INSA Cyber Talent Graduate · Applied AI & Full-Stack Systems
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                onClick={() => setCvModalOpen(true)}
                className="btn-action"
                style={{ fontSize: "0.78rem", padding: "8px 16px" }}
              >
                📄 Preview CV Modal
              </button>
              <a
                href={PROFILE.cvUrl}
                download="Abdusalam_Oumer_Aman_FlowCV_Resume.pdf"
                className="btn-action-ghost"
                style={{ fontSize: "0.78rem", padding: "8px 16px", textDecoration: "none" }}
              >
                📥 Download PDF
              </a>
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-ghost"
                style={{ fontSize: "0.78rem", padding: "8px 16px", textDecoration: "none" }}
              >
                ↗ Open PDF
              </a>
            </div>
          </div>

          <div
            className="dispatch-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Direct Dispatch Web Form */}
            <div className="border-ledger bg-card" style={{ border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`, padding: "1.8rem" }}>
              <div className="font-mono" style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "1.2rem", color: accentHex }}>
                DIRECT TRANSMISSION FORM
              </div>

              <form onSubmit={handleFormSubmit} style={{ display: "grid", gap: "1rem" }}>
                <div>
                  <label className="font-mono" style={{ display: "block", fontSize: "0.72rem", marginBottom: "4px", color: isDark ? "#A0A0A0" : "#475569" }}>
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="font-mono"
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "0.82rem",
                      backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#2E2E2E" : "#D1D5DB"}`,
                      color: isDark ? "#FFFFFF" : "#111111",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ display: "block", fontSize: "0.72rem", marginBottom: "4px", color: isDark ? "#A0A0A0" : "#475569" }}>
                    YOUR DIRECT EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. elena@institution.org"
                    className="font-mono"
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "0.82rem",
                      backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#2E2E2E" : "#D1D5DB"}`,
                      color: isDark ? "#FFFFFF" : "#111111",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ display: "block", fontSize: "0.72rem", marginBottom: "4px", color: isDark ? "#A0A0A0" : "#475569" }}>
                    TOPIC OF DISCUSSION
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="font-mono"
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "0.82rem",
                      backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#2E2E2E" : "#D1D5DB"}`,
                      color: isDark ? "#FFFFFF" : "#111111",
                      outline: "none",
                    }}
                  >
                    <option>AI Engineering / Founder Role</option>
                    <option>Full-Stack Contract Architecture</option>
                    <option>Research Collaboration / Academic</option>
                    <option>Other Engineering Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono" style={{ display: "block", fontSize: "0.72rem", marginBottom: "4px", color: isDark ? "#A0A0A0" : "#475569" }}>
                    MESSAGE / PROJECT CONSTRAINTS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly state target latency, database constraints, or the problem space..."
                    className="font-mono"
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "0.82rem",
                      backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
                      border: `1px solid ${isDark ? "#2E2E2E" : "#D1D5DB"}`,
                      color: isDark ? "#FFFFFF" : "#111111",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {formMsg && (
                  <div
                    className="font-mono"
                    style={{
                      padding: "8px 12px",
                      fontSize: "0.76rem",
                      backgroundColor: formStatus === "success" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                      border: `1px solid ${formStatus === "success" ? "#10B981" : "#EF4444"}`,
                      color: formStatus === "success" ? "#10B981" : "#EF4444",
                    }}
                  >
                    {formMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-action"
                  style={{ justifyContent: "center" }}
                >
                  {formStatus === "sending" ? "Dispatching..." : "Transmit Message ↵"}
                </button>
              </form>

              {/* Direct email quick-copy fallback */}
              <div style={{ marginTop: "1.5rem", paddingTop: "1.2rem", borderTop: `1px solid ${isDark ? "#222" : "#EEE"}` }}>
                <div className="font-mono text-muted" style={{ fontSize: "0.72rem", marginBottom: "6px" }}>
                  DIRECT EMAIL INBOX:
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <code className="font-mono" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                    {PROFILE.email}
                  </code>
                  <button
                    onClick={copyEmailAddress}
                    className="font-mono"
                    style={{
                      padding: "4px 8px",
                      fontSize: "0.72rem",
                      backgroundColor: isDark ? "#1E1E1E" : "#F1F5F9",
                      border: `1px solid ${isDark ? "#333" : "#D1D5DB"}`,
                      color: isDark ? "#FFF" : "#111",
                      cursor: "pointer",
                    }}
                  >
                    {emailCopied ? "✓ COPIED" : "COPY"}
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Terminal / CLI Console (Requested Feature) */}
            <div
              className="border-ledger"
              style={{
                backgroundColor: isDark ? "#0A0A0A" : "#0F172A",
                color: "#E2E8F0",
                border: `1px solid ${isDark ? "#222222" : "#334155"}`,
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: isDark ? "0 6px 30px rgba(0,0,0,0.6)" : "0 6px 30px rgba(15, 23, 42, 0.2)",
              }}
            >
              {/* Terminal Window Header Bar */}
              <div
                style={{
                  padding: "8px 14px",
                  backgroundColor: isDark ? "#141414" : "#1E293B",
                  borderBottom: `1px solid ${isDark ? "#222222" : "#334155"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#EF4444", display: "inline-block" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#F59E0B", display: "inline-block" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }} />
                  <span className="font-mono" style={{ fontSize: "0.72rem", color: "#94A3B8", marginLeft: "6px" }}>
                    aman@aau-kernel: ~
                  </span>
                </div>
                <div className="font-mono" style={{ fontSize: "0.68rem", color: "#94A3B8" }}>
                  ZSH 5.9 (x86_64)
                </div>
              </div>

              {/* Command Quick-Click Shortcut Strip */}
              <div
                style={{
                  padding: "6px 12px",
                  backgroundColor: isDark ? "#101010" : "#162032",
                  borderBottom: `1px solid ${isDark ? "#1E1E1E" : "#283548"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                <span className="font-mono" style={{ fontSize: "0.66rem", color: "#64748B" }}>
                  TRY:
                </span>
                {["whoami", "credentials", "projects", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setTerminalInput(cmd);
                    }}
                    className="font-mono"
                    style={{
                      fontSize: "0.66rem",
                      padding: "2px 6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#38BDF8",
                      cursor: "pointer",
                    }}
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Output Log Area */}
              <div
                style={{
                  height: "320px",
                  overflowY: "auto",
                  padding: "12px 14px",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {terminalOutput.map((item, idx) => (
                  <div key={idx} className="font-mono" style={{ whiteSpace: "pre-wrap" }}>
                    {item.type === "system" && <span style={{ color: "#64748B" }}>[SYS] {item.text}</span>}
                    {item.type === "user" && <span style={{ color: "#38BDF8", fontWeight: 700 }}>{item.text}</span>}
                    {item.type === "output" && <span style={{ color: "#E2E8F0" }}>{item.text}</span>}
                    {item.type === "error" && <span style={{ color: "#F87171" }}>{item.text}</span>}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Terminal Interactive Input Line */}
              <form
                onSubmit={handleTerminalSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  backgroundColor: isDark ? "#0E0E0E" : "#1E293B",
                  borderTop: `1px solid ${isDark ? "#222222" : "#334155"}`,
                }}
              >
                <span className="font-mono" style={{ color: "#10B981", marginRight: "8px", fontWeight: 700 }}>
                  aman@ledger:~$
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'whoami', 'credentials'..."
                  className="font-mono"
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#FFFFFF",
                    fontSize: "0.8rem",
                  }}
                />
                <button
                  type="submit"
                  className="font-mono"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#38BDF8",
                    fontSize: "0.72rem",
                    cursor: "pointer",
                    padding: "2px 6px",
                  }}
                >
                  RUN ↵
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER (AUTHORITATIVE SYSTEM METADATA) ────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
          backgroundColor: isDark ? "#080808" : "#F8FAFC",
          padding: "2.5rem 1.5rem",
          fontSize: "0.76rem",
          color: isDark ? "#888888" : "#64748B",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div className="font-mono" style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "4px" }}>
              ABDUSALAM OUMER AMAN — APPLIED AI FOUNDER & SYSTEMS ARCHITECT
            </div>
            <div className="font-mono">
              © 2026 ABDUSALAM OUMER AMAN · AAU · INSA CYBER GRADUATE · MIT OPEN LEARNING
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <a href={PROFILE.telegramChannel} target="_blank" rel="noreferrer" className="font-mono tactile-link" style={{ color: accentHex }}>
              Telegram: @ggedAbdusay (Unplugged Me) ↗
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="font-mono tactile-link" style={{ color: accentHex }}>
              GitHub ↗
            </a>
            <a href={PROFILE.upwork} target="_blank" rel="noreferrer" className="font-mono tactile-link" style={{ color: accentHex }}>
              Upwork ↗
            </a>
          </div>
        </div>
      </footer>

      {/* ── CURRICULUM VITAE (CV) PREVIEW MODAL ───────────────────────── */}
      {cvModalOpen && (
        <div
          className="cv-modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25rem",
          }}
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="border-ledger bg-card cv-paper-container"
            style={{
              maxWidth: "840px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
              border: `1px solid ${accentHex}`,
              boxShadow: "0 15px 50px rgba(0,0,0,0.85)",
              borderRadius: "4px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Top Controls (No-Print) */}
            <div
              className="no-print"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
                paddingBottom: "0.85rem",
                borderBottom: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: accentHex,
                    backgroundColor: isDark ? "rgba(0,71,255,0.12)" : "rgba(0,71,255,0.06)",
                    padding: "3px 8px",
                    border: `1px solid ${accentHex}33`,
                  }}
                >
                  OFFICIAL CURRICULUM VITAE // 2026
                </span>
                <span className="font-mono" style={{ fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B" }}>
                  FlowCV Verified Edition
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={PROFILE.cvUrl}
                  download="Abdusalam_Oumer_Aman_FlowCV_Resume.pdf"
                  className="font-mono btn-action"
                  style={{ padding: "5px 12px", fontSize: "0.72rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  title="Download original FlowCV PDF"
                >
                  📥 Download PDF
                </a>
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono btn-action-ghost"
                  style={{ padding: "5px 12px", fontSize: "0.72rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  title="Open PDF in new tab"
                >
                  ↗ Open PDF
                </a>
                <button
                  onClick={() => window.print()}
                  className="font-mono btn-action-ghost"
                  style={{ padding: "5px 12px", fontSize: "0.72rem" }}
                  title="Print or Save as Clean PDF"
                >
                  🖨️ Print
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="font-mono btn-action-ghost"
                  style={{ padding: "5px 10px", fontSize: "0.72rem" }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* ── CV DOCUMENT HEADER ─────────────────────────────────────── */}
            <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
              <img
                src="/profile-circle.webp"
                alt="Abdusalam Oumer Aman"
                style={{
                  width: "105px",
                  height: "105px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "inline-block",
                  border: `2px solid ${isDark ? "#333333" : "#D1D5DB"}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                }}
              />
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  marginTop: "0.6rem",
                  marginBottom: "0.2rem",
                  color: isDark ? "#FFFFFF" : "#111111",
                }}
              >
                Abdusalam Oumer Aman
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: isDark ? "#A0A0A0" : "#475569",
                  marginBottom: "0.75rem",
                }}
              >
                Full-Stack Engineer
              </p>

              {/* Primary Contact Row */}
              <div
                className="font-mono"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.85rem 1.25rem",
                  fontSize: "0.76rem",
                  color: isDark ? "#999999" : "#475569",
                  marginBottom: "0.5rem",
                }}
              >
                <a href={`mailto:${PROFILE.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                  ✉ {PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                  📞 {PROFILE.phone}
                </a>
                <span>📍 {PROFILE.location}</span>
                <span>📅 2006-05-21</span>
              </div>

              {/* Secondary Coordinates & Online Profiles */}
              <div
                className="font-mono"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.65rem 1.2rem",
                  fontSize: "0.74rem",
                  color: accentHex,
                }}
              >
                <a href={PROFILE.portfolioUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
                  🔗 Portfolio ↗
                </a>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
                  🐙 {PROFILE.handle} ↗
                </a>
                <a href={PROFILE.twitter} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
                  𝕏 {PROFILE.twitterHandle} ↗
                </a>
              </div>
            </div>

            {/* ── 1. SUMMARY ────────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                SUMMARY
              </div>
              <p style={{ fontSize: "0.86rem", lineHeight: 1.65, color: isDark ? "#CCCCCC" : "#334155" }}>
                Dedicated software engineering student with extensive hands-on experience building production-ready, full-stack applications. Specializing in the MERN stack, Django, and Next.js, I focus on delivering efficient, scalable systems from concept to deployment. Driven by daily algorithmic problem-solving, I write clean, maintainable code and prioritize clear communication to deliver reliable solutions for frontend, backend, and full-stack roles
              </p>
            </div>

            {/* ── 2. EDUCATION ──────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                EDUCATION
              </div>

              {/* Addis Ababa University */}
              <div style={{ marginBottom: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", fontSize: "0.86rem" }}>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Bachelors in Software Engineering
                    </strong>
                    <div style={{ color: isDark ? "#A0A0A0" : "#475569", fontStyle: "italic", marginTop: "2px" }}>
                      Addis Ababa University
                    </div>
                  </div>
                  <div className="font-mono" style={{ textAlign: "right", fontSize: "0.78rem", color: isDark ? "#888888" : "#64748B" }}>
                    <div>09/2024 – Present</div>
                    <div>Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>

              {/* INSA */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", fontSize: "0.86rem" }}>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Summer Camp Training Program (CTC 5th Batch)
                    </strong>
                    <div style={{ color: isDark ? "#A0A0A0" : "#475569", fontStyle: "italic", marginTop: "2px" }}>
                      Information Network Security Administration (INSA)
                    </div>
                  </div>
                  <div className="font-mono" style={{ textAlign: "right", fontSize: "0.78rem", color: isDark ? "#888888" : "#64748B" }}>
                    <div>07/2026 – 09/2026</div>
                    <div>Addis Ababa, Ethiopia</div>
                  </div>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", marginTop: "4px", fontSize: "0.84rem", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                  <li>Completed an intensive three-month technical summer camp focused on technology and development.</li>
                  <li>Received structured, hands-on training covering software development principles, network security fundamentals, and technical problem-solving.</li>
                </ul>
              </div>
            </div>

            {/* ── 3. SKILLS ─────────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                SKILLS
              </div>

              {/* Core Skill Disciplines */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "0.75rem" }}>
                {["Full-Stack Development", "Web Application Development", "E-commerce Websites"].map((item) => (
                  <span
                    key={item}
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "#F1F5F9",
                      border: `1px solid ${isDark ? "#333" : "#E2E8F0"}`,
                      color: isDark ? "#FFFFFF" : "#0F172A",
                      borderRadius: "3px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "0.8rem 1.5rem",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: isDark ? "#CCCCCC" : "#334155",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "2px" }}>
                    Languages
                  </div>
                  <div>JavaScript, TypeScript, Python, Java</div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "2px" }}>
                    Frontend
                  </div>
                  <div>React, Next.js, Tailwind CSS</div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "2px" }}>
                    Backend
                  </div>
                  <div>Node.js, Express, Django, NestJS, REST APIs</div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "2px" }}>
                    Databases
                  </div>
                  <div>PostgreSQL, MongoDB</div>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <div style={{ fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginBottom: "2px" }}>
                    Applied Artificial Intelligence
                  </div>
                  <div>LLM Integration (Groq, Llama), Computer Vision Applications, AI API Implementation, Prompt Engineering</div>
                </div>
              </div>
            </div>

            {/* ── 4. CERTIFICATES ───────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                CERTIFICATES
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "0.8rem 1.5rem",
                  fontSize: "0.85rem",
                  color: isDark ? "#CCCCCC" : "#334155",
                }}
              >
                <div>
                  <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>Programming Fundamentals</strong>
                </div>

                <div>
                  <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>Android Developer Fundamentals</strong>
                </div>

                <div>
                  <div>
                    <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>Introduction to Universal AI</strong>{" "}
                    <span style={{ fontSize: "0.75rem", color: accentHex }}>🔗</span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#475569", marginTop: "2px" }}>
                    Certificate in Introduction to Universal AI | MIT Open Learning (October 2026)
                  </div>
                </div>

                <div>
                  <div>
                    <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>Full-Stack Software Engineering Internship</strong>{" "}
                    <span style={{ fontSize: "0.75rem", color: accentHex }}>🔗</span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#475569", marginTop: "2px", lineHeight: 1.5 }}>
                    Developed SmartBiz ERP Lite, an offline-first Progressive Web Application for business pricing and inventory management using Next.js, NestJS, and PostgreSQL.
                  </div>
                </div>
              </div>
            </div>

            {/* ── 5. LANGUAGES ──────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                LANGUAGES
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "0.5rem 1.5rem",
                  fontSize: "0.86rem",
                  color: isDark ? "#FFFFFF" : "#111111",
                }}
              >
                <div>• Oromic</div>
                <div>• English</div>
                <div>• Amharic</div>
                <div>• Arabic</div>
              </div>
            </div>

            {/* ── 6. COURSES ────────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                COURSES
              </div>

              {/* MIT Open Learning */}
              <div style={{ marginBottom: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", fontSize: "0.86rem" }}>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Introduction to Universal AI
                    </strong>
                    <div style={{ color: isDark ? "#A0A0A0" : "#475569", fontStyle: "italic", marginTop: "2px" }}>
                      MIT Open Learning
                    </div>
                  </div>
                  <div className="font-mono" style={{ textAlign: "right", fontSize: "0.78rem", color: isDark ? "#888888" : "#64748B" }}>
                    <div>2026 – Present</div>
                    <div>Online</div>
                  </div>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", marginTop: "4px", fontSize: "0.84rem", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                  <li>Completed foundational modules covering artificial intelligence theories, concepts, and problem-solving approaches.</li>
                  <li>Gained practical knowledge in Large Language Models, Deep Learning, and Generative AI.</li>
                  <li>Learned to interpret AI outputs and evaluate AI applications across real-world contexts.</li>
                </ul>
              </div>

              {/* Nexus Tutorial */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", fontSize: "0.86rem" }}>
                  <div>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Software Development and Competitive Programming (DSA)
                    </strong>
                    <div style={{ color: isDark ? "#A0A0A0" : "#475569", fontStyle: "italic", marginTop: "2px" }}>
                      Nexus Tutorial
                    </div>
                  </div>
                  <div className="font-mono" style={{ textAlign: "right", fontSize: "0.78rem", color: isDark ? "#888888" : "#64748B" }}>
                    <div>10/2025 – 01/2026</div>
                    <div>Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 7. CONTINUOUS DEVELOPMENT (CUSTOM) ───────────────────── */}
            <div style={{ marginBottom: "1.4rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                CUSTOM
              </div>
              <div>
                <strong style={{ fontSize: "0.9rem", color: isDark ? "#FFFFFF" : "#111111", display: "block", marginBottom: "2px" }}>
                  Continuous Development
                </strong>
                <div style={{ fontSize: "0.84rem", fontStyle: "italic", color: isDark ? "#A0A0A0" : "#475569", marginBottom: "6px" }}>
                  Competitive Programming & Algorithm Optimization
                </div>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.65, color: isDark ? "#CCCCCC" : "#334155" }}>
                  Maintain a rigorous daily practice of solving complex data structure and algorithmic challenges across LeetCode, Codeforces, and HackerRank. This consistent discipline ensures that writing highly optimized, structurally sound, and efficient code is a foundational habit, directly translating into faster and more reliable production systems.
                </p>
              </div>
            </div>

            {/* ── 8. PROJECTS ───────────────────────────────────────────── */}
            <div style={{ marginBottom: "1.2rem" }}>
              <div
                className="font-mono cv-section-rule"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isDark ? "#FFFFFF" : "#111111",
                  borderBottom: `1.5px solid ${isDark ? "#333333" : "#111111"}`,
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                PROJECTS
              </div>

              <div style={{ display: "grid", gap: "1rem", fontSize: "0.86rem" }}>
                {/* Gebere Vision AI */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "6px" }}>
                    <div>
                      <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                        Gebere Vision AI
                      </strong>
                    </div>
                    <span className="font-mono" style={{ fontSize: "0.76rem", color: isDark ? "#888888" : "#64748B" }}>
                      2025 – Present
                    </span>
                  </div>
                  <div style={{ fontSize: "0.84rem", fontStyle: "italic", color: isDark ? "#A0A0A0" : "#475569", marginTop: "1px", marginBottom: "4px" }}>
                    AI-Powered Agricultural Diagnosis Platform & Telegram Bot
                  </div>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", display: "grid", gap: "4px", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                    <li>Engineered a live AI-powered Telegram bot providing instant crop disease diagnosis with multilingual support for Amharic, Afaan Oromoo, English, and Arabic.</li>
                    <li>Integrated Groq AI's llama-4-scout-17b vision models for high-speed image analysis, building a scalable backend with Node.js, Express, and Supabase PostgreSQL.</li>
                    <li>Implemented a Human-in-the-Loop verification network to ensure diagnostic accuracy and deployed the full system via Railway cloud hosting.</li>
                  </ul>
                </div>

                {/* AAU Café Management System */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "6px" }}>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      AAU Café Management System
                    </strong>
                    <span className="font-mono" style={{ fontSize: "0.76rem", color: isDark ? "#888888" : "#64748B" }}>
                      04/2026 – 04/2026
                    </span>
                  </div>
                  <p style={{ marginTop: "3px", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                    Engineered a real-time campus ordering system utilizing JavaScript and PostgreSQL.
                  </p>
                </div>

                {/* Tutor Marketplace */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "6px" }}>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Tutor Marketplace
                    </strong>
                    <span className="font-mono" style={{ fontSize: "0.76rem", color: isDark ? "#888888" : "#64748B" }}>
                      02/2026 – 03/2026
                    </span>
                  </div>
                  <p style={{ marginTop: "3px", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                    Built a comprehensive student-instructor platform featuring complex booking and matching logic, developed using React, Node.js, and MongoDB.
                  </p>
                </div>

                {/* Ethio Bucks */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "6px" }}>
                    <strong style={{ fontSize: "0.92rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                      Ethio Bucks
                    </strong>
                    <span className="font-mono" style={{ fontSize: "0.76rem", color: isDark ? "#888888" : "#64748B" }}>
                      10/2025 – 01/2026
                    </span>
                  </div>
                  <p style={{ marginTop: "3px", lineHeight: 1.55, color: isDark ? "#CCCCCC" : "#334155" }}>
                    Developed a transaction-heavy financial backend built for scale and reliability. Deployed the system utilizing Django and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Modal Actions (No-Print) */}
            <div
              className="no-print"
              style={{
                marginTop: "1.8rem",
                paddingTop: "1.2rem",
                borderTop: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <span className="font-mono" style={{ fontSize: "0.74rem", color: isDark ? "#888888" : "#64748B" }}>
                Verified Official Resume · FlowCV Edition · Abdusalam Oumer Aman
              </span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href={PROFILE.cvUrl}
                  download="Abdusalam_Oumer_Aman_FlowCV_Resume.pdf"
                  className="btn-action"
                  style={{ padding: "6px 14px", fontSize: "0.75rem", textDecoration: "none" }}
                >
                  📥 Download PDF
                </a>
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action-ghost"
                  style={{ padding: "6px 14px", fontSize: "0.75rem", textDecoration: "none" }}
                >
                  ↗ Open PDF
                </a>
                <button
                  onClick={() => window.print()}
                  className="btn-action-ghost"
                  style={{ padding: "6px 14px", fontSize: "0.75rem" }}
                >
                  🖨️ Print
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="btn-action-ghost"
                  style={{ padding: "6px 14px", fontSize: "0.75rem" }}
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
