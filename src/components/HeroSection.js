import React from "react";
import InstagramColoredIcon from "../Icons/Instagram";
import LinkedInColoredIcon from "../Icons/LinkedInIcon";
import TwitterXIcon from "../Icons/TwitterXIcon";
const HeroPage = () => {
  return (
    <div className="bg-zinc-900 p-10 rounded-lg border-solid border-2 border-zinc-700 text-white  flex items-center justify-center">
      <div className="">
        <h1 className="text-6xl font-extrabold mb-10 text-cyan-500">
          Hi, I&apos;m Balaji Udayagiri!
        </h1>
        <p className="text-base text-zinc-400">
          Passionate Software Engineer 🚀 | 3+ Years of Excellence | Product
          Development 🔧
        </p>
        <p className="text-base text-zinc-400">
          Specializing in React.js, HTML5 & CSS3, MUI, Mantine Ui, react-router,
          Redux toolkit, nested CSS, I&apos;m dedicated to ensuring seamless
          performance, scalability, and user delight.💻
        </p>
        <p className="text-base text-zinc-400">
          My passion lies in utilizing existing skills while eagerly embracing
          new ones, within a dynamic and creative work environment. I believe
          that learning is an unending process, and I relish every opportunity
          to grow, both personally and professionally. 🌱
        </p>
        <p className="text-lg mt-1">#SoftwareEngineering #ProductDevelopment</p>
        <div className="flex gap-6 mt-3">
          <a
            href="https://www.instagram.com/balaji.udy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer">
            <InstagramColoredIcon size={"30px"} />
          </a>
          <a
            href="https://in.linkedin.com/in/balaji-udayagiri-228747243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer">
            <LinkedInColoredIcon size={"30px"} />
          </a>
          <a
            href="https://www.twitter.com/balaji_udy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition cursor-pointer">
            <TwitterXIcon size={"30px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
