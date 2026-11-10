import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/source-serif-4/index.css";
import "@fontsource-variable/source-serif-4/wght-italic.css";
import "./styles.css";
import App from "./App";

// Hash routing is only used for static previews; Vercel uses clean URLs.
const Router = import.meta.env.VITE_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename={Router === BrowserRouter ? import.meta.env.BASE_URL.replace(/\/$/, "") || "/" : undefined}>
      <App />
    </Router>
  </React.StrictMode>
);
