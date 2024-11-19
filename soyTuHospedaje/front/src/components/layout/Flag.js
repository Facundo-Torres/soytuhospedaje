import React from 'react';
import '../styles/home.css';
import argentinaFlag from "../../assets/Argentina.png"; 
import chileFlag from "../../assets/Chile.png"; 

export default function Home() {
  return (
    <div className="footer-flags">
    <img src={argentinaFlag} alt="Bandera de Argentina" className="flag" />
    <img src={chileFlag} alt="Bandera de Chile" className="flag" />
  </div>




  );
}