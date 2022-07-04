// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNAzGBBSHNiBU0TOJK1lg3j5rzCnaAt8",
  authDomain: "dominator-cdef6.firebaseapp.com",
  projectId: "dominator-cdef6",
  storageBucket: "dominator-cdef6.appspot.com",
  messagingSenderId: "557632340747",
  appId: "1:557632340747:web:8d0e26ec91f63afc38980e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export default auth;