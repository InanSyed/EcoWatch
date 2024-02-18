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
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpScreen = ({ onCloseSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorText, setSignUpErrorText] = useState("");

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
      setSignUpSuccess(true);
      onCloseSignUp(); // Close the SignUpScreen after successful signup
    } catch (error) {
      setSignUpError(true);
      setSignUpErrorText(error.message)
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div>
      {signUpSuccess ? (
        <div>
          {/* Additional content or actions after successful sign-up */}
        </div>
      ) : (
        <div className="m-5 flex place-items-center flex-col">
          <h1 className="text-6xl m-2 mb-10 content-center">Sign Up</h1>
          <form>
            <label className="m-2 flex place-items-center flex-col text-2xl content-center text-emerald-600">
              Email
              <input
                className="p-2 mt-2 rounded-lg bg-transparent border-2"
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
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              {
                signUpError && <p className="font-xl text-red-600">{signUpErrorText}</p>
              }
              <span>
                Already have an account?{" "}
                <button type="button" onClick={onCloseSignUp}>
                  <u>Login</u>
                </button>
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};