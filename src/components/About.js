import React from "react";
import { calculateExperience } from "../utilitys";
// import ReactColoredIcon from "../Icons/ReactColoredIcon";
// import JavascriptColoredIcon from "../Icons/JavascriptColoredIcon";
import myPic from "../assets/Balaji_about-Page.png";
import "../App.css";
const About = () => {
  return (
    <div className="text-gray-400 rounded-md shadow-md flex flex-col gap-3">
      <div className="flex flex-col-reverse gap-5 items-center justify-center md:flex-row mb-10">
        <div className="w-full lg:w-1/2 relative">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-8 md:text-5xl">
            I&apos;m Balaji Udayagiri. I live in Hyderabad City, where I design
            my world
          </h1>
          <p className="">
            Welcome to my digital abode! I&apos;m Balaji, a software engineer
            with a knack for transforming innovative ideas into tangible tech
            solutions. I find joy in the elegant dance of code, creating
            applications that not only function seamlessly but also bring a
            touch of delight to the user experience.
          </p>
        </div>
        <div className="ld:p-[100px] md:p-[50px] sm:p-[100px] p-[50px]">
          <img
            src={myPic}
            className="p-10 w-full object-cover lg:object-center rounded-3xl bg-zinc-900 rotate-[10deg]"
            alt="error_in_image_load"
          />
        </div>
      </div>
      <p className=" sm:w-full bg-zinc-900 p-4 rounded-lg mb-5 border-solid border-2 border-zinc-700">
        My journey into the realm of software engineering kicked off{" "}
        {calculateExperience("November 2020")}, armed with a passion for all
        things tech. It&apos;s been an exhilarating ride, filled with projects
        that challenged me, teams that inspired me, and a continuous stream of
        opportunities to learn and grow. Each project, each line of code, has
        been a step in my evolution as a tech enthusiast.
      </p>
      <p>
        Collaborating with diverse teams, learning from challenges, and
        embracing opportunities for growth, my journey has been a blend of hard
        work, creativity, and a dash of spontaneity.
      </p>
      <hr className="my-5" />

      <p className="">
        Why do I do what I do? It&apos;s simple. I&apos;m on a mission to infuse
        a positive and innovative tech vibe into the world. I believe in using
        technology not just for functionality but for creating experiences that
        leave a lasting impression. Staying at the forefront of technological
        advancements, my work is not just about keeping up; it&apos;s about
        setting new standards and pushing boundaries.
      </p>
      <h3 className="text-3xl font-bold tracking-tight text-zinc-200 my-4 sm:text-5xl">
        The Tech Toolbox
      </h3>
      <div className="flex flex-wrap justify-evenly gap-9 ">
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Crafting dynamic and responsive user interfaces with React.js and
          TypeScript. My React journey involves leveraging the power of reusable
          components and ensuring a seamless user experience through effective
          React.js practices.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Elevating webapplications with the power of JavaScript! As a versatile
          and dynamic scripting language, JavaScript is my go-to tool for adding
          interactivity, enhancing user experiences, and bringing functionality
          to the forefront of web development.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Enhancing code maintainability and developer experience with the
          statically typed goodness of TypeScript.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Managing state like a pro! Leveraging the power of Redux Toolkit for
          efficient state management in complex applications.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Navigating seamlessly between views with React Router for creating
          single-page applications.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Styling web pages to perfection with the latest features and
          capabilities of CSS3.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Building the foundation of web applications with the semantic
          structure of HTML5.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Designing beautiful and consistent user interfaces using the
          Material-UI component library.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Building powerful and efficient React applications with the PrimeReact
          component library.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Creating elegant and functional user interfaces with the Ant Design
          React UI library.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Utilizing the powerful and customizable Mantine UI library for
          building React applications.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Implementing robust UI components with the Radix UI library for React.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Streamlining styling workflows and creating responsive designs with
          the utility-first approach of Tailwind CSS.
        </div>
        <div className="lg:min-w-[30%] lg:max-w-[30%] md:min-w-[45%] md:max-w-[45%] bg-zinc-900 p-4 rounded-lg w-full  border-solid border-2 border-zinc-700">
          Designing sleek and mobile-friendly interfaces with the Bootstrap
          framework for React.
        </div>
      </div>
      <footer className="text-gray-600 p-20 text-center text-sm">
        Thanks for spending a moment in my tech universe. Here&apos;s to the
        endless possibilities that coding and creativity bring!
      </footer>
    </div>
  );
};

export default About;
