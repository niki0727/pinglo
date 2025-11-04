/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIdmpTRMov2LdgF2r_QJwBrBCTrfKw5wE",
  authDomain: "pinglo-42acc.firebaseapp.com",
  projectId: "pinglo-42acc",
  storageBucket: "pinglo-42acc.firebasestorage.app",
  messagingSenderId: "45459761010",
  appId: "1:45459761010:web:5161f602772ce752a31feb",
  measurementId: "G-M4NGH1G73B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
