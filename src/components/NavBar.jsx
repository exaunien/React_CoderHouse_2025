import { NavLink } from 'react-router-dom';

function NavBar({ setSelectedCategory }) {
    return (
        <nav className="col-12 col-md-6 mt-5">
            <div className="col-12 col-md-6 mx-auto">
                <ul className="list-unstyled d-flex justify-content-around">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'active'
                                    : 'text-uppercase text-white m-3 fs-3 fw-bold'
                            }>
                            <select
                                className="border-3 p-3"
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }>
                                <option value="">Home - Todos</option>
                                <option value="Cuerdas">Cuerdas</option>
                                <option value="Cursos">Cursos</option>
                                <option value="Guitarras">Guitarras</option>
                                <option value="Percusion">Percusion</option>
                                <option value="Teclados">Teclados</option>
                                <option value="Vientos">Vientos</option>
                                <br />
                                <hr />
                                <option value="Ofertas">Ofertas</option>
                            </select>
                        </NavLink>
                    </li>
                    <li></li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? 'active'
                                    : 'text-uppercase text-decoration-none text-white m-3 fs-3 fw-bold'
                            }>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
