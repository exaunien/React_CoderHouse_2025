// Para poder ver detalles de un producto

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProductoById = async (id) => {
    const ref = doc(db, 'productos', id);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};
