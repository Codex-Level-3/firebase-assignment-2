"use client";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";

export default function SignIn() {
  //State Management
  const [userAuth, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Side Effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //Email + Password Handler
  async function handleEmailSignin(e) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in: ", userCred.user);
      setUser(userCred.user);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  }

  //Google Handlers
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  }

  async function handleGoogleSignOut() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error occured during sign out: ", error);
    }
  }

  return (
    <>
      <h2 className="text-2xl text-indigo-800 font-semibold mx-3">
        Sign In Form
      </h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleEmailSignin}
        >
          Sign In
        </button>
      </form>

      {!userAuth ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-7"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
      ) : (
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-7 mb-8"
          onClick={handleGoogleSignOut}
        >
          Sign Out
        </button>
      )}
    </>
  );
}
