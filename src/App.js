// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <h1>hello</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
