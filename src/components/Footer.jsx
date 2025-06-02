import NavBar from './NavBar';
import React from 'react';

function Footer({ setSelectedCategory }) {
    return (
        <div className="pie">
            <div className="row d-flex align-items-center justify-content-center">
                <NavBar setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="row d-flex align-items-center justify-content-center">
                <p>
                    Creado por Jorge Albariño - comision 73000 - Todos los
                    derechos reservados © 2025
                </p>
            </div>
        </div>
    );
}

export default Footer;
