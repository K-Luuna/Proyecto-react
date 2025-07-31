import React from 'react';

function Formulario({ onSubmit, children, className = "row g-3 needs-validation", noValidate = true }) {
  return (
    <form onSubmit={onSubmit} className={className} noValidate={noValidate}>
      {children}
    </form>
  );
}

export default Formulario;
