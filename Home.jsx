/**
 * Home.js — Andres G. Alvarez
 * "Systems & Success" — Cyber-Luxe Executive Brand
 *
 * Sections:
 *   1. Hero         — Headline + animated gradient + CTA
 *   2. Bridge       — Emotional narrative anchor
 *   3. Vault        — Trust signals + certifications
 *   4. Consulting   — Four consulting lanes
 *
 * Stack: React · Tailwind CSS · Framer Motion
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────── */
const COLORS = {
  navy:     "#0a0f1e",
  navyMid:  "#0d1428",
  slate:    "#1c2540",
  graphite: "#2a3352",
  silver:   "#8a9ab5",
  mist:     "#c4cedf",
  white:    "#f0f4f9",
  gold:     "#b8965a",
  goldMid:  "#d4a96a",
  teal:     "#3dd6c0",
  tealDim:  "#1a7a6e",
};

/* ─────────────────────────────────────────
   FADE-UP ANIMATION WRAPPER
───────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────── */
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────
   DIVIDER LINE
───────────────────────────────────────── */
function Divider({ className = "" }) {
  return (
    <div className={`w-16 h-px bg-gradient-to-r from-transparent via-[#b8965a] to-transparent ${className}`} />
  );
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About",      href: "#bridge"     },
    { label: "Authority",  href: "#vault"       },
    { label: "Work",       href: "#proof"       },
    { label: "Consulting", href: "#consulting"  },
    { label: "Contact",    href: "#contact"     },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-8 h-8 border border-[#b8965a]/60 rotate-45 flex items-center justify-center group-hover:border-[#b8965a] transition-colors duration-300">
            <span className="-rotate-45 text-[#b8965a] font-bold text-xs tracking-wider">AGA</span>
          </span>
          <span className="text-[#c4cedf] text-sm tracking-[0.2em] font-light hidden sm:block">
            ANDRES G. ALVAREZ
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#8a9ab5] text-xs tracking-[0.18em] hover:text-[#c4cedf] transition-colors duration-300 uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-[#b8965a]/50 text-[#b8965a] text-xs tracking-[0.18em] uppercase hover:bg-[#b8965a]/10 transition-all duration-300"
          >
            Engage
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px bg-[#8a9ab5] transition-all duration-300 ${
                i === 1 ? "w-5" : "w-7"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1428]/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#8a9ab5] text-sm tracking-[0.15em] uppercase hover:text-[#c4cedf]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────
   1. HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{ background: COLORS.navy }}
    >
      {/* Ambient gradient orbs */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #3dd6c0 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-60 -right-40 w-[800px] h-[800px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #b8965a 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="h-px w-10 bg-[#b8965a]/60" />
          <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase font-light">
            Strategic Cybersecurity · GRC · Systems Architecture
          </span>
          <span className="h-px w-10 bg-[#b8965a]/60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#f0f4f9] leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Securing Systems.
          <br />
          <span className="italic text-[#b8965a]">Optimizing Life.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-[#8a9ab5] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide"
        >
          I engineer resilient systems — cloud environments, security programs,
          careers, businesses, and lives. From enterprise boardrooms to the next
          generation of leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#consulting"
            className="group px-8 py-4 bg-[#b8965a] text-[#0a0f1e] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#d4a96a] transition-all duration-300 flex items-center gap-3"
          >
            Start a Conversation
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#proof"
            className="px-8 py-4 border border-[#2a3352] text-[#8a9ab5] text-sm tracking-[0.2em] uppercase hover:border-[#8a9ab5] hover:text-[#c4cedf] transition-all duration-300"
          >
            View Proof of Work
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#2a3352] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-[#b8965a]/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────
   2. BRIDGE (ABOUT)
───────────────────────────────────────── */
const bridgeStats = [
  { value: "10+", label: "Years in Cybersecurity" },
  { value: "1M+", label: "Assets Under Risk Mgmt" },
  { value: "50%", label: "Incident Reduction (Univision)" },
  { value: "3", label: "Languages Spoken" },
];

function Bridge() {
  return (
    <Section
      id="bridge"
      className="py-28 md:py-36 px-6"
      style={{ background: `linear-gradient(160deg, ${COLORS.navy} 0%, ${COLORS.navyMid} 100%)` }}
    >
      {/* Subtle accent */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, #3dd6c0, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Narrative */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-[#b8965a]/60" />
              <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase">The Foundation</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-light text-[#f0f4f9] leading-[1.1] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Systems Built Under{" "}
              <span className="italic text-[#b8965a]">Pressure</span> Last.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[#8a9ab5] text-base leading-8 mb-6">
              Before enterprise boardrooms, there were arenas. Competing at the national
              level in Call of Duty — earning over $50,000 across four years of
              professional play — taught me something no classroom could: elite
              performance requires disciplined systems, not improvisation.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-[#8a9ab5] text-base leading-8 mb-6">
              That discipline translated directly into cybersecurity. At Walmart, I
              managed vulnerability exposure across one million assets. At Univision, I
              engineered automation that cut incident response time by thirty percent.
              At Boeing, I align enterprise security architecture with federal mandates
              that protect national defense programs.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-[#8a9ab5] text-base leading-8 mb-10">
              The same principles apply to careers, families, and businesses. Systems
              built with intention, accountability, and long-range vision are the ones
              that endure. I help people build those systems.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#b8965a]/40 flex items-center justify-center">
                <span className="text-[#b8965a] text-xs font-bold">AGA</span>
              </div>
              <div>
                <p className="text-[#f0f4f9] text-sm font-light tracking-wide">Andres G. Alvarez</p>
                <p className="text-[#8a9ab5] text-xs tracking-wider mt-0.5">Senior GRC Specialist · The Boeing Company</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right: Stats panel */}
        <div className="grid grid-cols-2 gap-4">
          {bridgeStats.map((s, i) => (
            <FadeUp key={s.label} delay={0.15 + i * 0.1}>
              <div className="border border-[#1c2540] bg-[#0d1428]/60 p-8 group hover:border-[#b8965a]/30 transition-all duration-500">
                <p
                  className="text-4xl font-light text-[#b8965a] mb-3 group-hover:text-[#d4a96a] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {s.value}
                </p>
                <p className="text-[#8a9ab5] text-xs tracking-wider leading-5 uppercase">{s.label}</p>
              </div>
            </FadeUp>
          ))}

          {/* Georgia Tech badge */}
          <FadeUp delay={0.55} className="col-span-2">
            <div className="border border-[#1c2540] bg-[#0d1428]/60 p-8 flex items-center gap-6 group hover:border-[#3dd6c0]/20 transition-all duration-500">
              <div className="w-12 h-12 border border-[#3dd6c0]/30 flex items-center justify-center shrink-0">
                <span className="text-[#3dd6c0] text-xs font-bold tracking-wider">GT</span>
              </div>
              <div>
                <p className="text-[#f0f4f9] text-sm font-light mb-1">M.S. Cybersecurity</p>
                <p className="text-[#8a9ab5] text-xs tracking-wider">Georgia Institute of Technology · Expected 2025</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────
   3. VAULT (TRUST + AUTHORITY)
───────────────────────────────────────── */
const certifications = [
  { code: "SEC+",  name: "CompTIA Security+",      status: "Active" },
  { code: "GCIH",  name: "GIAC Certified Incident Handler", status: "Active" },
  { code: "IC-CAE",name: "IC-CAE Designation",     status: "Active" },
  { code: "AWS",   name: "AWS Cloud Practitioner", status: "Active" },
  { code: "GSLC",  name: "GIAC Security Leadership", status: "In Progress" },
];

const frameworks = [
  "NIST 800-171", "NIST 800-172", "NIST 800-53",
  "CMMC Level 2/3", "ISO 27001", "PCI DSS",
  "GDPR", "ITAR / EAR", "FISMA",
];

function Vault() {
  return (
    <Section
      id="vault"
      className="py-28 md:py-36 px-6"
      style={{ background: COLORS.slate }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeUp className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#b8965a]/60" />
            <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase">The Vault</span>
            <span className="h-px w-8 bg-[#b8965a]/60" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0f4f9] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Authority Built Over Years.{" "}
            <span className="italic text-[#b8965a]">Not Overnight.</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Clearance */}
          <FadeUp delay={0.1} className="md:col-span-1">
            <div className="h-full border border-[#b8965a]/25 bg-[#0d1428]/70 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#3dd6c0] animate-pulse" />
                <span className="text-[#3dd6c0] text-xs tracking-[0.25em] uppercase font-medium">Active</span>
              </div>
              <p className="text-[#b8965a] text-xs tracking-[0.2em] uppercase mb-3">Security Clearance</p>
              <p
                className="text-5xl font-light text-[#f0f4f9] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                SECRET
              </p>
              <p className="text-[#8a9ab5] text-xs leading-6">
                Granted and maintained in support of defense-sensitive programs
                requiring top-tier background adjudication.
              </p>
            </div>
          </FadeUp>

          {/* Certifications */}
          <FadeUp delay={0.2} className="md:col-span-2">
            <div className="h-full border border-[#1c2540] bg-[#0d1428]/70 p-8">
              <p className="text-[#b8965a] text-xs tracking-[0.2em] uppercase mb-6">Certifications</p>
              <div className="space-y-3">
                {certifications.map((c, i) => (
                  <div
                    key={c.code}
                    className="flex items-center justify-between py-3 border-b border-[#1c2540] last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#f0f4f9] text-xs font-bold tracking-wider w-14">{c.code}</span>
                      <span className="text-[#8a9ab5] text-sm">{c.name}</span>
                    </div>
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 border ${
                        c.status === "Active"
                          ? "border-[#3dd6c0]/30 text-[#3dd6c0]"
                          : "border-[#b8965a]/30 text-[#b8965a]"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Frameworks */}
          <FadeUp delay={0.3} className="md:col-span-3">
            <div className="border border-[#1c2540] bg-[#0d1428]/70 p-8">
              <p className="text-[#b8965a] text-xs tracking-[0.2em] uppercase mb-6">Regulatory Frameworks & Compliance</p>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((f) => (
                  <span
                    key={f}
                    className="px-4 py-2 border border-[#2a3352] text-[#8a9ab5] text-xs tracking-wider hover:border-[#b8965a]/40 hover:text-[#c4cedf] transition-all duration-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Education row */}
        <FadeUp delay={0.4} className="mt-6">
          <div className="border border-[#1c2540] bg-[#0d1428]/70 p-8 grid sm:grid-cols-2 gap-8">
            {[
              {
                school: "Georgia Institute of Technology",
                degree: "M.S. Cybersecurity",
                note: "Expected July 2025",
              },
              {
                school: "Florida International University",
                degree: "B.S. Information Technology — Security & Systems",
                note: "Minor: Economics",
              },
            ].map((e) => (
              <div key={e.school} className="flex gap-4 items-start">
                <div className="w-1 h-full min-h-[3rem] bg-[#b8965a]/30 shrink-0 mt-1" />
                <div>
                  <p className="text-[#f0f4f9] text-sm font-light mb-1">{e.degree}</p>
                  <p className="text-[#b8965a] text-xs tracking-wide mb-1">{e.school}</p>
                  <p className="text-[#8a9ab5] text-xs">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────
   4. CONSULTING HUB
───────────────────────────────────────── */
const consultingLanes = [
  {
    icon: "◈",
    title: "Career Consulting",
    tagline: "Navigate high-stakes transitions.",
    why: "I've moved from competitive gaming to Fortune-10 enterprise security. I know what serious career architecture looks like — and I know how to build it.",
    points: [
      "Positioning for cybersecurity leadership roles",
      "Compensation negotiation strategy",
      "Interview & executive presence coaching",
      "Career roadmapping for IT and security professionals",
    ],
    accent: COLORS.gold,
  },
  {
    icon: "◉",
    title: "Education Mentorship",
    tagline: "Credentials chosen with intention.",
    why: "Georgia Tech M.S. student. FIU B.S. graduate. Certified by GIAC and CompTIA. I've navigated the credentialing landscape and know what actually opens doors.",
    points: [
      "Cybersecurity degree and certification pathways",
      "Graduate school strategy and application support",
      "Scholarship and funding research guidance",
      "Study systems and exam preparation",
    ],
    accent: COLORS.teal,
  },
  {
    icon: "◎",
    title: "Teen & Early Adult Guidance",
    tagline: "Build the foundation before others start.",
    why: "As a father, I think constantly about what the next generation needs to thrive. Not motivation — systems. Habits. Discipline built early.",
    points: [
      "Technology and career awareness sessions",
      "Study habits and time architecture",
      "Financial literacy fundamentals",
      "Long-range goal design",
    ],
    accent: COLORS.silver,
  },
  {
    icon: "◐",
    title: "Business & Startup Consulting",
    tagline: "Security and strategy as competitive advantage.",
    why: "I've raised capital, built teams, and managed enterprise cyber risk for billion-dollar organizations. I understand risk from every angle.",
    points: [
      "Startup security posture and compliance readiness",
      "Cyber risk as a fundraising and BD asset",
      "Strategic partnership and pitch alignment",
      "Operational resilience planning",
    ],
    accent: COLORS.gold,
  },
];

function Consulting() {
  return (
    <Section
      id="consulting"
      className="py-28 md:py-36 px-6"
      style={{ background: COLORS.navy }}
    >
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, #b8965a, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeUp className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#b8965a]/60" />
            <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase">Consulting</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0f4f9] leading-tight max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Where Should We{" "}
            <span className="italic text-[#b8965a]">Build Together?</span>
          </h2>
          <p className="text-[#8a9ab5] text-base mt-5 max-w-xl leading-7">
            Each engagement is bespoke. No templates, no generic advice. Only
            systems designed around your specific context, goals, and timeline.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {consultingLanes.map((lane, i) => (
            <FadeUp key={lane.title} delay={0.1 + i * 0.1}>
              <div
                className="group border border-[#1c2540] bg-[#0d1428]/50 p-8 h-full hover:border-opacity-50 transition-all duration-500 flex flex-col"
                style={{ "--accent": lane.accent }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="text-2xl mt-0.5 transition-colors duration-300"
                    style={{ color: lane.accent }}
                  >
                    {lane.icon}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-light text-[#f0f4f9] mb-1 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {lane.title}
                    </h3>
                    <p className="text-xs tracking-wider" style={{ color: lane.accent }}>
                      {lane.tagline}
                    </p>
                  </div>
                </div>

                {/* Why trust */}
                <div className="border-l-2 border-[#1c2540] pl-4 mb-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a9ab5] mb-2">
                    Why trust me with this
                  </p>
                  <p className="text-[#8a9ab5] text-sm leading-6">{lane.why}</p>
                </div>

                {/* Points */}
                <ul className="space-y-2 flex-grow mb-8">
                  {lane.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-[#8a9ab5]">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#b8965a]/50 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-auto self-start text-xs tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300"
                  style={{
                    color: lane.accent,
                    borderColor: `${lane.accent}40`,
                  }}
                >
                  Begin Conversation →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Unified CTA strip */}
        <FadeUp delay={0.5}>
          <div className="mt-8 border border-[#b8965a]/20 bg-[#b8965a]/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="text-2xl font-light text-[#f0f4f9] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Not sure which lane fits?
              </p>
              <p className="text-[#8a9ab5] text-sm">
                Send a brief message. We'll identify where the leverage is.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-8 py-4 bg-[#b8965a] text-[#0a0f1e] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#d4a96a] transition-all duration-300"
            >
              Contact Andres
            </a>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t border-[#1c2540]"
      style={{ background: COLORS.navy }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 border border-[#b8965a]/40 rotate-45 flex items-center justify-center">
            <span className="-rotate-45 text-[#b8965a] font-bold text-[10px]">AGA</span>
          </span>
          <span className="text-[#2a3352] text-xs tracking-[0.2em] uppercase">Andres G. Alvarez</span>
        </div>
        <p className="text-[#2a3352] text-xs tracking-wider">
          © {new Date().getFullYear()} · Systems & Success · St. Louis, MO
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Email"].map((l) => (
            <a
              key={l}
              href={l === "Email" ? "mailto:andresa1897@ggswp.com" : "#"}
              className="text-[#2a3352] text-xs tracking-wider hover:text-[#8a9ab5] transition-colors duration-300 uppercase"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   HOME (ROOT EXPORT)
───────────────────────────────────────── */
export default function Home() {
  return (
    <main
      style={{
        fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: COLORS.navy,
      }}
    >
      {/* Google Fonts — Cormorant Garamond for display type */}
      <Nav />
      <Hero />
      <Bridge />
      <Vault />
      <Consulting />
      <Footer />
    </main>
  );
}
