// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLX2n52Q4pZ093RHvjXeCSVLECQoWpeU8",
  authDomain: "ecommercy-pf.firebaseapp.com",
  projectId: "ecommercy-pf",
  storageBucket: "ecommercy-pf.appspot.com",
  messagingSenderId: "1022845848678",
  appId: "1:1022845848678:web:b25cfaa4ae2d79dc3231a7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp