// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuvw2ENkW8Q7YFjrrmG4XjBXbiXIW6h6E",
  authDomain: "pnr-system.firebaseapp.com",
  projectId: "pnr-system",
  storageBucket: "pnr-system.appspot.com",
  messagingSenderId: "1017623523892",
  appId: "1:1017623523892:web:0fb64a1d66859ba7f81061",
  measurementId: "G-F4LJHLRBBX",
  databaseURL: "https://pnr-system-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const rdatabase = getDatabase();

export {app , auth,rdatabase};
