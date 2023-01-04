import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /* </React.StrictMode> */
);

reportWebVitals();

// Strict mode only works in Development mode and not in Deployment
// Addition Resource
// https://upmostly.com/tutorials/why-is-my-useeffect-hook-running-twice-in-react
