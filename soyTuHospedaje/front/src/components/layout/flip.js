import React from 'react';
import '../layout/styles/flip.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Flip = () => (
    <div className="d-flex justify-content-center flex-wrap">
        {/* Tarjeta para Argentina */}
        <a 
            href="https://www.soybsas.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flip-link"
        >
            <div className="flip">
                <div 
                    className="front" 
                    style={{
                        backgroundImage: "url('https://www.serargentino.com/public/images/2021/04/16182560110-obelisco-773x458.jpg')"
                    }}
                >
                    <h1 className="text-shadow">Argentina</h1>
                </div>
                <div className="back">
                    <h2>Buenos Aires</h2>
                    <p>¿Por qué visitar Buenos Aires? Ciudad vibrante y cosmopolita que combina historia, cultura y modernidad. Ofrece arquitectura impresionante, deliciosa gastronomía, la pasión del tango y una vida nocturna activa.</p>
                </div>
            </div>
        </a>

        {/* Tarjeta para Chile */}
        <a 
            href="https://www.soybsas.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flip-link"
        >
            <div className="flip">
                <div 
                    className="front" 
                    style={{
                        backgroundImage: "url('	https://www.costaazulviajes.com.ar/uploads/6614492b47650.jpg')"
                    }}
                >
                    <h1 className="text-shadow">Chile</h1>
                </div>
                <div className="back">
                    <h2>Santiago de Chile</h2>
                    <p>¿Por qué visitar Santiago de Chile? Ciudad moderna rodeada de montañas, conocida por su cultura, naturaleza, historia, vinos y gastronomía, ideal para disfrutar de la esencia chilena.</p>
                </div>
            </div>
        </a>
    </div>
);

export default Flip;
