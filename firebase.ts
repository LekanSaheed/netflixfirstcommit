// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDy5kBNer6QVBK1qek_LmRjhRsAni9EI8U",
//   authDomain: "netflix-clone-5f553.firebaseapp.com",
//   projectId: "netflix-clone-5f553",
//   storageBucket: "netflix-clone-5f553.appspot.com",
//   messagingSenderId: "957978688432",
//   appId: "1:957978688432:web:4973433e3a23c51244f475"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDy5kBNer6QVBK1qek_LmRjhRsAni9EI8U",
      authDomain: "netflix-clone-5f553.firebaseapp.com",
      projectId: "netflix-clone-5f553",
      storageBucket: "netflix-clone-5f553.appspot.com",
      messagingSenderId: "957978688432",
      appId: "1:957978688432:web:4973433e3a23c51244f475"
    };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }