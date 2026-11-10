import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../content/site";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Nav() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  useEffect(() => setOpen(false), [pathname, hash]);

  const links = [
    { to: "/#work", label: "Work" },
    { to: "/#experience", label: "Experience" },
    { to: "/writing", label: "Writing", route: true },
    { to: "/#about", label: "About" },
  ];

  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <Link to="/" className="nav__mark" aria-label={`${profile.name}, home`}>
          <span className="nav__monogram" aria-hidden="true">AA</span>
          <span className="nav__name">{profile.name}</span>
        </Link>

        <button
          className="nav__menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="nav-links" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) =>
            l.route ? (
              <NavLink key={l.label} to={l.to} className="nav__link">{l.label}</NavLink>
            ) : (
              <Link key={l.label} to={l.to} className="nav__link">{l.label}</Link>
            )
          )}
          <Link to="/#contact" className="btn btn--small">Get in touch</Link>
          <button
            className="theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className="theme__dot" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
