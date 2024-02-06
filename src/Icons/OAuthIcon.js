import React from "react";
import PropTypes from "prop-types";

const OAuthIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1034 1034"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1">
      <path
        fill="#ffffff20"
        d="M504 228q-16 0 -33 1q-33 2 -70 11q-35 9 -60 20q-38 17 -77 44q-44 31 -78 75t-55 96l-5 12q-9 22 -12 33q-13 45 -13 98q0 49 9 93q22 100 82 171q52 62 139 108q48 25 109.5 33.5t124.5 -1t115 -35.5q90 -46 152 -139q31 -46 48 -100q19 -60 19 -124q0 -57 -21 -119
        q-17 -52 -46 -97q-51 -81 -128 -127q-88 -53 -200 -53zM470 418h54q16 0 29 9.5t18 24.5l106 320q7 20 -2.5 38.5t-28.5 24.5q-8 2 -16 2q-16 0 -29 -9t-18 -25l-23 -73h-120l-23 73q-5 15 -18 24.5t-29 9.5q-8 0 -15 -2q-20 -6 -29.5 -24t-3.5 -38l101 -320q5 -16 18 -25.5
        t29 -9.5z"
      />
    </svg>
  );
};

OAuthIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OAuthIcon.defaultProps = {
  size: "50", // Default width as a string
};

export default OAuthIcon;
