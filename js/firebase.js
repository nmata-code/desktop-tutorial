/*
  Inicialización de Firebase
  Exporta:
  - db (base de datos)
  - auth (autenticación)
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAOMhAT7KHYs6Zp69TrwSA1sInqcKaMXU",
  authDomain: "primerparcial-44eae.firebaseapp.com",
  databaseURL: "https://primerparcial-44eae-default-rtdb.firebaseio.com",
  projectId: "primerparcial-44eae",
  storageBucket: "primerparcial-44eae.firebasestorage.app",
  messagingSenderId: "632389962342",
  appId: "1:632389962342:web:43f078f3a0472bdc4ffba7"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);