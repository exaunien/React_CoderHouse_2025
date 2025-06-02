import NavBar from './NavBar';
import CartWidget from './CartWidget';
import React from 'react';

function Header({ setSelectedCategory }) {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-10 col-md-8">
                        <a href="#">
                            <img
                                className="img-fluid"
                                src="/img/logo.svg"
                                alt="Imagen logo"
                            />
                        </a>
                    </div>
                    <div className="col-2 col-md-4">
                        <CartWidget />
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-around">
                    <NavBar setSelectedCategory={setSelectedCategory} />
                </div>
            </div>
        </header>
    );
}

export default Header;
