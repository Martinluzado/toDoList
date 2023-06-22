import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Form from "./Form/form.jsx";
import Home from "./Home/home.jsx";
import Listadetareas from "./listaDeTareas/lista.jsx";

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/agregartarea"
            element={<Form setTareas={setTareas} tareas={tareas} />}
          />
          {console.log(tareas)}
          <Route
            path="/listadetareas"
            element={<Listadetareas tareas={tareas} setTareas={setTareas} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

