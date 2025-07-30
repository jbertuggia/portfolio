
//css de App
import './app.css'

//funciones de react
import { useState, useEffect } from 'react'

import NavBar from "./components/navBar/NavBar"
import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Proyects from "./components/proyects/Proyects"
import Footer from './components/footer/Footer'
import DarkModeToggle from './components/darkModeToggle/DarkModeToggle'
import Contact from './components/contact/Contact'

//Animaciones librerias
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  //Variable de estado para el toggle modo oscuro
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => setDarkMode(!darkMode)

  //Inicializa AOS en los componentes
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={darkMode ? "appDark" : "app"}>
      <NavBar >
        <DarkModeToggle darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </NavBar>
      <Hero />
      <About />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
