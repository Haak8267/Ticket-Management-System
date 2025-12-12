// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6xAzxZ7G_ekO8vtHE2uAJaqyER0eOR_8",
  authDomain: "ticket-system-58128.firebaseapp.com",
  projectId: "ticket-system-58128",
  storageBucket: "ticket-system-58128.firebasestorage.app",
  messagingSenderId: "1005615127754",
  appId: "1:1005615127754:web:f3555e448f2a4739fd2833",
  measurementId: "G-WSTD8YLLGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };