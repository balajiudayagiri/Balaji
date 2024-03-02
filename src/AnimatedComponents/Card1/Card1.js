import React from "react";
import PropTypes from "prop-types";
import "./Card1.css";

function Card1({ children, className, ...rest }) {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
}

Card1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Card1.defaultProps = {
  className: "",
};

export default Card1;
