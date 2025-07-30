import './hero.css'

const Hero = () => {
    return (
        <div id="hero" className="heroContainer animate__animated animate__pulse">
            <div className='textHeroContainer'>
                <h1>Bienvenidos a mi portfolio</h1>
              <div className='linkContactContainer'>
        <a href="https://ar.linkedin.com/in/juan-marcos-bertuggia-69b332223?trk=public_profile_browsemap" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.png" alt="" /></a>
          <a href="mailto:juan.bertuggia@gmail.com"><img src="/img/gmail.png" alt="" /></a>
      </div>
            </div>
            <img className='heroProfileImg' src="/img/perfil.png" alt="" />
        </div>
    )
}

export default Hero