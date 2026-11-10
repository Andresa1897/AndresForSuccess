import { Link } from "react-router-dom";
import { formatDate } from "../lib/posts";

export default function PostList({ posts }) {
  return (
    <ul className="posts">
      {posts.map((p) => (
        <li key={p.slug} className="posts__item">
          <Link to={`/writing/${p.slug}`} className="posts__link">
            <p className="posts__meta">
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              <span>{p.minutes} min read</span>
              {p.draft && <span className="badge">Draft</span>}
            </p>
            <h3 className="posts__title">{p.title}</h3>
            {p.summary && <p className="posts__summary">{p.summary}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
