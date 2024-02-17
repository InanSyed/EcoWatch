import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

import { Navbar } from './Navbar.jsx'
import { Header } from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar className='flex-1' />
    </>
  )
}

export default App;