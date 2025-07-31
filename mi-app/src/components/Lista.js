import React from 'react';

function Lista({ elementos, className = "list-group" }) {
  return (
    <ul className={className}>
      {elementos.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
