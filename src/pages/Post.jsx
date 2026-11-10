import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, posts, formatDate } from "../lib/posts";
import { profile } from "../content/site";
import NotFound from "./NotFound";

function useReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return p;
}

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);
  const progress = useReadingProgress();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) document.title = `${post.title} | ${profile.name}`;
  }, [post]);

  if (!post) return <NotFound />;

  const i = posts.indexOf(post);
  const newer = posts[i - 1];
  const older = posts[i + 1];
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <article className="wrap article">
        <header className="article__head">
          <Link to="/writing" className="textlink article__back">All writing</Link>
          <h1>{post.title}</h1>
          {post.summary && <p className="article__dek">{post.summary}</p>}
          <p className="posts__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.minutes} min read</span>
            {post.draft && <span className="badge">Draft, hidden on the live site</span>}
          </p>
          {post.tags.length > 0 && (
            <ul className="article__tags">
              {post.tags.map((t) => <li key={t}><Link to={`/writing?tag=${encodeURIComponent(t)}`} className="tag">{t}</Link></li>)}
            </ul>
          )}
        </header>

        <div className="article__layout">
          {post.headings.length > 1 && (
            <nav className="toc" aria-label="On this page">
              <p>On this page</p>
              <ol>{post.headings.map((h) => <li key={h.id}><a href={`#${h.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" }); }}>{h.text}</a></li>)}</ol>
            </nav>
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <footer className="article__foot">
          <div className="share">
            <a className="btn btn--ghost" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">Share on LinkedIn</a>
            <button className="btn btn--ghost" onClick={copy}>{copied ? "Link copied" : "Copy link"}</button>
          </div>
          <div className="byline">
            <p><strong>{profile.name}</strong> leads Cyber GRC work at Boeing and writes about risk, compliance and AI in security.</p>
            <Link to="/#contact" className="textlink">Get in touch</Link>
          </div>
          {(newer || older) && (
            <nav className="pager" aria-label="More posts">
              {older ? <Link to={`/writing/${older.slug}`}><span>Older</span>{older.title}</Link> : <span />}
              {newer && <Link to={`/writing/${newer.slug}`} className="pager__next"><span>Newer</span>{newer.title}</Link>}
            </nav>
          )}
        </footer>
      </article>
    </>
  );
}
