import './proyects.css'
import 'animate.css'

const Proyects = () => {
  return (
    <>
      <div id="proyects" className="proyectsContainer">

        <div className="proyectContainer1" >
          <h2 className="proyectTitleMobile1" data-aos="fade-up">Mi portfolio fotográfico</h2>
          <div data-aos="fade-up" className='videoContainer1'>
            <video autoPlay muted loop src="/img/video1.mp4"></video>
          </div>

          <div className="infoContainer1">
            <h2 className="proyectTitleWeb1" data-aos="fade-up">Mi portfolio fotográfico</h2>
            <p data-aos="fade-up">Mi hobbie es la fotografía y decidí armar un portfolio en donde mostrar mi trabajo.
              El mismo esta realizado con HTML y CSS. Tambien se ha utilizado Bootstrap y algunas biblotecas para dar animación. La app es responsive.</p>
            <a data-aos="fade-up" className='linkButton1' target='_blank' href="https://jbertuggia.github.io/proyectoWebFinal/">Link al proyecto</a>
          </div>

        </div>

        <div className="proyectContainer2" >
          <h2 className="proyectTitleMobile2" data-aos="fade-up">E-Commerce de informática "PC LUX"</h2>
          <div className="infoContainer2">
            <h2 className="proyectTitleWeb2" data-aos="fade-up">E-Commerce de informática "PC LUX"</h2>
            <p data-aos="fade-up">E-commerce de venta de productos informáticos. Se usó React JS, css para darle estilo y algunas biblotecas como Toastify para dar animación.</p>
            <a data-aos="fade-up" className='linkButton2' target='_blank' href="https://proyecto-final-react-plum.vercel.app/">Link al proyecto</a>
          </div>
          <div data-aos="fade-up" className='videoContainer2'>
            <video autoPlay muted loop src="/img/video2.mp4"></video>
          </div>
        </div>

      </div>
    </>
  )
}

export default Proyects