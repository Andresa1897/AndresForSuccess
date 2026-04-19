/**
 * SuccessProof.js — Andres G. Alvarez (UPDATED)
 * "Proof of Work" — Strategic Intelligence Professional Edition
 *
 * Updates applied per prompttest.docx:
 *   ✅ Refined experience copy (Problem-Solution-Outcome framework)
 *   ✅ Micro-Metrics row under each role (2-second scannability)
 *   ✅ [TAG] uppercase labels preceding each bullet
 *   ✅ Bold metrics + inline tool keywords throughout
 *   ✅ IC-CAE Fellowship (FIU / ODNI) added as chapter 4
 *   ✅ YouTube embed in Esports chapter
 *   ✅ Image placeholder slots (swap with real assets when ready)
 *   ✅ "Mission" statement per chapter
 *
 * Stack: React · Tailwind CSS · Framer Motion
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   MICRO-METRICS ROW
───────────────────────────────────────── */
function MicroMetrics({ metrics, accent }) {
  return (
    <div className="flex flex-wrap gap-px border border-[#1c2540] mb-8 overflow-hidden">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="flex-1 min-w-[110px] px-4 py-4 bg-[#0d1428]/80 text-center"
        >
          <p
            className="text-xl font-light mb-0.5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: accent }}
          >
            {m.value}
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a9ab5] leading-4">{m.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   TAGGED BULLET
───────────────────────────────────────── */
function TagBullet({ tag, accent, children }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-[#1c2540] last:border-0">
      <span
        className="shrink-0 mt-0.5 text-[9px] tracking-[0.18em] font-bold px-2 py-1 border whitespace-nowrap"
        style={{ color: accent, borderColor: `${accent}30` }}
      >
        {tag}
      </span>
      <p className="text-[#8a9ab5] text-sm leading-6">{children}</p>
    </li>
  );
}

/* ─────────────────────────────────────────
   YOUTUBE EMBED
───────────────────────────────────────── */
function YouTubeEmbed({ videoId, caption }) {
  return (
    <div className="border border-[#1c2540] overflow-hidden">
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={caption}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-4 py-3 border-t border-[#1c2540]">
        <p className="text-[#8a9ab5] text-xs tracking-wider">{caption}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CASE STUDIES DATA
───────────────────────────────────────── */
const B = ({ children }) => (
  <strong className="text-[#c4cedf] font-medium">{children}</strong>
);

const cases = [
  {
    id: "boeing",
    period: "2024 – Present",
    company: "The Boeing Company",
    role: "Senior GRC Specialist",
    location: "St. Louis, MO",
    tag: "Defense · GRC · CMMC",
    mission: "Governing 31 Lab Test capabilities to meet Tier-1 federal defense mandates.",
    accent: "#b8965a",
    micro: [
      { value: "31",       label: "Lab Capabilities" },
      { value: "100%",     label: "Audit Resolution" },
      { value: "CMMC 2/3", label: "Compliance Tier" },
    ],
    bullets: [
      { tag: "GOVERNANCE",           text: <p>Engineered a strategic oversight framework for 31 Lab capabilities, aligning national defense-critical infrastructure with <B>DFARS / CMMC</B> regulations.</p> },
      { tag: "PROJECT ARCHITECTURE", text: <p>Orchestrated cybersecurity project lifecycles via <B>JIRA</B> and <B>BVC</B>, synchronizing technical milestones with enterprise cost and schedule targets.</p> },
      { tag: "AUDIT LEADERSHIP",     text: <p>Directed remediation systems with Corporate Audit, converting high-stakes findings into structured action plans with <B>100% timely resolution</B>.</p> },
      { tag: "EXECUTIVE VISIBILITY", text: <p>Designed and automated real-time compliance KPI dashboards, translating complex technical risk into financial variables for <B>C-suite and board</B> stakeholders.</p> },
      { tag: "STRUCTURAL INTEGRITY", text: <p>Authored foundational governance architecture (<B>RACI, SoW, MOA</B>) to codify cross-functional accountability across the full enterprise asset landscape.</p> },
    ],
    outcomes: [
      { metric: "31",     label: "Capabilities governed" },
      { metric: "CMMC",   label: "Federal compliance achieved" },
      { metric: "C-Suite", label: "Dashboard visibility" },
    ],
    roi: "Boards and executives could finally see residual risk as a financial variable — not a technical checkbox. Regulatory confidence translated into protected contract value and faster audit cycles.",
    media: null,
  },
  {
    id: "univision",
    period: "2022 – 2023",
    company: "Univision",
    role: "Information Security Engineer",
    location: "Miami, FL",
    tag: "Automation · IR · Zero Trust",
    mission: "Automating threat detection and incident response for global media assets.",
    accent: "#3dd6c0",
    micro: [
      { value: "50%",  label: "Phishing Reduction" },
      { value: "30%",  label: "Faster Response" },
      { value: "300+", label: "MDM Assets" },
    ],
    bullets: [
      { tag: "THREAT AUTOMATION",    text: <p>Architected an <B>OSINT-based</B> phishing defense system (<B>Python</B>) that neutralized <B>50%</B> of monthly incident volume through automated adversary infrastructure blocking.</p> },
      { tag: "RESPONSE OPTIMIZATION",text: <p>Developed custom <B>LogRhythm SIEM</B> correlation logic and <B>CASB</B> detection policies, achieving a <B>30% reduction</B> in response time with automated data leakage prevention.</p> },
      { tag: "INCIDENT FRAMEWORKS",  text: <p>Built a custom IR automation engine implementing playbooks that accelerated MTTR by <B>10%</B> through automated evidence collection and triage.</p> },
      { tag: "ENDPOINT SECURITY",    text: <p>Orchestrated <B>Microsoft Intune</B> MDM for <B>300+</B> global devices, enforcing identity-centric Zero-Trust compliance and automated device health monitoring.</p> },
    ],
    outcomes: [
      { metric: "50%",  label: "Incident reduction" },
      { metric: "30%",  label: "Faster response" },
      { metric: "300+", label: "Devices secured" },
    ],
    roi: "Automation replaced reaction. Security became a predictive operation instead of a firefighting function — freeing engineering capacity for architecture rather than triage.",
    media: null,
  },
  {
    id: "walmart",
    period: "2021 – 2022",
    company: "Walmart Global Technology",
    role: "Cyber Risk Specialist",
    location: "Bentonville, AR",
    tag: "Cloud · Vulnerability Mgmt · Scale",
    mission: "Managing risk at enterprise scale across a 1,000,000+ asset multi-cloud environment.",
    accent: "#b8965a",
    micro: [
      { value: "1M+", label: "Cloud Assets" },
      { value: "50+", label: "Log4j Artifacts Neutralized" },
      { value: "20%", label: "SLA Reduction" },
    ],
    bullets: [
      { tag: "SCALE MANAGEMENT",    text: <p>Governed multi-cloud (<B>Azure / GCP</B>) vulnerability management across <B>1M+ assets</B>, implementing risk-based prioritization to maximize remediation ROI.</p> },
      { tag: "CRISIS RESPONSE",     text: <p>Engineered an automated <B>Log4j</B> detection and response system, neutralizing vulnerabilities across <B>50+</B> business-critical cloud artifacts during the global exploit.</p> },
      { tag: "DATA INTEGRITY",      text: <p>Built a custom <B>REGEX</B> engine to automate asset ownership mapping for 2,000+ devices, bridging raw telemetry and CMDB accuracy.</p> },
      { tag: "WORKFLOW INTEGRATION",text: <p>Built a <B>Brinqa–Jira</B> automation engine closing the risk lifecycle loop, reducing Critical Risk SLA response times by <B>20%</B>.</p> },
    ],
    outcomes: [
      { metric: "1M+",        label: "Assets under management" },
      { metric: "20%",        label: "SLA improvement" },
      { metric: "Azure + GCP", label: "Multi-cloud coverage" },
    ],
    roi: "Risk moved from a quarterly report to a real-time operational input. Engineering teams stopped guessing what to fix first — they followed a system built on actual business consequence.",
    media: null,
  },
  {
    id: "iccae",
    period: "Jun 2021 – Apr 2022",
    company: "FIU Jack D. Gordon Institute",
    role: "IC-CAE Cyber Threat Intelligence Fellow",
    location: "Florida International University · ODNI-Funded",
    tag: "Intelligence · Geopolitics · APT",
    mission: "Translating complex technical threats into actionable intelligence at the intersection of geopolitics and cybersecurity.",
    accent: "#c4cedf",
    micro: [
      { value: "ODNI", label: "Funded Program" },
      { value: "3",    label: "Nation-State Actors Analyzed" },
      { value: "11mo", label: "Intensive Fellowship" },
    ],
    bullets: [
      { tag: "GEOPOLITICAL ANALYSIS", text: <p>Specialized in the <B>Russian Federation's</B> cyber landscape, analyzing the nexus between emerging threats and legislation to predict regional shifts in digital policy.</p> },
      { tag: "STRATEGIC RESEARCH",    text: <p>Collaborated on multi-disciplinary teams to evaluate <B>Mexico's geopolitical influence</B> on U.S. foreign policy — a holistic view of North American security dynamics.</p> },
      { tag: "THREAT BRIEFING",       text: <p>Authored technical intelligence briefs on <B>Chinese APT groups</B>, presenting findings to faculty and subject matter experts to advance collective understanding of state-sponsored capabilities.</p> },
      { tag: "OSINT MASTERY",         text: <p>Applied advanced <B>OSINT</B> techniques to surface open-source signals on adversary infrastructure, feeding directly into policy-relevant threat intelligence products.</p> },
    ],
    outcomes: [
      { metric: "ODNI",   label: "Intelligence community seal" },
      { metric: "APT",    label: "Nation-state analysis depth" },
      { metric: "Policy", label: "Executive-level briefs" },
    ],
    roi: "An ODNI-funded program is a stamp of approval from the highest levels of the U.S. intelligence apparatus. It positions Andres not just as a technical operator, but as a Strategic Intelligence Professional who understands that cyber threats are motivated by global politics — not just code.",
    media: null,
  },
  {
    id: "esports",
    period: "2011 – 2015",
    company: "Elite Competitive Gaming",
    role: "Professional Competitor",
    location: "North America",
    tag: "Pressure · Discipline · Leadership",
    mission: "Competing at the national level where every decision is visible, every error is permanent, and the margin between winning and losing is razor thin.",
    accent: "#8a9ab5",
    micro: [
      { value: "$50K+",    label: "Competitive Earnings" },
      { value: "4 Years",  label: "Elite Competition" },
      { value: "National", label: "CoD World Qualifier" },
    ],
    bullets: [
      { tag: "MENTAL SYSTEMS",      text: <p>Built pressure-management frameworks under elimination-bracket conditions that now define how I lead <B>enterprise incident response</B> and executive crisis briefings.</p> },
      { tag: "TEAM COMMAND",        text: <p>Led real-time team coordination under adversarial conditions — developing communication habits that transfer directly into <B>C-suite stakeholder management</B>.</p> },
      { tag: "DISCIPLINED EXECUTION",text: <p>Built a deliberate performance model around consistent preparation, review, and adaptive execution — the same discipline underpinning every consulting engagement today.</p> },
    ],
    outcomes: [
      { metric: "$50K+",   label: "Competitive earnings" },
      { metric: "4 Years", label: "Elite-level competition" },
      { metric: "National", label: "CoD Championship Qualifier" },
    ],
    roi: "Elite performance is deliberate system design, not natural talent. The habits built in competitive arenas are what allow calm execution inside high-stakes cybersecurity incidents and board-level conversations.",
    media: (
      <div className="space-y-4">
        <YouTubeEmbed
          videoId="ewTRlgSEv7w"
          caption="Competitive Gaming Highlight Reel — North American Qualifier"
        />
      </div>
    ),
  },
];

/* ─────────────────────────────────────────
   CASE DETAIL PANEL
───────────────────────────────────────── */
function CaseDetail({ cs }) {
  return (
    <motion.div
      key={cs.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="border border-[#1c2540] bg-[#0a0f1e] p-8 md:p-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-[#1c2540]">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: cs.accent }}>
            {cs.tag}
          </p>
          <h3
            className="text-2xl md:text-3xl font-light text-[#f0f4f9] mb-2 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {cs.role}
          </h3>
          <p className="text-[#8a9ab5] text-sm">{cs.location}</p>
        </div>
        <div className="text-left md:text-right shrink-0">
          <p className="text-[#f0f4f9] text-sm font-light">{cs.company}</p>
          <p className="text-[#2a3352] text-xs tracking-wider mt-1">{cs.period}</p>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-6 border-l-2 pl-4" style={{ borderColor: `${cs.accent}40` }}>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#8a9ab5] mb-1">The Mission</p>
        <p className="text-[#c4cedf] text-sm leading-6 italic">{cs.mission}</p>
      </div>

      {/* Micro-metrics */}
      <MicroMetrics metrics={cs.micro} accent={cs.accent} />

      {/* 3-col body */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Bullets — left 2 cols */}
        <div className="md:col-span-2">
          <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: cs.accent }}>
            System Designed
          </p>
          <ul>
            {cs.bullets.map((b, i) => (
              <TagBullet key={i} tag={b.tag} accent={cs.accent}>{b.text}</TagBullet>
            ))}
          </ul>
        </div>

        {/* Sidebar — right col */}
        <div className="space-y-6">
          {/* Outcome metrics */}
          <div className="border border-[#1c2540] p-6 space-y-5">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#8a9ab5]">Outcomes</p>
            {cs.outcomes.map((o) => (
              <div key={o.metric}>
                <p
                  className="text-3xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: cs.accent }}
                >
                  {o.metric}
                </p>
                <p className="text-[#8a9ab5] text-xs tracking-wide uppercase">{o.label}</p>
              </div>
            ))}
          </div>

          {/* ROI */}
          <div className="border-l-2 pl-4" style={{ borderColor: `${cs.accent}40` }}>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#8a9ab5] mb-3">What This Means for You</p>
            <p className="text-[#8a9ab5] text-sm leading-6 italic">{cs.roi}</p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="block text-center py-3 border text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ borderColor: `${cs.accent}40`, color: cs.accent }}
          >
            Apply This to My Situation →
          </a>
        </div>
      </div>

      {/* Media (video / images) */}
      {cs.media && (
        <div className="mt-10 pt-8 border-t border-[#1c2540]">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#8a9ab5] mb-4">Media</p>
          {cs.media}
        </div>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   EXPORT
───────────────────────────────────────── */
export default function SuccessProof() {
  const [activeId, setActiveId] = useState("boeing");
  const active = cases.find((c) => c.id === activeId);

  return (
    <section
      id="proof"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: "#0d1428" }}
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, #b8965a, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#b8965a]/60" />
            <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase">Proof of Work</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0f4f9] leading-tight max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Every System Was Built to{" "}
            <span className="italic text-[#b8965a]">Solve a Real Problem.</span>
          </h2>
          <p className="text-[#8a9ab5] text-base mt-5 max-w-xl leading-7">
            Select a chapter. Each shows the mission, the architecture, and the measurable
            result — translated into what it means for you.
          </p>
        </motion.div>

        {/* Chapter tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-5 py-3 text-xs tracking-[0.13em] uppercase border transition-all duration-300 text-left ${
                activeId === c.id
                  ? "border-[#b8965a]/60 text-[#f0f4f9] bg-[#b8965a]/10"
                  : "border-[#1c2540] text-[#8a9ab5] hover:border-[#2a3352] hover:text-[#c4cedf]"
              }`}
            >
              <span className="block text-[9px] tracking-widest mb-0.5 opacity-50">{c.period}</span>
              {c.company}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {active && <CaseDetail key={active.id} cs={active} />}
        </AnimatePresence>

        {/* Tools strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 border border-[#1c2540] p-8"
        >
          <p className="text-[#b8965a] text-[10px] tracking-[0.3em] uppercase mb-5">
            Technical Toolkit — Applied in Context
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "PowerShell", "LogRhythm SIEM", "Microsoft Intune",
              "SailPoint", "Tenable Nessus", "Brinqa", "ServiceNow",
              "Azure", "GCP", "AWS", "CASB", "Zero Trust Architecture",
              "OSINT", "JIRA", "BVC", "REGEX Automation",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 border border-[#1c2540] text-[#8a9ab5] text-[11px] tracking-wider hover:border-[#2a3352] hover:text-[#c4cedf] transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
