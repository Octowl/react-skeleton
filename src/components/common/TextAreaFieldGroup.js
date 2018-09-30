import React from "react";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  label,
  value,
  error,
  placeholder,
  info,
  onChange,
  rows,
  cols
}) => {
  return (
    <div className="form-group mx-2">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className={`form-control form-control-lg ${error && "is-invalid"}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

TextAreaFieldGroup.defaultProps = {
  rows: 5,
  cols: 50
};

export default TextAreaFieldGroup;
