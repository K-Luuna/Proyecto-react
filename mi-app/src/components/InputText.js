import React from 'react';

function InputText({ placeholder, value, onChange, required = false, className = "form-control" }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required}
      className={className}
    />
  );
}

export default InputText;
