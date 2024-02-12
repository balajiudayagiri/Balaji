import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useRecoilState } from "recoil";
import { darkModeState } from "./states/recoilAtoms";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${isDarkMode ? "dark:bg-black" : "light:bg-white"}`}>
      <div
        className={`relative pt-[120px] mx-auto sm:w-10/12 w-[93%] ${
          isDarkMode ? "dark:bg-black" : "light:bg-white"
        }`}>
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Outlet />
      </div>
    </div>
  );
}
