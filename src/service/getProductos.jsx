import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProductos = async () => {
    const ref = collection(db, 'productos');
    const snapshot = await getDocs(ref);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
