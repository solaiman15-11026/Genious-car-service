// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2S1AEtmuLSRWjsa_trIVylTg8eNDQg5Y",
    authDomain: "genius-car-service-efd0c.firebaseapp.com",
    projectId: "genius-car-service-efd0c",
    storageBucket: "genius-car-service-efd0c.appspot.com",
    messagingSenderId: "63360196301",
    appId: "1:63360196301:web:6daea91727cfe213539384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;