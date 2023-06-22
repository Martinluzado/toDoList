import React from "react";
import "../Form/form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Boton from "../Boton/boton.jsx";

export default function Form(props) {
  const [descripcionInterna, setDescripcion] = useState("");
  const [prioridadInterna, setPrioridad] = useState("prioridad-baja");
  const [confirmarTarea, setConfirmarTarea] = useState(false);

  function agregarTareas() {
    if (descripcionInterna != "") {
      props.setTareas([
        ...props.tareas,
        {
          descripcion: descripcionInterna,
          prioridad: prioridadInterna,
        },
      ]);
      setConfirmarTarea(true);
    }
  }

  const quitarModal = (e) => {
    setConfirmarTarea(false);
  };

  return (
    <div className="container">
      {confirmarTarea && descripcionInterna != "" ? (
        <div className="qq">
            <p className="pModal">Tarea agregada!</p>
            <Boton className="botonModal" texto="Aceptar" onClick={quitarModal}></Boton>
        </div>
      ) : null}
      <h1 className="h1Form">Agregar tarea</h1>
      <div className="form-container">
        <input
          id="tarea"
          type="text"
          name="tarea"
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
        ></input>
        <select
          name="prioridad"
          id="prioridad"
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="" disabled>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <Boton texto="Agregar" onClick={() => agregarTareas()}>
          Agregar!
        </Boton>
      </div>
      <Link to="/listadetareas">
        <Boton texto="Lista de tareas" />
      </Link>
      <Link to="/">
        <Boton texto="Menú principal" />
      </Link>
    </div>
  );
}
