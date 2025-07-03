import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Función para crear una orden en Firestore
// Esta función recibe el carrito y el total de la compra
// y crea un documento en la colección 'ordenes' con los detalles de la compra
// Retorna el ID del documento creado

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
