import { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Lógica que gestiona el estado del carrito
    const agregarAlCarrito = (productoNuevo) => {
        setCarrito((carritoAnterior) => {
            const productoExistente = carritoAnterior.find(
                (item) => item.id === productoNuevo.id
            );

            if (productoExistente) {
                // Si ya existe, sumamos uno a su cantidad
                return carritoAnterior.map((item) =>
                    item.id === productoNuevo.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                // Si no existe, lo agregamos con cantidad 1
                return [...carritoAnterior, { ...productoNuevo, cantidad: 1 }];
            }
        });
    };

    const actualizarCantidad = (id, cantidad) => {
        setCarrito((prevCarrito) =>
            prevCarrito.map((item) =>
                item.id === id ? { ...item, cantidad } : item
            )
        );
    };

    const eliminarProducto = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.filter((item) => item.id !== id)
        );
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                agregarAlCarrito,
                actualizarCantidad,
                eliminarProducto,
            }}>
            {children}
        </CartContext.Provider>
    );
};
