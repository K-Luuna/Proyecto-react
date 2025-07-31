import React from 'react';

function Tabla({ cabecera, datos, className = "table table-striped table-hover text-center" }) {
  return (
    <table className={className}>
      <thead className="table-dark">
        <tr>
          {cabecera.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            {fila.map((dato, i) => (
              <td key={i}>{dato}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
