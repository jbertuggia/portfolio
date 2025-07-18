import './about.css'

const About = () => {

  return (
    <>
      <div id="about" data-aos="fade-down" className="aboutContainer">

        <div  className="photoContainer">
          <img src="/img/perfil.jpg" alt="" />
        </div>

        <div className="textContainer">
          <p>Hola! Soy Juan Marcos Bertuggia, y estoy empezando este camino como desarrollador web.
            Soy técnico IT hace mas de 10 años pero ahora busco ir por otros caminos y seguir creciendo.
            Decidí realizar cursos para front-end, empezando por lo básico (HTML, CSS, Javascript) hasta la intruducción a frameworks,en mi caso, a React Js.
            Les dejo mis proyectos que hice durante este tiempo de estudio, en donde van a poder ver las distintas herramientas y conocimientos implementados.
          </p>
        </div>

      </div>
    </>
  )
}

export default About