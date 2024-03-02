import React from "react";
import HeroPage from "./HeroSection";
import { articles } from "../constants";
import { useRecoilState } from "recoil";
import { darkModeState } from "../states/recoilAtoms";
import Card1 from "../AnimatedComponents/Card1/Card1";

const Home = () => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <div className={`overflow-hidden sm:overflow-visible pb-9`}>
      <HeroPage />
      <div className="flex flex-wrap mt-14 justify-between gap-9">
        {articles.map((item, index) => {
          return (
            <Card1
              key={`${item.title.split(" ")[0]}_${index}`}
              className={
                "flex flex-col p-3 xl:w-[30%] lg:w-[47%] md:w-[47%] sm:w-full"
              }>
              <h1 className="leading-7 text-lg text-left sm:w-full w-[90%]">
                {item.title}
              </h1>
              <p
                className={`leading-5 text-left relative z-[2] mt-2 text-sm ${
                  darkMode
                    ? "text-zinc-600 dark:text-zinc-400"
                    : "text-zinc-600"
                }`}>
                {item.summary}
              </p>
            </Card1>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
