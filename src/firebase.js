import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBEVZ5pSoEfmBuowRHkGF0crFtAxCr_ITM",
    authDomain: "react-app-2d562.firebaseapp.com",
    projectId: "react-app-2d562",
    storageBucket: "react-app-2d562.appspot.com",
    messagingSenderId: "11631902354",
    appId: "1:11631902354:web:e86b329daed89fa7f0b04b"
})

export const auth = app.auth()
export default app