import React from "react";

//Boton reutilizable.
export default function Button({ onClick, texto }) {


    return <button onClick={onClick}>{texto}</button>;
}