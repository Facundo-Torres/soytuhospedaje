import React, { useState, useEffect, useRef } from 'react';
import './styles/card.css';

const CardChile = ({ dataImage, childrenChile }) => {
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseLeaving, setMouseLeaving] = useState(false);

    // Calcular dimensiones del elemento al montarse
    useEffect(() => {
        const { offsetWidth, offsetHeight } = cardRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
    }, []);

    // Manejar el movimiento del mouse
    const handleMouseMove = (e) => {
        if (isMouseLeaving) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left - dimensions.width / 2,
            y: e.clientY - rect.top - dimensions.height / 2,
        });
    };

    // Manejar la entrada del mouse
    const handleMouseEnter = () => {
        setMouseLeaving(false);
    };

    // Manejar la salida del mouse
    const handleMouseLeave = () => {
        setMouseLeaving(true);
        setTimeout(() => setMousePos({ x: 0, y: 0 }), 1000); // Animación de regreso
    };

    const cardStyle = {
        transform: `rotateY(${(mousePos.x / dimensions.width) * 30}deg) rotateX(${-(mousePos.y / dimensions.height) * 30}deg)`,
    };

    const cardBgTransform = {
        transform: `translateX(${-(mousePos.x / dimensions.width) * 40}px) translateY(${-(mousePos.y / dimensions.height) * 40}px)`,
        backgroundImage: `url(${dataImage})`,
    };

    return (
        <div
            className="card-wrap"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="card" style={cardStyle}>
                <div className="card-bg" style={cardBgTransform}></div>
                <div className="card-info">{childrenChile}</div>


                <div id="app" class="container">
                    <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
                        <h1 slot="header">Chile</h1>
                        <p slot="content">¿Por qué visitar Santiago de Chile? es una ciudad moderna rodeada de montañas que combina cultura, naturaleza e historia. Su gastronomía, vinos de renombre y proximidad a los Andes la convierten en un destino imperdible para disfrutar de la cultura chilena.
                        </p>
                    </card>

                </div>


            </div>
        </div>
    );
};
export default CardChile;
