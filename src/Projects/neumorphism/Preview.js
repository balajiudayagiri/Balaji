import React, { useEffect, useRef } from "react";
import { LightSource } from "./Neumorphism.style";
import PropTypes from "prop-types";

const Preview = ({ previewBox, setActiveLightSource }) => {
  const lightSources = useRef([]);
  useEffect(() => {
    lightSources.current = [...document.querySelectorAll(".light-source")];
  }, []);
  const setLightSource = (e) => {
    lightSources.current.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    setActiveLightSource(parseInt(e.target.dataset.value));
  };
  return (
    <div className="relative flex justify-center align-middle w-[500px] h-[500px] mr-[50px] bg-zinc-300">
      <LightSource
        top="0"
        bottom="unset"
        right="0"
        left="unset"
        data-value="2"
        onClick={setLightSource}
        className="light-source"></LightSource>
      <LightSource
        top="0"
        bottom="unset"
        right="unset"
        left="0"
        data-value="1"
        onClick={setLightSource}
        className="light-source active"></LightSource>
      <LightSource
        top="unset"
        bottom="0"
        right="0"
        left="unset"
        data-value="3"
        onClick={setLightSource}
        className="light-source"></LightSource>
      <LightSource
        top="unset"
        bottom="0"
        right="unset"
        left="0"
        data-value="4"
        onClick={setLightSource}
        className="light-source"></LightSource>
      <div
        ref={previewBox}
        className="soft-element soft-shadow w-[200px] h-[200px]"></div>
    </div>
  );
};

Preview.propTypes = {
  previewBox: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  setActiveLightSource: PropTypes.func.isRequired,
};

export default Preview;
