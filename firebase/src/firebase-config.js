// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX7Iz2WBRsmuECA_cGsOmP56u1CM5JR4Q",
  authDomain: "react-firebase-5228b.firebaseapp.com",
  projectId: "react-firebase-5228b",
  storageBucket: "react-firebase-5228b.appspot.com",
  messagingSenderId: "412073157757",
  appId: "1:412073157757:web:2fbb6ae95990ec6bea7d14",
  measurementId: "G-B464K3EBM 5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
