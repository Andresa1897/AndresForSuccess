import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList";
import { posts, allTags } from "../lib/posts";

export default function Writing() {
  const [params, setParams] = useSearchParams();
  const tag = params.get("tag") || "";
  const [query, setQuery] = useState("");

  useEffect(() => { document.title = "Writing | Andres Alvarez"; }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) =>
      (!tag || p.tags.includes(tag)) &&
      (!q || `${p.title} ${p.summary} ${p.tags.join(" ")}`.toLowerCase().includes(q))
    );
  }, [tag, query]);

  const setTag = (t) => setParams(t && t !== tag ? { tag: t } : {});

  return (
    <div className="wrap page">
      <header className="page__head">
        <h1>Writing</h1>
        <p>Thoughts on cyber governance, risk, AI in security, and the habits behind a career in this field.</p>
      </header>

      {posts.length > 0 && (
        <div className="filters">
          <label className="search">
            <span className="visually-hidden">Search posts</span>
            <input type="search" placeholder="Search posts" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
          <div className="tags" role="group" aria-label="Filter by topic">
            <button className="tag" aria-pressed={!tag} onClick={() => setTag("")}>All</button>
            {allTags.map((t) => (
              <button key={t} className="tag" aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>
        </div>
      )}

      {shown.length ? (
        <PostList posts={shown} />
      ) : posts.length ? (
        <p className="empty">No posts match that. <button className="textlink" onClick={() => { setQuery(""); setTag(""); }}>Clear filters</button></p>
      ) : (
        <p className="empty">The first posts are being written. Check back soon.</p>
      )}
    </div>
  );
}
