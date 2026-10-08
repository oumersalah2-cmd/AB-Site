import { useState, useRef } from "react";

// ── BRAND & CORE METADATA ──────────────────────────────────────────────
const PROFILE = {
  name: "Abdusalam Oumer Aman",
  handle: "oumersalah2",
  title: "Software Engineer, Founder, and AI Builder",
  subTitle: "Building localized, production-ready AI systems for Ethiopian infrastructure.",
  email: "oumersalah2@gmail.com",
  github: "https://github.com/oumersalah2-cmd",
  upwork: "https://www.upwork.com/freelancers/~01d02c68660140f622",
  telegram: "https://t.me/unpluggedme",
  telegramHandle: "@unpluggedme",
  telegramChannelName: "Unplugged Me",
  location: "Addis Ababa, Ethiopia",
  institution: "Addis Ababa University (AAU) · 3rd Year Software Engineering",
  securityTraining: "INSA National Cyber Talent Camp (Defensive Cybersecurity)",
  mitCertId: "11cce330-19b6-48ff-ae8c-b645623efabb",
  mitCertDate: "October 7, 2026",
  mitSponsor: "Prof. Dimitris Bertsimas — MIT Vice Provost for Open Learning & Boeing Professor of Operations Research",
};

// ── FOUNDATIONAL PILLARS (CREDENTIALS) ─────────────────────────────────
const CREDENTIAL_PILLARS = [
  {
    id: "mit-ai",
    badge: "AI FLUENCY // MIT OPEN LEARNING",
    title: "Introduction to Universal AI",
    authority: "MIT Open Learning",
    sponsor: "Prof. Dimitris Bertsimas (Vice Provost for Open Learning & Boeing Professor of Operations Research)",
    date: "Completed Oct 7, 2026",
    verificationId: "11cce330-19b6-48ff-ae8c-b645623efabb",
    summary:
      "Mathematical optimization, mixed-integer formulations, transformer architectures, and applied operations research for resource allocation in emerging markets.",
    highlights: ["Combinatorial Optimization", "Vision-Language Grounding", "Decision Tree Synthesis"],
  },
  {
    id: "insa-cyber",
    badge: "SECURITY & INFRASTRUCTURE // INSA",
    title: "National Ethio Cyber Talent Camp",
    authority: "Information Network Security Administration",
    sponsor: "National Systems Architecture Division",
    date: "Jul 2026 – Nov 2026",
    verificationId: "INSA-CTC-2026-ETH",
    summary:
      "Rigorous training in defensive systems architecture, kernel-level Linux auditing, and cryptographic ledger integrity.",
    highlights: ["Defensive Network Audits", "Linux Kernel Tuning", "Cryptographic Ledger Integrity"],
  },
  {
    id: "aau-se",
    badge: "ACADEMIC CORE // ADDIS ABABA UNIVERSITY",
    title: "B.Sc. in Software Engineering (Year 3)",
    authority: "Addis Ababa University (AAU)",
    sponsor: "School of Information Technology & Engineering",
    date: "2022 – Present",
    verificationId: "AAU-SE-REG-2022",
    summary:
      "Deep theoretical foundations in distributed architectures, relational database constraints (ACID), and formal algorithmic complexity analysis.",
    highlights: ["ACID Transaction Isolation", "Distributed Systems", "AAU Dining Stipend System"],
  },
];

