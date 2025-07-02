import './cart.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { crearOrden } from '../../service/crearOrden';

const CartWidget = () => {
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [idOrden, setIdOrden] = useState(null);

    const { carrito, actualizarCantidad, eliminarProducto, setCarrito } =
        useCart();

    const costoDeEnvio = 10; // Costo de envío fijo
    const subTotal = carrito.reduce(
        (total, producto) => total + producto.price * producto.cantidad,
        0
    );
    const total = subTotal + costoDeEnvio;

    const handleCheckout = async () => {
        const total = subTotal + costoDeEnvio;

        try {
            const id = await crearOrden(carrito, total);
            setIdOrden(id);
            setCarrito([]);
            setCompraFinalizada(true);
        } catch (error) {
            console.error('Error al generar la orden:', error);
        }
    };

    // Funciones para manejar la suma y resta de cantidades
    // y la eliminación de productos del carrito
    const handleSumarCantidad = (id, cantidadActual) => {
        if (cantidadActual < 5) {
            actualizarCantidad(id, cantidadActual + 1);
        }
    };
    const handleRestarCantidad = (id) => {
        const producto = carrito.find((item) => item.id === id);
        if (producto.cantidad > 1) {
            actualizarCantidad(id, producto.cantidad - 1);
        }
    };

    return (
        <div className="cart-container">
            {compraFinalizada ? (
                <div className="checkout-confirmation">
                    <h2>🎉 ¡Gracias por tu compra!</h2>
                    <p>
                        Tu orden ha sido procesada con éxito. El ID de tu orden
                        es:
                        <h3 className="order-id">
                            <strong>{idOrden}</strong>
                        </h3>{' '}
                    </p>
                    <p>
                        Pronto recibirás la confirmación en tu correo
                        electrónico.
                    </p>
                    <Link
                        to="/"
                        className="text-uppercase text-decoration-none fw-bold">
                        Volver a pagina Principal
                    </Link>
                </div>
            ) : (
                <>
                    <h2>
                        TU <span>Carrito</span>
                    </h2>
                    {carrito.length === 0 ? (
                        <p className="text-center">
                            Esta VACIO puedes volver a la{' '}
                            <a
                                className="text-uppercase text-decoration-none fw-bold"
                                href="/">
                                pagina principal
                            </a>
                        </p>
                    ) : (
                        <>
                            <div className="cart-header">
                                <p>Producto</p>
                                <p>Precio</p>
                                <p>Cantidad</p>
                                <p>Total</p>
                                <p>Accion</p>
                            </div>
                            <ul className="cart-items">
                                {carrito.map((producto) => {
                                    const totalPrecio =
                                        producto.price * producto.cantidad;
                                    return (
                                        <li
                                            key={producto.id}
                                            className="cart-item">
                                            <div className="product-info">
                                                <img
                                                    src={`/img/${producto.image}.jpg`}
                                                    alt={producto.name}
                                                    className="product-images"
                                                />
                                                <span>{producto.name}</span>
                                            </div>
                                            <p className="product-price">
                                                U$A {producto.price.toFixed(2)}
                                            </p>

                                            <div className="quantity-controls">
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() =>
                                                        handleRestarCantidad(
                                                            producto.id
                                                        )
                                                    }>
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="quantity-input"
                                                    readOnly
                                                    value={producto.cantidad}
                                                />
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() =>
                                                        handleSumarCantidad(
                                                            producto.id,
                                                            producto.cantidad
                                                        )
                                                    }
                                                    disabled={
                                                        producto.cantidad >= 5
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                            <p className="product-price">
                                                U$A {totalPrecio.toFixed(2)}
                                            </p>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    eliminarProducto(
                                                        producto.id
                                                    )
                                                }>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            {producto.cantidad >= 5 && (
                                                <span className="max-limit-msg">
                                                    Máximo 5 unidades por
                                                    producto
                                                </span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                    {carrito.length > 0 && (
                        <div
                            className={`cart-summary ${
                                carrito.length > 0 ? 'show' : ''
                            }`}>
                            <h2>
                                TU <span>Carrito</span>
                            </h2>
                            <p className="product-price">
                                Subtotal :<span>U$A {subTotal.toFixed(2)}</span>
                            </p>
                            <p className="product-price">
                                Costo de envio :
                                <span>U$A {costoDeEnvio.toFixed(2)}</span>
                            </p>
                            <p className="total">
                                Total :<span>U$A {total.toFixed(2)}</span>
                            </p>
                            <button
                                className="checkout-btn"
                                onClick={handleCheckout}>
                                <i className="fas fa-shopping-cart"></i>{' '}
                                Finalizar Compra
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CartWidget;
