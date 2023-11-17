import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTD_5HHWs7atJantrRSwXMMXV4JK7d6oQ",
  authDomain: "provokedev-decfb.firebaseapp.com",
  projectId: "provokedev-decfb",
  storageBucket: "provokedev-decfb.appspot.com",
  messagingSenderId: "907011234896",
  appId: "1:907011234896:web:85a8bc5407718a94158555",
  measurementId: "G-EEPDRMS5T9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }