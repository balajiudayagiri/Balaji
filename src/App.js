import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="relative pt-[120px] mx-auto w-10/12">
      <Header />
      <Outlet />
    </div>
  );
}
