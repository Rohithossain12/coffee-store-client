// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Vmmf74o_Gmd1jzfO6tiBuLmzN3U9V8o",
  authDomain: "coffee-store-two-b65f4.firebaseapp.com",
  projectId: "coffee-store-two-b65f4",
  storageBucket: "coffee-store-two-b65f4.firebasestorage.app",
  messagingSenderId: "987171081920",
  appId: "1:987171081920:web:66a2ebc4ee177d2e03e725",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
