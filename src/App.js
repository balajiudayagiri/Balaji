// src/App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
