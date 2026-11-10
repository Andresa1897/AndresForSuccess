import { marked } from "marked";

const files = import.meta.glob("../content/posts/*.md", { query: "?raw", import: "default", eager: true });

const SHOW_DRAFTS = import.meta.env.DEV || import.meta.env.VITE_SHOW_DRAFTS === "true";

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((v) => v.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else if (value === "true" || value === "false") {
      value = value === "true";
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    data[key] = value;
  }
  return { data, body: match[2] };
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const all = Object.entries(files).map(([path, raw]) => {
  const slug = path.split("/").pop().replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(raw);
  const words = body.trim().split(/\s+/).length;
  const headings = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((t) => t.raw).join("");
    const id = slugify(text);
    if (depth === 2) headings.push({ id, text });
    return `<h${depth} id="${id}">${marked.Parser.parseInline(tokens)}</h${depth}>`;
  };
  const html = marked.parse(body, { renderer });
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    summary: data.summary || "",
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    draft: data.draft === true,
    minutes: Math.max(1, Math.round(words / 230)),
    headings,
    html,
  };
});

export const posts = all
  .filter((p) => SHOW_DRAFTS || !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
