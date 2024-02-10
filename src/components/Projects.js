import React from "react";
import Tabs from "../UI_Elements/Tabs";
import { tabsLinks } from "../constants";
import { Outlet } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="text-white">
      <Tabs tabs={tabsLinks} />
      <Outlet />
    </div>
  );
};
