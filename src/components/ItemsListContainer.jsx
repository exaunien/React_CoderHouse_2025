import { useEffect, useState } from 'react';
import { db } from '../data/db';
import Items from './Items';

function ItemsListContainer({ category, title }) {
    // Recibir category desde props
    console.log('Categoría recibida en ItemsListContainer:', category);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Categoría recibida en ItemsListContainer:', category);

        const filtrado = category
            ? db.filter((producto) => producto.category === category)
            : db;

        console.log('Productos filtrados:', filtrado);
        setData(filtrado);
    }, [category]); // useEffect se ejecutará cada vez que category cambie

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center text-uppercase my-5">{title}</h2>
            <div className="row mt-5">
                {data.map((item) => (
                    <Items
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        category={item.category} // Aquí pasamos la categoría correctamente
                        id={item.id}
                    />
                ))}
            </div>
        </main>
    );
}

export default ItemsListContainer;
