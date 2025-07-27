// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   // initialise your firebase project
import { getAuth } from "firebase/auth";     // used to work with firebase authentication 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATPxKGVtv_cLujVip3DyAmMxxMrl_ZmWE",
  authDomain: "wordiksha.firebaseapp.com",
  projectId: "wordiksha",
  storageBucket: "wordiksha.firebasestorage.app",
  messagingSenderId: "625083706362",
  appId: "1:625083706362:web:335c6fe4bef084b382d243"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const db = getFirestore(app)
export default app