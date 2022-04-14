import React from "react";
import ReactDOM from "react-dom/client";
import Bootstrap from "./Bootstrap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>
);
