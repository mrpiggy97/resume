import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGolang, faReact, faDocker, faJs } from '@fortawesome/free-brands-svg-icons'

type EduProps = {
  institution : string
  name : string
  extraInfo : string | null
}

function Edu(props : EduProps) : JSX.Element{
  let imageURI : string = props.institution === "Platzi" ? "/assets/platzi.jpeg" : "/assets/mdc.jpeg"
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

type ProjectProps = {
  name : string
  description : string
  link : string
  imageURI : string | null
}

function Project(props : ProjectProps) : JSX.Element{
  return(
    <div className='proyect'>
      <div className='proyect-name'>
        <h4>{props.name}</h4>
      </div>
      <div className="proyect-link">
        <a className='social' href={props.link} target="_blank">click here to see {props.name}</a>
      </div>
      <div className='proyect-description'>
        <span>{props.description}</span>
      </div>
      <div className='proyect-image'>
        {props.imageURI ? <img src={props.imageURI} width="100%" height="100%" /> : null}
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
        <h5>English-Spanish</h5>
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
          <a className='social' href='https://www.linkedin.com/in/fabian-jesus-rivas' target="_blank">linkedin/in/fabian-jesus-rivas</a>
        </div>
        <div className='social-link'>
          <FontAwesomeIcon icon={faGithub} size='1x'/>
          <a className='social' href='https://www.github.com/mrpiggy97' target='_blank'>github.com/mrpiggy97</a>
        </div>
      </div>

      <div id="proyects">
        <h2>Projects</h2>
        <Project
        name="mypathfinder"
        link="https://boisterous-cocada-9ea93b.netlify.app/"
        description="mypathfinder was built with React.js and Typescript,
                    its objective was to make a project that implements Dijkstra's
                    algorithm with animations that show you how the graph grows to
                    find the end node. It was deployed using netlify"
        imageURI="./src/assets/mypathfinder.gif"/>
        <Project
        name='restClient'
        link='https://github.com/mrpiggy97/restClient'
        description="restClient is a chat app built in React.js and Typescript
                    that uses WebSockets and rest's proyect api to connect users"
        imageURI="./src/assets/restClient.gif"
        />
        <Project
        name='rest'
        link='https://github.com/mrpiggy97/rest'
        description='rest is an api built with Go that serves restClient proyect,
                    it receives messages and sends them to users through WebSockets'
        imageURI={null}
        />
        <Project
        name='cqrs'
        link='https://github.com/mrpiggy97/cqrs'
        description='cqrs is a proyect built in Go that implements cqrs and elastic search,
                    its objective was to build services based on event driven architecture'
        imageURI={null}
        />
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
            <span>Go</span>
            <FontAwesomeIcon icon={faDocker} size='1x'/>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
