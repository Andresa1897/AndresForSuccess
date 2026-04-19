/**
 * SuccessProof.js — Andres G. Alvarez
 * "Proof of Work" — Interactive system-level storytelling
 *
 * Each case study follows:
 *   Stakes → System Designed → Outcome → Client ROI Translation
 *
 * Stack: React · Tailwind CSS · Framer Motion
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   CASE STUDIES (MANDATORY EXPERIENCE)
───────────────────────────────────────── */
const caseStudies = [
  {
    id: "boeing",
    period: "2024 – Present",
    company: "The Boeing Company",
    role: "Senior GRC Specialist",
    location: "St. Louis, MO",
    tag: "Defense · GRC · CMMC",
    headline: "Governing 31 Lab Capabilities Under Federal Scrutiny",
    stakes:
      "A Tier-1 defense contractor with 31 Lab Test capabilities needed to achieve and sustain compliance with DFARS and CMMC requirements — frameworks that carry serious contractual and national security implications. Regulatory failure was not an option.",
    system: [
      "Designed automated executive KPI dashboards surfacing real-time cyber maturity and residual risk to C-suite and board-level stakeholders",
      "Authored RACI matrices, Statements of Work, and Memorandums of Agreement governing cross-functional accountability",
      "Led end-to-end remediation initiatives in direct partnership with Corporate Audit — aligning security posture with both operational and strategic investment cycles",
      "Established enterprise asset alignment framework for DFARS/CMMC readiness across diverse technical environments",
    ],
    outcomes: [
      { metric: "31", label: "Lab capabilities governed" },
      { metric: "CMMC", label: "Compliance posture achieved" },
      { metric: "C-Suite", label: "Dashboard visibility delivered" },
    ],
    roi: "Boards and executives could finally see residual risk as a financial variable — not just a technical checkbox. Regulatory confidence translated into protected contract value and faster audit cycles.",
    accentColor: "#b8965a",
  },
  {
    id: "univision",
    period: "2022 – 2023",
    company: "Univision",
    role: "Information Security Engineer",
    location: "Miami, FL",
    tag: "Automation · IR · Zero Trust",
    headline: "Engineering Automation That Cut Incidents by 50%",
    stakes:
      "A national media enterprise was experiencing mounting incident volume with manual response workflows creating dangerous detection-to-containment delays. Every minute of undetected exposure risked viewer data and broadcast system integrity.",
    system: [
      "Architected an enterprise Incident Response automation framework from the ground up — integrating SIEM detection logic with automated response playbooks",
      "Built CASB-based data leakage prevention pipelines with automated blocking, eliminating human latency from critical containment workflows",
      "Designed and deployed zero-trust Mobile Device Management via Microsoft Intune across 300+ endpoint devices",
      "Developed OSINT-powered threat intelligence pipelines to enable proactive threat hunting before events escalated",
    ],
    outcomes: [
      { metric: "30%",  label: "Faster incident response" },
      { metric: "50%",  label: "Monthly incident reduction" },
      { metric: "300+", label: "Devices secured via zero trust" },
    ],
    roi: "Automation replaced reaction. Security became a predictive operation instead of a firefighting function — freeing engineering capacity for architecture rather than triage.",
    accentColor: "#3dd6c0",
  },
  {
    id: "walmart",
    period: "2021 – 2022",
    company: "Walmart Global Technology",
    role: "Cyber Risk Specialist",
    location: "Bentonville, AR",
    tag: "Cloud · Vulnerability Mgmt · Scale",
    headline: "Managing Risk Across One Million Cloud Assets",
    stakes:
      "Walmart's multi-cloud estate — spanning Azure and GCP — carried over one million assets at any given time. Vulnerability prioritization at this scale without a disciplined, business-impact-driven model produces noise, not action.",
    system: [
      "Directed enterprise vulnerability management across 1M+ assets using business-impact-driven risk models — ensuring remediation effort was allocated where it mattered most",
      "Led enterprise response to Log4j and other critical CVEs, coordinating cross-functional remediation under pressure and public scrutiny",
      "Built custom integrations between Brinqa (risk orchestration) and Jira (engineering workflow) — closing the loop between risk prioritization and actual remediation execution",
      "Designed SLA frameworks that compressed Critical Risk timelines, improving accountability and speed across engineering teams",
    ],
    outcomes: [
      { metric: "1M+", label: "Assets under management" },
      { metric: "20%", label: "Critical SLA improvement" },
      { metric: "Azure + GCP", label: "Multi-cloud coverage" },
    ],
    roi: "Risk moved from a quarterly report to a real-time operational input. Engineering teams stopped guessing what to fix first — they followed a system built on actual business consequence.",
    accentColor: "#b8965a",
  },
  {
    id: "esports",
    period: "2011 – 2015",
    company: "Elite Competitive Gaming",
    role: "Professional Competitor",
    location: "North America",
    tag: "Pressure · Discipline · Leadership",
    headline: "Performing at National Level Where Failure Is Public",
    stakes:
      "Call of Duty World Championship Qualifier. Elimination-bracket format. The pressure of competing publicly at the national level — where every decision is visible, every error is permanent, and the margin between winning and losing is razor thin.",
    system: [
      "Built mental frameworks for high-pressure decision-making that transferred directly into enterprise crisis response and incident command",
      "Led team coordination under real-time adversarial conditions — developing communication habits that now define how I run executive briefings",
      "Developed a discipline model around consistent preparation, performance review, and adaptive execution that underpins every consulting engagement",
    ],
    outcomes: [
      { metric: "$50K+", label: "Competitive earnings" },
      { metric: "4 Years", label: "Elite-level competition" },
      { metric: "National", label: "North American Qualifier" },
    ],
    roi: "Elite performance is not natural talent — it is deliberate system design. The habits built here are what allow me to stay composed inside high-stakes cybersecurity incidents and executive conversations.",
    accentColor: "#8a9ab5",
  },
];

