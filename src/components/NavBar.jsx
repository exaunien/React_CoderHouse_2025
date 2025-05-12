import React from 'react';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

function NavBar() {
    return (
        <>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src="./public/img/logo.svg"
                                    alt="Imagen logo"
                                />
                            </a>
                        </div>
                        <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
                            <div className="row d-flex justify-content-between">
                                <div className="col-8 col-md-4 justify-content-center">
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <a
                                                className="text-uppercase text-decoration-none text-white m-5 fs-5 fw-bold"
                                                href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-uppercase text-decoration-none text-white m-4 fs-5 fw-bold"
                                                href="#">
                                                Guitarras
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-uppercase text-decoration-none text-white m-4 fs-5 fw-bold"
                                                href="#">
                                                Percusion
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className=" text-uppercase text-decoration-none text-white m-4 fs-5 fw-bold "
                                                href="#">
                                                Varios
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 col-md-4">
                                    <CartWidget />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
