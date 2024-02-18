import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header.jsx'
import { Navbar } from './Navbar.jsx'
import { Content, Login } from './Content.jsx'

const App = () => {
  const [page, changePage] = useState("landing");
  const [loggedin, setloggedin] = useState(false);

  return (
    <div className="h-screen flex align-center flex-col">
      <Header changePage={changePage} loggedIn={loggedin} />
      <Content page={page} setPage={changePage} loggedIn={loggedin} setLoggedIn={setloggedin} />
      <Navbar setPage={changePage} />
    </div>
  );
}

export default App;