/* ─────────────────────────────────────────
   PROOF CARD (EXPANDED)
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10 pb-8 border-b border-[#1c2540]">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: cs.accentColor }}>
            {cs.tag}
          </p>
          <h3
            className="text-2xl md:text-3xl font-light text-[#f0f4f9] mb-2 max-w-xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {cs.headline}
          </h3>
          <p className="text-[#8a9ab5] text-sm">{cs.role} · {cs.location}</p>
        </div>
        <div className="text-left md:text-right shrink-0">
          <p className="text-[#f0f4f9] text-sm font-light">{cs.company}</p>
          <p className="text-[#2a3352] text-xs tracking-wider mt-1">{cs.period}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Stakes + System */}
        <div className="md:col-span-2 space-y-8">
          {/* Stakes */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px" style={{ background: cs.accentColor }} />
              <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: cs.accentColor }}>
                The Stakes
              </p>
            </div>
            <p className="text-[#8a9ab5] text-sm leading-7">{cs.stakes}</p>
          </div>

          {/* System */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px" style={{ background: cs.accentColor }} />
              <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: cs.accentColor }}>
                The System
              </p>
            </div>
            <ul className="space-y-3">
              {cs.system.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: cs.accentColor, opacity: 0.6 }}
                  />
                  <p className="text-[#8a9ab5] text-sm leading-6">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes + ROI */}
        <div className="space-y-6">
          {/* Outcome metrics */}
          <div className="border border-[#1c2540] p-6 space-y-5">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a9ab5]">Outcomes</p>
            {cs.outcomes.map((o) => (
              <div key={o.metric}>
                <p
                  className="text-3xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: cs.accentColor }}
                >
                  {o.metric}
                </p>
                <p className="text-[#8a9ab5] text-xs tracking-wide uppercase">{o.label}</p>
              </div>
            ))}
          </div>

          {/* ROI Translation */}
          <div className="border-l-2 pl-4" style={{ borderColor: `${cs.accentColor}40` }}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a9ab5] mb-3">
              What This Means for You
            </p>
            <p className="text-[#8a9ab5] text-sm leading-6 italic">{cs.roi}</p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="block text-center py-3 border text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ borderColor: `${cs.accentColor}40`, color: cs.accentColor }}
          >
            Apply This to My Situation →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SUCCESS PROOF SECTION (EXPORT)
───────────────────────────────────────── */
export default function SuccessProof() {
  const [activeId, setActiveId] = useState("boeing");
  const active = caseStudies.find((c) => c.id === activeId);

  return (
    <section
      id="proof"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: "#0d1428" }}
    >
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, #b8965a, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
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
            Select a chapter. Each one shows the stakes, the architecture, and the
            measurable result — translated into what it means for you.
          </p>
        </motion.div>

        {/* Selector tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveId(cs.id)}
              className={`px-5 py-3 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                activeId === cs.id
                  ? "border-[#b8965a]/60 text-[#f0f4f9] bg-[#b8965a]/10"
                  : "border-[#1c2540] text-[#8a9ab5] hover:border-[#2a3352] hover:text-[#c4cedf]"
              }`}
            >
              <span className="block text-[10px] tracking-widest mb-0.5 opacity-60">{cs.period}</span>
              {cs.company}
            </button>
          ))}
        </div>

        {/* Case detail panel */}
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
            Technical Competencies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "PowerShell", "LogRhythm SIEM", "Microsoft Intune",
              "SailPoint", "Tenable Nessus", "Brinqa", "ServiceNow",
              "Azure", "GCP", "AWS", "CASB", "Zero Trust Architecture",
              "OSINT", "Jira",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 border border-[#1c2540] text-[#8a9ab5] text-[11px] tracking-wider hover:border-[#2a3352] hover:text-[#c4cedf] transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
