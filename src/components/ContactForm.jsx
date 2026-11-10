import { useState } from "react";
import { profile } from "../content/site";

const TOPICS = [
  "Compliance readiness",
  "Career or certification mentoring",
  "Speaking or writing",
  "A role or opportunity",
  "Something else",
];

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`;

const EMPTY = { name: "", email: "", topic: "", message: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter an email address like name@company.com.";
  if (!f.topic) e.topic = "Choose what this is about.";
  if (f.message.trim().length < 20) e.message = "Add a little more detail, at least 20 characters.";
  return e;
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };

  async function submit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email, _subject: `Website: ${form.topic} from ${form.name}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form form--sent" role="status">
        <p className="form__sent-title">Message sent.</p>
        <p>I read every message myself and usually reply within two business days.</p>
        <button className="btn btn--ghost" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  const field = (name, label, input) => (
    <div className={`field ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {input}
      {errors[name] && <p className="field__error" id={`f-${name}-err`}>{errors[name]}</p>}
    </div>
  );
  const aria = (name) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `f-${name}-err` : undefined });

  return (
    <form className="form" onSubmit={submit} noValidate>
      {status === "error" && (
        <p className="form__error" role="alert">
          The message didn't send. Try again, or email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}
      <div className="form__row">
        {field("name", "Name", <input id="f-name" name="name" autoComplete="name" value={form.name} onChange={update} {...aria("name")} />)}
        {field("email", "Email", <input id="f-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} {...aria("email")} />)}
      </div>
      {field("topic", "What's this about?",
        <select id="f-topic" name="topic" value={form.topic} onChange={update} {...aria("topic")}>
          <option value="" disabled>Choose one</option>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      )}
      {field("message", "Message",
        <textarea id="f-message" name="message" rows={5} value={form.message} onChange={update} {...aria("message")} />
      )}
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
