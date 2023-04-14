import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGolang, faReact, faDocker, faJs } from '@fortawesome/free-brands-svg-icons'

type EduProps = {
  institution : string
  name : string
  extraInfo : string | null
}

function Edu(props : EduProps) : JSX.Element{
  let imageURI : string = props.institution === "Platzi" ? "../platzi.jpeg" : "../mdc.jpeg"
  return(
    <div className='edu'>
      <div className='logo'>
        <img src={imageURI} height="30%" width="100%"/>
      </div>
      <div className='edu-info'>
        <h4>{props.institution}</h4>
        <h5>{props.name}</h5>
        {props.extraInfo ? <span className='minimal-info'>{props.extraInfo}</span> : null}
      </div>
    </div>
  )
}

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
        <div id="college-header">
          <h2>Education</h2>
        </div>

        <div id="college">
          <Edu institution='Miami Dade College'
          name='Associates in Arts, Computer Science'
          extraInfo='2018-present' />
          <Edu institution='Platzi'
          name='Algorithmic Complexity with Javascript'
          extraInfo="2022"/>
          <Edu institution='Platzi'
          name='Data Structures with Javascript'
          extraInfo='2022'/>
          <Edu institution='Platzi'
          name="Go Advanced: Event Driven Architecture and CQRS"
          extraInfo="2022"/>
          <Edu institution='Platzi'
          name='Go Advanced: Concurrency and Design Patterns'
          extraInfo='2022'/>
          <Edu institution='Platzi'
          name='Go Advanced: Rest and Websockets'
          extraInfo='2022'/>
        </div>

        <div id="skills">
          <div id="skills-header">
            <h2>Skills</h2>
          </div>

          <div id="skills-list">
            <FontAwesomeIcon icon={faReact} size='1x'/>
            <span>React</span>
            <span>Ts</span>
            <span>Typescript</span>
            <FontAwesomeIcon icon={faJs} size='1x'/>
            <span>Javascript</span>
            <FontAwesomeIcon icon={faGolang} size='1x'/>
            <span>Golang</span>
            <FontAwesomeIcon icon={faDocker} size='1x'/>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
