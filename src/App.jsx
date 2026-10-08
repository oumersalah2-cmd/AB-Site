import { useState, useEffect, useRef } from "react";

// ── BRAND & CORE METADATA ──────────────────────────────────────────────
const PROFILE = {
  name: "Abdusalam Oumer Aman",
  handle: "oumersalah2",
  title: "Software Engineering at AAU · Systems Security at INSA · Applied AI Founder",
  heroPunchline: "Building localized, production-ready AI systems for Ethiopian infrastructure.",
  email: "oumersalah2@gmail.com",
  github: "https://github.com/oumersalah2-cmd",
  upwork: "https://www.upwork.com/freelancers/~01d02c68660140f622",
  twitter: "https://x.com/oumersalah2",
  twitterHandle: "@oumersalah2",
  telegramDirect: "https://t.me/ggedAbdusay",
  telegramDirectHandle: "@ggedAbdusay",
  telegramChannel: "https://t.me/unpluggedme",
  telegramChannelName: "Unplugged Me",
  cvUrl: "/cv.pdf",
  location: "Addis Ababa, Ethiopia",
  institution: "Addis Ababa University (AAU)",
  securityTraining: "INSA CTC National Cyber Talent Camp",
};

// ── NAVIGATION ANCHORS ────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "manifesto", label: "01. Manifesto" },
  { id: "credentials", label: "02. Credentials" },
  { id: "products", label: "03. Founder Showcase" },
  { id: "blueprints", label: "04. Architecture" },
  { id: "ledger", label: "05. Changelog" },
  { id: "terminal", label: "06. Inspector" },
  { id: "dispatch", label: "07. Dispatch" },
];

// ── COMPREHENSIVE CREDENTIALS & CERTIFICATIONS ────────────────────────
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
    id: "insa-sec",
    badge: "SYSTEMS SECURITY // NATIONAL CYBER CAMP",
    title: "National Ethio Cyber Talent Summer Camp",
    authority: "Information Network Security Administration (INSA)",
    date: "Jul 2026 – Nov 2026",
    sponsor: "National Systems Architecture & Defense Division",
    summary:
      "Intensive training in defensive cybersecurity, network intrusion containment, Linux kernel auditing, and cryptographic ledger integrity.",
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

// ── FOUNDER PRODUCTS (FRAMEWORK: PROJECTS AS PRODUCTS) ────────────────
const PRODUCTS = [
  {
    id: "gebere-vision-ai",
    title: "Gebere Vision AI",
    subhead: "Multilingual Agricultural Vision Diagnostic Bot",
    role: "Founder & Lead Architect",
    recognition: "Selected for METI-Funded UniPods AI Programme",
    languages: "Amharic (አማርኛ), Afaan Oromoo, English, Arabic",
    status: "Active Deployment",
    problemBrief:
      "Rural Ethiopian farmers lose up to 40% of crop yields to blights due to scarce agronomists and foreign-language tools.",
    solutionBrief:
      "Sub-800ms Telegram bot powered by Groq Llama vision models with prompt instructions grounded in Ethiopian crops, returning localized organic treatments in native scripts.",
    stack: ["Groq AI Vision", "Telegram Bot API", "Supabase pgvector", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Inference Latency", value: "< 800ms via Groq" },
      { label: "Supported Dialects", value: "4 Dialects (Amharic, Oromoo, EN, AR)" },
      { label: "Programme", value: "METI UniPods AI Funded" },
      { label: "Deployment", value: "Production Telegram Bot" },
    ],
    demoUrl: "https://t.me/gebere_vision_bot",
    githubUrl: "https://github.com/oumersalah2-cmd/gebere-vision-ai",
    blueprintKey: "gebere",
  },
  {
    id: "smartbiz-erp",
    title: "SmartBiz ERP Lite",
    subhead: "Offline-First Enterprise State & POS Engine",
    role: "Architect & Systems Engineer",
    recognition: "Production Merchant Architecture",
    languages: "English, Amharic Numerics, ETB Ledger",
    status: "V2 In Production",
    problemBrief:
      "Frequent power outages and cellular drops make conventional cloud-only POS systems unviable for local wholesale merchants.",
    solutionBrief:
      "100% local-first PWA with client-side IndexedDB mutations and a deterministic vector-clock sync engine reconciling batches when connectivity returns.",
    stack: ["Next.js (App Router)", "NestJS", "IndexedDB", "TypeScript", "PostgreSQL", "PWA"],
    metrics: [
      { label: "Checkout Latency", value: "0ms Local First" },
      { label: "Sync Engine", value: "Vector Clock Deltas" },
      { label: "State Layer", value: "IndexedDB + Reactive Cache" },
      { label: "Backend Sync", value: "NestJS Delta Replicator" },
    ],
    demoUrl: null,
    githubUrl: "https://github.com/oumersalah2-cmd",
    blueprintKey: "smartbiz",
  },
  {
    id: "ethio-bucks",
    title: "Ethio Bucks & Financial Backends",
    subhead: "Transaction-Isolated ETB Ledger & Task Pipeline",
    role: "Backend Architect",
    recognition: "High-Concurrency Fintech Deployment",
    languages: "Amharic & English UX",
    status: "Deployed (Live)",
    problemBrief:
      "Microwork rewards on unstable cellular networks are vulnerable to race-condition double-claim exploits and tampering.",
    solutionBrief:
      "Django & PostgreSQL financial engine enforcing strict row-level transaction locks (`SELECT FOR UPDATE`), immutable audit ledgers, and phone auth.",
    stack: ["Django", "PostgreSQL", "Python", "JWT Auth", "Mobile Wallet Engine"],
    metrics: [
      { label: "Ledger Safety", value: "ACID Row Locks (Zero Double-Spend)" },
      { label: "Database", value: "PostgreSQL on PythonAnywhere" },
      { label: "Auth Flow", value: "Phone-Bound Session Tokens" },
      { label: "Status", value: "Live Production" },
    ],
    demoUrl: "http://abdusalam.pythonanywhere.com",
    githubUrl: "https://github.com/oumersalah2-cmd",
    blueprintKey: "ethiobucks",
  },
  {
    id: "campustrack-aau",
    title: "CampusTrack & AAU Café Stipend System",
    subhead: "Institutional Custody & 3,000 ETB Stipend Allocation",
    role: "Full-Stack Engineer",
    recognition: "Addis Ababa University Campus Infrastructure",
    languages: "English, AAU Internal Protocol",
    status: "Deployed",
    problemBrief:
      "Manual paper rosters caused duplicate meal stipend claims and custody tracking disputes across dining halls.",
    solutionBrief:
      "Automates 3,000 ETB/month meal stipend disbursements with unique database constraints preventing dual claims, paired with JWT custody audits.",
    stack: ["Node.js", "Express", "PostgreSQL", "SQLite3", "JWT Auth"],
    metrics: [
      { label: "Stipend Automation", value: "3,000 ETB / Mo / Student" },
      { label: "Fraud Prevention", value: "Unique DB Constraints" },
      { label: "Custody Audit", value: "Cryptographic JWT Verification" },
      { label: "Deployment", value: "Render Production" },
    ],
    demoUrl: "https://addis-ababa-university-cafe-management.onrender.com/",
    githubUrl: "https://github.com/oumersalah2-cmd/Addis-Ababa-University-Cafe-Management-and-Stipend-System",
    blueprintKey: "campustrack",
  },
];

