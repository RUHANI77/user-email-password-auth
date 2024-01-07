// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWH5Ey3TT7GiomplBpSH55wfO9qsdBvs8",
  authDomain: "user-email-password-auth-355b8.firebaseapp.com",
  projectId: "user-email-password-auth-355b8",
  storageBucket: "user-email-password-auth-355b8.appspot.com",
  messagingSenderId: "500609550706",
  appId: "1:500609550706:web:c1d4bba9713ccbad7035eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;