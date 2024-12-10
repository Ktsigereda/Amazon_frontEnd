
import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW8zimbr2l0MwM_F323jP1pynZ3ERF0ww",
  authDomain: "clone-f289a.firebaseapp.com",
  projectId: "clone-f289a",
  storageBucket: "clone-f289a.firebasestorage.app",
  messagingSenderId: "894867415628",
  appId: "1:894867415628:web:799db85d4ba4c5c6318ae9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = app.firestore();