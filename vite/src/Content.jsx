import { useState, useEffect } from "react";

import { LoginScreen } from "./Content/LoginScreen.jsx";
import { SignUpScreen } from "./Content/SignUpScreen.jsx";
import { HomeScreen } from "./Content/Challenges.jsx";
import { DiscoverScreen } from "./Content/Discover.jsx";
import { LandingPage } from "./Content/LandingPage.jsx";
import { Profile } from "./Content/Profile.jsx";
import { getAuth } from "firebase/auth";


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


export const Content = ({ page, setPage, loggedIn, setLoggedIn }) => {



    if (page == "landing") return <div className="flex-1 grow">
        <LandingPage />
    </div>

    if (page == "login") return <div className="flex-1 grow">
        <Login setLoggedIn={setLoggedIn} setPage={setPage} />
    </div>

    if (page == "profile") return <div className="flex-1 grow">
        <Profile loggedIn={loggedIn} setPage={setPage} setLoggedIn={setLoggedIn} user={getAuth().currentUser}/>
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