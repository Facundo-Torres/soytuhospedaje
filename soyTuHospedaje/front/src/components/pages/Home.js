import React from 'react';
import '../styles/home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Flip from '../layout/flip';



export default function Home() {
  return (
    <div className="home-container vh-100 text-center   text-white">
    
      {/* Logo de la página */}
      <img
        src="Logo-Hospedajes.png"
        alt="Hospedajes"
        className="logo mb-4"
      />
      <Flip />
      
      
    </div>

    

  );
}
