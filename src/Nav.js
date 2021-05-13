import React, { useState } from 'react'

import './Nav.css'

function Nav(props) {

  const navClassName = props.open ? 'Nav Nav-open' : 'Nav'

  return (
    <nav className={navClassName}>
      <div className="Nav-inner-wrapper">
        <svg viewBox="0 0 32 37" className="Nav-exit-btn" onClick={() => props.onClick()}>
          <path d="M15.9,4.492a3,3,0,0,1,5.194,0L34.4,27.5A3,3,0,0,1,31.8,32H5.2a3,3,0,0,1-2.6-4.5Z" transform="translate(35) rotate(90)"/>
        </svg>
        <ul className='Nav-menu-list'>
          {props.children}
        </ul>
      </div>
    </nav>
  )

}

export default Nav;
