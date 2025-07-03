import { useCart } from '../CartContext/CartContext';
import './navBar.css';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    // useCart es un hook que nos permite acceder al carrito y sus funciones
    // Desestructuramos el carrito del contexto del carrito
    const { carrito } = useCart();

    // Calculamos el total de productos en el carrito
    // Utilizamos reduce para sumar la cantidad de cada producto
    const totalProductos = carrito.reduce(
        (compra, item) => compra + item.cantidad,
        0
    );
    // Si el carrito está vacío, totalProductos será 0
    return (
        <section className="header">
            <img src="/img/logo.svg" alt="Logo de la tienda" className="logo" />
            <nav className="navbar">
                <ul>
                    <li className="nav-links">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'noActive'
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'noActive'
                            }>
                            Nosotros
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <Link to="/carrito" className="icon-button">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="counter">{totalProductos}</span>
                </Link>
            </div>
        </section>
    );
}

export default NavBar;
