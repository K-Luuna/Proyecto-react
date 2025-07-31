import React from 'react';

function Boton({ texto, type = "button", className = "btn btn-primary", onClick }) {
  return (
    <button 
      type={type} 
      className={className} 
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
