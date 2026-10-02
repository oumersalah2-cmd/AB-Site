import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Blog", "Contact"];

const SKILLS = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "Python", "REST APIs"] },
  { category: "Mobile Development", items: ["Flutter", "Dart", "Android", "Cross-Platform"] },
  { category: "DevOps & Cloud", items: ["Docker", "CI/CD", "Linux", "Railway", "Vercel", "Git & GitHub"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase", "MongoDB"] },
  { category: "AI & Integrations", items: ["Groq AI", "Gemini API", "OpenAI API", "Telegram Bot API"] },
];

const TYPING_LINES = [
  "Next.js · Django · Flutter · Supabase · DevOps.",
  "Sof Omar Technologies & INSA Software Engineering Alum.",
  "Built an AI crop diagnostic bot serving Ethiopian farmers.",
  "Full-stack from schema to UI — PostgreSQL to Next.js.",
  "Daily LeetCode & Algorithmic Problem Solving.",
  "Open to remote engineering roles & contract work.",
];

const PROJECTS = [
  // ── Core AI & Educational Platforms
  {
    name: "Gebere Vision AI",
    desc: "AI-powered agricultural Telegram bot utilizing Groq AI vision models (llama-4-scout-17b) to provide instant crop disease diagnosis in Amharic, Afaan Oromoo, English, and Arabic, backed by Supabase and a Human-in-the-Loop verification network.",
    tags: ["Groq AI", "Telegram Bot API", "Supabase", "PostgreSQL", "Node.js"],
    type: "AI & EdTech",
    accent: "#10B981",
    demo: "https://t.me/gebere_vision_bot",
    github: "https://github.com/oumersalah2-cmd/gebere-vision-ai"
  },
  {
    name: "Ace Ifa Boru (Ace IfaBoruBot)",
    desc: "Educational Telegram mini-app delivering premium, localized practice questions (such as Herrega and Saayinsii Waliigalaa) to help students prepare for competitive boarding school entrance exams across Ethiopia.",
    tags: ["Telegram Mini-App", "Node.js", "EdTech", "Localized Education"],
    type: "AI & EdTech",
    accent: "#3B82F6",
    demo: "https://t.me/ace_ifaborubot",
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "Jabalu",
    desc: "Interactive, bilingual narrative web application built with React, Next.js, and Tailwind CSS, designed to showcase rich historical stories through engaging multimedia and fluid storytelling interfaces.",
    tags: ["React", "Next.js", "Tailwind CSS", "Interactive Narrative"],
    type: "Full-Stack",
    accent: "#8B5CF6",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },

  // ── Business & Financial Systems
  {
    name: "SmartBiz ERP Lite",
    desc: "Offline-first Progressive Web Application (PWA) built with Next.js, NestJS, and PostgreSQL to handle local business pricing, product cataloging, and inventory management reliably without constant internet connectivity.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "PWA", "Offline-First"],
    type: "Full-Stack",
    accent: "#06B6D4",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "Ethio Bucks — Task & Reward Platform",
    desc: "Robust financial backend platform engineered with Django and PostgreSQL for the Ethiopian market. Features a mobile-first ETB wallet, task completion flows, referral system, and daily bonus claiming.",
    tags: ["Django", "PostgreSQL", "Python", "Mobile-First Wallet", "Fintech"],
    type: "Fintech",
    accent: "#10B981",
    demo: "http://abdusalam.pythonanywhere.com",
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "AmanaTrade — Supply Chain Platform",
    desc: "Agricultural supply chain settlement and trading platform developed as an innovative project proposal for the M-PESA Hackathon 2026, facilitating fair payments, escrow, and agricultural logistics tracking.",
    tags: ["M-PESA Hackathon 2026", "Supply Chain", "Fintech", "Next.js", "APIs"],
    type: "Fintech",
    accent: "#F59E0B",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "Seif Online Services",
    desc: "Localized, reliable web service platform built with Next.js and Tailwind CSS providing passport processing, government application support, and digital service access for the Dodola city community.",
    tags: ["Next.js", "Tailwind CSS", "Dodola Community", "Web Platform"],
    type: "Full-Stack",
    accent: "#EC4899",
    demo: "https://seif-online-services.vercel.app/",
    github: "https://github.com/oumersalah2-cmd"
  },

  // ── Management & Lifestyle Applications
  {
    name: "CampusTrack — Lost & Found System",
    desc: "Secure lost-and-found item management system utilizing Node.js, Express, SQLite3, and JWT authentication to streamline campus item recovery, owner verification, and custody audits.",
    tags: ["Node.js", "Express", "SQLite3", "JWT Auth", "Campus Security"],
    type: "Full-Stack",
    accent: "#6366F1",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "AAU Café Management System",
    desc: "Full-stack campus dining registration platform for Addis Ababa University. Digitises meal attendance, automates 3,000 ETB monthly stipend payments, and prevents dual-claiming fraud with database constraints.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT Auth", "AAU Dining"],
    type: "Full-Stack",
    accent: "#F97316",
    demo: "https://addis-ababa-university-cafe-management.onrender.com/",
    github: "https://github.com/oumersalah2-cmd/Addis-Ababa-University-Cafe-Management-and-Stipend-System"
  },
  {
    name: "FitEthio — Health & Wellness Platform",
    desc: "Health and wellness web application built with Next.js and Supabase for the Wellness Hackathon 2026, delivering personalized workout tracking, nutrition guidance, and healthy lifestyle monitoring.",
    tags: ["Next.js", "Supabase", "Wellness Hackathon 2026", "Health Tech"],
    type: "Full-Stack",
    accent: "#14B8A6",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },

  // ── Mobile Engineering
  {
    name: "Flutter E-Commerce App",
    desc: "Modern mobile storefront built with Flutter and Dart, leveraging Riverpod for predictable reactive state management, product filtering, dynamic cart management, and seamless checkout flows.",
    tags: ["Flutter", "Dart", "Riverpod", "Mobile Storefront", "Cross-Platform"],
    type: "Mobile",
    accent: "#0284C7",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },
  {
    name: "Flutter Weather App",
    desc: "Cross-platform mobile application delivering real-time forecasts, multi-city tracking, and detailed meteorological metrics via live integration with the Open-Meteo API.",
    tags: ["Flutter", "Dart", "Open-Meteo API", "REST API", "Mobile App"],
    type: "Mobile",
    accent: "#38BDF8",
    demo: null,
    github: "https://github.com/oumersalah2-cmd"
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "Sof Omar Technologies",
    period: "Jun 2026 – Sep 2026",
    desc: "Successfully completed software engineering internship at Sof Omar Technologies. Contributed to production web and mobile software development, agile team workflows, and feature implementation with high dedication and code quality.",
    tags: ["Software Engineering", "Full-Stack", "Flutter", "Web Development", "Team Collaboration"]
  },
  {
    role: "Software Engineering Trainee / Intern",
    company: "INSA (Information Network Security Administration)",
    period: "2025 – 2026",
    desc: "Completed technical engineering training and internship at Ethiopia's national cyber security administration. Worked on system security fundamentals, network architecture, and robust software implementation practices.",
    tags: ["Cybersecurity", "Network Architecture", "Python", "Linux", "Software Engineering"]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Lamif Digital Aid",
    period: "Feb 2024 – Mar 2026",
    desc: "Expert-vetted full-stack developer building modern, scalable web applications. Designed responsive frontends with React and Next.js, developed secure backend APIs with Node.js, Express, and Django, and managed relational and document databases.",
    tags: ["React", "Next.js", "Node.js", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    role: "Software Engineer — Full-Stack",
    company: "Self-Employed / Personal Projects",
    period: "May 2024 – Present",
    desc: "Designing and shipping full-stack web applications from concept to deployment. Built Ethio Bucks (Django fintech), the LAMIF Tutor Marketplace (MERN), and the AAU Café ordering system. Exploring NestJS and AI API integration.",
    tags: ["Django", "NestJS", "React", "TypeScript", "PostgreSQL", "AI APIs"]
  },
];

const CERTS = [
  { title: "Internship Certificate of Completion", provider: "Sof Omar Technologies", date: "Sep 2026" },
  { title: "Cybersecurity & Software Training", provider: "INSA (Information Network Security Administration)", date: "2025 – 2026" },
  { title: "Android Developer Fundamentals", provider: "Udacity", date: "Sep 2025" },
  { title: "Programming Fundamentals", provider: "Udacity", date: "Sep 2025" },
];

const BLOG = [
  {
    title: "Building a Financial Platform for the Ethiopian Market with Django",
    date: "March 2025",
    excerpt: "What it takes to design a transaction-safe, mobile-first ETB wallet system in Django — database decisions, security considerations, and UX tradeoffs.",
    readTime: "8 min"
  },
  {
    title: "MERN vs Django for a Tutor Marketplace: My Real-World Comparison",
    date: "January 2025",
    excerpt: "I built versions of the same platform in both stacks. Here's what I actually learned about when to pick each one and what the real tradeoffs are.",
    readTime: "10 min"
  },
  {
    title: "Why I Do LeetCode Every Day (And What It Changed in My Code)",
    date: "November 2024",
    excerpt: "Two months of daily algorithmic practice — the habits it built and the code quality changes I noticed in production projects.",
    readTime: "6 min"
  },
];

// ── Hooks ──────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function useTyping(lines, speed = 40, pause = 1800) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx >= current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIdx(i => (i + 1) % lines.length);
        setCharIdx(0);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx, lines, speed, pause]);

  const current = lines[lineIdx] || "";
  return current.slice(0, charIdx);
}

