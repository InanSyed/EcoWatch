import React, { useState } from "react";

import { Header } from './Header.jsx'
import { Navbar } from './Navbar.jsx'
import { Content } from './Content.jsx'

const App = () => {
  const [page, changePage] = useState("empty");

  return (
    <div className="h-screen flex align-center flex-col">
      <Header />
      <Content page={ page } />
      <Navbar />
    </div>
  );
}

export default App;