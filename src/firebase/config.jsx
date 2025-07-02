import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuracion de Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCGZsatK3ZF_ObWWi7ytW2FbCOUpp21Ll4',
    authDomain: 'coderreact73700.firebaseapp.com',
    projectId: 'coderreact73700',
    storageBucket: 'coderreact73700.firebasestorage.app',
    messagingSenderId: '884801365832',
    appId: '1:884801365832:web:422e3230b589819635357d',
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la referencia a Firestore
export const db = getFirestore(app);
