import React from "react";
import HeroPage from "./HeroSection";
import { articles } from "../constants";
import { useRecoilState } from "recoil";
import { darkModeState } from "../states/recoilAtoms";

const Home = () => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <div className={`overflow-hidden sm:overflow-visible `}>
      <HeroPage />
      <div className="flex flex-wrap mt-14 justify-between gap-9">
        {articles.map((item, index) => {
          return (
            <div
              key={`${item.title.split(" ")[0]}_${index}`}
              className={`relative sm:hover:scale-110 scale-100 hover:z-[5] transition xl:w-[47%] lg:w-[47%] md:w-[47%] sm:w-full p-10 rounded-lg mb-5 border-solid border-2   ${
                darkMode
                  ? "dark:bg-zinc-900 border-zinc-700 text-white"
                  : "bg-zinc-100 border-zinc-300 text-black"
              }`}>
              <h1 className="leading-7 text-lg sm:w-full w-[90%]">
                {item.title}
              </h1>
              <p
                className={`leading-5 relative z-[2] mt-2 text-sm ${
                  darkMode
                    ? "text-zinc-600 dark:text-zinc-400"
                    : "text-zinc-600"
                }`}>
                {item.summary}
              </p>
              <div
                className={`absolute sm:-top-10 sm:-right-10 -top-5 right-0`}>
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
