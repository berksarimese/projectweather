import React from 'react'
import Logo from  '../images/Logo.png'


function Navbar() {
  return ( 
    <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
        Project Weather
      </a>
    </div>
  </nav>
  )
}

export default Navbar;