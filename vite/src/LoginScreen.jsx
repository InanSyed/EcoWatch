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
const analytics = getAnalytics(app);import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ onToggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <span>Don't have an account? <button type="button" onClick={onToggleSignUp}>Sign Up</button></span>
      </form>
    </div>
  );
};

export default LoginScreen;
