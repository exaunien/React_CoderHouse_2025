import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

// Función para obtener todos los productos de Firestore
// Esta función no recibe parámetros y retorna una lista de productos

export const getProductos = async () => {
    const ref = collection(db, 'productos');
    const snapshot = await getDocs(ref);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
