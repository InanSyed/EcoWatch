import { useState } from "react";

import { LoginScreen } from "./LoginScreen.jsx";
import { SignUpScreen } from "./SignUpScreen.jsx";
import { HomeScreen } from "./Challenges.jsx";
import { DiscoverScreen } from "./Discover.jsx";
import { LandingPage } from "./LandingPage.jsx";

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
    if (page == "landing") return <div className="flex-1 grow">
        <LandingPage />
    </div>

    if (page == "login") return <div className="flex-1 grow">
        <Login setLoggedIn={setLoggedIn} />
    </div>

    if (page == "empty") return <div className="flex-1 grow">
        empty page
    </div>

    if (page == "homescreen") return <div className="flex-1 grow">
        <HomeScreen loggedIn={loggedIn}/>
    </div>

    if (page == "discover") return <div className="flex-1 grow">
        <DiscoverScreen loggedIn={loggedIn}/>
    </div>

    else return <div className="flex-1 grow">
        404 Error. Couldnt find: {page}
    </div>

}