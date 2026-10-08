import { useState, useEffect, useRef } from "react";

// ── BRAND & CORE METADATA ──────────────────────────────────────────────
const PROFILE = {
  name: "Abdusalam Oumer Aman",
  handle: "oumersalah2",
  title: "Software Engineering at AAU · INSA Cyber Talent Graduate · Applied AI Founder",
  heroPunchline: "Building localized, production-ready AI systems for Ethiopian infrastructure.",
  email: "oumersalah2@gmail.com",
  github: "https://github.com/oumersalah2-cmd",
  upwork: "https://www.upwork.com/freelancers/~01d02c68660140f622",
  twitter: "https://x.com/oumersalah2",
  twitterHandle: "@oumersalah2",
  telegramChannel: "https://t.me/ggedAbdusay",
  telegramChannelName: "Unplugged Me",
  cvUrl: "/cv.pdf",
  location: "Addis Ababa, Ethiopia",
  institution: "Addis Ababa University (AAU)",
  securityTraining: "INSA National Cyber Talent Camp Graduate",
};

// ── 4 CLEAR PORTFOLIO PAGES / SECTIONS ────────────────────────────────
const NAV_ITEMS = [
  { id: "profile", label: "01. Profile & Manifesto" },
  { id: "projects", label: "02. Selected Projects" },
  { id: "credentials", label: "03. Foundations & Certs" },
  { id: "contact", label: "04. Connect & CV" },
];

