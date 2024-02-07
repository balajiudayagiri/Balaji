import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../userInfo";
import PicImage from "../assets/Balaji.png";
import { Menu, Transition } from "@headlessui/react";
import Bars3Icon from "../Icons/Bars3Icon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);
  return (
    <header
      className={`z-10 flex justify-between fixed top-0 xl:px-36 lg:px-32 md:px-24 sm:px-16 px-11 py-10 left-0 w-full bg-transparent transition-transform duration-300 ${
        !isVisible && "-translate-y-full"
      }`}>
      <Link to="/" className="hover:scale-125 transition cursor-pointer">
        <img
          src={PicImage}
          height={40}
          width={40}
          className="rounded-full border-solid border-2 border-zinc-600 outline outline-2 outline-zinc-600 shadow-lg hover:outline-cyan-200 "
          alt="pic"
        />
      </Link>
      <div className="hidden xl:flex lg:flex md:flex sm:flex bg-zinc-800 w-fit px-6 rounded-full  gap-6 shadow-md">
        {navigation.map(({ name, href }, index) => {
          const isCurrent = location.pathname.includes(href);

          return (
            <Link
              key={`${name}_${index}`}
              to={href}
              className={`${
                isCurrent ? "text-cyan-500 " : "text-white"
              } hover:text-cyan-500 py-2 font-semibold`}>
              {name}
            </Link>
          );
        })}
      </div>
      <Menu as="div" className="xl:hidden lg:hidden md:hidden sm:hidden block">
        <div>
          <Menu.Button className="relative bg-gray-800 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white">
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {navigation.map(({ name, href }, index) => {
              //   const isCurrent = location.pathname.includes(href);

              return (
                <Menu.Item key={`${name}_${index}`}>
                  {({ active }) => (
                    <Link
                      to={href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}>
                      {name}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
