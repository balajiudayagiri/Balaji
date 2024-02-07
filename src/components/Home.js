import React from "react";
import HeroPage from "./HeroSection";
import { articles } from "../userInfo";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <div className=" flex flex-wrap mt-14 justify-between gap-9">
        {articles.map((item, index) => {
          return (
            <div
              key={`${item.title.split(" ")[0]}_${index}`}
              className={
                "relative hover:scale-110 hover:z-[5] transition xl:w-[47%] lg:w-[47%] md:w-[47%] sm:w-full bg-zinc-900 p-10 rounded-lg mb-5 border-solid border-2 border-zinc-700 text-white "
              }>
              <h1 className="text-lg">{item.title}</h1>
              <p className="relative z-[2] mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.summary}
              </p>
              <div
                className={`absolute xl:-top-10 lg:-top-10 md:-top-10 sm:-top-10  xl:-right-10 lg:-right-10 md:-right-10 sm:-right-10 -top-5 -right-5`}>
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
