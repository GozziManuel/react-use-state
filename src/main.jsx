import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// My css
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
