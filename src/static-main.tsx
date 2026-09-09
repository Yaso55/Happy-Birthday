import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Index } from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing static app root.");
}

createRoot(root).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
