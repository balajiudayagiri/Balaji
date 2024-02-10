import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function SearchSelect({ className, style, options, onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleElementTypeChange = (selectedType) => {
    setSearchTerm(selectedType);
    setShowOptions(false);
    onSelect(selectedType);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`relative bg-black text-gray-300 ${className}`}
      style={style}
      ref={selectRef}>
      <input
        type="search"
        id="element-type"
        placeholder="Search element"
        className="border border-gray-600 rounded p-2 w-full bg-inherit "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowOptions(true);
        }}
        onClick={() => setShowOptions(true)}
      />
      {showOptions && (
        <div className="absolute bg-inherit w-full mt-1 border border-gray-600 rounded max-h-96 overflow-y-scroll">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className="p-2 cursor-pointer hover:bg-gray-600"
              onClick={() => handleElementTypeChange(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SearchSelect.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
