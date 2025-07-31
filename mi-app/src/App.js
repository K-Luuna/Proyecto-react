import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { default as Imagen } from './components/Imagen.js';
import { default as Titulo } from './components/Titulo.js';
import { default as Parrafo } from './components/Parrafo.js';
import { default as Enlace } from './components/Enlace.js';
import { default as Lista } from './components/Lista.js';
import { default as Tabla } from './components/Tabla.js';
import { default as Formulario } from './components/Formulario.js';
import { default as Boton } from './components/Boton.js';
import { default as InputText } from './components/InputText.js';
import { default as InputPassword } from './components/InputPassword.js';
import { default as InputEmail } from './components/InputEmail.js';
import { default as InputTel } from './components/InputTel.js';
import { default as InputURL } from './components/InputURL.js';
import { default as InputSearch } from './components/InputSearch.js';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [url, setURL] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Datos ingresados:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nSitio web: ${url}\nBúsqueda: ${busqueda}`);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <Titulo texto="Armijos Hurtado Klever Stalin Componentes HTML en React actividad 4" nivel={1} className="text-center text-primary mb-4" />
        <Parrafo texto="A continuación utilizare ejemplos usando props descritos en clase." className="lead mb-4 text-muted" />

        <hr />

        <Titulo texto="Imagen" nivel={2} className="mt-3 mb-2" />
        <div className="text-center mb-4">
          <Imagen 
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png" 
            alt="Imagen de ejemplo" 
            width="200" 
            height="200" 
            className="img-fluid rounded shadow"
          />
        </div>

        <Titulo texto="Enlace" nivel={2} className="mt-3 mb-2" />
        <Enlace 
          href="https://www.youtube.com/watch?v=86VjmpHa10A&list=RD86VjmpHa10A&start_radio=1" 
          texto="🎵 Escucha buena música" 
          className="btn btn-outline-primary mb-4" 
        />

        <Titulo texto="Lista pastel de chocolate" nivel={2} className="mt-3 mb-2" />
        <Lista elementos={['Huevos', 'Lehe', 'Mantequilla', 'Chocolate']} className="list-group mb-4" />

        <Titulo texto="Tabla" nivel={2} className="mt-3 mb-2" />
        <Tabla
          cabecera={['Nombre', 'Edad', 'País']}
          datos={[
            ['Carlos', 28, 'Ecuador'],
            ['Ana', 34, 'Colombia'],
            ['Luis', 22, 'Perú'],
          ]}
          className="table table-hover table-bordered text-center mb-4"
        />

        <Titulo texto="Formulario con Inputs" nivel={2} className="mt-3 mb-2" />
        <Formulario onSubmit={manejarEnvio} className="row g-3">
          <div className="col-md-6">
            <InputText
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <InputEmail
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <InputPassword
              placeholder="Contraseña"
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <InputTel
              placeholder="Número de teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <InputURL
              placeholder="Tu sitio web"
              value={url}
              onChange={(e) => setURL(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <InputSearch
              placeholder="Buscar algo"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-12 text-center">
            <Boton texto="Enviar formulario" type="submit" className="btn btn-primary px-4" />
          </div>
        </Formulario>
      </div>
    </div>
  );
}

export default App;
