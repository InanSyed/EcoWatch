import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from "../../firebase.config.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const LoginScreen = ({ onToggleSignUp, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInError, setLogInError] = useState(false);
  const [logInErrorText, setLogInErrorText] = useState("");


  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      setLogInError(false);
      setLogInErrorText("");
      console.log("User logged in successfully");
    } catch (error) {
      setLogInError(true);
      setLogInErrorText(error.message)
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="m-5 flex place-items-center flex-col">
      <h1 className="text-6xl m-2 mb-10 content-center">Login</h1>
      <form>
        <label className="m-2 flex place-items-center flex-col text-2xl content-center text-emerald-600">
          Email
          <input
            className="p-2 mt-2 rounded-lg bg-transparent border-2 "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="my-6 flex place-items-center flex-col text-2xl content-center text-emerald-600">
          Password
          <input
            className="p-2 mt-2 rounded-lg bg-transparent border-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="flex flex-col place-items-center">
          <button
            type="button"
            className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'
            onClick={handleLogin}
          >
            Login
          </button>
          {
            logInError && <p className="font-xl text-red-600">{logInErrorText}</p>
          }
          <span>Don't have an account? <button type="button" onClick={onToggleSignUp}><u>Sign Up</u></button></span>
        </div>
      </form>
    </div>
  );
};
