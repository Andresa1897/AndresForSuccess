/**
 * ContactForm.js — Andres G. Alvarez
 * Single unified intake form
 *
 * Submission: Formspree if VITE_FORMSPREE_FORM_ID is set, otherwise Formsubmit.co
 * Receives submissions at andresa1897@ggswp.com
 *
 * ENV VARS (optional):
 *   VITE_FORMSPREE_FORM_ID
 *
 * Stack: React · Tailwind CSS · Framer Motion
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const TOPICS = [
  { value: "",                   label: "Select a topic…" },
  { value: "career",             label: "Career Consulting" },
  { value: "education",          label: "Education Mentorship" },
  { value: "teen-guidance",      label: "Teen & Early Adult Guidance" },
  { value: "business-startup",   label: "Business / Startup Consulting" },
  { value: "cybersecurity",      label: "Cybersecurity Advisory" },
  { value: "other",              label: "Something Else" },
];

const FORM_INITIAL = {
  name:    "",
  email:   "",
  topic:   "",
  message: "",
};

const EMAIL = "andresa1897@ggswp.com";
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const FORM_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : `https://formsubmit.co/ajax/${encodeURIComponent(EMAIL)}`;

/* ─────────────────────────────────────────
   FIELD WRAPPER
───────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a9ab5] mb-2">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-[11px] text-[#e07070] tracking-wide"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border border-[#1c2540] text-[#c4cedf] text-sm px-4 py-3.5 " +
  "focus:outline-none focus:border-[#b8965a]/60 placeholder-[#2a3352] " +
  "transition-all duration-300 hover:border-[#2a3352]";

/* ─────────────────────────────────────────
   VALIDATION
───────────────────────────────────────── */
function validate(form) {
  const errors = {};
  if (!form.name.trim())                            errors.name    = "Your name is required.";
  if (!form.email.trim())                           errors.email   = "Your email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                                    errors.email   = "Please enter a valid email address.";
  if (!form.topic)                                  errors.topic   = "Please select a topic.";
  if (!form.message.trim())                         errors.message = "Please share a few details.";
  else if (form.message.trim().length < 20)         errors.message = "Please provide a bit more context (20 chars min).";
  return errors;
}

