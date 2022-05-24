// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDekgVKcPCmGowCZb_zp7OXdjJyXVM1Z_U",
  authDomain: "stateful-counter-1f12c.firebaseapp.com",
  projectId: "stateful-counter-1f12c",
  storageBucket: "stateful-counter-1f12c.appspot.com",
  messagingSenderId: "563241930461",
  appId: "1:563241930461:web:5fd6796db8caae2d0e5534",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
