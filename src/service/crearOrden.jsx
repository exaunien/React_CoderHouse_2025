import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const crearOrden = async (carrito, total) => {
    const orden = {
        items: carrito.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            cantidad: item.cantidad,
        })),
        total,
        fecha: Timestamp.now(),
    };

    const ref = collection(db, 'ordenes');
    const docRef = await addDoc(ref, orden);
    return docRef.id;
};
