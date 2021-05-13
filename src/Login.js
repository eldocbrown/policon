import React from 'react'

import './Login.css'

function Login(props) {
  return (
    <div className='Login'>
      <h1>Inicio</h1>
      <h3>Email</h3>
      <input className='Login-input' type='email' placeholder='john@doe.com'/>
      <h3>Contraseña</h3>
      <input className='Login-input' type='password' placeholder='*******'/>
      <button className='Login-login-btn'>iniciar</button>
    </div>
  )
}

export default Login
