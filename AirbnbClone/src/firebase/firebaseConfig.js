import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

// Firebase Configuration
// This script initializes Firebase with the given configuration for the application.
// It exports the initialized authentication and firestore instances for use throughout the app.


const firebaseConfig = {
  apiKey: "AIzaSyC91JQvrOxDGEM9iUt80Il15ciqWVHhtto",
  authDomain: "airbnbapp-98610.firebaseapp.com",
  projectId: "airbnbapp-98610",
  storageBucket: "airbnbapp-98610.appspot.com",
  messagingSenderId: "31268038130",
  appId: "1:31268038130:web:2e10ad94ddd2c1340ef76b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
