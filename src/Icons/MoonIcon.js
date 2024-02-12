import React from "react";
import PropTypes from "prop-types";

const MoonIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <rect
          x="-2.4"
          y="-2.4"
          width="28.80"
          height="28.80"
          rx="14.4"
          fill="#000000"
          strokeWidth="0"></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#ffffff"></path>{" "}
      </g>
    </svg>
  );
};

MoonIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoonIcon.defaultProps = {
  size: "35", // Default width as a string
};

export default MoonIcon;
