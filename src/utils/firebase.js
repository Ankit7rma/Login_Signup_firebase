import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrg0GZ2LPDAFLf6YAz1eEEB9tsBYNLJ2o",
  authDomain: "firestore-auth-2136d.firebaseapp.com",
  projectId: "firestore-auth-2136d",
  storageBucket: "firestore-auth-2136d.appspot.com",
  messagingSenderId: "245978117177",
  appId: "1:245978117177:web:ccaac9185a28c7250609e8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore() 