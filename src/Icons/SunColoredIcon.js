import React from "react";
import PropTypes from "prop-types";

const SunIcon = ({ size }) => {
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
          fill="#fffbd1"
          strokeWidth="0"></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Environment / Sun">
          {" "}
          <path
            id="Vector"
            d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
            stroke="#ffdd09"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

SunIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SunIcon.defaultProps = {
  size: "35", // Default width as a string
};

export default SunIcon;
