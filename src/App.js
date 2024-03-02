import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className={` h-[100vh] light:bg-white `}>
      <div
        className={`relative pt-[120px] mx-auto sm:w-10/12 w-[93%] light:bg-white`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
