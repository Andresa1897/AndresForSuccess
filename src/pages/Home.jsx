import { Link } from "react-router-dom";
import Redacted from "../components/Redacted";
import ContactForm from "../components/ContactForm";
import PostList from "../components/PostList";
import { posts } from "../lib/posts";
import {
  profile, hero, outcomes, experience, expertise, certifications, education, beyond, help,
} from "../content/site";

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero__main">
        <p className="hero__kicker">{profile.role}, {profile.location}</p>
        <Redacted text={hero.headline} className="hero__title" />
        <p className="hero__intro">{hero.intro}</p>
        <div className="hero__actions">
          <Link to="/#contact" className="btn">Get in touch</Link>
          <Link to="/writing" className="btn btn--ghost">Read my writing</Link>
          {profile.resumeUrl && <a href={profile.resumeUrl} className="btn btn--ghost" download>Download résumé</a>}
        </div>
      </div>

      <aside className="file" aria-label="Profile summary">
        <div className="file__tab">Personnel file</div>
        <dl className="file__body">
          <div><dt>Currently</dt><dd>{profile.current}</dd></div>
          <div><dt>Clearance</dt><dd><mark>{profile.clearance}</mark></dd></div>
          <div><dt>Education</dt><dd>{profile.education}</dd></div>
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        </dl>
        <div className="file__links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </aside>
    </section>
  );
}

function Outcomes() {
  return (
    <section id="work" className="section wrap" aria-labelledby="work-title">
      <header className="section__head">
        <h2 id="work-title">Selected outcomes</h2>
        <p>Results from programs I've led or helped lead, at Boeing, Univision and Walmart.</p>
      </header>
      <ol className="ledger">
        {outcomes.map((o) => (
          <li key={o.result} className="ledger__row">
            <div className="ledger__result">
              <p className="ledger__headline">{o.result}</p>
              <p className="ledger__detail">{o.detail}</p>
            </div>
            <p className="ledger__where">{o.where}</p>
            <p className="ledger__when">{o.when}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section wrap" aria-labelledby="exp-title">
      <header className="section__head">
        <h2 id="exp-title">Experience</h2>
      </header>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.org} className="timeline__item">
            <p className="timeline__when">{job.when}</p>
            <div className="timeline__body">
              <h3>{job.role}</h3>
              <p className="timeline__org">{job.org}, {job.place}</p>
              <p className="timeline__summary">{job.summary}</p>
              {job.details.length > 0 && (
                <details className="timeline__details">
                  <summary>What I did</summary>
                  <ul>{job.details.map((d) => <li key={d}>{d}</li>)}</ul>
                </details>
              )}
              {job.note && <p className="timeline__note">{job.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function WritingPreview() {
  const latest = posts.slice(0, 3);
  return (
    <section className="section wrap" aria-labelledby="writing-title">
      <header className="section__head section__head--row">
        <div>
          <h2 id="writing-title">Writing</h2>
          <p>Notes on GRC, AI in security, careers and building systems that last.</p>
        </div>
        {latest.length > 0 && <Link to="/writing" className="textlink">All writing</Link>}
      </header>
      {latest.length ? (
        <PostList posts={latest} />
      ) : (
        <p className="empty">The first posts are being written. Check back soon, or <Link to="/#contact">get in touch</Link> in the meantime.</p>
      )}
    </section>
  );
}

function Expertise() {
  return (
    <section className="section wrap" aria-labelledby="skills-title">
      <header className="section__head">
        <h2 id="skills-title">Frameworks and tools</h2>
      </header>
      <div className="skills">
        {expertise.map((g) => (
          <div key={g.group} className="skills__group">
            <h3>{g.group}</h3>
            <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
        <div className="skills__group">
          <h3>Certifications</h3>
          <ul className="plain">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="skills__group skills__group--wide">
          <h3>Education</h3>
          <ul className="plain">
            {education.map((e) => (
              <li key={e.school}><strong>{e.degree}</strong><br />{e.school}, {e.year}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="band" aria-labelledby="about-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="about-title">Beyond the résumé</h2>
        </header>
        <div className="beyond">
          {beyond.map((b) => (
            <div key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <h2 id="contact-title">Let's talk</h2>
        <p>Have a compliance problem, a role, or a question about getting into security? Send a note.</p>
        <ul className="help">
          {help.map((h) => (
            <li key={h.title}><strong>{h.title}</strong><span>{h.body}</span></li>
          ))}
        </ul>
        <p className="contact__direct">Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </div>
      <ContactForm />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Outcomes />
      <Experience />
      <WritingPreview />
      <Expertise />
      <About />
      <Contact />
    </>
  );
}