// ── COMPREHENSIVE CREDENTIALS & CERTIFICATIONS (5 IN PLACE) ───────────
const CREDENTIALS_AND_CERTS = [
  {
    id: "mit-ai",
    badge: "AI FLUENCY // APPLIED OPTIMIZATION",
    title: "Introduction to Universal AI",
    authority: "MIT Open Learning",
    date: "Completed Oct 7, 2026",
    sponsor: "Prof. Dimitris Bertsimas (MIT Vice Provost for Open Learning & Boeing Professor of Operations Research)",
    summary:
      "Mathematical optimization, mixed-integer formulations, transformer architectures, and applied operations research for resource allocation.",
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
    title: "B.Sc. in Software Engineering (Year 3)",
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

// ── MAIN APPLICATION COMPONENT ─────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [themeMode, setThemeMode] = useState("light"); // Pure crystalline white canvas
  const [accentColor, setAccentColor] = useState("blue"); // "blue" (#0047FF) or "orange" (#E64A19)

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
  credentials    - Display all 5 academic and professional certificates
  projects       - List core production projects
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
          text: `1. MIT Open Learning: Introduction to Universal AI (Prof. Dimitris Bertsimas)
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
2. SmartBiz ERP Lite - Offline-first IndexedDB vector-clock POS engine
3. Ethio Bucks Backend - ACID row-locked financial ledger in Django
4. CampusTrack AAU - University dining custody & 3,000 ETB stipend automation`,
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
          text: `Opening Curriculum Vitae modal...`,
        });
        break;
      case "contact":
        newLogs.push({
          type: "output",
          text: `EMAIL: oumersalah2@gmail.com
TELEGRAM CHANNEL: https://t.me/ggedAbdusay (Unplugged Me)
TWITTER / X: https://x.com/oumersalah2
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
        @media (max-width: 860px) {
          .hero-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
          .header-nav { display: none !important; }
          .dispatch-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .meta-pill-strip { flex-direction: column !important; align-items: flex-start !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${isDark ? "#111111" : "#F8FAFC"}; }
        ::-webkit-scrollbar-thumb { background: ${isDark ? "#333333" : "#CBD5E1"}; }
        ::-webkit-scrollbar-thumb:hover { background: ${accentHex}; }
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
              src="/profile-world-circle.webp"
              alt="Abdusalam avatar with world globe"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${accentHex}`,
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
                ABDUSALAM OUMER AMAN
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

          {/* 4-Page Navigation Anchors */}
          <nav className="header-nav" style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            {NAV_ITEMS.map((item) => {
              const isSelected = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono"
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? accentHex : isDark ? "#888888" : "#64748B",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    borderBottom: isSelected ? `2px solid ${accentHex}` : "2px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Theme, Accent, CV */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Accent switcher */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                padding: "2px",
                border: `1px solid ${isDark ? "#333333" : "#E2E8F0"}`,
                borderRadius: "4px",
              }}
              title="Toggle Accent Color"
            >
              <button
                onClick={() => setAccentColor("blue")}
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "2px",
                  backgroundColor: "#0047FF",
                  border: accentColor === "blue" ? "2px solid #FFFFFF" : "none",
                  cursor: "pointer",
                }}
              />
              <button
                onClick={() => setAccentColor("orange")}
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "2px",
                  backgroundColor: "#E64A19",
                  border: accentColor === "orange" ? "2px solid #FFFFFF" : "none",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setThemeMode(isDark ? "light" : "dark")}
              className="font-mono"
              style={{
                fontSize: "0.72rem",
                padding: "5px 10px",
                border: `1px solid ${isDark ? "#333333" : "#E2E8F0"}`,
                background: isDark ? "#161616" : "#F8FAFC",
                color: isDark ? "#E5E5E5" : "#111111",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {isDark ? "☀ LIGHT" : "☾ DARK"}
            </button>

            {/* CV Modal Trigger */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="font-mono"
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                padding: "6px 12px",
                backgroundColor: accentHex,
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              CV 📄
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER (4 PAGES) ────────────────────────── */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 01: PROFILE & MANIFESTO
        ════════════════════════════════════════════════════════════════ */}
        <section
          id="profile"
          style={{
            paddingBottom: "3.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "3.5rem",
          }}
        >
          {/* Top Metadata Header Strip */}
          <div
            className="font-mono meta-pill-strip"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              fontSize: "0.74rem",
              color: isDark ? "#888888" : "#64748B",
              paddingBottom: "1rem",
              marginBottom: "2rem",
              borderBottom: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`,
            }}
          >
            <div>
              <span>PAGE 01 // </span>
              <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>FOUNDER PROFILE & MANIFESTO</strong>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>ADDIS ABABA UNIVERSITY SE '26</span>
            </div>
            <div>
              <span style={{ color: accentHex }}>● PRODUCTION STATUS:</span> ACTIVE SHIPPER · OPEN TO APPLIED AI FOUNDER ROLES
            </div>
          </div>

          {/* Profile Hero Block with Circular Avatar (Substituted with World Globe Image) */}
          <div>
            {/* Header row: Circular Avatar + Name */}
            <div
              className="hero-header-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
                marginBottom: "1.8rem",
              }}
            >
              {/* Circular Avatar (World Globe & Face Visible, Legs Removed) */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img
                  src="/profile-world-circle.webp"
                  alt="Abdusalam Oumer Aman in front of Earth projection"
                  style={{
                    width: "155px",
                    height: "155px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `3px solid ${accentHex}`,
                    boxShadow: isDark
                      ? "0 10px 30px rgba(0,0,0,0.6)"
                      : "0 10px 30px rgba(0, 71, 255, 0.15)",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "10px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    border: `3px solid ${isDark ? "#0A0A0A" : "#FFFFFF"}`,
                  }}
                  title="Active Shipper / Online"
                />
              </div>

              {/* Title & Coordinates */}
              <div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: accentHex,
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Founder & Systems Engineer · Addis Ababa, Ethiopia
                </div>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2.5rem, 4.8vw, 3.8rem)",
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: isDark ? "#FFFFFF" : "#111111",
                    marginBottom: "0.5rem",
                  }}
                >
                  Abdusalam Oumer Aman
                </h1>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.85rem",
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

            {/* Founder Stance Blockquote with Ample Spacing (Gemini Spacing Recommendation) */}
            <div
              style={{
                borderLeft: `3px solid ${accentHex}`,
                paddingLeft: "1.4rem",
                marginTop: "1.2rem",
                marginBottom: "2.5rem", // Generous breathing room
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                  lineHeight: 1.35,
                  fontStyle: "italic",
                  color: isDark ? "#E5E5E5" : "#1E293B",
                  marginBottom: "0.5rem",
                }}
              >
                Software Engineering at AAU. INSA Cyber Talent Graduate. Applied AI Founder.
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: "0.94rem",
                  fontWeight: 600,
                  color: accentHex,
                  letterSpacing: "0.01em",
                }}
              >
                Building localized, production-ready AI systems for Ethiopian infrastructure.
              </p>
            </div>

            {/* Narrative Paragraphs with Optimal 60-80 Character Line Length (Readability Recommendation) */}
            <div style={{ maxWidth: "65ch", marginBottom: "2.4rem" }}>
              <p
                style={{
                  fontSize: "1.04rem",
                  lineHeight: 1.7,
                  color: isDark ? "#CCCCCC" : "#334155",
                  marginBottom: "1.4rem",
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
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              <button onClick={() => scrollToSection("projects")} className="btn-action">
                Inspect Core Projects ↓
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

                  {/* Brief, Crisp Explanation (Requested by User) */}
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.6rem",
                      marginBottom: "1.2rem",
                      paddingBottom: "1rem",
                      borderBottom: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`,
                    }}
                  >
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="font-mono"
                        style={{
                          fontSize: "0.72rem",
                          backgroundColor: isDark ? "#181818" : "#F8FAFC",
                          border: `1px solid ${isDark ? "#2A2A2A" : "#E2E8F0"}`,
                          padding: "4px 8px",
                        }}
                      >
                        <span className="text-muted">{m.label}: </span>
                        <strong>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.4rem" }}>
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono"
                        style={{
                          fontSize: "0.7rem",
                          color: isDark ? "#AAAAAA" : "#475569",
                          backgroundColor: isDark ? "#141414" : "#F1F5F9",
                          padding: "2px 6px",
                          borderRadius: "2px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-action"
                      style={{ padding: "6px 12px", fontSize: "0.74rem" }}
                    >
                      {project.demoLabel || "Live Demo ↗"}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-action-ghost"
                      style={{ padding: "6px 12px", fontSize: "0.74rem" }}
                    >
                      GitHub Repo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PAGE 03: FOUNDATIONS & CERTIFICATIONS (5 IN PLACE)
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
              PAGE 03 // CREDENTIALS & ACADEMIC CORE
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Foundations & Verified Certifications
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "65ch", marginTop: "0.4rem" }}>
              Formal verification bridging AAU Software Engineering rigor, INSA national cybersecurity operations training, and MIT Open Learning applied optimization.
            </p>
          </div>

          {/* 5 Complete Credentials Cards in Grid */}
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
                          color: isDark ? "#DDDDDD" : "#1E293B",
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
            PAGE 04: CONNECT, CHANNELS & CV (WITH CLEAR EXPLANATIONS)
        ════════════════════════════════════════════════════════════════ */}
        <section id="contact" style={{ paddingBottom: "2rem" }}>
          {/* Section Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.74rem", color: accentHex, fontWeight: 700, letterSpacing: "0.06em" }}>
              PAGE 04 // CONTACT & DISPATCH CONSOLE
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.2vw, 2.7rem)", fontWeight: 600, marginTop: "0.2rem" }}>
              Direct Channels & Collaboration
            </h2>
            <p style={{ fontSize: "0.92rem", color: isDark ? "#888888" : "#64748B", maxWidth: "65ch", marginTop: "0.4rem" }}>
              Open to Applied AI founder collaborations, high-concurrency systems contracts, and research engineering initiatives.
            </p>
          </div>

          <div
            className="dispatch-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Direct Coordinates with Purpose & Explanations */}
            <div>
              <div
                className="border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: accentHex, letterSpacing: "0.06em", marginBottom: "1.2rem" }}>
                  CONTACT COORDINATES & CHANNELS (WITH DIRECT EXPLANATIONS)
                </div>

                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {/* Telegram Channel: Unplugged Me */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span className="font-mono text-muted" style={{ fontSize: "0.74rem", fontWeight: 700 }}>
                        TELEGRAM CHANNEL // DEV BLOG:
                      </span>
                      <a
                        href={PROFILE.telegramChannel}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: 600, color: accentHex, fontSize: "0.88rem" }}
                      >
                        {PROFILE.telegramChannelName} (https://t.me/ggedAbdusay) ↗
                      </a>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginTop: "4px", lineHeight: 1.5 }}>
                      My primary engineering publication channel where I share system architecture notes, LeetCode dynamic programming optimizations, terminal configs, and founder reflections.
                    </p>
                  </div>

                  {/* Primary Inbox */}
                  <div style={{ borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`, paddingTop: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span className="font-mono text-muted" style={{ fontSize: "0.74rem", fontWeight: 700 }}>
                        PRIMARY EMAIL // DIRECT INQUIRIES:
                      </span>
                      <button
                        onClick={copyEmailAddress}
                        className="tactile-link"
                        style={{ background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        {emailCopied ? "✓ Email Copied!" : PROFILE.email}
                      </button>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginTop: "4px", lineHeight: 1.5 }}>
                      Best for formal founder opportunities, technical advisory conversations, and high-concurrency systems design proposals.
                    </p>
                  </div>

                  {/* GitHub */}
                  <div style={{ borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`, paddingTop: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span className="font-mono text-muted" style={{ fontSize: "0.74rem", fontWeight: 700 }}>
                        GITHUB REPOSITORIES // OPEN SOURCE:
                      </span>
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        className="tactile-link"
                        style={{ fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        github.com/{PROFILE.handle}-cmd ↗
                      </a>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginTop: "4px", lineHeight: 1.5 }}>
                      Public repositories, commit logs, and codebases including Gebere Vision AI, AAU Campus Cafe, and algorithmic solutions.
                    </p>
                  </div>

                  {/* Upwork Profile */}
                  <div style={{ borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`, paddingTop: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span className="font-mono text-muted" style={{ fontSize: "0.74rem", fontWeight: 700 }}>
                        UPWORK FREELANCER:
                      </span>
                      <a
                        href={PROFILE.upwork}
                        target="_blank"
                        rel="noreferrer"
                        className="tactile-link"
                        style={{ fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        Upwork Profile ↗
                      </a>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginTop: "4px", lineHeight: 1.5 }}>
                      Escrow-protected software contracts for backend engineering, Python/Django APIs, and offline-first web/mobile apps.
                    </p>
                  </div>

                  {/* Twitter / X */}
                  <div style={{ borderTop: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`, paddingTop: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span className="font-mono text-muted" style={{ fontSize: "0.74rem", fontWeight: 700 }}>
                        TWITTER / X:
                      </span>
                      <a
                        href={PROFILE.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="tactile-link"
                        style={{ fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        {PROFILE.twitterHandle} ↗
                      </a>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginTop: "4px", lineHeight: 1.5 }}>
                      Public thoughts on applied AI models, African infrastructure, and systems software.
                    </p>
                  </div>
                </div>
              </div>

              {/* CV Download & Action Box */}
              <div
                className="border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div>
                  <div className="font-mono" style={{ fontSize: "0.72rem", color: accentHex, fontWeight: 700 }}>
                    CURRICULUM VITAE
                  </div>
                  <div className="font-serif" style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                    Abdusalam Oumer Aman (CV)
                  </div>
                  <div style={{ fontSize: "0.78rem", color: isDark ? "#888888" : "#64748B", marginTop: "2px" }}>
                    Complete verified record of AAU, INSA, MIT, and founder projects.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                  <button onClick={() => setCvModalOpen(true)} className="btn-action" style={{ fontSize: "0.75rem", padding: "8px 12px" }}>
                    Preview CV 📄
                  </button>
                  <a href={PROFILE.cvUrl} download="Abdusalam_Oumer_Aman_CV.pdf" className="btn-action-ghost" style={{ fontSize: "0.75rem", padding: "8px 12px" }}>
                    Download ↓
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dispatch Form + Terminal Toggle */}
            <div>
              <div
                className="border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                }}
              >
                <div className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: accentHex, letterSpacing: "0.06em", marginBottom: "1rem" }}>
                  DISPATCH DIRECT TRANSMISSION
                </div>

                <form onSubmit={handleFormSubmit} style={{ display: "grid", gap: "1rem" }}>
                  <div>
                    <label className="font-mono text-muted" style={{ fontSize: "0.72rem", display: "block", marginBottom: "4px" }}>
                      YOUR NAME / CALLSIGN *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        backgroundColor: isDark ? "#161616" : "#FFFFFF",
                        border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label className="font-mono text-muted" style={{ fontSize: "0.72rem", display: "block", marginBottom: "4px" }}>
                      CONTACT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. elena@firm.com"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        backgroundColor: isDark ? "#161616" : "#FFFFFF",
                        border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label className="font-mono text-muted" style={{ fontSize: "0.72rem", display: "block", marginBottom: "4px" }}>
                      TOPIC / INQUIRY
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        backgroundColor: isDark ? "#161616" : "#FFFFFF",
                        border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        outline: "none",
                      }}
                    >
                      <option value="AI Engineering / Founder Role">AI Engineering / Founder Role</option>
                      <option value="High-Concurrency Backend Contract">High-Concurrency Backend Contract</option>
                      <option value="Gebere Vision AI Partnership">Gebere Vision AI Partnership</option>
                      <option value="Research & Technical Discussion">Research & Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-muted" style={{ fontSize: "0.72rem", display: "block", marginBottom: "4px" }}>
                      MESSAGE BRIEF *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline project scope, timelines, or engineering questions..."
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        fontSize: "0.85rem",
                        fontFamily: "inherit",
                        backgroundColor: isDark ? "#161616" : "#FFFFFF",
                        border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="btn-action"
                    style={{ justifyContent: "center", padding: "12px", width: "100%" }}
                  >
                    {formStatus === "sending" ? "Dispatching Transmission..." : "Transmit Message →"}
                  </button>

                  {formMsg && (
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        padding: "8px",
                        backgroundColor: formStatus === "success" ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                        color: formStatus === "success" ? "#10B981" : "#EF4444",
                        border: `1px solid ${formStatus === "success" ? "#10B981" : "#EF4444"}`,
                      }}
                    >
                      {formMsg}
                    </div>
                  )}
                </form>
              </div>

              {/* Bonus Collapsible Terminal Inspector */}
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => setTerminalOpen(!terminalOpen)}
                  className="font-mono"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "0.74rem",
                    backgroundColor: isDark ? "#141414" : "#F8FAFC",
                    border: `1px solid ${isDark ? "#222222" : "#E2E8F0"}`,
                    color: isDark ? "#AAAAAA" : "#475569",
                    cursor: "pointer",
                  }}
                >
                  <span>{terminalOpen ? "▼ HIDE" : "▶ LAUNCH"} INTERACTIVE TERMINAL INSPECTOR</span>
                  <span style={{ color: accentHex }}>bash: amansys</span>
                </button>

                {terminalOpen && (
                  <div
                    className="font-mono"
                    style={{
                      marginTop: "6px",
                      backgroundColor: "#0C0C0C",
                      color: "#33FF33",
                      border: "1px solid #222222",
                      padding: "1rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    <div style={{ maxHeight: "180px", overflowY: "auto", marginBottom: "8px" }}>
                      {terminalOutput.map((log, idx) => (
                        <div key={idx} style={{ marginBottom: "4px", whiteSpace: "pre-wrap" }}>
                          {log.type === "system" && <span style={{ color: "#888888" }}>[SYS] {log.text}</span>}
                          {log.type === "user" && <span style={{ color: "#FFFFFF" }}>{log.text}</span>}
                          {log.type === "output" && <span style={{ color: "#00E5FF" }}>{log.text}</span>}
                          {log.type === "error" && <span style={{ color: "#FF5252" }}>{log.text}</span>}
                        </div>
                      ))}
                      <div ref={terminalBottomRef} />
                    </div>

                    <form onSubmit={handleTerminalSubmit} style={{ display: "flex", gap: "6px" }}>
                      <span style={{ color: "#00E5FF" }}>$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="help, whoami, credentials, projects..."
                        style={{
                          flex: 1,
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          color: "#FFFFFF",
                          fontFamily: "inherit",
                          fontSize: "0.75rem",
                        }}
                      />
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
          backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF",
          padding: "2rem 1.5rem",
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
            gap: "1rem",
            fontSize: "0.75rem",
          }}
          className="font-mono text-muted"
        >
          <div>
            © 2026 ABDUSALAM OUMER AMAN · AAU · INSA CYBER GRADUATE · MIT OPEN LEARNING
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={PROFILE.telegramChannel} target="_blank" rel="noreferrer" className="tactile-link">
              Unplugged Me (Telegram) ↗
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="tactile-link">
              GitHub ↗
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", color: accentHex }}>
              ↑ Return to Top
            </button>
          </div>
        </div>
      </footer>

      {/* ── CURRICULUM VITAE (CV) PREVIEW MODAL ───────────────────────── */}
      {cvModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="border-ledger bg-card"
            style={{
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              border: `1px solid ${isDark ? "#333333" : "#111111"}`,
              padding: "2rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.7rem", color: accentHex, fontWeight: 700 }}>
                  OFFICIAL CURRICULUM VITAE // 2026
                </span>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                  Abdusalam Oumer Aman
                </h2>
                <div className="font-mono text-muted" style={{ fontSize: "0.78rem" }}>
                  oumersalah2@gmail.com · Addis Ababa, Ethiopia · Unplugged Me (Telegram)
                </div>
              </div>
              <button
                onClick={() => setCvModalOpen(false)}
                className="font-mono"
                style={{
                  background: "none",
                  border: `1px solid ${isDark ? "#333333" : "#D1D5DB"}`,
                  padding: "4px 10px",
                  cursor: "pointer",
                  color: isDark ? "#FFFFFF" : "#111111",
                }}
              >
                ✕ CLOSE
              </button>
            </div>

            {/* CV Content Sections */}
            <div style={{ display: "grid", gap: "1.2rem", fontSize: "0.85rem", lineHeight: 1.6 }}>
              <div>
                <h4 className="font-mono" style={{ fontSize: "0.8rem", color: accentHex, borderBottom: `1px solid ${isDark ? "#222" : "#EEE"}`, paddingBottom: "4px", marginBottom: "6px" }}>
                  1. ACADEMIC & INSTITUTIONAL EDUCATION
                </h4>
                <p>
                  <strong>Addis Ababa University (AAU)</strong> — B.Sc. in Software Engineering (Junior / 3rd Year, 2022–Present).
                </p>
                <p>
                  <strong>Information Network Security Administration (INSA)</strong> — National Ethio Cyber Talent Summer Camp Graduate (Jul–Nov 2026).
                </p>
                <p>
                  <strong>MIT Open Learning</strong> — Introduction to Universal AI, Prof. Dimitris Bertsimas (Completed Oct 2026).
                </p>
              </div>

              <div>
                <h4 className="font-mono" style={{ fontSize: "0.8rem", color: accentHex, borderBottom: `1px solid ${isDark ? "#222" : "#EEE"}`, paddingBottom: "4px", marginBottom: "6px" }}>
                  2. VENTURES & PRODUCTION SYSTEMS
                </h4>
                <p>
                  <strong>Gebere Vision AI</strong> — Multilingual agricultural vision diagnostic bot on Telegram (METI-Funded UniPods AI Programme). Sub-800ms Groq Llama 3.2 Vision in Amharic & Afaan Oromoo.
                </p>
                <p>
                  <strong>SmartBiz ERP Lite</strong> — Offline-first local retail ERP engine utilizing client IndexedDB and deterministic vector clock sync for power-cut resilience.
                </p>
                <p>
                  <strong>Ethio Bucks Backend</strong> — Concurrency-hardened Django financial backend with row-level locks and immutable ledgers.
                </p>
                <p>
                  <strong>CampusTrack (AAU Café)</strong> — Institutional custody & 3,000 ETB stipend allocation system preventing dual-claim fraud.
                </p>
              </div>

              <div>
                <h4 className="font-mono" style={{ fontSize: "0.8rem", color: accentHex, borderBottom: `1px solid ${isDark ? "#222" : "#EEE"}`, paddingBottom: "4px", marginBottom: "6px" }}>
                  3. CORE TECHNICAL COMPETENCIES
                </h4>
                <p>
                  <strong>Languages & Frameworks:</strong> Python (Django), TypeScript, Node.js (Express, NestJS), React 19, Next.js, Flutter / Dart.
                </p>
                <p>
                  <strong>Data & AI Infrastructure:</strong> PostgreSQL (ACID isolation), Groq API (Llama Vision), Supabase pgvector, IndexedDB.
                </p>
                <p>
                  <strong>Systems & Security:</strong> Ubuntu Linux 26.04 LTS, Docker, Linux Kernel parameter tuning, OWASP security audits.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.8rem", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <a
                href={PROFILE.cvUrl}
                download="Abdusalam_Oumer_Aman_CV.pdf"
                className="btn-action"
                style={{ fontSize: "0.8rem" }}
              >
                Download PDF (cv.pdf) ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