// ── THE ENGINEERING LEDGER (CHANGELOG REPLACING "BLOG") ───────────────
const CHANGELOG_ENTRIES = [
  {
    id: "log-043",
    date: "2026-10-08",
    commit: "4f9d8a1",
    tag: "CREDENTIAL",
    title: "MIT Universal AI Credential Finalized & Validated",
    content:
      "Completed Introduction to Universal AI through MIT Open Learning under Prof. Dimitris Bertsimas. Applying mixed-integer optimization and operations research directly into crop diagnostic routing and rural supply logistics.",
    channelNote: "Shared reflections and notes to Unplugged Me.",
  },
  {
    id: "log-042",
    date: "2026-10-04",
    commit: "9c3e21b",
    tag: "ALGORITHMS",
    title: "LeetCode Milestone: 150+ Solved with O(1) Space DP Optimizations",
    content:
      "Completed a deep sprint on dynamic programming, state compression, and graph shortest paths. Transitioned past naive memoization to space-optimized tabulation for knapsack and interval scheduling variants.",
    channelNote: "Full solution writeup and space-complexity notes published on Telegram.",
  },
  {
    id: "log-041",
    date: "2026-09-28",
    commit: "3a88c4d",
    tag: "SYSTEMS",
    title: "Workstation OS Migration: Bare-Metal Ubuntu 26.04 LTS Setup",
    content:
      "Migrated primary development workstation to fresh Ubuntu 26.04 LTS. Configured custom Linux kernel parameters, tuned sysctl limits for Docker daemon efficiency, and configured tiling workflow with JetBrains Mono font rendering.",
    channelNote: "Terminal dotfiles and sysctl config shared on Unplugged Me.",
  },
  {
    id: "log-040",
    date: "2026-09-15",
    commit: "7e14a29",
    tag: "AI_INFERENCE",
    title: "Gebere Vision AI: Shaving 400ms Off Inference over 2G/3G Cellular",
    content:
      "Profiled the Groq API vision pipeline for rural Ethiopian Telegram users. Implemented client-side WebP quantization before Telegram webhook dispatch and enabled token streaming responses. Total end-to-end diagnosis time dropped from 1.6s to 780ms on degraded cellular networks in Oromia.",
    channelNote: "Benchmark charts and Groq API latency analysis logged on Telegram.",
  },
  {
    id: "log-039",
    date: "2026-08-30",
    commit: "1b07f83",
    tag: "STATE_ENGINE",
    title: "SmartBiz ERP: Resolving Offline Vector-Clock Edge Cases in IndexedDB",
    content:
      "Solved edge-case state conflicts when two mobile POS devices modify inventory during prolonged store blackouts. Replaced simple last-write-wins (LWW) with deterministic delta-op vector clocks, maintaining ledger purity without centralized locking.",
    channelNote: "Code snippets and conflict test cases posted on Telegram.",
  },
  {
    id: "log-038",
    date: "2026-08-12",
    commit: "82f159a",
    tag: "SECURITY",
    title: "INSA Cyber Training Takeaway: PostgreSQL Row-Level Lock Isolation",
    content:
      "Applied defensive security paradigms learned at the INSA CTC summer camp to Django fintech models in Ethio Bucks. Replaced naive ORM updates with explicit `select_for_update(nowait=False)` within atomic blocks to defend against concurrent withdrawal race conditions.",
    channelNote: "Analysis of double-spend vulnerabilities shared to Unplugged Me.",
  },
];

// ── TECHNICAL SPECIFICATIONS MATRIX (CAPABILITIES) ────────────────────
const TECH_MATRIX = [
  {
    domain: "Applied AI & Inference",
    technologies: ["Groq Llama Vision Models", "Supabase pgvector", "Prompt Grounding (Amharic / Afaan Oromoo)", "MIT Universal AI Optimization", "Transformer Architectures"],
    specNote: "Sub-second inference pipelines & domain-specific agricultural grounding",
  },
  {
    domain: "Backend & Systems",
    technologies: ["Python (Django)", "Node.js (Express)", "NestJS", "PostgreSQL", "SQLite3", "REST / WebSockets"],
    specNote: "ACID transaction isolation, row-level locks, and enterprise state sync",
  },
  {
    domain: "Frontend & Mobile",
    technologies: ["Next.js (App Router)", "React 19", "Flutter / Dart", "PWA / Service Workers", "Vanilla CSS Tokens"],
    specNote: "Offline-first architectures, low-bandwidth optimization, zero bloat",
  },
  {
    domain: "Security & Infrastructure",
    technologies: ["INSA Defensive Cybersecurity", "Ubuntu Linux (26.04)", "Docker Containerization", "JWT Cryptographic Auth", "OWASP Security Audits"],
    specNote: "Hardened against concurrent race conditions and network manipulation",
  },
];

// ── BLUEPRINT SCHEMATICS (RAW WORK-IN-PROGRESS ARTIFACTS) ─────────────
const BLUEPRINTS = {
  gebere: {
    title: "Gebere Vision AI — End-to-End Multilingual Diagnostic Pipeline",
    diagramAscii: `
+-----------------------------------------------------------------------------------------------+
| GEBERE VISION AI : EDGE-TO-CLOUD DATAFLOW PIPELINE                                            |
+-----------------------------------------------------------------------------------------------+

[ Rural Farmer in Ethiopia ]
           |
           |  (Photos of diseased crop via Telegram: Amharic / Afaan Oromoo / Arabic / Eng)
           v
+------------------------+      +-------------------------------+
| Telegram Webhook Edge  | ---> | Image Quantization & WebP     |
| (Node.js Edge Worker)  |      | Size Reduction (2G Friendly)  |
+------------------------+      +-------------------------------+
           |                                   |
           v                                   v
+-------------------------------------------------------------------+
| Multilingual Prompt Router                                        |
| Injects Ethiopian Crop Taxonomy (Teff, Wheat, Maize, Coffee, etc) |
+-------------------------------------------------------------------+
           |
           +---------------------------------+
           |                                 |
           v                                 v
+-------------------------------+ +---------------------------------+
| Groq API Vision Inference     | | Supabase pgvector Store         |
| (Llama 3.2 11B Vision Model)  | | Vector similarity search        |
| Latency: ~780ms execution     | | Verified Ethiopian Plant Blights|
+-------------------------------+ +---------------------------------+
           |                                 |
           +----------------+----------------+
                            |
                            v
+-------------------------------------------------------------------+
| Confidence Scoring & Human-in-the-Loop (HITL) Agronomist Gate     |
| If confidence < 0.88 -> Route to Agronomist Review Queue          |
+-------------------------------------------------------------------+
                            |
                            v
+-------------------------------------------------------------------+
| Localized Output Formatter (Amharic Ge'ez / Afaan Oromoo Scripts) |
| Instant Diagnosis + Organic Remediation Advice delivered to phone |
+-------------------------------------------------------------------+
`,
    metrics: "Throughput: Real-time · Latency: 780ms · Languages: 4 · Cost/Inference: ~$0.0003",
    codeSnippet: `// Raw Webhook Pipeline Snippet (Gebere Vision AI)
export async function handleFarmerDiagnosis(req, res) {
  const { photo_url, language, farmer_id } = req.body;
  
  // 1. Fetch & downsample image for low-bandwidth 2G link
  const imageBuffer = await fetchAndOptimizeImage(photo_url, { maxKb: 350 });
  
  // 2. Select localized system prompt
  const systemPrompt = ETHIO_CROP_PROMPTS[language] || ETHIO_CROP_PROMPTS.amharic;
  
  // 3. Groq high-speed vision inference
  const visionPayload = {
    model: "llama-3.2-11b-vision-preview",
    messages: [
      { role: "system", content: systemPrompt },
      { 
        role: "user", 
        content: [
          { type: "text", text: "Identify pathogen, damage severity, and treatment." },
          { type: "image_url", image_url: { url: imageBuffer.base64 } }
        ]
      }
    ],
    temperature: 0.15,
  };
  
  const diagnostic = await groqClient.chat.completions.create(visionPayload);
  return dispatchTelegramReply(farmer_id, diagnostic.choices[0].message.content);
}`,
  },
  smartbiz: {
    title: "SmartBiz ERP Lite — Offline-First Vector Clock Sync Topology",
    diagramAscii: `
+-----------------------------------------------------------------------------------------------+
| SMARTBIZ ERP LITE : OFFLINE-FIRST DISTRIBUTED STATE ENGINE                                    |
+-----------------------------------------------------------------------------------------------+

[ Merchant POS Terminal / Mobile PWA ]
           |
           v
+---------------------------------------------------------------+
| Local Transaction Manager                                     |
| Writes immediate changes to browser IndexedDB storage         |
+---------------------------------------------------------------+
           |
           v
+---------------------------------------------------------------+
| Local Mutation Queue (Vector Clock Tagged: V_client = [t, id])|
| Guarantees 0ms checkout latency during power/network outage   |
+---------------------------------------------------------------+
           |
           |  (Network Health Ping: navigator.onLine & heartbeat)
           v
    [ Network Restored? ]
         /         \\
       No           Yes
       /              \\
  [ Keep Queue ]       v
              +-------------------------------------------------+
              | Delta Replicator (Batch HTTPS Payload)          |
              +-------------------------------------------------+
                               |
                               v
              +-------------------------------------------------+
              | NestJS API Gateway Sync Resolver                |
              | Evaluates Vector Clocks against Server Master   |
              +-------------------------------------------------+
                               |
                               +--------------------------------+
                               |                                |
                               v                                v
              +---------------------------------+ +-----------------------------+
              | Non-Conflicting Writes          | | Concurrent Conflict Handler |
              | Direct commit to PostgreSQL     | | Deterministic Delta Merging |
              +---------------------------------+ +-----------------------------+
`,
    metrics: "Zero-latency local checkout · 100% data preservation during power cut · Automatic replay",
    codeSnippet: `// Vector Clock Resolution Logic (SmartBiz ERP Lite)
export function reconcileMutations(localQueue, serverState) {
  return localQueue.map(mutation => {
    const serverVersion = serverState.getVersion(mutation.entityId);
    
    // Check if client version is strictly newer or concurrent
    if (mutation.vectorClock.timestamp >= serverVersion.timestamp) {
      return { status: "APPLY_LOCAL", payload: mutation.data };
    } else {
      // Deterministic conflict resolution for wholesale inventory
      return resolveInventoryDelta(mutation, serverVersion);
    }
  });
}`,
  },
  ethiobucks: {
    title: "Ethio Bucks — ACID Row-Level Locking & Ledger Isolation",
    diagramAscii: `
+-----------------------------------------------------------------------------------------------+
| ETHIO BUCKS : TRANSACTIONAL FINANCIAL BACKEND INTEGRITY                                       |
+-----------------------------------------------------------------------------------------------+

[ Client Claim / Withdrawal Request ]
           |
           v
+---------------------------------------------------------------+
| Django View Handler with Token Authentication                 |
| Validates user session, IP audit, and rate-limit quotas       |
+---------------------------------------------------------------+
           |
           v
+---------------------------------------------------------------+
| with transaction.atomic():                                    |
|   1. Acquire Exclusive Row Lock:                              |
|      Wallet.objects.select_for_update().get(user=user)        |
+---------------------------------------------------------------+
           |
           v
    [ Sufficient Balance & Valid Task State? ]
         /                                   \\
       No                                     Yes
       /                                       \\
  [ Raise ValidationError ]                     v
  [ Rollback Transaction ]             +-----------------------------------------+
                                       | 2. Append Tamper-Evident Ledger Entry   |
                                       | 3. Decrement Balance atomically         |
                                       | 4. Write Audit Log Event                |
                                       +-----------------------------------------+
                                                        |
                                                        v
                                       +-----------------------------------------+
                                       | Release Lock & Return Receipt (HTTP 200)|
                                       +-----------------------------------------+
`,
    metrics: "Zero double-spending tolerance · Complete tamper-evident audit trail · Sub-50ms lock duration",
    codeSnippet: `# Django Financial Transaction Lock Implementation
from django.db import transaction
from rest_framework.exceptions import ValidationError

@transaction.atomic
def execute_wallet_disbursement(user, amount, reference_code):
    # Lock the wallet row to prevent concurrent race condition exploits
    wallet = Wallet.objects.select_for_update().get(user=user)
    
    if wallet.balance < amount:
        raise ValidationError("Insufficient balance for withdrawal.")
        
    # Append immutable transaction ledger record
    LedgerEntry.objects.create(
        wallet=wallet,
        amount=-amount,
        reference_id=reference_code,
        balance_after=wallet.balance - amount
    )
    
    wallet.balance -= amount
    wallet.save(update_fields=['balance', 'updated_at'])
    return wallet.balance`,
  },
};

