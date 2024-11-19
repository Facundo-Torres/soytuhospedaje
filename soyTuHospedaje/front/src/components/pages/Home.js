import React from 'react'; 
import '../styles/home.css'; // Asegúrate de que el archivo de estilos exista
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="home-container text-center vh-100  text-white">
      {/* Logo de la página */}
      <img
        src="Logo-Hospedajes.png" 
        alt="Hospedajes"
        className="logo mb-4"
      />

     
    </div>
  );
}
