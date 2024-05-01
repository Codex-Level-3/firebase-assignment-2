# Next.js Firebase Authentication Assignment 2

## Objective

To reinforce your understanding of Firebase Authentication within a Next.js application by incorporating comprehensive authentication mechanisms, managing user sessions, and implementing access control through protected routes.

## Project Overview

This project implements comprehensive authentication methods using Firebase Authentication within a Next.js application. It includes email/password authentication, integration of Google Sign-In, managing user sessions, and implementing access control through protected routes.

## Getting Started

### Next.js Setup

1. Create Next.js Project.

```bash
npx create-next-app@latest {project name}
```

2. Navigate to project directory.

```bash
cd {project directory}
```

3. Link project to created repository.

```bash
git remote add origin https://github.com/{Project Owner}/{repository name}.git
git branch -M main
git push -u origin main
```

### Firebase Setup

1. Create a Firebase project in the Firebase Console.  
   ![alt text](image-7.png)
2. Follow three step guide to create project.  
   ![alt text](image-8.png)  
   ![alt text](image-9.png)  
   ![alt text](image-10.png)
3. Register App as Web App to get configuration code.  
   ![alt text](image-11.png)
   ![alt text](image-12.png)
   ![alt text](image-13.png)
4. Enable Email/Password Authentication and Google Sign-In methods in the Authentication section of your Firebase project.  
   ![alt text](image-15.png)
   ![alt text](image-14.png)
   ![alt text](image-16.png)
   ![alt text](image-17.png)
5. Install firebase.

```bash
npm i firebase
```

6. Create a `firebaseConfig.js` file. Add your Firebase configuration to the `firebaseConfig.js` file.

```js
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
```

## Functionality Overview

### SignUp Component:

The SignUp component enables users to sign up with their email and password. It utilizes Firebase's `createUserWithEmailAndPassword` method to create a new user account securely. Similar to the SignIn component, it also integrates Google Sign-Up functionality for user convenience.

### SignIn Component:

The SignIn component allows users to sign in with their email and password. It utilizes Firebase's `signInWithEmailAndPassword` method for authentication. The component provides feedback for incorrect email or password inputs. Additionally, it integrates Google Sign-In functionality using Firebase's `signInWithPopup` method.

### Dashboard Page:

The Dashboard page is a protected route accessible only to authenticated users. It utilizes React's `useState` and `useEffect` hooks to manage the user's authentication state. If a user is authenticated, their email is displayed, otherwise, a message indicating the protected nature of the page is shown. Unauthenticated users attempting to access the Dashboard are redirected to the login page.

### General Implementation:

Throughout the application, React's `useState` and `useEffect` hooks are employed for state management and side effects. Firebase Authentication methods such as `onAuthStateChanged`, `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, and `signInWithPopup` are used for user authentication. Conditional rendering based on the user's authentication status is employed to show or hide elements related to user information.

## Site Screenshots

### **Initial Site**

![alt text](image.png)

### **Google Popup Signin**

![alt text](image-1.png)

### **Email Signup**

![alt text](image-2.png)

### **Signed In**

Redirects user to the dashboard page after successful sign-in.  
![alt text](image-3.png)

### **Dashboard Forbidden Access**

Accessing the dashboard without being sign-in will show this message and redirect user back to home page.  
![alt text](image-4.png)

### **Console Logs**

![alt text](image-6.png)
![alt text](image-5.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
