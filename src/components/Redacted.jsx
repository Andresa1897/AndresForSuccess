/**
 * Renders text where [[phrases]] start covered by a redaction bar
 * that slides away once on page load.
 */
export default function Redacted({ text, as: Tag = "h1", className = "" }) {
  const parts = text.split(/(\[\[.*?\]\])/g).filter(Boolean);
  let n = 0;
  return (
    <Tag className={`redacted ${className}`}>
      {parts.map((part, i) => {
        if (part.startsWith("[[")) {
          const words = part.slice(2, -2);
          const delay = 450 + n++ * 380;
          return (
            <span key={i} className="redacted__phrase" style={{ "--delay": `${delay}ms` }}>
              {words}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
