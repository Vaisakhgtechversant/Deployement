import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace this with your actual Firebase config from the Firebase Console!
const firebaseConfig = {
  apiKey: "AIzaSyDooMnJPMRbFUILNiGlblX2hgypE58FzYY",
  authDomain: "deployement-ca1e2.firebaseapp.com",
  projectId: "deployement-ca1e2",
  storageBucket: "deployement-ca1e2.firebasestorage.app",
  messagingSenderId: "318465288893",
  appId: "1:318465288893:web:d3fc33c3b84eda7e38a5d4",
  measurementId: "G-ZCLY8BFX71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
