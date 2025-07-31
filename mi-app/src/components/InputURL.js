import React from 'react';

function InputURL({ placeholder, value, onChange, required = false, className = "form-control" }) {
  return (
    <input 
      type="url" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required}
      className={className}
    />
  );
}

export default InputURL;
