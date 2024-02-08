import React from "react";
import HeroPage from "./HeroSection";
import { articles } from "../constants";

const Home = () => {
  return (
    <div className="overflow-hidden sm:overflow-visible">
      <HeroPage />
      <div className=" flex flex-wrap mt-14 justify-between gap-9">
        {articles.map((item, index) => {
          return (
            <div
              key={`${item.title.split(" ")[0]}_${index}`}
              className={
                "relative sm:hover:scale-110 scale-100 hover:z-[5] transition xl:w-[47%] lg:w-[47%] md:w-[47%] sm:w-full bg-zinc-900 p-10 rounded-lg mb-5 border-solid border-2 border-zinc-700 text-white "
              }>
              <h1 className="leading-7 text-justify text-lg sm:w-full w-[90%]">
                {item.title}
              </h1>
              <p className="leading-5 text-justify relative z-[2] mt-2 text-sm text-zinc-600 dark:text-zinc-400">
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
