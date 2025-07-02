import { useParams } from 'react-router-dom';
//import db from '../../data/db';
import './itemsListContainer.css';
import { useEffect, useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { getProductoById } from '../../service/getProductosById'; // reemplazo al db.js local

function ItemsDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    const { carrito, agregarAlCarrito } = useCart();

    const handleAgregarAlCarrito = () => {
        const productoEnCarrito = carrito.find(
            (item) => item.id === producto.id
        );
        const cantidadActual = productoEnCarrito
            ? productoEnCarrito.cantidad
            : 0;

        if (cantidadActual < 5) {
            agregarAlCarrito({
                id: producto.id,
                image: producto.image,
                name: producto.name,
                price: producto.price,
                cantidad: 1, // se suma de a uno
            });
        } else {
            alert('Solo puedes agregar hasta 5 unidades de este producto 🚫');
        }
    };

    useEffect(() => {
        getProductoById(id)
            .then((res) => {
                console.log('Producto recibido:', res);
                setProducto(res);
            })

            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Cargando Producto....</p>;
    }

    return (
        <div className="product-details">
            {producto ? (
                <>
                    <img
                        src={`/img/${producto.image}.jpg`}
                        alt={producto.name}
                        className="image-small"
                    />
                    <img
                        src={`/img/${producto.image}.jpg`}
                        alt={producto.name}
                    />
                    <div className="product-infos">
                        <h1>{producto.name}</h1>
                        <p className="description">{producto.description}</p>
                        <p className="price">U$A {producto.price}</p>

                        <p className="nota">
                            Producto 100% original. Politica de devolucion y
                            cambio facil dentro de los 7 dias
                        </p>
                        <button
                            className="add-to-cart"
                            onClick={handleAgregarAlCarrito}>
                            Agregar al carrito
                        </button>
                    </div>
                </>
            ) : (
                <p>Cargando Producto....</p>
            )}
        </div>
    );
}

export default ItemsDetailContainer;
