import './about.css'

const About = () => {

  return (
    <>
      <div id="about" data-aos="fade-down" className="aboutContainer">

        <div  className="photoContainer">
          <img src="/img/perfil.jpg" alt="" />
        </div>

        <div className="textContainer">
          <p>Hola! Soy Juan Bertuggia, y estoy empezando en este camino de desarrollo web.
            Soy técnico IT hace mas de 10 años y estoy buscando crecer e ir por otros rumbos.
            Decidi empezar a realizar cursos sobre desarrollo web, empezando por lo basico (HTML, CSS, Javascript) hasta la intruducción a frameworks,en mi caso, a React Js.
          </p>
        </div>

      </div>
    </>
  )
}

export default About