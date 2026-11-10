import { Link } from "react-router-dom";
import { profile } from "../content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="footer__name">{profile.name}</p>
        <ul className="footer__links">
          <li><a href={`mailto:${profile.email}`}>Email</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><Link to="/writing">Writing</Link></li>
        </ul>
        <p className="footer__fine">© {new Date().getFullYear()} {profile.name}. Based in {profile.location}. Views on this site are my own and don't represent my employer.</p>
      </div>
    </footer>
  );
}
