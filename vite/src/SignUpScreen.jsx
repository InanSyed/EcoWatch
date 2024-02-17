import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBIToEBBXpngnJymATRKTx5BX7MdnvdXtk",
  authDomain: "ecowatch-c3a72.firebaseapp.com",
  projectId: "ecowatch-c3a72",
  storageBucket: "ecowatch-c3a72.appspot.com",
  messagingSenderId: "361212644337",
  appId: "1:361212644337:web:a79a5546f7ed8edfb95250",
  measurementId: "G-WBY6W9Y0F7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ onCloseSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
      setSignUpSuccess(true);
      onCloseSignUp(); // Close the SignUpScreen after successful signup
    } catch (error) {
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
        <div>
          <h2>Sign Up</h2>
          <form>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>
            <br />
            <span>
              Already have an account?{" "}
              <button type="button" onClick={onCloseSignUp}>
                Login
              </button>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpScreen;
