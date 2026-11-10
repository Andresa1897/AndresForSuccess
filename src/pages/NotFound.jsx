import { Link } from "react-router-dom";
import Redacted from "../components/Redacted";

export default function NotFound() {
  return (
    <div className="wrap page notfound">
      <Redacted as="h1" text="This page is [[not on file]]." />
      <p>The link may be old or mistyped.</p>
      <p><Link to="/" className="btn">Go to the homepage</Link></p>
    </div>
  );
}
