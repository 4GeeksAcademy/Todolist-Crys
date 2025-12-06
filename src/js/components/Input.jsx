import React, { useState } from "react";
import Button from "./Button";

//Input con funcion 

export default function Input() {
  const [valor, setValor] = useState("");

  return (
    <div>
      <input onChange={(e) => setValor(e.target.value)} />
      <Button texto="Agregar." onClick={() => console.log(valor)} />
    </div>
  );
}