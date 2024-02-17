import { useState } from "react";

import { LoginScreen } from "./LoginScreen.jsx";
import { SignUpScreen } from "./SignUpScreen.jsx";

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleToggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <>
            {showSignUp ? (
                <SignUpScreen onCloseSignUp={handleToggleSignUp} />
            ) : (
                <LoginScreen onToggleSignUp={handleToggleSignUp} />
            )}
        </>
    );
}

const pages = {
    "empty": <></>,
    "login": <Login />
}

export const Content = ({page}) => {
    return (
        <div className="flex-1 grow">
            { pages[page] }
        </div>
    )
}