// ── MAIN APPLICATION COMPONENT ─────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("manifesto");
  const [selectedBlueprint, setSelectedBlueprint] = useState("gebere");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [themeMode, setThemeMode] = useState("light"); // Default is crystal-clear white paper
  const [accentColor, setAccentColor] = useState("blue"); // "blue" (#0047FF) or "orange" (#E64A19)

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    { type: "system", text: "AMAN-SYSTEMS KERNEL // INITIALIZED [HOST: ADDIS ABABA, ET]" },
    { type: "system", text: "Credentials & Certificates catalog verified." },
    { type: "system", text: "Direct Telegram: https://t.me/ggedAbdusay (@ggedAbdusay)" },
    { type: "system", text: "Type 'help' or click quick-commands below to inspect raw engineering artifacts." },
  ]);

  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", topic: "AI Engineering / Founder Role", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [formMsg, setFormMsg] = useState("");

  const terminalBottomRef = useRef(null);

  // Synchronize active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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
  whoami         - Print biographical coordinates and founder status
  credentials    - Display all 5 academic and professional certificates
  arch gebere    - Print Gebere Vision AI dataflow blueprint
  arch smartbiz  - Print SmartBiz ERP offline sync state architecture
  ledger         - Show recent engineering changelog entries
  telegram       - Open direct Telegram: https://t.me/ggedAbdusay
  channel        - Open Telegram channel: https://t.me/unpluggedme
  cv             - View Curriculum Vitae / Resume details
  contact        - Direct contact coordinates
  clear          - Clear terminal output buffer`,
        });
        break;
      case "whoami":
        newLogs.push({
          type: "output",
          text: `Abdusalam Oumer Aman
Software Engineering (AAU) · Systems Security (INSA) · Applied AI Founder
Venture: Gebere Vision AI (METI-Funded UniPods AI Programme)
Direct Telegram: https://t.me/ggedAbdusay (@ggedAbdusay)
Location: Addis Ababa, Ethiopia
Mission: Localized, production-ready AI systems for Ethiopian infrastructure.`,
        });
        break;
      case "credentials":
        newLogs.push({
          type: "output",
          text: `1. MIT Open Learning: Introduction to Universal AI (Oct 7, 2026)
   Backed by: Prof. Dimitris Bertsimas (MIT Vice Provost for Open Learning)
2. Sof Omar Technologies: Software Engineering Internship Certificate (Sep 2026)
3. INSA: National Ethio Cyber Talent Summer Camp (Jul–Nov 2026, Systems Security)
4. Addis Ababa University (AAU): B.Sc. in Software Engineering (Junior / 3rd Year)
5. Udacity: Android Developer & Programming Fundamentals (Sep 2025)`,
        });
        break;
      case "arch gebere":
        newLogs.push({
          type: "output",
          text: `[GEBERE VISION AI ARCHITECTURE SUMMARY]
Client -> Telegram Webhook -> Node.js Quantizer -> Groq API (Llama 3.2 11B Vision)
+ Supabase pgvector store + HITL Agronomist Queue -> Sub-800ms Amharic/Afaan Oromoo output.`,
        });
        break;
      case "arch smartbiz":
        newLogs.push({
          type: "output",
          text: `[SMARTBIZ ERP OFFLINE SYNC]
Client -> Local IndexedDB -> Vector Clock Queue -> Network Heartbeat -> NestJS Gateway -> PostgreSQL Master.`,
        });
        break;
      case "ledger":
        newLogs.push({
          type: "output",
          text: `[LATEST CHANGELOG COMMITS]
- Log 043 (2026-10-08): MIT Universal AI Credential Finalized
- Log 042 (2026-10-04): LeetCode 150+ solved with O(1) space DP optimizations
- Log 041 (2026-09-28): Bare-metal Ubuntu 26.04 LTS migration & sysctl tuning
- Log 040 (2026-09-15): Shaved 400ms off Groq vision inference for rural 2G links`,
        });
        break;
      case "telegram":
        newLogs.push({
          type: "output",
          text: `Direct Telegram: https://t.me/ggedAbdusay (@ggedAbdusay)
