import React, { useState } from "react";
import Button from "./Button";

export default function Input({ onAdd }) {

  // Estado local para guardar lo que el usuario ingrese como tarea.
  const [valor, setValor] = useState("");

  // Función que valida el texto y envía la tarea hacia el componente padre
  // Luego limpia el campo para dejarlo listo.

  const handleAdd = () => {
    if (valor.trim() !== "") {         // Trim funcion JS para evitar espacios vacíos
      onAdd(valor);                    // inicia la función del padre (agregar tarea)
      setValor("");                    // Reset del input
    }
  };

  // Funcion para agregar tarea desde el enter manteniendo la misma funcion del boton agregar
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && valor.trim() !== "") {
      onAdd(valor);
      setValor("");
    }
  };

  return (
    <div className="contenedor-input">

      {/* Input controlado */}
      <input
        type="text"
        placeholder="Escribe aquí tu tarea"
        value={valor}                    
        onChange={(e) => setValor(e.target.value)}  // Actualiza el estado en cada tecla
        onKeyDown={handleKeyDown}        // Detecta Enter
      />

      {/* Botón que ejecuta el flujo de agregar tarea */}
      <Button onClick={handleAdd}>
        Agregar <i className="bi bi-file-earmark-plus"></i>
      </Button>

    </div>
  );
}
