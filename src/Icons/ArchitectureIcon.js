import React from "react";
import PropTypes from "prop-types";

const ArchitectureIcon = ({ size }) => {
  return (
    <svg
      fill="#000000"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="architecture"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color">
      <path
        id="primary"
        d="M17,5.84,10.5,2.13a1,1,0,0,0-1,0L3,5.84A2,2,0,0,0,2,7.58V21a1,1,0,0,0,1,1H9a1,1,0,0,0,.64-.23l8-6.67a1,1,0,0,0,.36-.77V7.58A2,2,0,0,0,17,5.84Z"
        fill="#bbbbbb"></path>
      <path
        id="secondary"
        d="M21.42,10.09a1,1,0,0,0-1.06.14l-12,10a1,1,0,0,0-.3,1.11A1,1,0,0,0,9,22H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21.42,10.09Z"
        fill="#292D32"></path>
    </svg>
  );
};
ArchitectureIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArchitectureIcon.defaultProps = {
  width: "50", // Default width as a string
};

export default ArchitectureIcon;
