import React from "react";
import UserInterfaceIcons from "./Icons/UserInterfaceIcons";
import SecurityIcon from "./Icons/SecurityIcon";
import Css3ColoredIcon from "./Icons/Css3ColoredIcon";
import JavascriptColoredIcon from "./Icons/JavascriptColoredIcon";
import ColorPalletIcon from "./Icons/ColorPalletIcon";
import ArchitectureIcon from "./Icons/ArchitectureIcon";

export const navigation = [
  { name: "About", href: "about", current: true },
  { name: "Projects", href: "projects", current: false },
  { name: "Contact me", href: "contact", current: false },
  // { name: "Element Generator", href: "ElementGenerator", current: false },
  // { name: "Gradients", href: "gradientdisplay", current: false },
  // { name: "Colors", href: "colorsdisplay", current: false },
];

export const tabsLinks = [
  { label: "Gradients", href: "gradientdisplay" },
  { label: "Colors", href: "colorsdisplay" },
  { label: "Pong", href: "Pong" },
  { label: "Image Color Extractor", href: "imagecolorextractor" },
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

export const elementOptions = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];

export const ColorPickerColors = [
  "transparent",
  "#000000",
  "#ffffff",
  "#e8153f",
  "#fe0e0e",
  "#de4150",
  "#ff7979",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#2ab249",
  "#008e00",
  "#34d399",
  "#2dd4bf",
  "#18adc4",
  "#009999",
  "#22d3ee",
  "#38bdf8",
  "#0e82fe",
  "#000099",
  "#4d72e2",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#ff77bb",
  "#fb7185",
  "#ff895e",
  "#c58f0b",
  "#c1bb74",
  "#d06666",
  "#974b14",
  "#fa8c7f",
  "#f4ab6d",
  "#727c84",
  "#94a3b8",
  "#878787",
  "#a1a1aa",
  "#a3a3a3",
  "#a8a29e",
];
