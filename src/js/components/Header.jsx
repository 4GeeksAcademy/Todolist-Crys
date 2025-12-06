import React from "react";
import Titulo from "./Titulo";
import Button from "./Button";

export default function Header({ tema, toggleTema }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Titulo />

     <Button onClick={toggleTema}>
  <i className={tema === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
</Button>

    </header>
  );
}
