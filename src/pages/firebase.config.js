// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnEj04We-tD3hXNbej-pJxFpoJfSaFW80",
    authDomain: "otp-login-ada6d.firebaseapp.com",
    projectId: "otp-login-ada6d",
    storageBucket: "otp-login-ada6d.appspot.com",
    messagingSenderId: "659829451872",
    appId: "1:659829451872:web:591adda7f1f7d672a36705",
    measurementId: "G-QVGQZHFX5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
