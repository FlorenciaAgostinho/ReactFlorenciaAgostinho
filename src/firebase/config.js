import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA32xoc7w7mSE-qGAU4QiiQMpsBS7D6g1s",
  authDomain: "fionastore-react.firebaseapp.com",
  projectId: "fionastore-react",
  storageBucket: "fionastore-react.firebasestorage.app",
  messagingSenderId: "696316384730",
  appId: "1:696316384730:web:088864f931afa430a31ce3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
