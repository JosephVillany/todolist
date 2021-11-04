import React from "react";

//Estilos
import "../styles/Header.css";

const Header = ({handleFilter}) => {
  return (
    <header>
      <div className="titulo">
        <h4 className="logo">ToDo List</h4>
      </div>
      
      <div className="botones">
      <button onClick={ () => handleFilter("all")} className="complete"> Todas</button>
      <button onClick={ () => handleFilter("complete")} className="complete"> InCompleta</button>
      <button onClick={ () => handleFilter("incompleta")} className="incompleta">Completa</button>
      </div>
    </header>
  );
};

export default Header;
