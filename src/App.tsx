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
  let imageURI : string = props.institution === "Platzi" ? "/images/platzi.jpeg" : "/images/mdc.jpeg"
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

type FrontendProps = {
  name : string
  description : string
  link : string
  githubUrl : string
  imageURI : string
}

function Frontend(props : FrontendProps) : JSX.Element{
  return(
    <div className='proyect'>
      <div className='proyect-name'>
        <h4>{props.name}</h4>
      </div>
      <div className="proyect-link">
        <a className="social" href={props.link} target='_target'>click here to see {props.name}</a>
        <a className="social" href={props.githubUrl} target="_blank">github repo</a>
      </div>
      <div className='proyect-description'>
        <span>{props.description}</span>
      </div>
      <div className='proyect-image'>
        <img src={props.imageURI} width="100%" height="100%" />
      </div>
    </div>
  )
}

type BackendProps = {
  name : string,
  description : string,
  githubUrl : string
}

function Backend(props : BackendProps) : JSX.Element{
  return(
    <div className='proyect'>
      <div className='proyect-name'>
        <h4>{props.name}</h4>
      </div>
      <div className="proyect-link">
        <a className="social" href={props.githubUrl} target="_blank">github repo</a>
      </div>
      <div className='proyect-description'>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

type Service = {
  name : string,
  link : string
  imageUrl : string | null
}

type MicroServicesProps = {
  name : string,
  description : string,
  services : Service[]
}

function MicroServices(props : MicroServicesProps) : JSX.Element{
  let servicesWithImage : Service[] = props.services.filter((service, index) => {
    if(service.imageUrl){
      return service
    }
  })
  let imageUrl : string = ""
  if(servicesWithImage[0].imageUrl !== null){
    imageUrl = servicesWithImage[0].imageUrl
  }

  return(
    <div className='proyect'>
      <div className='proyect-name'>
        <h4>{props.name}</h4>
      </div>
      <div className="proyect-link">
        {props.services.map((service) => {
        return <a className='social' href={service.link} target="_blank">click here to see {service.name}</a>
        })}
      </div>
      <div className='proyect-description'>
        <span>{props.description}</span>
      </div>
      <div className='proyect-image'>
        {imageUrl ? <img src={imageUrl} width="100%" height="100%" /> : null}
      </div>
    </div>
  )
}

function App()  {

  let restBackend : Service = {
    name: "rest backend",
    link: "https://www.github.com/mrpiggy97/rest",
    imageUrl : null,
  }
  let restFrontend : Service = {
    name : "rest frontend",
    link: "https://www.github.com/mrpiggy97/restClient",
    imageUrl: "/images/restClient.gif",
  }
  let microservices : Service[] = [restBackend,restFrontend]

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
        <Frontend
        name="mypathfinder"
        link="https://boisterous-cocada-9ea93b.netlify.app/"
        description="mypathfinder was built with React.js and Typescript,
                    its objective was to make a project that implements Dijkstra's
                    algorithm with animations that show you how the graph grows to
                    find the end node. It was deployed using netlify"
        githubUrl='https://www.github.com/mrpiggy97/mypathfinder'
        imageURI="/images/mypathfinder.gif"/>
        <Frontend
        name='space simulation'
        link='https://zingy-hotteok-ae1f96.netlify.app/'
        description="a 3d simulation of the solar sisytem, it was built using
                    React.js, Typescript and Three.js"
        githubUrl='https://www.github.com/mrpiggy97/space-simulation'
        imageURI="/images/space-simulation.gif"
        />
        <MicroServices
        name='rest'
        services={microservices}
        description='a collection of microservies, rest was built with go, it receives
                    messages and sends them to users through websockets, rest client
                    was built using React.js and typescript and it connects users with backend'
        />
        <Backend
        name='cqrs'
        description='cqrs is a proyect built in Go that implements cqrs and elastic search,
                    its objective was to build services based on event driven architecture'
        githubUrl='https://www.github.com/mrpiggy97/cqrs'
        />
      </div>

      <div id="education">
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
      </div>
    </div>
  )
}

export default App
