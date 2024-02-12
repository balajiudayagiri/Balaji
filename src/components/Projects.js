import React from "react";
import Tabs from "../UI_Elements/Tabs";
import { tabsLinks } from "../constants";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { darkModeState } from "../states/recoilAtoms";

export const Projects = () => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <div className={`text-white `}>
      <Tabs tabs={tabsLinks} darkMode={darkMode} />
      <Outlet />
    </div>
  );
};
