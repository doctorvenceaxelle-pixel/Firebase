// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4HakmB5F_nb8BlVNrYidT64rqGJo57Ww",
  authDomain: "gettingstartedwithfireba-68118.firebaseapp.com",
  projectId: "gettingstartedwithfireba-68118",
  storageBucket: "gettingstartedwithfireba-68118.firebasestorage.app",
  messagingSenderId: "986709355524",
  appId: "1:986709355524:web:ab46452080efe8b279d951",
  measurementId: "G-EK1G1BSWTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const status = document.getElementById("firebase-status");
if (status) {
  status.textContent = `Firebase initialized successfully for project "${app.options.projectId}".`;
}
const analytics = getAnalytics(app);
console.log("Firebase initialized successfully");
