// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI",
  authDomain: "immo-portail.firebaseapp.com",
  projectId: "immo-portail",
  storageBucket: "immo-portail.appspot.com",
  messagingSenderId: "903030755314",
  appId: "1:903030755314:web:c67816803b3d2a3519256b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const auth = getAuth(app);
