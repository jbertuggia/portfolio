import './contact.css'

const Contact = () => {


  return (
    <div id="contact" className='contact'>
        <h3>Gracias por llegar hasta acá!</h3>
        <p>Espero que mi dedicación se haya visto plasmada en mis proyectos.</p>

          <div className='contactLinks'>
        <h5>Puedes contactarme en los siguientes links:</h5>
        <a href="https://ar.linkedin.com/in/juan-marcos-bertuggia-69b332223?trk=public_profile_browsemap" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.png" alt="" /></a>
          <a href="mailto:juan.bertuggia@gmail.com"><img src="/img/gmail.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Contact