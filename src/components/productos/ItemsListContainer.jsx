import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductos } from '../../service/getProductos'; // reemplazo al db.js local

//import db from '../../data/db';
import './itemsListContainer.css';

// Componente que muestra una lista de productos
// Utiliza el hook useState para manejar el estado de los productos, orden y filtros

function ItemsListContainer() {
    const [productos, setProductos] = useState([]);
    const [orden, setOrden] = useState('Relevante');
    const [filtros, setFiltros] = useState({ categorias: [] });

    useEffect(() => {
        const fetchData = async () => {
            const productos = await getProductos();
            setProductos(productos);
        };
        fetchData();
    }, []);

    /* Función para alternar los filtros de categorías.*/
    const toggleFiltros = (tipoFiltro, valor) => {
        setFiltros((prev) => ({
            ...prev,
            [tipoFiltro]: prev[tipoFiltro].includes(valor)
                ? prev[tipoFiltro].filter((item) => item !== valor)
                : [...prev[tipoFiltro], valor],
        }));
    };

    /* Filtrar los productos según las categorías seleccionadas.*/
    /* Si no hay categorías seleccionadas, se muestran todos los productos. */

    const productosFiltrados = productos.filter((producto) => {
        const matchCategoria =
            filtros.categorias.length === 0 ||
            filtros.categorias.includes(producto.category);
        return matchCategoria;
    });

    /* Función para manejar el cambio de ordenamiento. */
    /* Dependiendo de la opción seleccionada, se ordenan los productos por precio. */

    const handleOrdenChange = (e) => {
        setOrden(e.target.value);
    };

    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (orden === 'Precio : Menor a Mayor') {
            return a.price - b.price;
        }
        if (orden === 'Precio : Mayor a Menor') {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <section className="main-content">
            <aside className="filtros">
                <h2>Filtros</h2>
                <div className="filtros-categoria">
                    <div className="filtro-categoria">
                        <h3>Categorias</h3>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Cuerdas')
                                }
                            />
                            <span>Cuerdas</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Cursos')
                                }
                            />
                            <span>Cursos</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Guitarras')
                                }
                            />
                            <span>Guitarras</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Teclados')
                                }
                            />
                            <span>Teclados</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Percusion')
                                }
                            />
                            <span>Percusion</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Vientos')
                                }
                            />
                            <span>Vientos</span>
                        </label>
                        <hr />
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    toggleFiltros('categorias', 'Ofertas')
                                }
                            />
                            <span>Ofertas</span>
                        </label>
                    </div>
                </div>
            </aside>
            <main className="collections">
                <div className="options">
                    <h2>Todos los productos</h2>
                    <div className="sort-options">
                        <label>
                            Ordenar por:
                            <select onChange={handleOrdenChange} value={orden}>
                                <option>Relevante</option>
                                <option>Precio : Menor a Mayor</option>
                                <option>Precio : Mayor a Menor</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* Mostrar los productos filtrados y ordenados. */}
                <div className="products">
                    {productosFiltrados.length > 0 ? (
                        productosOrdenados.map((producto) => (
                            <div className="product-card" key={producto.id}>
                                <img
                                    src={`/img/${producto.image}.jpg`}
                                    className="product-image"
                                />
                                <h3>{producto.name}</h3>
                                <p>U$A {producto.price}</p>
                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="active">
                                    Mas Detalles..
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="no-resultados">
                            No hay productos que coincidan con la categoria
                            seleccionada
                        </p>
                    )}
                </div>
            </main>
        </section>
    );
}

export default ItemsListContainer;
