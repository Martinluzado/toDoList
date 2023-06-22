import React from "react";
import { Link } from "react-router-dom";
import Boton from "../Boton/boton.jsx";
import "../Home/home.css";
export default function Home() {
  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })
  return (
    <div className="container">
      <h1 className="h1Home">Lista de tareas</h1>

      <div className="app-container">
        <Link to="/agregartarea">
          <Boton texto="Agregar tarea" />
        </Link>
        <Link to="/listadetareas">
          <Boton texto="Lista de tareas" />
        </Link>
      </div>

      <p className="tips">Pueden borrar tareas clickeando en ellas</p>
    </div>
  );
}
