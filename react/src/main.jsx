import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Component_JSX from "./_react_fundamental/Component_JSX";
import Hook_customHook from "./_react_fundamental/Hook_customHook";

createRoot(document.getElementById("root")).render(
  <>
    <Hook_customHook />
  </>
);
