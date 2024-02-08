import React from "react";
import UserInterfaceIcons from "./Icons/UserInterfaceIcons";
import SecurityIcon from "./Icons/SecurityIcon";
import Css3ColoredIcon from "./Icons/Css3ColoredIcon";
import JavascriptColoredIcon from "./Icons/JavascriptColoredIcon";
import ColorPalletIcon from "./Icons/ColorPalletIcon";
import ArchitectureIcon from "./Icons/ArchitectureIcon";
export const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "img",
};
export const navigation = [
  { name: "About", href: "about", current: true },
  { name: "Contact me", href: "contact", current: false },
];
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const articles = [
  {
    title:
      "Building Seamless User Interfaces: A Guide to Advanced Frontend Development",
    publishedOn: "November 20, 2022",
    summary:
      "Delve into the intricacies of frontend development, exploring advanced techniques for crafting seamless and visually stunning user interfaces. Learn about state management, dynamic UI updates, and the latest tools that will elevate your frontend skills. 🚀🎨",
    icon: <UserInterfaceIcons size={"100px"} />,
  },
  {
    title:
      "Demystifying OAuth: A Comprehensive Overview for Software Engineers",
    publishedOn: "November 28, 2022",
    summary:
      "OAuth can be complex, but it doesn't have to be. This article provides a thorough breakdown of OAuth concepts, implementation best practices, and real-world examples. Whether you're new to OAuth or looking to deepen your understanding, this guide is for you. 🔐🔍",
    icon: <SecurityIcon size={"100px"} />,
  },
  {
    title: "The Art of Modern Frontend Architecture",
    publishedOn: "January 5, 2023",
    icon: <ArchitectureIcon size={"100px"} />,
    summary:
      "Explore the principles and patterns behind modern frontend architecture. Learn how to structure your codebase for scalability, maintainability, and performance, empowering you to build robust and efficient applications. 🏗️📐",
  },
  {
    title: "State-of-the-Art Frontend Tooling: A Comprehensive Guide",
    publishedOn: "January 15, 2023",
    icon: <Css3ColoredIcon height={"100px"} width={"80px"} />,
    summary:
      "Navigate through the ever-evolving landscape of frontend tooling. Discover the latest build tools, bundlers, and task runners, and optimize your development workflow for maximum efficiency and productivity. 🧰🚀",
  },
  {
    title: "JavaScript Beyond the Basics: Advanced Techniques",
    publishedOn: "January 25, 2023",
    icon: <JavascriptColoredIcon size={"80px"} />,
    summary:
      "Take your JavaScript skills to the next level with advanced techniques. From functional programming concepts to asynchronous programming patterns, this article provides insights and examples to enhance your mastery of the language. 🚀💡",
  },
  {
    title: "Design Systems: Streamlining UI Development",
    publishedOn: "February 15, 2023",
    icon: <ColorPalletIcon size={"100px"} />,
    summary:
      "Dive into the world of design systems and how they can revolutionize your UI development process. Understand the benefits of creating and maintaining a design system and how it fosters consistency and collaboration within your team. 🎨🔄",
  },
];
