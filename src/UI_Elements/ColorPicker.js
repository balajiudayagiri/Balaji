import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

const ColorPicker = () => {
  const [chosenColor, setChosenColor] = useState("#000000");
  const [predefinedColors, setPredefinedColors] = useState([]);

  useEffect(() => {
    // Generate shades for predefined colors
    const generateShades = (color) => {
      const shades = [];
      for (let i = 0; i < 5; i++) {
        shades.push(
          tinycolor(color)
            .darken(i * 5)
            .toString()
        );
      }
      return shades;
    };

    const updatedPredefinedColors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
    ]
      .map(generateShades)
      .flat();

    setPredefinedColors(updatedPredefinedColors);
  }, []);

  const handleColorChange = (event) => {
    setChosenColor(event.target.value);
  };

  const handlePredefinedColorClick = (color) => {
    setChosenColor(color);
  };

  const handleApplyClick = () => {
    // Handle applying the color (you can perform additional actions here if needed)
    console.log("Selected Color:", chosenColor);
  };

  const handleResetClick = () => {
    setChosenColor("#000000");
  };

  return (
    <div className="max-w-xs p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Color Picker</h1>

      {/* Custom styling for the color input */}
      <input
        type="color"
        id="colorInput"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        value={chosenColor}
        onChange={handleColorChange}
      />

      <div className="flex justify-between mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handleResetClick}>
          Reset
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleApplyClick}>
          Apply
        </button>
      </div>

      <div
        className="mt-4 p-4 border border-gray-300 rounded"
        style={{ backgroundColor: chosenColor }}>
        Selected Color: <span className="font-bold">{chosenColor}</span>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 text-sm font-medium mb-2">
          Predefined Colors:
        </p>
        <div className="flex space-x-2">
          {predefinedColors.map((color, index) => (
            <button
              key={index}
              className="min-w-6 min-h-6 rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => handlePredefinedColorClick(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
