// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY6EPYeufrUYQyVhv3K3NdI9mKt3AunUc",
  authDomain: "auth-project-43d06.firebaseapp.com",
  projectId: "auth-project-43d06",
  storageBucket: "auth-project-43d06.appspot.com",
  messagingSenderId: "9613796057",
  appId: "1:9613796057:web:d7bdfbd680acd0b454d4c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { provider, auth };
