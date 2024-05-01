"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import SignIn from "../SignIn";

export default function page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
    });
    return () => unsub();
  }, []);
  const router = useRouter();
  return (
    <>
      <h1 className="text-4xl mx-3">Dashboard</h1>
      {user ? (
        <>
          <SignIn />
          <h2 className="text-2xl font-semibold mx-7">
            Welcome back, {user.displayName}
            {user.email}!
          </h2>
        </>
      ) : (
        <p className="text-3xl text-pink-800 font-semibold mt-3 mx-7">
          This page is protected!
        </p>
      )}
    </>
  );
}
