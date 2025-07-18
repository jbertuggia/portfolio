import './proyects.css'
import 'animate.css'

const Proyects = () => {
  return (
    <>
      <div id="proyects" data-aos="fade-up" className="proyectsContainer">

        <div className="proyectContainer" >

          <div className='videoContainer'>
            <video autoPlay muted loop src="/img/video1.mp4"></video>
          </div>

          <div className="infoContainer">
            <h2>Mi portfolio fotográfico</h2>
            <p>Mi hobbie es la fotografía y decidí armar un portfolio en donde mostrar mi trabajo.
              El mismo esta realizado con HTML y CSS. Tambien se ha utilizado Bootstrap y algunas biblotecas para dar animación.</p>
            <a className='linkButton'target='_blank' href="https://jbertuggia.github.io/proyectoWebFinal/">Link al proyecto</a>
          </div>

        </div>

        <div className="proyectContainer" >
          <div className="infoContainer">
            <h2>E-Commerce de informática "PC LUX"</h2>
            <p>E-commerce de venta de productos informáticos. Se usó React JS, css para darle estilo y algunas biblotecas como Toastify para dar animación.</p>
            <a className='linkButton' target='_blank' href="https://proyecto-final-react-plum.vercel.app/">Link al proyecto</a>
          </div>
          <div className='videoContainer'>
            <video autoPlay muted loop src="/img/video2.mp4"></video>
          </div>
        </div>

      </div>
    </>
  )
}

export default Proyects