import React from "react";
import PropTypes from "prop-types";
import "./FlippingCard.css";

function FlippingCard({
  frontViewChild,
  backViewChild,
  className,
  h,
  w,
  ...rest
}) {
  return (
    <div
      className={`myCard ${className}`}
      {...rest}
      style={{ height: h, width: w }}>
      <div className="innerCard">
        <div className="frontSide">{frontViewChild}</div>
        <div className="backSide">{backViewChild}</div>
      </div>
    </div>
  );
}

FlippingCard.propTypes = {
  frontViewChild: PropTypes.node.isRequired,
  backViewChild: PropTypes.node.isRequired,
  className: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
};

FlippingCard.defaultProps = {
  h: "254px",
  w: "190px",
};

export default FlippingCard;
