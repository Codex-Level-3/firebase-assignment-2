"use client";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";

export default function SignUp() {
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
  async function handleEmailSignup(e) {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up: ", userCred.user);
      setUser(userCred.user);
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  }

  //Google Handlers
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error("Error signing up with Google: ", error);
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
      <h2 className="text-2xl text-emerald-900 font-semibold mx-3">
        Sign Up Form
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleEmailSignup}
        >
          Sign Up
        </button>
      </form>

      {!userAuth ? (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-8 mx-7"
          onClick={handleGoogleSignIn}
        >
          Google Sign Up
        </button>
      ) : (
        <button
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-7"
          onClick={handleGoogleSignOut}
        >
          Sign Out
        </button>
      )}
    </>
  );
}
