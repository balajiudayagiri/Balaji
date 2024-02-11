import React from "react";
import PropTypes from "prop-types";

const SelectOptions = ({ options, selectedOption, onChange }) => {
  return (
    <div className=" text-white max-w-xs p-6 bg-gray-700 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Variant</h1>
      <div className="flex gap-4">
        {options.map((option) => (
          <button
            key={option}
            className={`py-2 px-4 rounded ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
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
  onChange: PropTypes.func.isRequired,
};

export default SelectOptions;