Channel: https://t.me/unpluggedme (@unpluggedme)`,
        });
        if (typeof window !== "undefined") {
          window.open(PROFILE.telegramDirect, "_blank");
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
TELEGRAM (DIRECT): https://t.me/ggedAbdusay (@ggedAbdusay)
TWITTER / X: https://x.com/oumersalah2
UPWORK: https://www.upwork.com/freelancers/~01d02c68660140f622
GITHUB: https://github.com/oumersalah2-cmd
LOCATION: Addis Ababa, Ethiopia (UTC+3)`,
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
        `Unable to reach automated dispatch worker. Please write directly at ${PROFILE.email} or reach out on Telegram @ggedAbdusay.`
      );
    }
  };

  // Color Tokens based on Theme and chosen accent
  const accentHex = accentColor === "blue" ? "#0047FF" : "#E64A19";
  const isDark = themeMode === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#0A0A0A" : "#FFFFFF", // Crystal clear pure white canvas
        color: isDark ? "#E5E5E5" : "#111111", // High-contrast crisp black ink
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

        /* Crystal clear borders & clean surfaces */
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
          text-decoration-color: ${accentHex}88;
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

        /* Responsive layout */
        @media (max-width: 900px) {
          .ledger-hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .ledger-blueprint-grid { grid-template-columns: 1fr !important; }
          .header-nav { display: none !important; }
          .dispatch-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .meta-pill-strip { flex-direction: column !important; align-items: flex-start !important; }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: ${isDark ? "#111111" : "#F8FAFC"}; }
        ::-webkit-scrollbar-thumb { background: ${isDark ? "#333333" : "#CBD5E1"}; }
        ::-webkit-scrollbar-thumb:hover { background: ${accentHex}; }
      `}</style>

      {/* ── TOP MASTHEAD / TECHNICAL LEDGER HEADER ─────────────────── */}
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
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0.85rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Masthead Identifier */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: accentHex,
              }}
            >
              [AMAN-SYSTEMS // 2026.10]
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: "0.74rem",
                color: isDark ? "#888888" : "#64748B",
                display: "inline-block",
              }}
            >
              ADDIS ABABA · AAU SE · INSA · MIT OPEN LEARNING
            </span>
          </div>

          {/* Ledger Navigation Anchors */}
          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono tactile-link"
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px 0",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? accentHex : isDark ? "#A0A0A0" : "#475569",
                  borderBottom: activeSection === item.id ? `2px solid ${accentHex}` : "2px solid transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Technical Controls, Social Channels & CV Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {/* Direct Telegram Link */}
            <a
              href={PROFILE.telegramDirect}
              target="_blank"
              rel="noreferrer"
              className="font-mono"
              title="Chat directly with Abdusalam on Telegram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.72rem",
                padding: "4px 9px",
                border: `1px solid ${accentHex}`,
                color: accentHex,
                backgroundColor: isDark ? "rgba(0, 71, 255, 0.08)" : "rgba(0, 71, 255, 0.04)",
                fontWeight: 600,
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: accentHex }} />
              Telegram @ggedAbdusay ↗
            </a>

            {/* Upwork Profile */}
            <a
              href={PROFILE.upwork}
              target="_blank"
              rel="noreferrer"
              className="font-mono tactile-link"
              title="View Profile on Upwork"
              style={{
                fontSize: "0.72rem",
                color: isDark ? "#AAAAAA" : "#475569",
                fontWeight: 600,
              }}
            >
              Upwork ↗
            </a>

            {/* Twitter / X */}
            <a
              href={PROFILE.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-mono tactile-link"
              title="Follow on Twitter / X"
              style={{
                fontSize: "0.72rem",
                color: isDark ? "#AAAAAA" : "#475569",
                fontWeight: 600,
              }}
            >
              X (Twitter) ↗
            </a>

            {/* View / Download CV Button */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="font-mono"
              style={{
                background: "none",
                border: `1px solid ${isDark ? "#444444" : "#111111"}`,
                padding: "3px 8px",
                fontSize: "0.68rem",
                color: isDark ? "#FFFFFF" : "#111111",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              CV 📄
            </button>

            {/* Accent Mode Toggle */}
            <button
              onClick={() => setAccentColor(accentColor === "blue" ? "orange" : "blue")}
              className="font-mono"
              title="Toggle Accent Color (Hyper-link Blue vs Signal Orange)"
              style={{
                background: "none",
                border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                padding: "3px 8px",
                fontSize: "0.68rem",
                color: isDark ? "#A0A0A0" : "#64748B",
                cursor: "pointer",
              }}
            >
              {accentColor.toUpperCase()}
            </button>

            {/* Stark Paper / Dark Ledger Theme Switch */}
            <button
              onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
              className="font-mono"
              title="Toggle Stark Paper vs Dark Ledger Mode"
              style={{
                background: "none",
                border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                padding: "3px 8px",
                fontSize: "0.68rem",
                color: isDark ? "#A0A0A0" : "#64748B",
                cursor: "pointer",
              }}
            >
              {themeMode === "light" ? "CLEAR [L]" : "DARK [D]"}
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────── */}
      <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "2.5rem 1.5rem 6rem" }}>
        {/* ── SECTION 01: THE UNAPOLOGETIC HERO STATEMENT ─────────── */}
        <section
          id="manifesto"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
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
              paddingBottom: "1.2rem",
              marginBottom: "2.2rem",
              borderBottom: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`,
            }}
          >
            <div>
              <span>LEDGER: </span>
              <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>AMAN-FOUNDER-MANIFESTO</strong>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>ORIGIN: ADDIS ABABA UNIVERSITY (AAU) SE '26</span>
            </div>
            <div>
              <span style={{ color: accentHex }}>● PRODUCTION STATUS:</span> ACTIVE SHIPPER · OPEN TO APPLIED AI FOUNDER ROLES
            </div>
          </div>

          <div
            className="ledger-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.9fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Direct Unapologetic Manifesto */}
            <div>
              {/* Formal Name Heading */}
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2.8rem, 5.2vw, 4.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: isDark ? "#FFFFFF" : "#111111",
                  marginBottom: "1.2rem",
                }}
              >
                Abdusalam Oumer Aman
              </h1>

              {/* Founder Stance Blockquote with Ample Spacing (Per Gemini Recommendation) */}
              <div
                style={{
                  borderLeft: `3px solid ${accentHex}`,
                  paddingLeft: "1.4rem",
                  marginBottom: "2.6rem", // Generous breathing room
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                    lineHeight: 1.35,
                    fontStyle: "italic",
                    color: isDark ? "#E5E5E5" : "#1E293B",
                    marginBottom: "0.6rem",
                  }}
                >
                  Software Engineering at AAU. Systems Security at INSA. Applied AI Founder.
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: accentHex,
                    letterSpacing: "0.01em",
                  }}
                >
                  Building localized, production-ready AI systems for Ethiopian infrastructure.
                </p>
              </div>

              {/* Unapologetic Narrative Paragraphs with Optimal 60-80 Character Line Length */}
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: isDark ? "#CCCCCC" : "#334155",
                  marginBottom: "1.5rem",
                  maxWidth: "65ch", // Optimal line length for effortless reading
                }}
              >
                Most modern AI projects settle for generic OpenAI wrapper scripts and flashy dark-mode marketing pages. My
                engineering work bridges third-year Software Engineering foundations at{" "}
                <strong>Addis Ababa University</strong>, rigorous defensive cybersecurity at Ethiopia's national{" "}
                <strong>INSA (Information Network Security Administration)</strong>, and applied optimization validated
                through <strong>MIT Open Learning</strong> under Boeing Professor of Operations Research Dimitris Bertsimas.
              </p>

              {/* Second Paragraph Highlighting Core Projects with Interactive Links */}
              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                  color: isDark ? "#A0A0A0" : "#64748B",
                  marginBottom: "2.4rem",
                  maxWidth: "65ch", // Optimal line length
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

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "2.5rem" }}>
                <a href="#products" className="btn-action">
                  Inspect Founder Products ↓
                </a>
                <a href="#credentials" className="btn-action-ghost">
                  Credentials & Certificates ↓
                </a>
                <button onClick={() => setCvModalOpen(true)} className="btn-action-ghost">
                  Curriculum Vitae (CV) 📄
                </button>
                <a href={PROFILE.telegramDirect} target="_blank" rel="noreferrer" className="btn-action-ghost">
                  Telegram: {PROFILE.telegramDirectHandle} ↗
                </a>
                <button onClick={copyEmailAddress} className="btn-action-ghost">
                  {emailCopied ? "✓ Copied to Clipboard" : `Copy Email`}
                </button>
              </div>

              {/* Quick Hard Facts Ledger */}
              <div
                className="font-mono border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: accentHex,
                    marginBottom: "0.75rem",
                  }}
                >
                  SYSTEM DISPATCH PROTOCOLS & CONTACT COORDINATES:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.85rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <span className="text-muted">LOCATION: </span>
                    <strong>{PROFILE.location} (UTC+3)</strong>
                  </div>
                  <div>
                    <span className="text-muted">DIRECT TELEGRAM: </span>
                    <a href={PROFILE.telegramDirect} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      {PROFILE.telegramDirectHandle} ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">TELEGRAM CHANNEL: </span>
                    <a href={PROFILE.telegramChannel} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      {PROFILE.telegramChannelName} ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">GITHUB: </span>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      @{PROFILE.handle}-cmd
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">UPWORK: </span>
                    <a href={PROFILE.upwork} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      Top-Rated Profile ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">DIRECT INBOX: </span>
                    <a href={`mailto:${PROFILE.email}`} style={{ fontWeight: 600, color: accentHex }}>
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Archival Portrait with Earth + Face Fully Visible */}
            <div>
              <div
                className="border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1rem",
                }}
              >
                {/* Image Frame with Perfect Framing: Earth + Face 100% Visible */}
                <div
                  style={{
                    position: "relative",
                    backgroundColor: isDark ? "#141414" : "#F8FAFC",
                    border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                    overflow: "hidden",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/hero-portrait.webp"
                    alt="Abdusalam Oumer Aman in front of Earth projection"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "480px",
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                      filter: isDark ? "contrast(1.05) brightness(0.98)" : "contrast(1.02)",
                    }}
                  />
                  {/* Technical Overlay Tag */}
                  <div
                    className="font-mono"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: isDark ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.94)",
                      border: `1px solid ${isDark ? "#333333" : "#CBD5E1"}`,
                      padding: "4px 8px",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: isDark ? "#FFFFFF" : "#111111",
                    }}
                  >
                    PORTRAIT PLATE: AMAN // ARCHIVAL 2026
                  </div>
                </div>

                {/* Archival Caption Block */}
                <div style={{ marginTop: "1rem" }}>
                  <div className="font-mono" style={{ fontSize: "0.72rem", color: accentHex, fontWeight: 700 }}>
                    FIG 1.0 — FOUNDER & SYSTEMS ARCHITECT
                  </div>
                  <h3 className="font-serif" style={{ fontSize: "1.15rem", marginTop: "2px", fontWeight: 600 }}>
                    Abdusalam Oumer Aman
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      color: isDark ? "#A0A0A0" : "#64748B",
                      marginTop: "4px",
                    }}
                  >
                    Junior Software Engineering Candidate at Addis Ababa University. Systems Security trainee at INSA.
                    MIT Open Learning certified in Universal AI. Focused on resilient, production-ready systems for
                    the Horn of Africa.
                  </p>

                  <div
                    className="font-mono"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderTop: `1px solid ${isDark ? "#222222" : "#F1F5F9"}`,
                      marginTop: "12px",
                      paddingTop: "8px",
                      fontSize: "0.7rem",
                      color: isDark ? "#777777" : "#64748B",
                    }}
                  >
                    <span>AAU SE · INSA · MIT</span>
                    <span>DISPATCH: @ggedAbdusay</span>
                  </div>
                </div>
              </div>

              {/* Founder Metric Snapshot */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginTop: "1.2rem",
                }}
              >
                <div
                  className="font-mono border-ledger bg-card"
                  style={{
                    border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.68rem", color: isDark ? "#888888" : "#64748B" }}>AI VISION LATENCY</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: accentHex, marginTop: "4px" }}>&lt; 800ms</div>
                  <div style={{ fontSize: "0.7rem", color: isDark ? "#A0A0A0" : "#64748B" }}>Groq API via Telegram</div>
                </div>

                <div
                  className="font-mono border-ledger bg-card"
                  style={{
                    border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.68rem", color: isDark ? "#888888" : "#64748B" }}>TRANSACTION ISOLATION</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: isDark ? "#FFFFFF" : "#111111", marginTop: "4px" }}>
                    ACID 100%
                  </div>
                  <div style={{ fontSize: "0.7rem", color: isDark ? "#A0A0A0" : "#64748B" }}>Zero Double-Claim Proof</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 02: THE ENGINEERING & CERTIFICATIONS ─────────── */}
        <section
          id="credentials"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
          }}
        >
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [02. CREDENTIALS & CERTIFICATIONS]
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            Engineering Foundation & Certifications
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2.8rem",
            }}
          >
            Bridging theoretical software architecture at Addis Ababa University, national systems security at INSA,
            and applied decision AI from MIT Open Learning leadership.
          </p>

          {/* Full Credentials Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {CREDENTIALS_AND_CERTS.map((c) => {
              const isMit = c.id === "mit-ai";
              return (
                <div
                  key={c.id}
                  className="border-ledger bg-card"
                  style={{
                    border: `1px solid ${isMit ? accentHex : isDark ? "#262626" : "#E5E7EB"}`,
                    padding: "1.8rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  {isMit && (
                    <div
                      className="font-mono"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "16px",
                        backgroundColor: accentHex,
                        color: "#FFFFFF",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      RECENT CERTIFICATE [OCT 2026]
                    </div>
                  )}

                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: isMit ? accentHex : isDark ? "#888888" : "#64748B",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {c.badge}
                    </div>

                    <h3 className="font-serif" style={{ fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.25, marginBottom: "0.3rem" }}>
                      {c.title}
                    </h3>

                    <div
                      className="font-mono"
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: isDark ? "#FFFFFF" : "#111111",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {c.authority} · <span style={{ color: accentHex }}>{c.date}</span>
                    </div>

                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: isDark ? "#888888" : "#64748B",
                        lineHeight: 1.45,
                        marginBottom: "1rem",
                      }}
                    >
                      {c.sponsor}
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: isDark ? "#CCCCCC" : "#334155",
                        marginBottom: "1.2rem",
                      }}
                    >
                      {c.summary}
                    </p>
                  </div>

                  {/* Skills / Deliverables Chips */}
                  <div
                    className="font-mono"
                    style={{
                      borderTop: `1px solid ${isDark ? "#222222" : "#F1F5F9"}`,
                      paddingTop: "0.85rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}
                  >
                    {c.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "0.72rem",
                          padding: "2px 7px",
                          backgroundColor: isDark ? "#161616" : "#F1F5F9",
                          border: `1px solid ${isDark ? "#282828" : "#E2E8F0"}`,
                          color: isDark ? "#CBD5E1" : "#475569",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 03: THE FOUNDER SHOWCASE (PROJECTS AS PRODUCTS) ── */}
        <section
          id="products"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
          }}
        >
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [03. THE FOUNDER SHOWCASE]
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            Projects Engineered as Products
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2.8rem",
            }}
          >
            Built from first principles for low-bandwidth cellular links, power outages, and localized languages.
          </p>

          {/* Product Cards Grid: Brief, Punchy & Clear */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            {PRODUCTS.map((prod, index) => (
              <div
                key={prod.id}
                id={prod.id}
                className="border-ledger bg-card"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.8rem",
                }}
              >
                {/* Top Badge Strip */}
                <div
                  className="font-mono"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    fontSize: "0.74rem",
                    borderBottom: `1px solid ${isDark ? "#1E1E1E" : "#F1F5F9"}`,
                    paddingBottom: "0.65rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <span style={{ color: accentHex, fontWeight: 700 }}>PRODUCT 0{index + 1} // </span>
                    <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>{prod.role.toUpperCase()}</strong>
                    <span style={{ margin: "0 8px" }}>·</span>
                    <span style={{ color: isDark ? "#888888" : "#64748B" }}>{prod.recognition}</span>
                  </div>
                  <div>
                    <span className="text-muted">STATUS: </span>
                    <strong style={{ color: accentHex }}>{prod.status}</strong>
                  </div>
                </div>

                {/* Main Grid: Brief Explanation + Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                  className="ledger-blueprint-grid"
                >
                  {/* Left: Punchy Narrative */}
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        color: isDark ? "#FFFFFF" : "#111111",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {prod.title}
                    </h3>

                    <div
                      className="font-mono"
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: accentHex,
                        marginBottom: "1rem",
                      }}
                    >
                      {prod.subhead} · {prod.languages}
                    </div>

                    {/* Brief Problem & Solution */}
                    <div style={{ marginBottom: "0.85rem" }}>
                      <strong style={{ fontSize: "0.82rem", color: isDark ? "#FFFFFF" : "#111111" }}>Problem: </strong>
                      <span style={{ fontSize: "0.9rem", color: isDark ? "#CCCCCC" : "#475569" }}>{prod.problemBrief}</span>
                    </div>

                    <div style={{ marginBottom: "1.2rem" }}>
                      <strong style={{ fontSize: "0.82rem", color: isDark ? "#FFFFFF" : "#111111" }}>Solution: </strong>
                      <span style={{ fontSize: "0.9rem", color: isDark ? "#CCCCCC" : "#475569" }}>{prod.solutionBrief}</span>
                    </div>

                    {/* Stack Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.4rem" }}>
                      {prod.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono"
                          style={{
                            fontSize: "0.72rem",
                            padding: "2px 7px",
                            backgroundColor: isDark ? "#181818" : "#F1F5F9",
                            border: `1px solid ${isDark ? "#282828" : "#E2E8F0"}`,
                            color: isDark ? "#D0D0D0" : "#334155",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                      {prod.demoUrl && (
                        <a href={prod.demoUrl} target="_blank" rel="noreferrer" className="btn-action">
                          Launch Live Deployment ↗
                        </a>
                      )}
                      <a href={prod.githubUrl} target="_blank" rel="noreferrer" className="btn-action-ghost">
                        GitHub Source ↗
                      </a>
                      <button
                        onClick={() => {
                          setSelectedBlueprint(prod.blueprintKey);
                          scrollToSection("blueprints");
                        }}
                        className="btn-action-ghost"
                      >
                        Inspect Blueprint 🔍
                      </button>
                    </div>
                  </div>

                  {/* Right: Technical Spec Box & Performance Ledger */}
                  <div
                    className="font-mono border-ledger bg-subtle"
                    style={{
                      border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                      padding: "1.2rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: accentHex,
                        marginBottom: "0.85rem",
                      }}
                    >
                      ARCHITECTURE METRICS:
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {prod.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          style={{
                            borderBottom: `1px solid ${isDark ? "#222222" : "#E2E8F0"}`,
                            paddingBottom: "5px",
                          }}
                        >
                          <div style={{ fontSize: "0.68rem", color: isDark ? "#888888" : "#64748B" }}>{m.label}</div>
                          <div
                            style={{
                              fontSize: "0.88rem",
                              fontWeight: 700,
                              color: isDark ? "#FFFFFF" : "#111111",
                              marginTop: "2px",
                            }}
                          >
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 04: RAW ARCHITECTURE BLUEPRINTS ───────────────── */}
        <section
          id="blueprints"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
          }}
        >
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [04. RAW ARCHITECTURAL BLUEPRINTS]
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            Engineering Schematics over Marketing Mockups
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2rem",
            }}
          >
            Below are the actual ASCII blueprints and core algorithmic excerpts for our key infrastructure.
          </p>

          {/* Blueprint Selector Tabs */}
          <div
            className="font-mono"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { key: "gebere", label: "01. Gebere Vision AI (Inference Pipeline)" },
              { key: "smartbiz", label: "02. SmartBiz ERP (Offline Vector Sync)" },
              { key: "ethiobucks", label: "03. Ethio Bucks (ACID Lock Engine)" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedBlueprint(tab.key)}
                style={{
                  padding: "8px 16px",
                  fontSize: "0.78rem",
                  fontWeight: selectedBlueprint === tab.key ? 700 : 500,
                  backgroundColor: selectedBlueprint === tab.key ? accentHex : isDark ? "#141414" : "#FFFFFF",
                  color: selectedBlueprint === tab.key ? "#FFFFFF" : isDark ? "#CCCCCC" : "#1E293B",
                  border: `1px solid ${selectedBlueprint === tab.key ? accentHex : isDark ? "#282828" : "#E2E8F0"}`,
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Blueprint Viewer */}
          {BLUEPRINTS[selectedBlueprint] && (
            <div
              className="border-ledger bg-card font-mono"
              style={{
                border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  borderBottom: `1px solid ${isDark ? "#1F1F1F" : "#F1F5F9"}`,
                  paddingBottom: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: accentHex }}>
                  SCHEMATIC: {BLUEPRINTS[selectedBlueprint].title}
                </div>
                <div style={{ fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B" }}>
                  SPEC: {BLUEPRINTS[selectedBlueprint].metrics}
                </div>
              </div>

              {/* ASCII Diagram Canvas */}
              <pre
                style={{
                  backgroundColor: isDark ? "#0A0A0A" : "#F8FAFC",
                  border: `1px solid ${isDark ? "#202020" : "#E2E8F0"}`,
                  padding: "1.2rem",
                  fontSize: "clamp(0.68rem, 1.1vw, 0.78rem)",
                  lineHeight: 1.35,
                  overflowX: "auto",
                  color: isDark ? "#38BDF8" : "#0047FF",
                  marginBottom: "1.5rem",
                }}
              >
                {BLUEPRINTS[selectedBlueprint].diagramAscii}
              </pre>

              {/* Real Code Snippet Box */}
              <div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: isDark ? "#888888" : "#64748B",
                    marginBottom: "0.5rem",
                  }}
                >
                  ENGINEERING SOURCE ARTIFACT EXCERPT:
                </div>
                <pre
                  style={{
                    backgroundColor: isDark ? "#111111" : "#0F172A",
                    color: "#F8FAFC",
                    border: `1px solid ${isDark ? "#222222" : "#0F172A"}`,
                    padding: "1.2rem",
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    overflowX: "auto",
                  }}
                >
                  {BLUEPRINTS[selectedBlueprint].codeSnippet}
                </pre>
              </div>
            </div>
          )}
        </section>

        {/* ── SECTION 05: THE ENGINEERING LEDGER (CHANGELOG) ───────── */}
        <section
          id="ledger"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
          }}
        >
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [05. THE ENGINEERING LEDGER // REPLACING THE BLOG]
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Changelog & Technical Stream
            </h2>

            {/* Telegram Channel CTA */}
            <a
              href={PROFILE.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="btn-action"
              style={{ backgroundColor: accentHex, borderColor: accentHex }}
            >
              Follow Live on Telegram: {PROFILE.telegramChannelName} ↗
            </a>
          </div>

          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2.5rem",
            }}
          >
            Instead of generic thought leadership essays, this ledger documents the raw reality of engineering: daily
            algorithmic breakthroughs on LeetCode, bare-metal OS transitions to Ubuntu 26.04 LTS, and low-bandwidth vision
            optimization.
          </p>

          {/* Changelog Entries Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {CHANGELOG_ENTRIES.map((entry) => (
              <div
                key={entry.id}
                className="border-ledger bg-card font-mono"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.4rem",
                }}
              >
                {/* Entry Meta Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    borderBottom: `1px solid ${isDark ? "#1C1C1C" : "#F1F5F9"}`,
                    paddingBottom: "0.6rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.72rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: accentHex, fontWeight: 700 }}>[{entry.tag}]</span>
                    <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>{entry.date}</strong>
                    <span style={{ color: isDark ? "#777777" : "#64748B" }}>commit {entry.commit}</span>
                  </div>
                  <div>
                    <a
                      href={PROFILE.telegramChannel}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: accentHex, textDecoration: "underline" }}
                    >
                      Telegram Note ↗
                    </a>
                  </div>
                </div>

                {/* Entry Title & Body */}
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: isDark ? "#FFFFFF" : "#111111",
                    marginBottom: "0.5rem",
                  }}
                >
                  {entry.title}
                </h4>

                <p
                  className="font-sans"
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: isDark ? "#CCCCCC" : "#334155",
                    marginBottom: "0.75rem",
                  }}
                >
                  {entry.content}
                </p>

                <div
                  style={{
                    fontSize: "0.74rem",
                    color: isDark ? "#888888" : "#64748B",
                    backgroundColor: isDark ? "#141414" : "#F8FAFC",
                    padding: "6px 10px",
                    borderLeft: `2px solid ${accentHex}`,
                  }}
                >
                  <strong>CHANNEL LOG:</strong> {entry.channelNote}
                </div>
              </div>
            ))}
          </div>

          {/* Telegram Channel Follow Banner */}
          <div
            className="border-ledger bg-subtle"
            style={{
              border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
              padding: "1.8rem",
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <div className="font-mono" style={{ fontSize: "0.72rem", color: accentHex, fontWeight: 700 }}>
                TELEGRAM CHANNEL // UNPLUGGED ME
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", marginTop: "2px", fontWeight: 600 }}>
                Read daily unfiltered technical logs & algorithmic notes
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: isDark ? "#A0A0A0" : "#64748B",
                  marginTop: "4px",
                  maxWidth: "600px",
                }}
              >
                Real thoughts on Ubuntu workstation tweaks, LeetCode solutions, INSA defensive models, and deploying AI
                into rural Ethiopian sectors.
              </p>
            </div>
            <a
              href={PROFILE.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="btn-action"
              style={{ backgroundColor: accentHex, borderColor: accentHex }}
            >
              Join @unpluggedme Channel ↗
            </a>
          </div>
        </section>

        {/* ── SECTION 06: TECHNICAL MATRIX & INTERACTIVE TERMINAL ──── */}
        <section
          id="terminal"
          style={{
            paddingBottom: "4.5rem",
            borderBottom: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
            marginBottom: "4.5rem",
          }}
        >
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [06. TECHNICAL MATRIX & INTERACTIVE INSPECTOR]
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            Capabilities Ledger & Raw Terminal
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2.5rem",
            }}
          >
            A structured audit of technologies we operate in production, paired with a command-line terminal to
            interrogate credentials and architecture directly from the browser.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
            className="ledger-blueprint-grid"
          >
            {/* Left: Capabilities Matrix Ledger */}
            <div
              className="border-ledger bg-card font-mono"
              style={{
                border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: accentHex,
                  marginBottom: "1rem",
                  borderBottom: `1px solid ${isDark ? "#1E1E1E" : "#F1F5F9"}`,
                  paddingBottom: "0.5rem",
                }}
              >
                PRODUCTION CAPABILITIES LEDGER:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {TECH_MATRIX.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                      <strong style={{ fontSize: "0.85rem", color: isDark ? "#FFFFFF" : "#111111" }}>
                        {item.domain}
                      </strong>
                    </div>
                    <div style={{ fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginBottom: "6px" }}>
                      {item.specNote}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.72rem",
                            padding: "2px 7px",
                            backgroundColor: isDark ? "#161616" : "#F1F5F9",
                            border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                            color: isDark ? "#CCCCCC" : "#334155",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Terminal Console */}
            <div
              className="border-ledger font-mono"
              style={{
                backgroundColor: isDark ? "#0A0A0A" : "#0F172A",
                color: "#F8FAFC",
                border: `1px solid ${isDark ? "#222222" : "#0F172A"}`,
                display: "flex",
                flexDirection: "column",
                minHeight: "420px",
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  backgroundColor: isDark ? "#141414" : "#1E293B",
                  borderBottom: "1px solid #334155",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.72rem",
                  color: "#94A3B8",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                  <span style={{ marginLeft: "8px", fontWeight: 600 }}>bash — ab@aman-systems:~ (tty1)</span>
                </div>
                <span>x86_64 Ubuntu 26.04</span>
              </div>

              {/* Terminal Output Log Area */}
              <div
                style={{
                  padding: "1rem",
                  flex: 1,
                  maxHeight: "320px",
                  overflowY: "auto",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {terminalOutput.map((line, index) => {
                  let color = "#CBD5E1";
                  if (line.type === "system") color = "#38BDF8";
                  if (line.type === "user") color = "#F8FAFC";
                  if (line.type === "error") color = "#F87171";
                  return (
                    <div key={index} style={{ color, whiteSpace: "pre-wrap" }}>
                      {line.text}
                    </div>
                  );
                })}
                <div ref={terminalBottomRef} />
              </div>

              {/* Quick Clickable Command Pills */}
              <div
                style={{
                  backgroundColor: isDark ? "#101010" : "#1E293B",
                  borderTop: "1px solid #334155",
                  padding: "6px 10px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                }}
              >
                {[
                  { cmd: "credentials", label: "credentials" },
                  { cmd: "arch gebere", label: "arch gebere" },
                  { cmd: "arch smartbiz", label: "arch smartbiz" },
                  { cmd: "cv", label: "cv" },
                  { cmd: "telegram", label: "telegram" },
                  { cmd: "whoami", label: "whoami" },
                  { cmd: "clear", label: "clear" },
                ].map((item) => (
                  <button
                    key={item.cmd}
                    onClick={() => {
                      setTerminalInput(item.cmd);
                      const newLogs = [
                        ...terminalOutput,
                        { type: "user", text: `$ ${item.cmd}` },
                      ];
                      if (item.cmd === "credentials") {
                        newLogs.push({
                          type: "output",
                          text: `1. MIT Open Learning: Introduction to Universal AI (Oct 7, 2026)
   Backed by: Prof. Dimitris Bertsimas (Vice Provost for Open Learning)
2. Sof Omar Technologies: Software Engineering Internship Certificate (Sep 2026)
3. INSA: National Ethio Cyber Talent Summer Camp (Jul–Nov 2026, Systems Security)
4. Addis Ababa University (AAU): B.Sc. in Software Engineering (Junior / 3rd Year)
5. Udacity: Android Developer & Programming Fundamentals (Sep 2025)`,
                        });
                      } else if (item.cmd === "arch gebere") {
                        newLogs.push({
                          type: "output",
                          text: `Telegram -> Node.js Quantizer -> Groq API (Llama 3.2 11B Vision) + Supabase pgvector -> Sub-800ms Amharic output.`,
                        });
                      } else if (item.cmd === "arch smartbiz") {
                        newLogs.push({
                          type: "output",
                          text: `Client -> IndexedDB Queue -> Vector Clock Sync -> NestJS Gateway -> PostgreSQL Master.`,
                        });
                      } else if (item.cmd === "cv") {
                        setCvModalOpen(true);
                        newLogs.push({
                          type: "output",
                          text: `Opening Curriculum Vitae modal...`,
                        });
                      } else if (item.cmd === "telegram") {
                        newLogs.push({
                          type: "output",
                          text: `Direct: https://t.me/ggedAbdusay (@ggedAbdusay)\nChannel: https://t.me/unpluggedme`,
                        });
                        window.open(PROFILE.telegramDirect, "_blank");
                      } else if (item.cmd === "whoami") {
                        newLogs.push({
                          type: "output",
                          text: `Abdusalam Oumer Aman: AAU SE '26 · INSA CTC Cyber · MIT Open Learning Universal AI · Founder Gebere Vision AI`,
                        });
                      } else if (item.cmd === "clear") {
                        setTerminalOutput([{ type: "system", text: "Buffer reset." }]);
                        setTerminalInput("");
                        return;
                      }
                      setTerminalOutput(newLogs);
                      setTerminalInput("");
                    }}
                    style={{
                      background: "none",
                      border: "1px solid #475569",
                      color: "#CBD5E1",
                      fontSize: "0.68rem",
                      padding: "2px 6px",
                      cursor: "pointer",
                    }}
                  >
                    ${item.label}
                  </button>
                ))}
              </div>

              {/* Terminal Input Bar */}
              <form
                onSubmit={handleTerminalSubmit}
                style={{
                  display: "flex",
                  borderTop: "1px solid #334155",
                  backgroundColor: isDark ? "#0A0A0A" : "#0F172A",
                }}
              >
                <span
                  style={{
                    padding: "8px 10px 8px 14px",
                    color: "#38BDF8",
                    fontSize: "0.82rem",
                    userSelect: "none",
                  }}
                >
                  $
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'credentials', 'telegram', 'cv'..."
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    color: "#FFFFFF",
                    fontFamily: "inherit",
                    fontSize: "0.8rem",
                    padding: "8px 12px 8px 0",
                  }}
                />
              </form>
            </div>
          </div>
        </section>

        {/* ── SECTION 07: DISPATCH CONSOLE (CONTACT) ────────────────── */}
        <section id="dispatch">
          {/* Section Eyebrow */}
          <div className="font-mono" style={{ fontSize: "0.78rem", fontWeight: 700, color: accentHex, letterSpacing: "0.1em" }}>
            [07. FOUNDER DISPATCH PROTOCOL]
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.9rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginTop: "0.3rem",
              marginBottom: "0.8rem",
            }}
          >
            Direct Dispatch Console
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: isDark ? "#A0A0A0" : "#64748B",
              maxWidth: "760px",
              marginBottom: "2.8rem",
            }}
          >
            I am actively considering applied AI founder partnerships, technical contract engineering, and enterprise
            backend roles worldwide. Drop a dispatch below or connect directly via Telegram.
          </p>

          <div
            className="dispatch-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.3fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left: Contact Specs & 1-Click Copy */}
            <div>
              {/* Direct Mail Card */}
              <div
                className="border-ledger bg-card font-mono"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ fontSize: "0.7rem", color: isDark ? "#888888" : "#64748B", marginBottom: "6px" }}>
                  PRIMARY DISPATCH INBOX:
                </div>
                <div
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: accentHex,
                    marginBottom: "1rem",
                    wordBreak: "break-all",
                  }}
                >
                  {PROFILE.email}
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <button onClick={copyEmailAddress} className="btn-action">
                    {emailCopied ? "✓ Address Copied!" : "Copy Email Address"}
                  </button>
                  <a href={`mailto:${PROFILE.email}`} className="btn-action-ghost">
                    Native Mail App ↗
                  </a>
                  <button onClick={() => setCvModalOpen(true)} className="btn-action-ghost">
                    View CV 📄
                  </button>
                </div>
              </div>

              {/* Fast Direct Links */}
              <div
                className="border-ledger bg-card font-mono"
                style={{
                  border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: isDark ? "#888888" : "#64748B",
                    marginBottom: "0.85rem",
                  }}
                >
                  VERIFIED CHANNELS:
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.82rem" }}>
                  <div>
                    <span className="text-muted">DIRECT TELEGRAM: </span>
                    <a href={PROFILE.telegramDirect} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600, color: accentHex }}>
                      {PROFILE.telegramDirectHandle} (Chat Directly) ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">TELEGRAM CHANNEL: </span>
                    <a href={PROFILE.telegramChannel} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      {PROFILE.telegramChannelName} (@unpluggedme) ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">TWITTER / X: </span>
                    <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      {PROFILE.twitterHandle} ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">UPWORK: </span>
                    <a href={PROFILE.upwork} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      Top-Rated Profile ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">GITHUB: </span>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="tactile-link" style={{ fontWeight: 600 }}>
                      github.com/{PROFILE.handle}-cmd ↗
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">LOCATION: </span>
                    <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>Addis Ababa, Ethiopia (UTC+3)</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Dispatch Form */}
            <div
              className="border-ledger bg-card font-mono"
              style={{
                border: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: accentHex,
                  marginBottom: "0.3rem",
                }}
              >
                DISPATCH TRANSMISSION FORM:
              </div>
              <p
                className="font-sans"
                style={{
                  fontSize: "0.88rem",
                  color: isDark ? "#888888" : "#64748B",
                  marginBottom: "1.5rem",
                }}
              >
                Direct transmission routed to Abdusalam's priority queue.
              </p>

              {formStatus === "success" ? (
                <div
                  style={{
                    backgroundColor: isDark ? "rgba(16, 185, 129, 0.1)" : "#ECFDF5",
                    border: "1px solid #10B981",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", color: "#10B981", marginBottom: "0.5rem" }}>✓</div>
                  <h4 className="font-serif" style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                    Dispatch Transmitted
                  </h4>
                  <p className="font-sans" style={{ fontSize: "0.85rem", color: isDark ? "#D1D5DB" : "#374151" }}>
                    {formMsg}
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="btn-action-ghost"
                    style={{ marginTop: "1rem" }}
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginBottom: "4px" }}>
                      SENDER NAME / ORGANIZATION <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. K. Evans / UniPods Partner"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: isDark ? "#141414" : "#F8FAFC",
                        border: `1px solid ${isDark ? "#282828" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        fontSize: "0.84rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginBottom: "4px" }}>
                      SENDER EMAIL ADDRESS <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. evans@institution.org"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: isDark ? "#141414" : "#F8FAFC",
                        border: `1px solid ${isDark ? "#282828" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        fontSize: "0.84rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginBottom: "4px" }}>
                      SUBJECT TOPIC
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: isDark ? "#141414" : "#F8FAFC",
                        border: `1px solid ${isDark ? "#282828" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        fontSize: "0.84rem",
                        fontFamily: "inherit",
                      }}
                    >
                      <option value="AI Engineering / Founder Role">AI Engineering / Applied Founder Collaboration</option>
                      <option value="Gebere Vision AI Deployment">Gebere Vision AI Deployment & Incubation</option>
                      <option value="Enterprise Architecture Contract">Enterprise Backend & PWA Architecture</option>
                      <option value="Academic & Systems Inquiry">Academic & Systems Security Research</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", color: isDark ? "#888888" : "#64748B", marginBottom: "4px" }}>
                      TECHNICAL SCOPE & MESSAGE <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Detail your requirements, project architecture, or collaboration scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: isDark ? "#141414" : "#F8FAFC",
                        border: `1px solid ${isDark ? "#282828" : "#CBD5E1"}`,
                        color: isDark ? "#FFFFFF" : "#111111",
                        fontSize: "0.84rem",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  {formStatus === "error" && (
                    <div style={{ fontSize: "0.78rem", color: "#EF4444", backgroundColor: "rgba(239, 68, 68, 0.08)", padding: "8px 12px" }}>
                      {formMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="btn-action"
                    style={{
                      justifyContent: "center",
                      backgroundColor: accentHex,
                      borderColor: accentHex,
                      marginTop: "0.5rem",
                    }}
                  >
                    {formStatus === "sending" ? "Transmitting Dispatch..." : "Execute Dispatch Transmission →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER / FORMAL TECHNICAL COLOPHON ─────────────────────── */}
      <footer
        className="font-mono"
        style={{
          borderTop: `1px solid ${isDark ? "#222222" : "#E5E7EB"}`,
          backgroundColor: isDark ? "#0A0A0A" : "#F8FAFC",
          padding: "2.5rem 1.5rem",
          fontSize: "0.75rem",
          color: isDark ? "#888888" : "#64748B",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.2rem",
          }}
        >
          <div>
            <strong style={{ color: isDark ? "#FFFFFF" : "#111111" }}>{PROFILE.name}</strong> · AAU Software Engineering · INSA Cyber
            Alum · MIT Open Learning
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={PROFILE.telegramDirect} target="_blank" rel="noreferrer" className="tactile-link">
              Telegram: @ggedAbdusay ↗
            </a>
            <a href={PROFILE.upwork} target="_blank" rel="noreferrer" className="tactile-link">
              Upwork ↗
            </a>
            <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="tactile-link">
              Twitter ↗
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="tactile-link">
              GitHub ↗
            </a>
          </div>

          <div>
            <a href="#manifesto" className="tactile-link" style={{ fontWeight: 600 }}>
              ↑ Back to Top of Ledger
            </a>
          </div>
        </div>
      </footer>

      {/* ── CURRICULUM VITAE (CV) VIEWER MODAL ───────────────────────── */}
      {cvModalOpen && (
        <div
          onClick={() => setCvModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.82)",
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
            className="border-ledger bg-card font-mono"
            style={{
              maxWidth: "760px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              border: `2px solid ${accentHex}`,
              padding: "2.2rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => setCvModalOpen(false)}
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                color: isDark ? "#FFFFFF" : "#111111",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <div style={{ fontSize: "0.72rem", color: accentHex, fontWeight: 700, marginBottom: "4px" }}>
              OFFICIAL CURRICULUM VITAE // DOSSIER
            </div>

            <h3 className="font-serif" style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.2rem" }}>
              Abdusalam Oumer Aman
            </h3>

            <div style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B", marginBottom: "1.4rem" }}>
              Software Engineering (AAU) · Systems Security (INSA) · Applied AI Founder
            </div>

            {/* Quick Actions Row */}
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.8rem", flexWrap: "wrap" }}>
              <a
                href={PROFILE.cvUrl}
                download="Abdusalam_Oumer_CV.pdf"
                className="btn-action"
                style={{ backgroundColor: accentHex, borderColor: accentHex }}
              >
                Download PDF Resume (cv.pdf) ↓
              </a>
              <a
                href={PROFILE.telegramDirect}
                target="_blank"
                rel="noreferrer"
                className="btn-action-ghost"
              >
                Message on Telegram (@ggedAbdusay) ↗
              </a>
              <button onClick={() => setCvModalOpen(false)} className="btn-action-ghost">
                Close
              </button>
            </div>

            {/* Structured Resume Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "0.82rem" }}>
              {/* Education & Credentials */}
              <div style={{ borderBottom: `1px solid ${isDark ? "#222222" : "#E2E8F0"}`, paddingBottom: "1rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: accentHex, marginBottom: "6px" }}>
                  1. EDUCATION & CREDENTIALS
                </div>
                <div><strong>Addis Ababa University (AAU)</strong> — B.Sc. in Software Engineering (2022–Present, 3rd Year)</div>
                <div><strong>MIT Open Learning</strong> — Introduction to Universal AI (Completed Oct 7, 2026, Backed by Prof. Dimitris Bertsimas)</div>
                <div><strong>Sof Omar Technologies</strong> — Software Engineering Internship Certificate (Sep 2026)</div>
                <div><strong>INSA</strong> — National Ethio Cyber Talent Summer Camp (Jul–Nov 2026, Systems Security)</div>
                <div><strong>Udacity</strong> — Android Developer & Programming Fundamentals (Sep 2025)</div>
              </div>

              {/* Founder Experience */}
              <div style={{ borderBottom: `1px solid ${isDark ? "#222222" : "#E2E8F0"}`, paddingBottom: "1rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: accentHex, marginBottom: "6px" }}>
                  2. PRODUCTION PRODUCTS & FOUNDER VENTURES
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <strong>Gebere Vision AI</strong> (Founder & Architect · Selected for METI-Funded UniPods AI Programme):
                  <div className="font-sans" style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B" }}>
                    Sub-800ms crop disease diagnosis bot on Telegram in Amharic, Afaan Oromoo, English, and Arabic via Groq Llama vision models and Supabase pgvector.
                  </div>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <strong>SmartBiz ERP Lite</strong> (Lead Architect):
                  <div className="font-sans" style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B" }}>
                    Offline-first PWA for Ethiopian merchants with client-side IndexedDB mutations and deterministic vector-clock sync.
                  </div>
                </div>
                <div>
                  <strong>Ethio Bucks</strong> (Fintech Backend Architect):
                  <div className="font-sans" style={{ fontSize: "0.82rem", color: isDark ? "#A0A0A0" : "#64748B" }}>
                    High-concurrency ETB wallet engine in Django & PostgreSQL with row-level transaction locks preventing double-spending.
                  </div>
                </div>
              </div>

              {/* Core Technical Stack */}
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: accentHex, marginBottom: "6px" }}>
                  3. TECHNICAL STACK
                </div>
                <div><strong>Languages:</strong> Python, JavaScript / TypeScript, Dart, SQL, Bash</div>
                <div><strong>Frameworks:</strong> Next.js, React 19, Django, NestJS, Node.js, Flutter</div>
                <div><strong>AI & Data:</strong> Groq Llama Vision, Supabase pgvector, PostgreSQL, SQLite3, Redis</div>
                <div><strong>Systems & Security:</strong> Ubuntu 26.04 LTS, Docker, INSA Defensive Security, JWT Auth</div>
              </div>

              {/* Upload Note */}
              <div
                style={{
                  backgroundColor: isDark ? "#141414" : "#F8FAFC",
                  border: `1px solid ${isDark ? "#262626" : "#E2E8F0"}`,
                  padding: "10px",
                  fontSize: "0.74rem",
                  color: isDark ? "#888888" : "#64748B",
                }}
              >
                <em>Note: To link an updated PDF file, save your resume as <code>public/cv.pdf</code> and it will download automatically via the button above.</em>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
