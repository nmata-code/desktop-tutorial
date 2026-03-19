// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

/* Configuración del proyecto Firebase */
const firebaseConfig = {
  apiKey: "AIzaSyDAOMhAT7KHYs6Zp69TrwSA1sInqcKaMXU",
  authDomain: "primerparcial-44eae.firebaseapp.com",
  databaseURL: "https://primerparcial-44eae-default-rtdb.firebaseio.com",
  projectId: "primerparcial-44eae",
  storageBucket: "primerparcial-44eae.firebasestorage.app",
  messagingSenderId: "632389962342",
  appId: "1:632389962342:web:43f078f3a0472bdc4ffba7"
};

/* Inicialización */
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);