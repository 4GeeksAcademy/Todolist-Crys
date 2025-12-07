import React, { useState, useEffect } from "react";

import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import Footer from "./Footer";

const Home = () => {

  // --- 1. Estado del tema ---
  const [tema, setTema] = useState("light");

  const toggleTema = () => {
    setTema(prev => (prev === "light" ? "dark" : "light"));
  };

  // Aplicar clase al body cuando cambia el tema
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(tema);
  }, [tema]);


  // --- 2. Estado de tareas ---
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Pasear al perro", completada: false },
    { id: 2, texto: "Practicar logica JavaScript ", completada: false },
    { id: 3, texto: "Comprar pan, leche y huevo", completada: false },
    { id: 4, texto: "Tratar de conquistar el mundo", completada: false },
  ]);


  // --- 3. Función para agregar tarea ---
  const agregarTarea = (texto) => {
    const nueva = {
      id: Date.now(),
      texto: texto,
      completada: false
    };

    setTareas([nueva, ...tareas]); // arriba primero
  };


  // --- 4. Función para borrar tarea ---
  const borrarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };


  // --- 5. Función para marcar/desmarcar ---
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

            {/* Sección del input */}
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
