import React, { useState, useEffect, useCallback, useMemo } from "react";
import IFrameWrapper from "./IFrameWrapper";
import { ColorPickerColors, elementOptions } from "../constants";
import SearchSelect from "./SearchSelect";
import ColorPicker from "./ColorPicker";
import SelectOptions from "./SelectOptions";
import { useRecoilState } from "recoil";
import { darkModeState } from "../states/recoilAtoms";

const ElementGenerator = () => {
  const [state, setState] = useState({
    elementType: "div",
    content: "Hello, World!",
    reactCode: "",
  });
  const [style, setStyle] = useState({});
  const [selectedOption, setSelectedOption] = useState("outline");
  const [color, setColor] = useState("#007bff");
  const [bgcolor, setbgColor] = useState("#007bff");

  const [selectedRadius, setSelectedRadius] = useState("medium");
  const [selectedSpacing, setSelectedSpacing] = useState("medium");
  const [darkMode] = useRecoilState(darkModeState);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleRadiusChange = (radius) => {
    setSelectedRadius(radius);
  };
  const handleSpacingChange = (spacing) => {
    setSelectedSpacing(spacing);
  };

  const getradius = useMemo(() => {
    return {
      none: "",
      small: "4px",
      medium: "8px",
      large: "12px",
      full: "9999px",
    };
  }, []);

  const getspacing = useMemo(() => {
    return {
      none: "",
      small: "4px 8px",
      medium: "8px 16px",
      large: "16px 32px",
      full: "32px 64px",
    };
  }, []);

  const getStylesBasedOnOption = useCallback(() => {
    switch (selectedOption) {
      case "outline":
        return {
          backgroundColor: "transparent",
          borderRadius: getradius[selectedRadius],
          padding: getspacing[selectedSpacing],
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: color,
          color: color,
        };
      case "filled":
        return {
          border: "none",
          borderRadius: getradius[selectedRadius],
          padding: getspacing[selectedSpacing],
          backgroundColor: bgcolor,
          color: color,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: getradius[selectedRadius],
          padding: getspacing[selectedSpacing],
          color: color,
        };
      default:
        return {};
    }
  }, [
    selectedOption,
    color,
    bgcolor,
    selectedRadius,
    selectedSpacing,
    getradius,
    getspacing,
  ]);

  useEffect(() => {
    setStyle(getStylesBasedOnOption());
  }, [getStylesBasedOnOption]);

  const createDynamicElement = () => {
    const { elementType, content } = state;
    const element = document.createElement(elementType);
    element.innerHTML = content;
    element.style = style;

    const reactCode = transposeCode(element.outerHTML, true, {
      style,
      content,
    });
    setState({ ...state, reactCode });
  };

  const transposeCode = (
    htmlCode,
    isReact = false,
    { style, content } = {}
  ) => {
    if (!isReact) {
      return htmlCode;
    }

    const element = document.createElement("div");
    element.innerHTML = htmlCode;

    const inlineStyles = Object.keys(style).map(
      (styleKey) => `${styleKey}: "${style[styleKey]}"`
    );

    return `
      import React from 'react';

      function GeneratedComponent() {
        return (
          <${state.elementType} style={{${inlineStyles.join(", ")}}}>
            ${content}
          </${state.elementType}>
        );
      }
    `;
  };

  return (
    <div
      className={`${darkMode ? "text-white" : "text-black"} min-h-screen p-4`}>
      <h1 className="text-3xl font-bold mb-4">React Element Generator</h1>
      <IFrameWrapper>
        {React.createElement(
          state.elementType || "div",
          { style },
          state.content
        )}
      </IFrameWrapper>
      <div className="mb-4 md:flex md:space-x-4">
        <div className="mb-4 md:w-1/2">
          <label
            htmlFor="element-type"
            className={`block mb-1 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}>
            Element Type:
          </label>
          <SearchSelect
            defaultValue={"div"}
            options={elementOptions}
            onSelect={(value) => setState({ ...state, elementType: value })}
            className="w-full"
          />
        </div>
        <div className="mb-4 md:w-1/2">
          <label
            htmlFor="element-content"
            className={`block mb-1 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}>
            Content:
          </label>
          <input
            type="text"
            id="element-content"
            placeholder="e.g., Hello, World!"
            className={`border border-gray-600 rounded p-2 w-full ${
              darkMode ? "bg-gray-700 text-gray-300" : "bg-white text-black"
            }`}
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div>
          <ColorPicker
            label={"Background Color"}
            colors={ColorPickerColors}
            defaultColor={bgcolor}
            onChange={(color) => setbgColor(color)}
          />
        </div>
        <div>
          <ColorPicker
            label={"Font Color"}
            colors={ColorPickerColors}
            defaultColor={color}
            onChange={(color) => setColor(color)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <SelectOptions
              label={"Variant"}
              options={["outline", "filled", "text"]}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
          <div>
            <SelectOptions
              label={"Radius"}
              options={["none", "small", "medium", "large", "full"]}
              selectedOption={selectedRadius}
              onChange={handleRadiusChange}
            />
          </div>
          <div>
            <SelectOptions
              label={"Spacing"}
              options={["none", "small", "medium", "large", "full"]}
              selectedOption={selectedSpacing}
              onChange={handleSpacingChange}
            />
          </div>
        </div>
      </div>

      <button
        onClick={createDynamicElement}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 ${
          darkMode ? "bg-gray-700" : ""
        }`}>
        Generate Element
      </button>

      <h2
        className={`text-2xl font-bold mt-4 ${
          darkMode ? " text-gray-300" : "bg-white text-black"
        }`}>
        Generated Code
      </h2>
      <pre
        className={`p-4 rounded overflow-auto ${
          darkMode
            ? "bg-gray-700  text-white"
            : " border-2 border-zinc-300 rounded text-black"
        }`}>
        {state.reactCode}
      </pre>
    </div>
  );
};

export default ElementGenerator;
