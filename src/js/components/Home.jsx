import React, { useState, useEffect } from "react";

import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import Footer from "./Footer";

const Home = () => {

  // Estado del tema Dark -- Ligth
  const [tema, setTema] = useState("light");

  const toggleTema = () => {
    setTema(prev => (prev === "light" ? "dark" : "light"));
  };

  // Aplicar clase al body cuando cambia el tema--useEffect garantiza el cambio limpio

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(tema);
  }, [tema]);


  // estado de las tareas, useState con estado inicial de 4 tareas preparado para añadir mas

  const [tareas, setTareas] = useState([
    { id: 1, texto: "Pasear el perro", completada: false },
    { id: 2, texto: "Practicar logica JavaScript ", completada: false },
    { id: 3, texto: "Comprar pan, leche y huevos", completada: false },
    { id: 4, texto: "Tratar de conquistar el mundo", completada: false },
  ]);


  // Funcion para agregar tareas 

  const agregarTarea = (texto) => {
    const nueva = {
      id: Date.now(),
      texto: texto,
      completada: false
    };

    setTareas([nueva, ...tareas]); //Asi se agrega la tarea nueva al inicio
  };


  // Funcion para borrar tareas con filter, localiza el Id que conicide y se elimina 

  const borrarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };


  // Una funcion extra para marcar como REALIZADA mi tarea

  const toggleTarea = (id) => {
    setTareas(
      tareas.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };


  return (
    <div className="justify-content">

        {/* Header */}

        <Header tema={tema} toggleTema={toggleTema} />

        {/* Contenedor principal */}
        <div className="contenedor-principal">

            {/* Sección del input para agregar tareas nueva */}
            <div className="contenedor-input">
                <Input onAdd={agregarTarea} />
            </div>

            {/* Sección de la lista de tareas */}
            <div className="contenedor-lista">
                <TaskList
                    tareas={tareas}
                    onDelete={borrarTarea}
                    onToggle={toggleTarea}
                />
            </div>

			{/* Sección de Footer */}
            <div className="contenedor-footer">
                <Footer/>
            </div>

        </div>
    </div>
);
};

export default Home;
