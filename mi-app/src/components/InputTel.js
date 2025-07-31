import React from 'react';

function InputTel({ placeholder, value, onChange, required = false, className = "form-control" }) {
  return (
    <input 
      type="tel" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required}
      className={className}
    />
  );
}

export default InputTel;
