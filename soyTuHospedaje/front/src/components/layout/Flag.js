import React from 'react';
import '../styles/home.css';
import argentinaFlag from "../../assets/Argentina.png"; 
import chileFlag from "../../assets/Chile.png"; 

export default function Home() {
  return (
    <div className="flags">
      {/* Enlace a la página de Argentina */}
      <a href="https://www.soybsas.com" target="_blank" rel="noopener noreferrer">
        <img src={argentinaFlag} alt="Bandera de Argentina" className="flag" />
      </a>

      {/* Enlace a la página de Chile */}
      <a href="https://www.soybsas.com" target="_blank" rel="noopener noreferrer">
        <img src={chileFlag} alt="Bandera de Chile" className="flag" />
      </a>
    </div>
  );
}