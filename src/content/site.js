/**
 * All site copy lives here. Edit this file to update the homepage.
 * Blog posts live in src/content/posts/*.md (see README).
 */

export const profile = {
  name: "Andres Alvarez",
  role: "Cyber GRC & Risk Leader",
  location: "St. Louis, MO",
  email: "andresa1897@ggswp.com",
  linkedin: "https://www.linkedin.com/in/andresa1897",
  github: "https://github.com/Andresa1897",
  // Put your résumé at public/resume.pdf and set this to "/resume.pdf" to show a download button.
  resumeUrl: null,
  current: "Cyber GRC Specialist & Team Lead at The Boeing Company",
  clearance: "Active Secret clearance",
  education: "M.S. Cybersecurity, Georgia Tech",
};

export const hero = {
  // Phrases wrapped in [[double brackets]] start under a redaction bar and are revealed on load.
  headline: "I turn [[complex cyber risk]] into decisions [[leaders can act on]].",
  intro:
    "I build and run security compliance programs for environments where the stakes are high: Boeing labs supporting proprietary, DoW and NASA programs, and Walmart's million-asset enterprise. My work spans NIST, CMMC and ISO, FAIR risk quantification, and using agentic AI to take the busywork out of GRC.",
};

export const outcomes = [
  {
    result: "Brought 62 overdue labs to 100% NIST SP 800-171 compliance",
    detail: "Led the DFARS and CMMC 2.0 strategy and renewed every System Security Plan.",
    where: "Boeing",
    when: "2024–now",
  },
  {
    result: "Helped secure NASA contract renewals",
    detail: "Kept programs aligned to NIST SP 800-171 and Cyber Supply Chain Risk Management plans.",
    where: "Boeing",
    when: "2024–now",
  },
  {
    result: "Cut monthly phishing incidents in half",
    detail: "OSINT analysis of malicious domains and IPs turned into proactive blocking.",
    where: "Univision",
    when: "2022–2023",
  },
  {
    result: "Reduced average incident response time by 30%",
    detail: "Tuned LogRhythm SIEM and CASB monitoring to catch threats and data leakage earlier.",
    where: "Univision",
    when: "2022–2023",
  },
  {
    result: "Remediated 50+ critical artifacts during Log4j",
    detail: "Named InfoSec Employee of the Month for leading the zero-day response.",
    where: "Walmart",
    when: "2021–2022",
  },
  {
    result: "Managed vulnerability remediation for 1M+ assets",
    detail: "On-prem, Azure and GCP. A Brinqa-to-Jira integration cut Critical/High SLA turnaround by 20%.",
    where: "Walmart",
    when: "2021–2022",
  },
];

