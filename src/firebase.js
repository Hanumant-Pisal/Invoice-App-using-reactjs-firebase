
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB9E90IkElWZiXkUo79StroMmAtkNF_eI4",
  authDomain: "invoice-application-16069.firebaseapp.com",
  projectId: "invoice-application-16069",
  storageBucket: "invoice-application-16069.appspot.com",
  messagingSenderId: "1073488601321",
  appId: "1:1073488601321:web:3c0fc0094b8e16c9d2d078",
  measurementId: "G-TJ9MX64MGJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export const storage = getStorage(); 
export const db = getFirestore(app);