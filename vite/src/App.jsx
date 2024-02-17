import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

export default App
