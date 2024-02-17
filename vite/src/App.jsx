import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

import { Header } from './Header.jsx'
import { Navbar } from './Navbar.jsx'

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="h-screen flex align-center flex-col">
      <Header />

      <div className="flex-1 grow">
        <h1>ECOWatch</h1>
        {showSignUp ? (
          <SignUpScreen onCloseSignUp={handleToggleSignUp} />
        ) : (
          <LoginScreen onToggleSignUp={handleToggleSignUp} />
        )}
      </div>

      <Navbar />
    </div>
  );
}

export default App;