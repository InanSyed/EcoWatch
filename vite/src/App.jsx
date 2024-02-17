import React, { useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { SignUpScreen } from "./SignUpScreen";

import { Header } from "./Header.jsx";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <Header></Header>
      <div>
        {showSignUp ? (
          <SignUpScreen onCloseSignUp={handleToggleSignUp} />
        ) : (
          <LoginScreen onToggleSignUp={handleToggleSignUp} />
        )}
      </div>
    </>
  );
}

export default App;