// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsp_Drnbr9mIeziBeuBmWv2vL2Q4UVMU0",
  authDomain: "assignment-ten-37dc4.firebaseapp.com",
  projectId: "assignment-ten-37dc4",
  storageBucket: "assignment-ten-37dc4.appspot.com",
  messagingSenderId: "702404005665",
  appId: "1:702404005665:web:e27578e09a83cda5faf860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;