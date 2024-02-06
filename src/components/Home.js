import React from "react";
import HeroPage from "./HeroSection";
import Html5ColoredIcon from "../Icons/Html5ColoredIcon";
import Css3ColoredIcon from "../Icons/Css3ColoredIcon";
import JavascriptColoredIcon from "../Icons/JavascriptColoredIcon";
import ReactColoredIcon from "../Icons/ReactColoredIcon";
import ReactRouterColoredIcon from "../Icons/ReactRoterColoredIcon";
import ReduxIcon from "../Icons/ReduxIcon";
import TypeScriptIcon from "../Icons/TypeScriptIcon";
import MUI_Icon from "../Icons/MUIIcon";
import TailwindIcon from "../Icons/TailwindIcon";
import BootstrapIcon from "../Icons/BootstrapIcon";
import GithubIcon from "../Icons/GithubIcon";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <marquee className="text-white flex">
        <div className="flex gap-16">
          <Html5ColoredIcon height={"130px"} width={"100px"} />
          <Css3ColoredIcon height={"130px"} width={"100px"} />
          <JavascriptColoredIcon height={"130px"} width={"100px"} />
          <ReactColoredIcon height={"130px"} width={"100px"} />
          <TypeScriptIcon height={"130px"} width={"100px"} />
          <ReactRouterColoredIcon height={"130px"} width={"100px"} />
          <ReduxIcon height={"130px"} width={"100px"} />
          <MUI_Icon height={"130px"} width={"100px"} />
          <TailwindIcon height={"130px"} width={"100px"} />
          <BootstrapIcon height={"130px"} width={"100px"} />
          <GithubIcon height={"130px"} width={"100px"} />
        </div>
      </marquee>
    </div>
  );
};

export default Home;
