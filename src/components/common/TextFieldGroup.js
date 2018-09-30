import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  value,
  error,
  placeholder,
  info,
  type,
  label,
  onChange,
  checked,
  disabled
}) => {
  return (
    <div className="form-group mx-2">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        className={`form-control form-control-md ${error && "is-invalid"}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        id={name}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
