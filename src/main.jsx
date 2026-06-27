import React from "react";
import App from "./App.jsx";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Remove the splash placeholder after app mounts and first paint
const removeSplash = () => {
  try {
    const splash = document.getElementById("splash");
    if (!splash) return;
    splash.classList.add("fade-out");
    // allow fade to finish before removing from DOM
    setTimeout(() => splash.remove(), 500);
  } catch (e) {
    // ignore
  }
};

// Run after first paint to ensure app has had a chance to render
requestAnimationFrame(() => requestAnimationFrame(removeSplash));

inject();