// ── Components ─────────────────────────────────────────
function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useInView();
  const transforms = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    none: "none"
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StatCounter({ num, suffix = "", label, start }) {
  const count = useCounter(num, 1400, start);
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1, letterSpacing: "-0.03em" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.06em", marginTop: "6px", fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

function Tag({ children, accent }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        background: accent ? `${accent}18` : "var(--surface-soft)",
        border: `1px solid ${accent ? `${accent}33` : "var(--border)"}`,
        borderRadius: "4px",
        fontSize: "0.72rem",
        color: accent || "var(--text)",
        fontWeight: 500,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap"
      }}
    >
      {children}
    </span>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
      <span style={{ width: "16px", height: "2px", background: "var(--accent)", borderRadius: "2px" }} />
      <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--text)", margin: "0 0 0.5rem", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
      {children}
    </h2>
  );
}

// ── Main App ───────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [statsRef, statsVisible] = useInView(0.2);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const typedText = useTyping(TYPING_LINES);

  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const emailAddress = "oumersalah2@gmail.com";

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase())).filter(Boolean);
      const current = sections.find(s => {
        const rect = s.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true; // Default to sleek dark mode
    const saved = window.localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(emailAddress).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2400);
      });
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormErrorMsg("Please fill in your name, email, and message.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setFormErrorMsg("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `Portfolio Contact from ${formState.name}`,
          message: formState.message,
          _subject: `Portfolio Message from ${formState.name}`
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setFormStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to deliver message via form service.");
      }
    } catch (err) {
      console.warn("Direct form submit fallback:", err);
      // Fallback: If network/adblocker blocks the API, we provide direct mailto action
      setFormStatus("error");
      setFormErrorMsg("Could not submit automatically. Please click below to send via your email app or copy Abdusalam's email address directly.");
    }
  };

  const types = ["All", "AI & EdTech", "Full-Stack", "Fintech", "Mobile"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        /* ── LIGHT THEME ───────────────────────── */
        :root, [data-theme="light"] {
          color-scheme: light;
          --bg: #FFFFFF;
          --surface: #FFFFFF;
          --surface-soft: #F4F4F6;
          --surface-hover: #ECECEF;
          --border: #E4E4E7;
          --border-hover: #D4D4D8;
          --text: #09090B;
          --muted: #71717A;
          --muted-strong: #27272A;
          --accent: #2563EB;
          --accent-soft: rgba(37, 99, 235, 0.08);
          --nav-bg: rgba(255, 255, 255, 0.85);
          --btn-bg: #09090B;
          --btn-text: #FFFFFF;
          --btn-bg-hover: #27272A;
          --btn-outline-bg: transparent;
          --btn-outline-border: #E4E4E7;
          --btn-outline-hover: #F4F4F6;
          --shadow: rgba(0, 0, 0, 0.06);
          --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          --card-shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.08);
        }

        /* ── DARK THEME (PURE TRUE BLACK) ──────── */
        [data-theme="dark"] {
          color-scheme: dark;
          --bg: #000000;
          --surface: #0A0A0A;
          --surface-soft: #121212;
          --surface-hover: #1A1A1A;
          --border: rgba(255, 255, 255, 0.1);
          --border-hover: rgba(255, 255, 255, 0.22);
          --text: #FFFFFF;
          --muted: #A1A1AA;
          --muted-strong: #E4E4E7;
          --accent: #3B82F6;
          --accent-soft: rgba(59, 130, 246, 0.14);
          --nav-bg: rgba(0, 0, 0, 0.85);
          --btn-bg: #FFFFFF;
          --btn-text: #000000;
          --btn-bg-hover: #E4E4E7;
          --btn-outline-bg: rgba(255, 255, 255, 0.03);
          --btn-outline-border: rgba(255, 255, 255, 0.12);
          --btn-outline-hover: rgba(255, 255, 255, 0.08);
          --shadow: rgba(0, 0, 0, 0.6);
          --card-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          --card-shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.7);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: var(--bg);
          color: var(--text);
          min-width: 0;
          overflow-x: hidden;
          transition: background-color 0.25s ease, color 0.25s ease;
          line-height: 1.6;
        }

        ::selection {
          background: var(--accent);
          color: #FFFFFF;
        }

        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--muted);
          padding: 8px 12px;
          border-radius: 6px;
          transition: color 0.2s, background-color 0.2s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text);
          background-color: var(--surface-soft);
        }

        .btn-primary {
          padding: 12px 24px;
          background: var(--btn-bg);
          color: var(--btn-text);
          border: 1px solid transparent;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: var(--btn-bg-hover);
          transform: translateY(-1px);
        }

        .btn-outline {
          padding: 12px 24px;
          background: var(--btn-outline-bg);
          color: var(--text);
          border: 1px solid var(--btn-outline-border);
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: var(--btn-outline-hover);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.85rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--card-shadow-hover);
        }

        .filter-btn {
          padding: 6px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.2s ease;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
        }
        .filter-btn:hover {
          color: var(--text);
          border-color: var(--border-hover);
        }
        .filter-btn.active {
          background: var(--btn-bg);
          color: var(--btn-text);
          border-color: var(--btn-bg);
        }

        .demo-btn {
          padding: 8px 14px;
          font-size: 0.76rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.15em;
          background: var(--accent);
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }

        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .pulse-dot {
          position: relative;
        }
        .pulse-dot::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: #22C55E;
          animation: pulse-dot 2s infinite ease-out;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        input, textarea {
          transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
          border-radius: 6px;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px var(--accent-soft) !important;
        }

        @media (max-width: 900px) {
          .nav-links-list {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
          }
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
        }
      `}</style>

      <div style={{ background: "var(--bg)", minHeight: "100vh", position: "relative" }}>

        {/* ── NAVBAR ── */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 6vw",
            background: scrolled ? "var(--nav-bg)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            transition: "all 0.25s ease"
          }}
        >
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("About")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text)"
            }}
          >
            <span style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              background: "var(--surface-soft)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "-0.02em"
            }}>
              AO
            </span>
            <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>
              Abdusalam
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="nav-links-list" style={{ display: "flex", gap: "0.4rem", listStyle: "none" }}>
            {NAV_LINKS.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`nav-link ${active === l ? "active" : ""}`}
              >
                {l}
              </button>
            ))}
          </nav>

          {/* Nav Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              aria-label="Toggle theme"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
            >
              {darkMode ? (
                // Sun Icon (Switch to Light)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                // Moon Icon (Switch to Dark)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => scrollTo("Contact")}
              className="btn-primary"
              style={{ padding: "8px 16px", fontSize: "0.78rem" }}
            >
              Get in Touch
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              background: "var(--surface)",
              borderBottom: "1px solid var(--border)",
              zIndex: 99,
              padding: "1.2rem 6vw",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}
          >
            {NAV_LINKS.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "10px 12px",
                  fontSize: "0.95rem",
                  color: active === l ? "var(--accent)" : "var(--text)",
                  fontWeight: active === l ? 700 : 500,
                  cursor: "pointer",
                  borderRadius: "6px"
                }}
              >
                {l}
              </button>
            ))}
          </div>
        )}

        {/* ── HERO SECTION (CLEAN & MINIMALIST) ── */}
        <section
          id="about"
          style={{
            padding: "160px 6vw 90px",
            maxWidth: "920px",
            margin: "0 auto",
            minHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <FadeIn delay={0.05}>
            {/* Available status pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px",
                borderRadius: "100px",
                background: "var(--surface-soft)",
                border: "1px solid var(--border)",
                marginBottom: "1.75rem"
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block"
                }}
              />
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text)" }}>
                Available for full-time & contract roles
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: "0.75rem"
              }}
            >
              Abdusalam Oumer
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "1.25rem"
              }}
            >
              Full-Stack Software Engineer · AAU Software Engineering 🇪🇹
            </p>
          </FadeIn>

          {/* Typing effect line */}
          <FadeIn delay={0.25}>
            <div
              style={{
                fontSize: "0.95rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--muted)",
                minHeight: "1.8rem",
                marginBottom: "1.25rem"
              }}
            >
              <span style={{ color: "var(--accent)", marginRight: "6px" }}>&gt;</span>
              {typedText}
              <span className="cursor" />
            </div>

            <p
              style={{
                fontSize: "1.02rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "680px",
                marginBottom: "2.5rem"
              }}
            >
              Specializing in full-stack architecture, performant web applications, and applied AI integrations.
              From PostgreSQL schemas to smooth Next.js interfaces, I build production-ready digital products with clean, reliable code.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.35}>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <button onClick={() => scrollTo("Projects")} className="btn-primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <button onClick={() => scrollTo("Contact")} className="btn-outline">
                Get in Touch
              </button>
              <button
                onClick={handleCopyEmail}
                className="btn-outline"
                title="Click to copy email address"
                style={{ position: "relative" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </FadeIn>

          {/* Stats Bar */}
          <FadeIn delay={0.45}>
            <div
              ref={statsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "2rem",
                paddingTop: "2.25rem",
                borderTop: "1px solid var(--border)",
                maxWidth: "640px"
              }}
            >
              <StatCounter num={12} suffix="+" label="Projects Shipped" start={statsVisible} />
              <StatCounter num={2} suffix="+ Years" label="Software Building" start={statsVisible} />
              <StatCounter num={5} suffix="+" label="Core Tech Stacks" start={statsVisible} />
            </div>
          </FadeIn>
        </section>

        {/* ── SKILLS SECTION ── */}
        <section
          id="skills"
          style={{
            padding: "100px 6vw",
            maxWidth: "1200px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)"
          }}
        >
          <FadeIn>
            <SectionEyebrow>Capabilities</SectionEyebrow>
            <SectionHeading>Technical Skills & Stack</SectionHeading>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", maxWidth: "560px", marginTop: "0.5rem" }}>
              Full-cycle software engineering from robust database design to responsive frontend interfaces.
            </p>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem"
            }}
          >
            {SKILLS.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.08}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "1.75rem",
                    height: "100%"
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "1.25rem"
                    }}
                  >
                    {group.category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.items.map(s => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Algorithmic Practice Banner */}
          <FadeIn delay={0.25}>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.25rem 1.75rem",
                background: "var(--surface-soft)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "1.4rem" }}>⚡</span>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text)" }}>
                    Daily Algorithmic Practice & Problem Solving
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                    Strengthening logic, data structures, and runtime efficiency through consistent practice.
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["LeetCode", "Codeforces", "HackerRank"].map(p => (
                  <span
                    key={p}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── PROJECTS SECTION ── */}
        <section
          id="projects"
          style={{
            padding: "100px 6vw",
            maxWidth: "1200px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)"
          }}
        >
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginBottom: "2.5rem"
              }}
            >
              <div>
                <SectionEyebrow>Portfolio</SectionEyebrow>
                <SectionHeading>Featured Projects</SectionHeading>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", maxWidth: "520px", marginTop: "0.5rem" }}>
                  Selected production applications, AI systems, and platforms built for real-world impact.
                </p>
              </div>

              {/* Filter Tabs */}
              <div style={{ display: "flex", gap: "8px" }}>
                {types.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`filter-btn ${filter === t ? "active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Project Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {filtered.map((proj, i) => (
              <FadeIn key={proj.name} delay={i * 0.05}>
                <div className="project-card">
                  {/* Card Header: Type Badge & Status */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: proj.accent
                      }}
                    >
                      {proj.type}
                    </span>
                    {proj.demo && (
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: "var(--muted)" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>
                    {proj.name}
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.5rem", flex: 1 }}>
                    {proj.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
                    {proj.tags.map(t => (
                      <Tag key={t} accent={proj.accent}>{t}</Tag>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="demo-btn"
                        style={{
                          background: "var(--btn-bg)",
                          color: "var(--btn-text)",
                          border: "1px solid transparent"
                        }}
                      >
                        Live Demo
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="demo-btn"
                      style={{
                        background: "var(--surface-soft)",
                        color: "var(--text)",
                        border: "1px solid var(--border)"
                      }}
                    >
                      GitHub
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE SECTION ── */}
        <section
          id="experience"
          style={{
            padding: "100px 6vw",
            maxWidth: "1000px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)"
          }}
        >
          <FadeIn>
            <SectionEyebrow>Career & Growth</SectionEyebrow>
            <SectionHeading>Work Experience</SectionHeading>
          </FadeIn>

          <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.12}>
                <div
                  className="experience-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: "2rem",
                    paddingBottom: "2rem",
                    borderBottom: "1px solid var(--border)"
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
                      {exp.period}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "var(--accent)", fontWeight: 700, marginTop: "4px" }}>
                      {exp.company}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                      {exp.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {exp.tags.map(t => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: "3rem" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>
                Certifications & Specializations
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                {CERTS.map(c => (
                  <div
                    key={c.title}
                    style={{
                      padding: "1.25rem",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px"
                    }}
                  >
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text)" }}>
                      {c.title}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "4px" }}>
                      {c.provider} · {c.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── BLOG SECTION ── */}
        <section
          id="blog"
          style={{
            padding: "100px 6vw",
            maxWidth: "1200px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)"
          }}
        >
          <FadeIn>
            <SectionEyebrow>Engineering Notes</SectionEyebrow>
            <SectionHeading>Technical Writing</SectionHeading>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", maxWidth: "520px", marginTop: "0.5rem" }}>
              Deep-dives into architectural decisions, real-world tradeoffs, and algorithmic problem-solving.
            </p>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem"
            }}
          >
            {BLOG.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "var(--muted)", marginBottom: "1rem" }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.75rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.25rem", flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Read Article →
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CONTACT SECTION (FIXED EMAIL & WORKING FORM) ── */}
        <section
          id="contact"
          style={{
            padding: "110px 6vw 90px",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            position: "relative"
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div
                className="contact-layout-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.15fr",
                  gap: "5rem",
                  alignItems: "start"
                }}
              >
                {/* Left: Contact Info & Copy Email */}
                <div>
                  <SectionEyebrow>Get in Touch</SectionEyebrow>
                  <SectionHeading>Let's build something exceptional.</SectionHeading>
                  <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "2rem" }}>
                    I am actively available for full-time software engineering roles, backend contracts, and remote collaborations worldwide.
                  </p>

                  {/* Direct Email Card with 1-Click Copy */}
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      marginBottom: "2rem"
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "6px" }}>
                      Direct Email Address
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                      <a
                        href={`mailto:${emailAddress}`}
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--accent)",
                          textDecoration: "none",
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {emailAddress}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="btn-outline"
                        style={{ padding: "6px 14px", fontSize: "0.75rem" }}
                      >
                        {copiedEmail ? "✓ Copied!" : "Copy Email"}
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                      ["Core Focus", "Full-Stack Architecture · Next.js · Django · Supabase"],
                      ["Open To", "Full-Time Roles · Remote Freelance · Global Contracts"],
                      ["Location", "Addis Ababa, Ethiopia 🇪🇹 · Global Remote Friendly"]
                    ].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600, marginBottom: "2px" }}>
                          {label}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Profile Links */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      marginTop: "2.5rem",
                      paddingTop: "1.5rem",
                      borderTop: "1px solid var(--border)"
                    }}
                  >
                    {[
                      ["GitHub", "https://github.com/oumersalah2-cmd"],
                      ["Upwork", "#"],
                      ["LinkedIn", "#"]
                    ].map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "var(--muted)",
                          textDecoration: "none",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                      >
                        {label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right: Working Contact Form */}
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "2rem",
                    boxShadow: "var(--card-shadow)"
                  }}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem" }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                    Drop a message and it will be sent directly to Abdusalam's inbox.
                  </p>

                  {/* Success State Notification */}
                  {formStatus === "success" ? (
                    <div
                      style={{
                        padding: "1.75rem",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid #10B981",
                        borderRadius: "8px",
                        textAlign: "center"
                      }}
                    >
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: "1rem" }}>
                        ✓
                      </div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                        Message Sent Successfully!
                      </h4>
                      <p style={{ fontSize: "0.86rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                        Thank you for reaching out. Abdusalam has received your message and will respond shortly.
                      </p>
                      <button
                        onClick={() => setFormStatus("idle")}
                        className="btn-outline"
                        style={{ padding: "8px 18px", fontSize: "0.8rem" }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* Name Field */}
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", marginBottom: "6px" }}>
                          Your Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formState.name}
                          onChange={e => setFormState({ ...formState, name: e.target.value })}
                          disabled={formStatus === "submitting"}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            background: "var(--surface-soft)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "0.88rem",
                            fontFamily: "inherit"
                          }}
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", marginBottom: "6px" }}>
                          Your Email Address <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. sarah@company.com"
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                          disabled={formStatus === "submitting"}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            background: "var(--surface-soft)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "0.88rem",
                            fontFamily: "inherit"
                          }}
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", marginBottom: "6px" }}>
                          Subject or Project Scope
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Full-Stack Role / Next.js Project"
                          value={formState.subject}
                          onChange={e => setFormState({ ...formState, subject: e.target.value })}
                          disabled={formStatus === "submitting"}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            background: "var(--surface-soft)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "0.88rem",
                            fontFamily: "inherit"
                          }}
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text)", marginBottom: "6px" }}>
                          Your Message <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell me about your project, team, or opportunity..."
                          value={formState.message}
                          onChange={e => setFormState({ ...formState, message: e.target.value })}
                          disabled={formStatus === "submitting"}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            background: "var(--surface-soft)",
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "0.88rem",
                            fontFamily: "inherit",
                            resize: "vertical"
                          }}
                        />
                      </div>

                      {/* Error Message with Mailto Fallback */}
                      {formStatus === "error" && (
                        <div
                          style={{
                            padding: "12px 16px",
                            background: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid rgba(239, 68, 68, 0.3)",
                            borderRadius: "6px",
                            fontSize: "0.82rem",
                            color: "#EF4444"
                          }}
                        >
                          <div style={{ marginBottom: "8px" }}>{formErrorMsg}</div>
                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            <a
                              href={`mailto:${emailAddress}?subject=${encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`)}&body=${encodeURIComponent(formState.message)}`}
                              className="btn-primary"
                              style={{ padding: "6px 12px", fontSize: "0.75rem", background: "#EF4444", color: "#FFFFFF" }}
                            >
                              Open in Mail App
                            </a>
                            <button
                              type="button"
                              onClick={handleCopyEmail}
                              className="btn-outline"
                              style={{ padding: "6px 12px", fontSize: "0.75rem" }}
                            >
                              {copiedEmail ? "✓ Copied" : "Copy Email"}
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="btn-primary"
                        style={{
                          width: "100%",
                          padding: "14px",
                          marginTop: "0.5rem",
                          background: formStatus === "submitting" ? "var(--muted)" : "var(--accent)",
                          color: "#FFFFFF"
                        }}
                      >
                        {formStatus === "submitting" ? (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                              <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                            </svg>
                            Sending Message...
                          </span>
                        ) : (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                            Send Message
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="22" y1="2" x2="11" y2="13"></line>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "28px 6vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.25rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
              A·O
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              © {new Date().getFullYear()} Abdusalam Oumer · Addis Ababa University
            </span>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              ["GitHub", "https://github.com/oumersalah2-cmd"],
              ["Email", `mailto:${emailAddress}`],
              ["Upwork", "#"]
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  color: "var(--muted)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
