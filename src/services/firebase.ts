// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'ventura-e1865.firebaseapp.com',
    projectId: 'ventura-e1865',
    storageBucket: 'ventura-e1865.appspot.com',
    messagingSenderId: '658474063946',
    appId: '1:658474063946:web:16a47ff8f722a94f5e6eb3',
    measurementId: 'G-JRK3JF655J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