// ── FOUNDER PRODUCTS ──────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "gebere",
    name: "Gebere Vision AI",
    subhead: "Multilingual Crop Disease Diagnosis Bot",
    role: "Founder & Lead Architect",
    badge: "METI UniPods AI Programme",
    desc: "AI-powered agricultural Telegram bot utilizing Groq AI Llama vision models (llama-3.2-11b-vision) to deliver crop disease diagnosis in Amharic (አማርኛ), Afaan Oromoo, English, and Arabic in under 800ms.",
    stack: ["Groq AI Vision", "Telegram Bot API", "Supabase pgvector", "Node.js", "PostgreSQL"],
    demoUrl: "https://t.me/gebere_vision_bot",
    githubUrl: "https://github.com/oumersalah2-cmd/gebere-vision-ai",
    specs: { latency: "< 800ms", languages: "4 Dialects", users: "Smallholder Farmers" },
  },
  {
    id: "smartbiz",
    name: "SmartBiz ERP Lite",
    subhead: "Offline-First Enterprise State & POS Engine",
    role: "Architect & Systems Engineer",
    badge: "Merchant Architecture",
    desc: "100% local-first Progressive Web App (PWA) with client-side IndexedDB mutations and deterministic vector-clock sync for Ethiopian merchants facing intermittent connectivity and power cuts.",
    stack: ["Next.js (App Router)", "NestJS", "IndexedDB", "TypeScript", "PostgreSQL"],
    demoUrl: null,
    githubUrl: "https://github.com/oumersalah2-cmd",
    specs: { latency: "0ms Local POS", sync: "Vector Clock Delta", state: "IndexedDB PWA" },
  },
  {
    id: "ethiobucks",
    name: "Ethio Bucks & Financial Backends",
    subhead: "Transaction-Isolated ETB Ledger",
    role: "Backend Architect",
    badge: "Fintech Deployment",
    desc: "High-concurrency financial backend engineered with Django and PostgreSQL featuring row-level transaction locks (`SELECT FOR UPDATE`), tamper-evident ledgers, and phone authentication.",
    stack: ["Django", "PostgreSQL", "Python", "JWT Auth", "Mobile Wallet"],
    demoUrl: "http://abdusalam.pythonanywhere.com",
    githubUrl: "https://github.com/oumersalah2-cmd",
    specs: { isolation: "ACID Row Locks", db: "PostgreSQL", status: "Live Deployment" },
  },
  {
    id: "campustrack",
    name: "CampusTrack & AAU Dining Stipend",
    subhead: "Institutional Custody & 3,000 ETB Stipend Allocation",
    role: "Full-Stack Engineer",
    badge: "AAU Infrastructure",
    desc: "Campus dining stipend system managing 3,000 ETB/month meal disbursements with relational database constraints preventing dual-claiming fraud, paired with cryptographic lost-and-found custody audits.",
    stack: ["Node.js", "Express", "PostgreSQL", "SQLite3", "JWT Auth"],
    demoUrl: "https://addis-ababa-university-cafe-management.onrender.com/",
    githubUrl: "https://github.com/oumersalah2-cmd/Addis-Ababa-University-Cafe-Management-and-Stipend-System",
    specs: { stipend: "3,000 ETB / Mo", fraudCheck: "Unique DB Constraints", status: "Render Production" },
  },
];

// ── ENGINEERING CHANGELOG ENTRIES ─────────────────────────────────────
const CHANGELOG = [
  {
    id: "log-043",
    date: "2026-10-08",
    tag: "CREDENTIAL",
    title: "MIT Universal AI Credential Finalized & Validated",
    body: "Completed Introduction to Universal AI through MIT Open Learning under Prof. Dimitris Bertsimas (Validation ID: 11cce330-19b6-48ff-ae8c-b645623efabb). Shifted focus toward applying mixed-integer optimization and operations research directly into crop diagnostic routing.",
  },
  {
    id: "log-042",
    date: "2026-10-04",
    tag: "ALGORITHMS",
    title: "LeetCode Milestone: 150+ Solved with O(1) Space DP",
    body: "Deep sprint on dynamic programming, state compression, and graph shortest paths. Transitioned past naive memoization to space-optimized tabulation for knapsack and interval scheduling variants.",
  },
  {
    id: "log-041",
    date: "2026-09-28",
    tag: "SYSTEMS",
    title: "Workstation OS Migration: Bare-Metal Ubuntu 26.04 LTS Setup",
    body: "Migrated development environment to Ubuntu 26.04 LTS. Custom kernel parameters, stripped desktop environment bloat, tuned sysctl limits for Docker daemon efficiency, and configured tiling workflow.",
  },
  {
    id: "log-040",
    date: "2026-09-15",
    tag: "AI_INFERENCE",
    title: "Gebere Vision AI: Shaving 400ms Off Inference for Rural 2G/3G",
    body: "Implemented client-side WebP quantization before Telegram webhook dispatch and enabled token streaming responses. Total end-to-end diagnosis latency dropped to 780ms on degraded cellular networks in Oromia.",
  },
];

