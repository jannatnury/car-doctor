// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDITkow3nN4CFD3aVCEDwo9Wj-nHfUQ4KY",
  authDomain: "manufecturer-website.firebaseapp.com",
  projectId: "manufecturer-website",
  storageBucket: "manufecturer-website.appspot.com",
  messagingSenderId: "823816444192",
  appId: "1:823816444192:web:91c6aa7887bfdb77039f45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;