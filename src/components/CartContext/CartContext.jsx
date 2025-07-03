import { createContext, useState, useContext } from 'react';
const CartContext = createContext();

// Exportamos el hoock para que pueda ser utilizado en otros componentes
export const useCart = () => useContext(CartContext);

// Creamos el proveedor del contexto del carrito
// Este componente envolverá a los componentes que necesiten acceder al carrito
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

    // Funciones para actualizar la cantidad de un producto
    const actualizarCantidad = (id, cantidad) => {
        setCarrito((prevCarrito) =>
            prevCarrito.map((item) =>
                item.id === id ? { ...item, cantidad } : item
            )
        );
    };

    // Función para eliminar un producto del carrito
    // Esta función recibe el id del producto a eliminar

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
