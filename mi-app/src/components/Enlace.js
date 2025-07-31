import React from 'react';

const Enlace = ({ href, texto }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {texto}
    </a>
  );
};

export default Enlace;
