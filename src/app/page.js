"use client";
import { useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <main>
      <h1 className="text-4xl mx-3">Home</h1>
      <SignUp />
      <SignIn />
    </main>
  );
}
