// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
  };


//   REACT_APP_FIREBASE_API_KEY=AIzaSyCDpijZWNuCTX8ptkjyWRF0rWUvh8WpBIs
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-25b71.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-25b71
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-25b71.appspot.com
// REACT_APP_MESSAGING_SENDER=869662147462
// REACT_APP_APP_ID=1:869662147462:web:8945c54f98817bb9bbe207
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app)