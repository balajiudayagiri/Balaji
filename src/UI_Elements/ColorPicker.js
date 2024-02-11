import React, { useState } from "react";
import PropTypes from "prop-types";

const ColorPicker = ({
  colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
  onChange,
  defaultColor,
}) => {
  const [chosenColor, setChosenColor] = useState(defaultColor);

  const handlePredefinedColorClick = (color) => {
    setChosenColor(color);
    onChange && onChange(color);
  };
  return (
    <div className="text-white max-w-xs p-6 bg-gray-700 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Color Picker</h1>

      <div
        className="mt-4 p-4 border border-gray-300 rounded"
        style={{ backgroundColor: chosenColor }}>
        Selected Color: <span className="font-bold">{chosenColor}</span>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 text-sm font-medium mb-2">
          Predefined Colors:
        </p>
        <div className="flex flex-wrap gap-6">
          {colors.map((color, index) => (
            <button
              key={index}
              className="min-w-6 min-h-6 rounded-full"
              style={{
                backgroundColor: color,
                outline: `2px solid ${
                  chosenColor === color ? "#fff" : "transparent"
                }`,
              }}
              onClick={() => handlePredefinedColorClick(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.object,
  onChange: PropTypes.func,
  defaultColor: PropTypes.string,
};

export default ColorPicker;
