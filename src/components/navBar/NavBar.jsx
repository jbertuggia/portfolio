import './navBar.css'
import { useState, useEffect } from 'react'

const NavBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  
  
  const handleScroll = () => {
    if (isOpen) setIsOpen(false);
  }

  document.addEventListener("mousedown", handleClickOutside)
  window.addEventListener("scroll", handleScroll)

  return (
    <>
      <nav className="navContainer">

        <button className='burguerButton' onClick={toggleMenu}> ☰ </button>

        <ul className={`linkContainer ${isOpen ? "open" : ""}`}>
          <li className="navLink"><a href="#about" >Sobre mi</a></li>
          <li className="navLink"><a href="#proyects">Mis proyectos</a></li>
          <li className="navLink"><a href="#contact" >Contacto</a></li>
        </ul>

        {children}

      </nav>

    </>
  )
}

export default NavBar