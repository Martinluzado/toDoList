import React, { useState } from "react";
import "../listaDeTareas/lista.css";
import Boton from "../Boton/boton.jsx";
import { Link } from "react-router-dom";

export default function Listadetareas(props) {
  const borrarTarea = (id) => {
    const nuevasTareas = props.tareas.filter((tarea, i) => id !== i);
    props.setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1 style={{color:"white"}}>Lista de tareas</h1>
      {props.tareas.length > 0 ? (
        <>
          <ul className="lista-tareas">
            {props.tareas.map((tarea, i) => (
              <Tarea
                id={i}
                borrarTarea={borrarTarea}
                descripcion={tarea.descripcion}
                prioridad={tarea.prioridad}
                key={i}
                tareas={props.tareas}
                setTareas={props.setTareas}
              />
            ))}
          </ul>
        </>
      ) : (
        <p style={{color:"white"}}>No hay niguna tarea!</p>
      )}
      <Link to="/agregartarea">
        <Boton texto="Agregar tarea" />
      </Link>
      <Link to="/">
        <Boton texto="Menú principal" />
      </Link>
    </div>
  );
}

const Tarea = (props) => {
  const [liClassName, setLiClassName] = useState(`${props.prioridad}`);
  const [completeButton, setCompleteButton] = useState("Completado");
  const [estadoEditar, setEstadoEditar] = useState("sin editar");
  const [descripcionInterna, setDescripcion] = useState(`${props.descripcion}`);

  const cambiarCompletar = () => {
    if (liClassName !== "completado") {
      setLiClassName("completado");
      setCompleteButton("Cancelar completado");
    } else if (liClassName === "completado") {
      setLiClassName(`${props.prioridad}`);
      setCompleteButton("Completado");
    }
  };

  const editarContenido = () => {
    setEstadoEditar("editar");
  };

  if (estadoEditar === "sin editar") {
    return (
      <li className={`${liClassName}`}>
        {descripcionInterna}
        <div className="botones-container">
          <Boton
            texto="Eliminar"
            clase="boton"
            onClick={(e) => {
              props.borrarTarea(props.id);
            }}
          />
          <Boton texto="Editar" clase="boton" onClick={editarContenido} />
          <Boton
            texto={completeButton}
            clase="boton"
            onClick={cambiarCompletar}
          />
        </div>
      </li>
    );
  } else if (estadoEditar === "editar") {
    return (
      <li className={`${liClassName}`}>
        <input
          id="tarea"
          type="text"
          name="tarea"
          value={descripcionInterna}
          onChange={(e) => setDescripcion(e.target.value)}
        ></input>
        <select
          name="prioridad"
          id="prioridad"
          onChange={(e) => {
            setLiClassName(e.target.value);
          }}
        >
          <option value="" disabled>
            Prioridad
          </option>
          <option
            value="prioridad-baja"
            selected={`${liClassName}` === "prioridad-baja" ? "selected" : null}
          >
            baja
          </option>
          <option
            value="prioridad-media"
            selected={
              `${liClassName}` === "prioridad-media" ? "selected" : null
            }
          >
            media
          </option>
          <option
            value="prioridad-alta"
            selected={`${liClassName}` === "prioridad-alta" ? "selected" : null}
          >
            alta
          </option>
        </select>
        <Boton texto="Aceptar" onClick={(e) => setEstadoEditar("sin editar")} />
      </li>
    );
  }
};
