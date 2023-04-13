import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function App()  {

  return (
    <div id="app">

      <div id="name">
        <h2>Fabian Jesus Rivas</h2>
        <h4>Full Stack Developer</h4>
        <span id="location">Cochabamba, Bolivia</span>
      </div>

      <div id="links">
        <div className='social-link'>
          <FontAwesomeIcon icon={faEnvelope} size='1x'/>
          <span>fabyjesusrivas10@gmail.com</span>
        </div>
        <div className='social-link'>
          <FontAwesomeIcon icon={faPhone} size='1x'/>
          <span>+(591)75952622</span>
        </div>
        <div className='social-link'>
          <FontAwesomeIcon icon={faLinkedin} size='1x'/>
          <a className='social' href='https://www.linkedin.com/in/fabian-jesus-rivas'>linkedin/in/fabian-jesus-rivas</a>
        </div>
        <div className='social-link'>
          <FontAwesomeIcon icon={faGithub} size='1x'/>
          <a className='social' href='https://www.github.com/mrpiggy97'>github.com/mrpiggy97</a>
        </div>
      </div>

      <div id="proyects">
        <span>projects go here</span>
      </div>

      <div id="education">
        <span>edu goes here</span>
      </div>

    </div>
  )
}

export default App
