import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import App from "./App";

import ErrorPage from "./ErrorPage";
import { Projects } from "./components/Projects";
import GradiantPage from "./Projects/ColorPicker/GradiantPage";
import ColorPage from "./Projects/ColorPicker/ColorPage";
// import Pong from "./components/Pong";
import Neumorphism from "./Projects/neumorphism/Neumorphism";
import ImageColorExtractor from "./Projects/ImageColorExtractor/ImageColorExtractor";
// import Snackgame from "./UI_Elements/Snackgame";

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
          // {
          //   path: "Pong",
          //   element: <Pong />,
          // },
          // {
          //   path: "Snackgame",
          //   element: <Snackgame />,
          // },
          {
            path: "gradientdisplay",
            element: <GradiantPage />,
          },
          {
            path: "colorsdisplay",
            element: <ColorPage />,
          },
          {
            path: "imagecolorextractor",
            element: <ImageColorExtractor />,
          },
          {
            path: "Neumorphism",
            element: <Neumorphism />,
          },
        ],
      },
    ],
  },
]);
