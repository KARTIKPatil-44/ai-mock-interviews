import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr9tCnXjvdH5Yijnoz6cYgJzVLiF6L960",
  authDomain: "prepwise-92c58.firebaseapp.com",
  projectId: "prepwise-92c58",
  storageBucket: "prepwise-92c58.firebasestorage.app",
  messagingSenderId: "856184585061",
  appId: "1:856184585061:web:7ac66b3afb61cbde09bf8c",
  measurementId: "G-SQHBV7XRG2"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);