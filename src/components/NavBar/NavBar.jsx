import React from 'react'
import "./NavBar.css"
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
  <div className="container-fluid">
    <img src="./images/fire2.png" className='fire' alt="" /> 
    <header className="navbar-brand" >Fire Developer</header>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvaslightNavbar" aria-controls="offcanvaslightNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvaslightNavbar" aria-labelledby="offcanvaslightNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvaslightNavbarLabel">MERN Stack Developer</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="hero" className="nav-link nav-list " >Hero</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link nav-list" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" className="nav-link nav-list" >Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="project" className="nav-link nav-list" >Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="exp" className="nav-link nav-list" >Experience</Link>
          </li>
          <Link to="contact" className="contact-btn" >Contact</Link>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    

    </>
  )
}

export default NavBar