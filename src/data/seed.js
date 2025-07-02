// seed.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db as productos } from './db.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCGZsatK3ZF_ObWWi7ytW2FbCOUpp21Ll4',
    authDomain: 'coderreact73700.firebaseapp.com',
    projectId: 'coderreact73700',
    storageBucket: 'coderreact73700.firebasestorage.app',
    messagingSenderId: '884801365832',
    appId: '1:884801365832:web:422e3230b589819635357d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const subirProductos = async () => {
    const ref = collection(db, 'productos');
    for (const item of productos) {
        await addDoc(ref, item);
        console.log(`✔️ Subido: ${item.nombre}`);
    }
    console.log('✅ Todos los productos fueron subidos con éxito.');
};

subirProductos();
