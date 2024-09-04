import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Projets from "../pages/Projets";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import Curriculum from "../pages/Curriculum";

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "*", element: <Error /> },
      { path: "/", element: <Home /> },
      { path: "Projets", element: <Projets /> },
      { path: "contact", element: <Contact /> },
      { path: "Curriculum", element: <Curriculum /> },
    ],
  },
]);
