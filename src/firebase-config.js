import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZoiolL__JCp3ww5kO3laM1fTd472f9c0",
  authDomain: "learning-b9e46.firebaseapp.com",
  projectId: "learning-b9e46",
  storageBucket: "learning-b9e46.appspot.com",
  messagingSenderId: "640890527148",
  appId: "1:640890527148:web:4d4be7a05068e73ff76e09",
  measurementId: "G-VM4M1GFCJJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
