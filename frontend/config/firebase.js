// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaqFonv195HfwUo57d44Nwy8lulBBSw3w",
    authDomain: "nuscampuscompass.firebaseapp.com",
    projectId: "nuscampuscompass",
    storageBucket: "nuscampuscompass.appspot.com",
    messagingSenderId: "612672545476",
    appId: "1:612672545476:web:6874831b53bb3b8d3fdf91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };