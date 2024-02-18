import React, { useState } from "react";

import { Header } from './Header.jsx'
import { Navbar } from './Navbar.jsx'
import { Content, Login } from './Content.jsx'

const App = () => {
  const [page, changePage] = useState("test");
  const [loggedin, setloggedin] = useState(false);

  // const pages = {
  //   "empty": <></>,
  //   "login": <Login setLoggedIn={setloggedin} />,
  //   "test": <h1>inan touches me</h1>
  // }

  return (
    <div className="h-screen flex align-center flex-col">
      <Header changePage={changePage} loggedIn={loggedin} />
      <Content page={page} loggedIn={loggedin} setLoggedIn={setloggedin} />
      <Navbar />
    </div>
  );
}

export default App;