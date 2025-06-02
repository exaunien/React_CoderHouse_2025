import { db } from '../data/db';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemsDetail from './ItemsDetail';

function ItemsDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const idNumber = Number(id);
        const foundItem = db.find((item) => Number(item.id) === idNumber);

        console.log('Producto encontrado:', foundItem);

        if (foundItem) {
            setItem(foundItem);
        } else {
            console.warn('Producto no encontrado, item no se actualizará.');
        }
    }, [id]);

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center text-uppercase my-5">
                Detalles del Producto
            </h2>
            {item && <ItemsDetail item={item} />}
        </main>
    );
}
export default ItemsDetailContainer;
