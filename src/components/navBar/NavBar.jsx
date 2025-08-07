import './navBar.css'
import { useState, useEffect, useRef, use } from 'react'

const NavBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navRef =useRef()
  const buttonRef = useRef()

  useEffect (()=> {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scrol", handleScroll)

  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen])



  return (
    <>
      <nav ref={navRef} className="navContainer">

        <button ref= {buttonRef} className='burguerButton' onClick={toggleMenu}> ☰ </button>

        <ul className={`linkContainer ${isOpen ? "open" : ""}`}>
          <li className="navLink"><a href="#about" >Sobre mi</a></li>
          <li className="navLink"><a href="#proyects">Mis proyectos</a></li>
          <li className="navLink"><a href="#contact" >Contacto</a></li>
        </ul>

          <ul className={`linkContainerMobile ${isOpen ? "open" : ""}`}>
          <li className="navLink"><a href="#hero" >Sobre mi</a></li>
          <li className="navLink"><a href="#proyects">Mis proyectos</a></li>
          <li className="navLink"><a href="#contact" >Contacto</a></li>
        </ul>

        {children}

      </nav>

    </>
  )
}

export default NavBar