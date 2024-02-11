import React from "react";
import PropTypes from "prop-types";

const SpacingSelector = ({ selectedSpacing, onChange, options }) => {
  return (
    <div className="text-white max-w-xs p-6 bg-gray-700 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Spacing</h1>
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            className={`py-2 px-4 rounded ${
              selectedSpacing === option
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

SpacingSelector.propTypes = {
  selectedSpacing: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default SpacingSelector;
