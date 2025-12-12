import React from "react";
import Button from "./Button";

export default function TaskItem({ tarea, onDelete, onToggle }) {
  return (
    <div className={`task-item ${tarea.completada ? "completada" : ""}`}>
      
      {/* Checkbox, marca tarea completada */}
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
      />

      {/* Texto de la tarea */}
      <span>{tarea.texto}</span>

      {/* Botón eliminar */}
      <Button className="btn-eliminar" onClick={() => onDelete(tarea.id)}>
        ×
      </Button>
    </div>
  );
}
