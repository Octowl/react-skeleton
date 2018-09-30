import React from "react";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  value,
  options,
  error,
  label,
  info,
  onChange
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} disabled={!option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group mx-2">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={`form-control form-control-md ${error && "is-invalid"}`}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

export default SelectListGroup;
