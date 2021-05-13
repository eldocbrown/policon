import React, { useState } from 'react'

import Nav from './Nav'
import Header from './Header'
import Login from './Login'
import './App.css'

function App() {

  const [ navOpen, setNavOpen ] = useState(false)
  const [ userData, setUserData ] = useState(1)

  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <div className='App'>
      <Nav open={navOpen} onClick={closeNav}>
          {userData && (
            <>
              <li className="activePage">Inicio</li>
              <li>Disponibilidad</li>
              <li>Registro</li>
            </>
          )}
      </Nav>
      <Header onClick={openNav}/>
      <Login />
    </div>
  );
}

export default App;
