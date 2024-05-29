// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDL5wrzOKvhf3VP1Q4m5mW-dcqWamGgNq8",
  authDomain: "certificate-validation-e886c.firebaseapp.com",
  projectId: "certificate-validation-e886c",
  storageBucket: "certificate-validation-e886c.appspot.com",
  messagingSenderId: "681882668760",
  appId: "1:681882668760:web:c6581a398d70e29e4d11ad",
  measurementId: "G-GKYEVEV3L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}

// const analytics = getAnalytics(app);