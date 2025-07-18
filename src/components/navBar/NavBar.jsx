import './navBar.css'

const NavBar = ({children}) => {

  return (
    <>
      <nav className="navContainer">

        <section className="linkContainer">
          <a href="#about" className="navLink">Sobre mi</a>
          <a href="#proyects" className="navLink">Mis proyectos</a>
          <a href="#contact" className="navLink">Contacto</a>
        </section>
        {children}
      </nav>
    </>
  )
}

export default NavBar