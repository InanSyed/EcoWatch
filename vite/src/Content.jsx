import { useState } from "react";

import { LoginScreen } from "./LoginScreen.jsx";
import { SignUpScreen } from "./SignUpScreen.jsx";

export const Login = ({ setLoggedIn }) => {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleToggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <>
            {showSignUp ? (
                <SignUpScreen onCloseSignUp={handleToggleSignUp} />
            ) : (
                <LoginScreen onToggleSignUp={handleToggleSignUp} setLoggedIn={setLoggedIn} />
            )}
        </>
    );
}


export const Content = ({ page, loggedIn, setLoggedIn }) => {
    if(!loggedIn) return <div className="flex-1 grow">
            <Login setLoggedIn={setLoggedIn} />
        </div>

    if(page == "empty") return <div className="flex-1 grow">
        empty page
    </div>

    else return <div className="flex-1 grow">
        404 Error. Couldnt find: {page}
    </div>

}