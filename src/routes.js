import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import App from "./App";

import ErrorPage from "./ErrorPage";
import { Projects } from "./components/Projects";
import ElementGenerator from "./UI_Elements/ElementGenerator";
import GradiantPage from "./components/GradiantPage";
import ColorPage from "./components/ColorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            index: true,
            element: <GradiantPage />,
          },
          // {
          //   path: "elementgenerator",
          //   element: <ElementGenerator />,
          // },
          {
            path: "gradientdisplay",
            element: <GradiantPage />,
          },
          {
            path: "colorsdisplay",
            element: <ColorPage />,
          },
        ],
      },
    ],
  },
]);
