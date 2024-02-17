// App.js
import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div>
      <h1>ECOWatch</h1>
      {showSignUp ? (
        <SignUpScreen onCloseSignUp={handleToggleSignUp} />
      ) : (
        <LoginScreen onToggleSignUp={handleToggleSignUp} />
      )}
    </div>
  );
};

export default App;
