import React from "react";
import '../layout/styles/footer.css';
import argentinaFlag from "../../assets/Argentina.png"; 
import chileFlag from "../../assets/Chile.png"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h4>Acerca de SoyTuHospedaje</h4>
        <p>
          Conectamos a viajeros con hospedajes en Argentina y Chile. Nuestro
          compromiso es ofrecer experiencias inolvidables en ambos países.
        </p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 SoyTuHospedaje. Todos los derechos reservados.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