export const experience = [
  {
    role: "Cyber GRC Specialist & Team Lead",
    org: "The Boeing Company",
    place: "St. Louis, MO",
    when: "2024 – present",
    summary:
      "Primary lead for DFARS and CMMC 2.0 compliance across 62 Air Dominance labs, and lead cybersecurity focal for the Lab Oversight Board.",
    details: [
      "Set strategy with engineering teams for conversational and agentic AI tools that automate GRC workflows, and curated the datasets behind them.",
      "Built and ran the NIST SP 800-171 compliance strategy, bringing overdue environments to 100% and renewing System Security Plans.",
      "Designed the end-to-end process for handling, storing, labeling and protecting each information type entering the labs.",
      "Wrote scripts that map compliance posture, including a NIST 800-171 audit script, image and blockpoint detection, and a software inventory.",
      "Led weekly briefings for Directors and Capability Leaders, backed by automated KPIs and dashboards that inform multi-million-dollar investments.",
      "Partnered with Corporate Audit to close material findings, and authored the RACI, SoW and MOA frameworks that govern lab security.",
    ],
    note: "Selected as a Boeing Ethics Ambassador in 2026, supporting a Speak Up culture with the Corporate Ethics & Compliance Office.",
  },
  {
    role: "Information Security Engineer",
    org: "Univision",
    place: "Miami, FL",
    when: "2022 – 2023",
    summary:
      "Threat engineering, detection and response for a national media company.",
    details: [
      "Analyzed high-severity phishing, malicious domains and IPs with OSINT tools and engineered blocking that cut monthly incidents by 50%.",
      "Monitored LogRhythm SIEM and CASB platforms, reducing average incident response time by 30%.",
      "Managed Microsoft Intune policies for 300+ mobile devices to enforce zero-trust standards.",
      "Built incident response playbooks that reduced SLA times by 10%.",
    ],
  },
  {
    role: "Cyber Risk Specialist",
    org: "Walmart Global Technology",
    place: "Bentonville, AR",
    when: "2021 – 2022",
    summary:
      "Full-lifecycle vulnerability remediation for more than a million assets across on-prem, Azure and GCP.",
    details: [
      "Led rapid remediation of 50+ business-critical artifacts during the Log4j zero-day and was named InfoSec Employee of the Month.",
      "Integrated Brinqa data with Jira APIs, cutting Critical/High SLA turnaround by 20%.",
      "Built Brinqa dashboards for PCI DSS, HIPAA and GDPR tracking, improving visibility of P1/P2 issues by 40%.",
      "Wrote regex rules that automated asset-ownership tagging for 2,000+ devices.",
    ],
  },
  {
    role: "Cyber Threat Intelligence Fellow",
    org: "IC-CAE, Florida International University",
    place: "Miami, FL",
    when: "2021",
    summary:
      "Intelligence Community Centers of Academic Excellence fellowship focused on nation-state threat analysis and OSINT.",
    details: [],
  },
];

export const expertise = [
  {
    group: "Governance and risk",
    items: ["NIST CSF", "NIST SP 800-53", "NIST SP 800-171", "CMMC 2.0", "C-SCRM", "ISO 27001", "FedRAMP", "FAIR", "GDPR", "HIPAA", "PCI DSS", "SOX", "OWASP"],
  },
  {
    group: "Security operations",
    items: ["ServiceNow GRC", "Azure DevOps", "LogRhythm SIEM/SOAR", "Microsoft Intune", "Brinqa", "Tenable", "Jira", "MITRE ATT&CK", "OSINT"],
  },
  {
    group: "AI and engineering",
    items: ["Claude Code", "Codex", "Agentic AI direction", "RAG", "LLM data curation", "Python", "SQL", "APIs", "DevSecOps"],
  },
];

export const certifications = ["GIAC GSLC", "GIAC GCIH", "CompTIA Security+", "CompTIA A+ / ITF+", "IC-CAE"];

export const education = [
  { degree: "M.S. Cybersecurity", school: "Georgia Institute of Technology", year: "2025" },
  { degree: "B.S. IT Security & Systems Administration, minor in Economics", school: "Florida International University", year: "2021" },
];

export const beyond = [
  {
    title: "Competitive gaming came first",
    body: "Before security, I competed nationally in Call of Duty for four years. Elimination brackets taught me to stay calm when every decision is visible, which is most of incident response.",
  },
  {
    title: "Ethics is part of the job",
    body: "As a Boeing Ethics Ambassador I'm a confidential first stop for colleagues with Code of Conduct questions. Compliance only works when people feel safe speaking up.",
  },
  {
    title: "I write to think",
    body: "This site's writing section is where I work through ideas on GRC, AI in security, careers and building systems that last.",
  },
];

export const help = [
  {
    title: "Compliance readiness",
    body: "CMMC 2.0, NIST SP 800-171 and audit preparation for defense suppliers and growing teams.",
  },
  {
    title: "Career and certification mentoring",
    body: "Breaking into security, choosing certifications and degrees, and positioning for GRC roles.",
  },
  {
    title: "Speaking and writing",
    body: "Talks, panels and guest pieces on GRC, risk quantification and AI-assisted compliance.",
  },
];
