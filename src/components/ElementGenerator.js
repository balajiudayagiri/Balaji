import React, { useState } from "react";
import IFrameWrapper from "./IFrameWrapper";
import { elementOptions } from "../constants";
import SearchSelect from "../UI_Elements/SearchSelect";
import ColorPicker from "../UI_Elements/ColorPicker";

const ElementGenerator = () => {
  const [state, setState] = useState({
    elementType: "div",
    content: "Hello, World!",
    reactCode: "",
  });

  const createDynamicElement = () => {
    const { elementType, content } = state;
    const element = document.createElement(elementType);
    element.innerHTML = content;
    setState({ ...state, reactCode: transposeCode(element.outerHTML, true) });
  };

  const transposeCode = (htmlCode, isReact = false) => {
    if (!isReact) {
      return htmlCode;
    }

    const element = document.createElement("div");
    element.innerHTML = htmlCode;

    return `
      import React from 'react';

      function GeneratedComponent() {
        return (
          ${element.outerHTML.trim()}
        );
      }
    `;
  };

  return (
    <div className="text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">React Element Generator</h1>
      <IFrameWrapper>
        {React.createElement(state.elementType || "div", {}, state.content)}
      </IFrameWrapper>
      <div className="mb-4 md:flex md:space-x-4">
        <div className="mb-4 md:w-1/2">
          <label htmlFor="element-type" className="block mb-1 text-gray-300">
            Element Type:
          </label>
          <SearchSelect
            options={elementOptions}
            onSelect={(value) => setState({ ...state, elementType: value })}
            className="w-full"
          />
        </div>
        <div className="mb-4 md:w-1/2">
          <label htmlFor="element-content" className="block mb-1 text-gray-300">
            Content:
          </label>
          <input
            type="text"
            id="element-content"
            placeholder="e.g., Hello, World!"
            className="border border-gray-600 rounded p-2 w-full bg-gray-700 text-gray-300"
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
          />
        </div>
      </div>

      <div>
        <ColorPicker />
      </div>

      <button
        onClick={createDynamicElement}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
        Generate Element
      </button>

      <h2 className="text-2xl font-bold mt-4 text-gray-300">Generated Code</h2>
      <pre className="bg-gray-700 p-4 rounded overflow-auto">
        {state.reactCode}
      </pre>
    </div>
  );
};

export default ElementGenerator;
