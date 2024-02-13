import React from "react";
import PropTypes from "prop-types";
import { darkModeState } from "../states/recoilAtoms";
import { useRecoilState } from "recoil";

const SelectOptions = ({ options, selectedOption, onChange, label }) => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <div
      className={`max-w-xs p-6 rounded-lg shadow-md ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-white shadow-md border-solid border-2 border-zinc-300"
      }`}>
      <h1
        className={`text-2xl font-semibold mb-4 ${
          darkMode ? "text-white" : "text-black"
        }`}>
        {label || "Variant"}
      </h1>
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            className={`py-2 px-4 rounded ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : darkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-zinc-200 text-gray-700"
            }`}
            onClick={() => onChange(option)}>
            <span className="capitalize">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

SelectOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectOptions;
