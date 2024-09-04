import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
