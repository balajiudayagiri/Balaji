import React from "react";
import PropTypes from "prop-types";
import "./Button1.css";
function Button1({ children, className, style, ...rest }) {
  return (
    <button className={`button ${className}`} style={style} {...rest}>
      {children}
    </button>
  );
}
Button1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
Button1.defaultProps = {
  className: "",
};

export default Button1;
