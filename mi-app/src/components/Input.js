import React from 'react';

const Input = ({ type, placeholder, value, onChange, required, minLength }) => {
  return (
    <input
      className="form-control mb-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
    />
  );
};

export default Input;
