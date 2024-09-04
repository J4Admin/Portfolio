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
    path: "Portfolio",
    children: [     
        { path: "Portfolio/", element: <Home /> },
        { path: "Portfolio/projets", element: <Projets /> },
        { path: "Portfolio/contact", element: <Contact /> },
        { path: "Portfolio/curriculum", element: <Curriculum /> },
        { path: "*", element: <Error /> },
    ],
  },
]);
