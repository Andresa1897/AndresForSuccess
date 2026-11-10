import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView());
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