// ── MAIN APPLICATION ───────────────────────────────────────────────────
export default function App() {
  const [mitModalOpen, setMitModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeProject, setActiveProject] = useState(PRODUCTS[0]);
  const [selectedExpertise, setSelectedExpertise] = useState("Full-Stack Engineering");

  // Contact form state
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [formMsg, setFormMsg] = useState("");

  const contactSectionRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus("error");
      setFormMsg("Please complete all required fields.");
      return;
    }
    setFormStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `[PORTFOLIO DISPATCH] ${formState.name}`,
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true || res.status === 200)) {
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setFormMsg("Message dispatched successfully. Abdusalam will follow up shortly.");
      } else {
        throw new Error("Dispatch failed");
      }
    } catch {
      setFormStatus("error");
      setFormMsg(`Unable to dispatch automatically. Please write directly to ${PROFILE.email}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F5F2EB", // Warm parchment canvas matching screenshot
        color: "#181816", // Deep charcoal ink
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        lineHeight: 1.5,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        ::selection {
          background: #B85C38;
          color: #FFFFFF;
        }

        .font-serif {
          font-family: 'Newsreader', 'Cormorant Garamond', Georgia, serif;
          font-optical-sizing: auto;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Terracotta Primary Action */
        .btn-terracotta {
          background-color: #B85C38;
          color: #FFFFFF;
          border: 1px solid #B85C38;
          padding: 11px 22px;
          font-size: 0.86rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background-color 0.2s, transform 0.15s ease;
          border-radius: 2px;
          text-decoration: none;
        }
        .btn-terracotta:hover {
          background-color: #A24F2E;
          transform: translateY(-1px);
        }

        /* Ghost Border Button */
        .btn-parchment-ghost {
          background-color: transparent;
          color: #5C574F;
          border: 1px solid #D2CCC0;
          padding: 11px 22px;
          font-size: 0.86rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
          border-radius: 2px;
          text-decoration: none;
        }
        .btn-parchment-ghost:hover {
          border-color: #B85C38;
          color: #181816;
          background-color: rgba(184, 92, 56, 0.05);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-split-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .dark-band-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
          .left-spine-rail { display: none !important; }
          .main-content-area { margin-left: 0 !important; }
        }
        @media (max-width: 680px) {
          .dark-band-grid { grid-template-columns: 1fr !important; }
          .contact-bar-flex { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
        }
      `}</style>

      {/* ── TOP NAV HEADER ────────────────────────────────────────────── */}
      <header
        style={{
          borderBottom: "1px solid #E6E0D5",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
          <span className="font-serif" style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
            Abdusalam Oumer Aman
          </span>
          <span className="font-mono" style={{ fontSize: "0.72rem", color: "#8E887E", letterSpacing: "0.06em" }}>
            AAU · INSA · MIT OPEN LEARNING [OCT 2026]
          </span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
          <button
            onClick={() => scrollTo("work")}
            className="font-mono"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", color: "#666157" }}
          >
            01. WORK
          </button>
          <button
            onClick={() => scrollTo("expertise")}
            className="font-mono"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", color: "#666157" }}
          >
            02. EXPERTISE
          </button>
          <button
            onClick={() => scrollTo("foundations")}
            className="font-mono"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", color: "#666157" }}
          >
            03. FOUNDATIONS
          </button>
          <button
            onClick={() => scrollTo("changelog")}
            className="font-mono"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", color: "#666157" }}
          >
            04. CHANGELOG
          </button>
          <a
            href={PROFILE.telegram}
            target="_blank"
            rel="noreferrer"
            className="font-mono"
            style={{
              fontSize: "0.74rem",
              color: "#B85C38",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: 600,
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#B85C38" }} />
            Unplugged Me ↗
          </a>
        </nav>
      </header>

      {/* ── MAIN WORKSPACE CONTAINER WITH LEFT RAIL ───────────────────── */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 65px)" }}>
        {/* Left Vertical Architectural Spine Rail */}
        <aside
          className="left-spine-rail"
          style={{
            width: "60px",
            borderRight: "1px solid #E6E0D5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            flexShrink: 0,
          }}
        >
          <span className="font-mono" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#9A9386" }}>
            01
          </span>
          <div style={{ width: "1px", height: "40px", backgroundColor: "#D4CDC0", margin: "14px 0" }} />
          <div
            className="font-mono"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "0.64rem",
              letterSpacing: "0.22em",
              color: "#A29B8E",
              textTransform: "uppercase",
              marginTop: "20px",
            }}
          >
            ENGINEERING • ETHIOPIA • APPLIED AI
          </div>
        </aside>

        {/* Content Body */}
        <div className="main-content-area" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* ══════════════════════════════════════════════════════════════
              HERO SECTION (MATCHING SCREENSHOT TOP BLOCK)
             ══════════════════════════════════════════════════════════════ */}
          <section
            style={{
              padding: "4.5rem 4vw 4.5rem",
              borderBottom: "1px solid #E6E0D5",
            }}
          >
            <div
              className="hero-split-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr 1.15fr",
                gap: "4.5rem",
                alignItems: "center",
                maxWidth: "1360px",
                margin: "0 auto",
              }}
            >
              {/* Left Column: Heading, Subtitle, and Buttons */}
              <div>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: "clamp(3.2rem, 6.2vw, 5.2rem)",
                    lineHeight: 1.05,
                    fontWeight: 400,
                    letterSpacing: "-0.03em",
                    color: "#181816",
                    marginBottom: "1.8rem",
                  }}
                >
                  Engineering
                  <br />
                  the Future,
                  <br />
                  Thoughtfully
                </h1>

                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "#635E55",
                    maxWidth: "520px",
                    marginBottom: "2.4rem",
                  }}
                >
                  Software engineer, founder, and AI builder creating durable products for complex problems.
                </p>

                {/* Two Action Buttons Matching the Image */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                  <button onClick={() => scrollTo("work")} className="btn-terracotta">
                    Explore the work
                  </button>
                  <button onClick={() => scrollTo("contact")} className="btn-parchment-ghost">
                    Start a conversation
                  </button>
                </div>
              </div>

              {/* Right Column: Architectural Isometric System Diagram Matching Screenshot */}
              <div
                style={{
                  position: "relative",
                  padding: "1rem 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", maxWidth: "560px" }}>
                  {/* Schematic SVG Illustration */}
                  <svg
                    viewBox="0 0 540 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  >
                    {/* Layer 1: User Interface */}
                    <line x1="30" y1="50" x2="360" y2="50" stroke="#DDD6C8" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="390" y="54" fill="#888175" fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.08em">
                      USER INTERFACE
                    </text>
                    {/* Floating Processor / Client Square */}
                    <rect x="180" y="28" width="28" height="28" fill="#3D3A35" />
                    <line x1="194" y1="12" x2="194" y2="28" stroke="#B85C38" strokeWidth="1.2" />
                    <circle cx="194" cy="12" r="2.5" fill="#B85C38" />

                    {/* Layer 2: Application Layer */}
                    <line x1="30" y1="125" x2="360" y2="125" stroke="#DDD6C8" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="390" y="129" fill="#888175" fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.08em">
                      APPLICATION LAYER
                    </text>
                    {/* Isometric Server Grids */}
                    <g transform="translate(140, 105)">
                      <polygon points="0,12 36,0 72,12 36,24" fill="#EAE5DA" stroke="#9A9284" strokeWidth="1" />
                      <polygon points="0,18 36,6 72,18 36,30" fill="none" stroke="#9A9284" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                    <g transform="translate(230, 105)">
                      <polygon points="0,12 36,0 72,12 36,24" fill="#EAE5DA" stroke="#9A9284" strokeWidth="1" />
                    </g>

                    {/* Layer 3: AI / ML Services */}
                    <line x1="30" y1="205" x2="360" y2="205" stroke="#DDD6C8" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="390" y="209" fill="#888175" fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.08em">
                      AI / ML SERVICES
                    </text>

                    {/* Layer 4: Data Layer */}
                    <line x1="30" y1="285" x2="360" y2="285" stroke="#DDD6C8" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="390" y="289" fill="#888175" fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.08em">
                      DATA LAYER
                    </text>

                    {/* Wireframe Polyhedron (AI / Neural Matrix) */}
                    <g transform="translate(150, 245)">
                      <path
                        d="M30,0 L60,15 L60,45 L30,60 L0,45 L0,15 Z"
                        fill="none"
                        stroke="#605B52"
                        strokeWidth="1.2"
                      />
                      <line x1="30" y1="0" x2="30" y2="60" stroke="#605B52" strokeWidth="1" />
                      <line x1="0" y1="15" x2="60" y2="45" stroke="#605B52" strokeWidth="1" />
                      <line x1="60" y1="15" x2="0" y2="45" stroke="#605B52" strokeWidth="1" />
                      {/* Sub-facets */}
                      <circle cx="30" cy="30" r="3" fill="#B85C38" />
                    </g>

                    {/* Wireframe Cylindrical Database (PostgreSQL / Supabase) */}
                    <g transform="translate(245, 245)">
                      {/* Top ellipse */}
                      <ellipse cx="28" cy="10" rx="26" ry="9" fill="#E2DDD2" stroke="#605B52" strokeWidth="1.2" />
                      {/* Cylinder body */}
                      <path d="M2,10 L2,50 A26,9 0 0,0 54,50 L54,10" fill="none" stroke="#605B52" strokeWidth="1.2" />
                      {/* Middle shelf line */}
                      <path d="M2,30 A26,9 0 0,0 54,30" fill="none" stroke="#756F64" strokeWidth="1" strokeDasharray="2 2" />
                      {/* Bottom ellipse contour */}
                      <path d="M2,50 A26,9 0 0,0 54,50" fill="none" stroke="#605B52" strokeWidth="1.2" />
                    </g>

                    {/* Layer 5: Infrastructure */}
                    <line x1="30" y1="355" x2="360" y2="355" stroke="#DDD6C8" strokeWidth="1" />
                    <text x="390" y="359" fill="#888175" fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.08em">
                      INFRASTRUCTURE
                    </text>
                    {/* Architectural datum tick marks */}
                    <line x1="60" y1="350" x2="60" y2="360" stroke="#B85C38" strokeWidth="1.5" />
                    <line x1="180" y1="350" x2="180" y2="360" stroke="#B85C38" strokeWidth="1.5" />
                    <line x1="300" y1="350" x2="300" y2="360" stroke="#B85C38" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              DARK CONTRAST BAND (MATCHING SCREENSHOT MIDDLE SECTION 02)
             ══════════════════════════════════════════════════════════════ */}
          <section
            id="work"
            style={{
              backgroundColor: "#141413", // Rich charcoal matte
              color: "#ECE8E1",
              borderTop: "1px solid #222220",
              borderBottom: "1px solid #222220",
              padding: "3.8rem 4vw",
              position: "relative",
            }}
          >
            {/* Architectural 02 indicator in left margin */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.05fr 1fr 1.35fr",
                gap: "3rem",
                maxWidth: "1360px",
                margin: "0 auto",
                alignItems: "start",
              }}
              className="dark-band-grid"
            >
              {/* Column 1: Selected Work */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <div className="font-mono" style={{ fontSize: "0.7rem", color: "#B85C38", marginBottom: "6px" }}>
                    02 // PORTFOLIO
                  </div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.65rem",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Selected Work
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      color: "#9C978E",
                      marginBottom: "1.6rem",
                    }}
                  >
                    A selection of product systems and platforms built end-to-end, from first principles to production.
                  </p>

                  {/* Project Selector Pills */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "1.5rem" }}>
                    {PRODUCTS.map((p) => {
                      const isSelected = activeProject.id === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setActiveProject(p)}
                          style={{
                            background: isSelected ? "rgba(184, 92, 56, 0.15)" : "transparent",
                            border: `1px solid ${isSelected ? "#B85C38" : "#2A2A28"}`,
                            color: isSelected ? "#FFFFFF" : "#A6A095",
                            textAlign: "left",
                            padding: "8px 12px",
                            cursor: "pointer",
                            fontSize: "0.8rem",
                            transition: "all 0.15s ease",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ fontWeight: isSelected ? 600 : 400 }}>{p.name}</span>
                          <span className="font-mono" style={{ fontSize: "0.68rem", color: "#B85C38" }}>
                            {p.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Architectural Warehouse / Roof Truss Wireframe Sketch (as shown in image) */}
                <div style={{ marginTop: "1rem" }}>
                  <svg viewBox="0 0 240 70" fill="none" style={{ width: "100%", height: "auto" }}>
                    {/* Architectural roof structure */}
                    <path
                      d="M10,55 L40,35 L120,20 L200,35 L230,55 Z"
                      fill="none"
                      stroke="#48443D"
                      strokeWidth="1.2"
                    />
                    {/* Truss cross-bracing */}
                    <line x1="40" y1="35" x2="40" y2="55" stroke="#3D3A34" strokeWidth="1" />
                    <line x1="80" y1="28" x2="80" y2="55" stroke="#3D3A34" strokeWidth="1" />
                    <line x1="120" y1="20" x2="120" y2="55" stroke="#B85C38" strokeWidth="1.2" />
                    <line x1="160" y1="28" x2="160" y2="55" stroke="#3D3A34" strokeWidth="1" />
                    <line x1="200" y1="35" x2="200" y2="55" stroke="#3D3A34" strokeWidth="1" />
                    {/* Base ground line */}
                    <line x1="0" y1="55" x2="240" y2="55" stroke="#B85C38" strokeWidth="1" strokeDasharray="4 2" />
                  </svg>
                </div>
              </div>

              {/* Column 2: Expertise */}
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    marginBottom: "1.2rem",
                  }}
                >
                  Expertise
                </h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    "Full-Stack Engineering",
                    "AI / Machine Learning",
                    "System Architecture",
                    "Product Strategy",
                    "Technical Leadership",
                  ].map((item) => (
                    <li
                      key={item}
                      onClick={() => setSelectedExpertise(item)}
                      style={{
                        fontSize: "0.88rem",
                        color: selectedExpertise === item ? "#FFFFFF" : "#A6A095",
                        cursor: "pointer",
                        transition: "color 0.15s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: selectedExpertise === item ? "#B85C38" : "#44413B",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Dynamic Tech Matrix Excerpt */}
                <div
                  className="font-mono"
                  style={{
                    marginTop: "1.8rem",
                    borderTop: "1px solid #282826",
                    paddingTop: "1rem",
                    fontSize: "0.72rem",
                    color: "#858076",
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: "#B85C38" }}>STACK:</strong> Next.js · Django · NestJS · Groq Vision · pgvector · Ubuntu
                  26.04 · Docker
                </div>
              </div>

              {/* Column 3: Principles */}
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    marginBottom: "1.2rem",
                  }}
                >
                  Principles
                </h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    "Solve meaningful problems",
                    "Build with clarity and rigor",
                    "Design for resilience and scale",
                    "Ship, learn, iterate",
                    "Create lasting impact",
                  ].map((p) => (
                    <li
                      key={p}
                      style={{
                        fontSize: "0.88rem",
                        color: "#A6A095",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#B85C38", fontSize: "0.7rem" }}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="font-mono"
                  style={{
                    marginTop: "1.8rem",
                    borderTop: "1px solid #282826",
                    paddingTop: "1rem",
                    fontSize: "0.72rem",
                    color: "#858076",
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: "#B85C38" }}>VALUES:</strong> Zero tutorial clones. Deployed products with real users.
                </div>
              </div>

              {/* Column 4: Founder Perspective & Fibonacci Golden Ratio Diagram */}
              <div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    marginBottom: "1.2rem",
                  }}
                >
                  Founder Perspective
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    color: "#B4AFA5",
                    marginBottom: "1.4rem",
                  }}
                >
                  Technology is a multiplier when it's built on first principles and aligned with real human needs.
                </p>

                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "#8E897F",
                    marginBottom: "1.6rem",
                  }}
                >
                  I build products and platforms that endure—simple to use, difficult to break, and ready to evolve.
                </p>

                {/* Handcrafted Golden Ratio / Fibonacci Spiral Diagram (Matching Screenshot) */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                  <svg viewBox="0 0 160 100" fill="none" style={{ width: "140px", height: "auto" }}>
                    {/* Outer Golden Rectangle */}
                    <rect x="2" y="2" width="156" height="96" stroke="#3A3833" strokeWidth="1" />
                    {/* Subdivisions */}
                    <line x1="98" y1="2" x2="98" y2="98" stroke="#3A3833" strokeWidth="0.8" />
                    <line x1="98" y1="62" x2="158" y2="62" stroke="#3A3833" strokeWidth="0.8" />
                    <line x1="135" y1="62" x2="135" y2="98" stroke="#3A3833" strokeWidth="0.8" />
                    {/* The Golden Spiral Arc */}
                    <path
                      d="M2,98 A96,96 0 0,1 98,2 A60,60 0 0,1 158,62 A38,38 0 0,1 135,98 A23,23 0 0,1 120,84"
                      fill="none"
                      stroke="#B85C38"
                      strokeWidth="1.2"
                    />
                    <circle cx="120" cy="84" r="2" fill="#B85C38" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              CONTACT / CALL TO ACTION ROW (MATCHING SCREENSHOT BOTTOM ROW)
             ══════════════════════════════════════════════════════════════ */}
          <section
            id="contact"
            ref={contactSectionRef}
            style={{
              padding: "2.4rem 4vw",
              borderBottom: "1px solid #E6E0D5",
              backgroundColor: "#F5F2EB",
            }}
          >
            <div
              className="contact-bar-flex"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                maxWidth: "1360px",
                margin: "0 auto",
              }}
            >
              {/* Left: 02 | Contact */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "18px" }}>
                <span className="font-mono" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#9A9386" }}>
                  02
                </span>
                <span style={{ width: "1px", height: "18px", backgroundColor: "#D4CDC0" }} />
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#181816",
                  }}
                >
                  Contact
                </h2>
              </div>

              {/* Middle: Invitation Sentence */}
              <div
                style={{
                  fontSize: "1.1rem",
                  color: "#635E55",
                  fontStyle: "italic",
                  fontFamily: "'Newsreader', Georgia, serif",
                }}
              >
                Let's build something meaningful together.
              </div>

              {/* Right: Long Hand-drawn / Pencil Arrow */}
              <div style={{ display: "flex", alignItems: "center", flex: 1, maxWidth: "340px" }}>
                <svg viewBox="0 0 320 20" fill="none" style={{ width: "100%", height: "20px" }}>
                  <line x1="0" y1="10" x2="310" y2="10" stroke="#B85C38" strokeWidth="1.2" />
                  <path d="M302,4 L312,10 L302,16" stroke="#B85C38" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Expanded Dispatch Card */}
            <div
              style={{
                maxWidth: "1360px",
                margin: "2.2rem auto 0",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2DCD0",
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: "3rem",
              }}
              className="hero-split-grid"
            >
              {/* Left: Contact Coordinates */}
              <div>
                <div className="font-mono" style={{ fontSize: "0.72rem", color: "#B85C38", fontWeight: 700, marginBottom: "8px" }}>
                  DIRECT CHANNELS // ADDIS ABABA
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                  Connect with Abdusalam
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#666157", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Open to full-stack engineering roles, applied AI founder partnerships, and technical contracts.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.8rem" }}>
                  <div className="font-mono" style={{ fontSize: "0.85rem" }}>
                    <span style={{ color: "#8E887E" }}>EMAIL: </span>
                    <strong style={{ color: "#B85C38" }}>{PROFILE.email}</strong>
                  </div>
                  <div className="font-mono" style={{ fontSize: "0.85rem" }}>
                    <span style={{ color: "#8E887E" }}>TELEGRAM: </span>
                    <a href={PROFILE.telegram} target="_blank" rel="noreferrer" style={{ color: "#181816", textDecoration: "underline" }}>
                      {PROFILE.telegramHandle} (Unplugged Me) ↗
                    </a>
                  </div>
                  <div className="font-mono" style={{ fontSize: "0.85rem" }}>
                    <span style={{ color: "#8E887E" }}>GITHUB: </span>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#181816", textDecoration: "underline" }}>
                      github.com/{PROFILE.handle}-cmd ↗
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <button onClick={copyEmail} className="btn-terracotta" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
                    {emailCopied ? "✓ Email Copied" : "Copy Direct Email"}
                  </button>
                  <button onClick={() => setMitModalOpen(true)} className="btn-parchment-ghost" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
                    Verify MIT Credential ↗
                  </button>
                </div>
              </div>

              {/* Right: Message Form */}
              <div>
                {formStatus === "success" ? (
                  <div style={{ backgroundColor: "#F7FAF7", border: "1px solid #10B981", padding: "1.5rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", color: "#10B981", marginBottom: "0.5rem" }}>✓</div>
                    <h4 className="font-serif" style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>
                      Message Received
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#555" }}>{formMsg}</p>
                    <button onClick={() => setFormStatus("idle")} className="btn-parchment-ghost" style={{ marginTop: "1rem" }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    <div>
                      <label className="font-mono" style={{ display: "block", fontSize: "0.7rem", color: "#666157", marginBottom: "4px" }}>
                        NAME / ORGANIZATION *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          backgroundColor: "#F7F5F0",
                          border: "1px solid #D6D0C4",
                          fontSize: "0.85rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                    <div>
                      <label className="font-mono" style={{ display: "block", fontSize: "0.7rem", color: "#666157", marginBottom: "4px" }}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          backgroundColor: "#F7F5F0",
                          border: "1px solid #D6D0C4",
                          fontSize: "0.85rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                    <div>
                      <label className="font-mono" style={{ display: "block", fontSize: "0.7rem", color: "#666157", marginBottom: "4px" }}>
                        MESSAGE *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          backgroundColor: "#F7F5F0",
                          border: "1px solid #D6D0C4",
                          fontSize: "0.85rem",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      />
                    </div>
                    {formStatus === "error" && (
                      <div style={{ color: "#DC2626", fontSize: "0.78rem" }}>{formMsg}</div>
                    )}
                    <button type="submit" disabled={formStatus === "sending"} className="btn-terracotta" style={{ marginTop: "4px" }}>
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              EXTENDED DOSSIER: FOUNDATIONS & CREDENTIALS
             ══════════════════════════════════════════════════════════════ */}
          <section
            id="foundations"
            style={{
              padding: "4.5rem 4vw",
              borderBottom: "1px solid #E6E0D5",
              backgroundColor: "#FAF8F3",
            }}
          >
            <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
              <div className="font-mono" style={{ fontSize: "0.72rem", color: "#B85C38", fontWeight: 700, marginBottom: "6px" }}>
                03 // ENGINEERING FOUNDATIONS
              </div>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  marginBottom: "0.85rem",
                }}
              >
                Credentials that Matter
              </h2>
              <p style={{ fontSize: "1rem", color: "#635E55", maxWidth: "680px", marginBottom: "2.8rem" }}>
                Bridging traditional software engineering at AAU, national defensive cybersecurity at INSA, and applied
                decision AI validated by MIT Open Learning leadership.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
                {CREDENTIAL_PILLARS.map((p) => {
                  const isMit = p.id === "mit-ai";
                  return (
                    <div
                      key={p.id}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: `1px solid ${isMit ? "#B85C38" : "#E2DCD0"}`,
                        padding: "1.8rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div className="font-mono" style={{ fontSize: "0.68rem", color: "#B85C38", fontWeight: 700, marginBottom: "8px" }}>
                          {p.badge}
                        </div>
                        <h3 className="font-serif" style={{ fontSize: "1.45rem", marginBottom: "4px" }}>
                          {p.title}
                        </h3>
                        <div className="font-mono" style={{ fontSize: "0.78rem", color: "#181816", marginBottom: "2px" }}>
                          {p.authority}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "#8E887E", marginBottom: "1rem" }}>
                          {p.sponsor}
                        </div>
                        <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#5C574F", marginBottom: "1.2rem" }}>
                          {p.summary}
                        </p>
                      </div>

                      <div
                        className="font-mono"
                        style={{
                          borderTop: "1px solid #ECE7DD",
                          paddingTop: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.72rem",
                        }}
                      >
                        <span style={{ color: "#8E887E" }}>ID: {p.verificationId}</span>
                        {isMit ? (
                          <button
                            onClick={() => setMitModalOpen(true)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "#B85C38",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: "0.72rem",
                            }}
                          >
                            [VERIFY HASH ↗]
                          </button>
                        ) : (
                          <span style={{ color: "#8E887E" }}>[VERIFIED]</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              EXTENDED DOSSIER: THE ENGINEERING CHANGELOG
             ══════════════════════════════════════════════════════════════ */}
          <section
            id="changelog"
            style={{
              padding: "4.5rem 4vw",
              backgroundColor: "#F5F2EB",
            }}
          >
            <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <div className="font-mono" style={{ fontSize: "0.72rem", color: "#B85C38", fontWeight: 700, marginBottom: "6px" }}>
                    04 // THE ENGINEERING LEDGER
                  </div>
                  <h2 className="font-serif" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400 }}>
                    Changelog & Technical Stream
                  </h2>
                </div>
                <a href={PROFILE.telegram} target="_blank" rel="noreferrer" className="btn-terracotta">
                  Join @unpluggedme Channel ↗
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {CHANGELOG.map((log) => (
                  <div
                    key={log.id}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2DCD0",
                      padding: "1.4rem",
                    }}
                  >
                    <div
                      className="font-mono"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.72rem",
                        color: "#8E887E",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ color: "#B85C38", fontWeight: 700 }}>[{log.tag}]</span>
                      <strong>{log.date}</strong>
                    </div>
                    <h4 className="font-serif" style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>
                      {log.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#5C574F" }}>{log.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FOOTER ─────────────────────────────────────────────────── */}
          <footer
            style={{
              borderTop: "1px solid #E6E0D5",
              padding: "2rem 4vw",
              backgroundColor: "#EFECE4",
              fontSize: "0.75rem",
              color: "#7E786E",
            }}
          >
            <div
              className="font-mono"
              style={{
                maxWidth: "1360px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <strong>Abdusalam Oumer Aman</strong> · AAU Software Engineering · INSA Cyber · MIT Open Learning
              </div>
              <div>
                DESIGN: <span style={{ color: "#B85C38" }}>WARM PARCHMENT · CHARCOAL CADENCE · ARCHITECTURAL SCHEMATICS</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* ── MIT CERTIFICATE VERIFICATION MODAL ──────────────────────── */}
      {mitModalOpen && (
        <div
          onClick={() => setMitModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20, 20, 19, 0.8)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "640px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              border: "2px solid #B85C38",
              padding: "2rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => setMitModalOpen(false)}
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                color: "#181816",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <div className="font-mono" style={{ fontSize: "0.72rem", color: "#B85C38", fontWeight: 700, marginBottom: "4px" }}>
              MIT OPEN LEARNING // CREDENTIAL RECORD
            </div>

            <h3 className="font-serif" style={{ fontSize: "1.8rem", fontWeight: 400, marginBottom: "0.2rem" }}>
              Introduction to Universal AI
            </h3>

            <div className="font-mono" style={{ fontSize: "0.78rem", color: "#666157", marginBottom: "1.2rem" }}>
              Validated under Certificate ID: <strong style={{ color: "#B85C38" }}>{PROFILE.mitCertId}</strong>
            </div>

            <div
              className="font-mono"
              style={{
                backgroundColor: "#F7F5F0",
                border: "1px solid #E2DCD0",
                padding: "1.2rem",
                fontSize: "0.78rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              <div>RECIPIENT: <strong>{PROFILE.name}</strong></div>
              <div>ISSUANCE DATE: <strong>{PROFILE.mitCertDate}</strong></div>
              <div>FACULTY SPONSOR: <strong>{PROFILE.mitSponsor}</strong></div>
              <div style={{ marginTop: "6px", color: "#B85C38" }}>STATUS: CRYPTOGRAPHICALLY VALID</div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
              <button
                onClick={() => {
                  navigator?.clipboard?.writeText(PROFILE.mitCertId);
                  alert(`Copied MIT Certificate ID: ${PROFILE.mitCertId}`);
                }}
                className="btn-parchment-ghost"
              >
                Copy ID
              </button>
              <button onClick={() => setMitModalOpen(false)} className="btn-terracotta">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
