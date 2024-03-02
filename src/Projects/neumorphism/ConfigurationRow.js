import React from "react";
import { camelize } from "./utils";
import PropTypes from "prop-types";

const ConfigurationRow = ({
  label,
  type,
  value,
  min,
  max,
  step = "1",
  onChange,
}) => {
  return (
    <div className="row">
      <label htmlFor={camelize(label)}>{label}: </label>
      <input
        type={type}
        name={camelize(label)}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        id={camelize(label)}
      />
    </div>
  );
};

ConfigurationRow.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

export default ConfigurationRow;
