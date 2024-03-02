import React from "react";
import InstagramColoredIcon from "../Icons/Instagram";
import LinkedInColoredIcon from "../Icons/LinkedInIcon";
import TwitterXIcon from "../Icons/TwitterXIcon";

const HeroPage = () => {
  return (
    <div className={`text-white flex items-center justify-center`}>
      <div className="px-4">
        <h1
          className={"sm:text-7xl text-5xl font-extrabold mb-10 text-cyan-500"}>
          I&apos;m <br />
          Balaji Udayagiri
        </h1>
        <p className={`${"text-gray-700"} text-justify text-base leading-5`}>
          Passionate Software Engineer 🚀 | Product Development 🔧
        </p>
        <p className={`${"text-gray-700"} text-justify text-base leading-5`}>
          Specializing in React.js, HTML5 & CSS3, MUI, Mantine Ui, react-router,
          Redux toolkit, nested CSS, I&apos;m dedicated to ensuring seamless
          performance, scalability, and user delight.💻
        </p>
        <p className={`${"text-gray-700"} text-justify text-base leading-5`}>
          My passion lies in utilizing existing skills while eagerly embracing
          new ones, within a dynamic and creative work environment. I believe
          that learning is an unending process, and I relish every opportunity
          to grow, both personally and professionally. 🌱
        </p>
        <p className={`${"text-lg text-gray-600"} mt-1 font-semibold`}>
          #SoftwareEngineering #ProductDevelopment
        </p>
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
            <TwitterXIcon size={"30px"} color={"#000"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