/* ─────────────────────────────────────────
   SUCCESS STATE
───────────────────────────────────────── */
function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border border-[#b8965a]/30 bg-[#b8965a]/5 p-12 text-center"
    >
      <div className="w-12 h-12 border border-[#b8965a]/40 rotate-45 flex items-center justify-center mx-auto mb-8">
        <span className="-rotate-45 text-[#b8965a] text-xl">✓</span>
      </div>
      <h3
        className="text-2xl font-light text-[#f0f4f9] mb-4"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Message Received.
      </h3>
      <p className="text-[#8a9ab5] text-sm leading-7 max-w-sm mx-auto">
        Andres reviews every submission personally. You can expect a thoughtful
        response within 1–2 business days.
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   CONTACT FORM (EXPORT)
───────────────────────────────────────── */
export default function ContactForm() {
  const formRef   = useRef(null);
  const [form, setForm]     = useState(FORM_INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  /* Handle field change */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  /* Submit */
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          topic: form.topic,
          message: form.message,
          _replyto: form.email,
          _subject: `Contact from ${form.name} — ${form.topic}`,
        }),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => null);
        throw new Error(
          errorBody?.error || `Form submission failed with status ${res.status}`
        );
      }

      setStatus("success");
      setForm(FORM_INITIAL);
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse, #b8965a 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
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
            <span className="text-[#b8965a] text-xs tracking-[0.3em] uppercase">Engage</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0f4f9] leading-tight max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            The First Step Is a{" "}
            <span className="italic text-[#b8965a]">Conversation.</span>
          </h2>
          <p className="text-[#8a9ab5] text-base mt-5 max-w-md leading-7">
            No sales process. No pitch deck. Just an honest exchange about where
            you are, where you want to be, and whether I can help build the system
            that gets you there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: Context panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            {/* What to expect */}
            <div className="border border-[#1c2540] p-7">
              <p className="text-[#b8965a] text-[10px] tracking-[0.3em] uppercase mb-5">
                What to Expect
              </p>
              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    text: "Submit your intake below with a clear description of your situation.",
                  },
                  {
                    step: "02",
                    text: "Andres reviews every submission personally — no assistants, no automation.",
                  },
                  {
                    step: "03",
                    text: "You receive a thoughtful, direct response within 1–2 business days.",
                  },
                  {
                    step: "04",
                    text: "If there's alignment, we schedule a focused discovery conversation.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="text-[#2a3352] text-xs font-bold tracking-widest mt-0.5 shrink-0">
                      {s.step}
                    </span>
                    <p className="text-[#8a9ab5] text-sm leading-6">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <p className="text-[#b8965a] text-[10px] tracking-[0.3em] uppercase">
                Direct Contact
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-[#8a9ab5] text-sm hover:text-[#c4cedf] transition-colors duration-300 group"
              >
                <span className="w-8 h-8 border border-[#1c2540] flex items-center justify-center text-xs text-[#b8965a] group-hover:border-[#b8965a]/40 transition-colors duration-300">
                  @
                </span>
                {EMAIL}
              </a>
              <div className="flex items-center gap-3 text-[#8a9ab5] text-sm">
                <span className="w-8 h-8 border border-[#1c2540] flex items-center justify-center text-xs text-[#b8965a]">
                  ◎
                </span>
                St. Louis, MO · Available globally
              </div>
            </div>

            {/* Availability note */}
            <div className="border-l-2 border-[#b8965a]/25 pl-4">
              <p className="text-[#8a9ab5] text-xs leading-6 italic">
                "I am deliberate with my time because I am deliberate with my
                commitments. If I take your engagement, it receives full
                attention."
              </p>
              <p className="text-[#b8965a] text-xs mt-3 tracking-wide">— Andres G. Alvarez</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <SuccessMessage key="success" />
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border border-[#1c2540] p-8 md:p-10 space-y-6"
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border border-red-900/40 bg-red-950/20 p-4 text-sm text-[#e07070]"
                      >
                        There was an error sending your message. Please try again or
                        email{" "}
                        <a
                          href={`mailto:${EMAIL}`}
                          className="underline"
                        >
                          {EMAIL}
                        </a>{" "}
                        directly.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name */}
                  <Field label="Your Name" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={inputClass}
                      autoComplete="name"
                    />
                  </Field>

                  {/* Email */}
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </Field>

                  {/* Topic */}
                  <Field label="Topic" error={errors.topic}>
                    <div className="relative">
                      <select
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none pr-10 cursor-pointer ${
                          form.topic ? "text-[#c4cedf]" : "text-[#2a3352]"
                        }`}
                      >
                        {TOPICS.map((t) => (
                          <option
                            key={t.value}
                            value={t.value}
                            disabled={t.value === ""}
                            className="bg-[#0d1428] text-[#c4cedf]"
                          >
                            {t.label}
                          </option>
                        ))}
                      </select>
                      {/* Chevron */}
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2a3352] text-xs">
                        ▾
                      </span>
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="Your Message" error={errors.message}>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your situation, goals, and what kind of support you're looking for…"
                      className={`${inputClass} resize-none leading-6`}
                    />
                    <p className="mt-1.5 text-right text-[10px] text-[#2a3352] tracking-wide">
                      {form.message.length} chars
                    </p>
                  </Field>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-[#b8965a] text-[#0a0f1e] text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#d4a96a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-3 h-3 border border-[#0a0f1e]/40 border-t-[#0a0f1e] rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Submit Intake →"
                      )}
                    </button>
                    <p className="text-center text-[10px] text-[#2a3352] tracking-wider mt-4">
                      Your information is never shared or sold.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
