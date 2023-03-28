// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClMC3BAPOhBmGAwqN5-6VGD2G4wakQ24I",
  authDomain: "r-auth-158fe.firebaseapp.com",
  projectId: "r-auth-158fe",
  storageBucket: "r-auth-158fe.appspot.com",
  messagingSenderId: "98384428338",
  appId: "1:98384428338:web:1b857afc2bec0851166b2b",
  measurementId: "G-B7LQNZ62RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);