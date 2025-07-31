import React from 'react';

function InputSearch({ placeholder, value, onChange, required = false, className = "form-control" }) {
  return (
    <input 
      type="search" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required}
      className={className}
    />
  );
}

export default InputSearch;
