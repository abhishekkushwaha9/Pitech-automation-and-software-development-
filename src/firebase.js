import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIvGqZ1hRd15yi9rKa7bljPnpoyMxY-Zs",
  authDomain: "pitech-admin.firebaseapp.com",
  projectId: "pitech-admin",
  storageBucket: "pitech-admin.firebasestorage.app",
  messagingSenderId: "572829679341",
  appId: "1:572829679341:web:1e14644f6bffe5413796e4",
  measurementId: "G-8KK94NZ6K8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
