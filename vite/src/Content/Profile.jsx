import React from "react";
import { getAuth, signOut } from "firebase/auth";

export const Profile = ({ user, setLoggedIn, setPage }) => {
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("User logged out successfully");
      setLoggedIn(false)
      setPage('login')
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="m-5 flex place-items-center flex-col">
      <h2 className="text-6xl m-2 mb-10 content-center">Profile Page</h2>
      {user ? (
        <p className="text-2xl content-center text-emerald-600">Welcome, {user.email}!</p>
      ) : (
        <p className="text-2xl content-center text-emerald-600">Welcome, Guest!</p>
      )}
      <button
        type="button"
        className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
