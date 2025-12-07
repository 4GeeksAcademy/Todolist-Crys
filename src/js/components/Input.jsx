import React, { useState } from "react";
import Button from "./Button";

export default function Input({ onAdd }) {
  const [valor, setValor] = useState("");

  // Función para agregar tarea y limpiar input
  const handleAdd = () => {
    if (valor.trim() !== "") {
      onAdd(valor);
      setValor("");
    }
  };

  // Maneja Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && valor.trim() !== "") {
      onAdd(valor);
      setValor("");
    }
  };

  return (
    <div className="contenedor-input">
      <input
        type="text"
        placeholder="Escribe aquí tu tarea"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleAdd}>
  Agregar <i class="bi bi-file-earmark-plus"></i>
</Button>

    </div>
  );
}
