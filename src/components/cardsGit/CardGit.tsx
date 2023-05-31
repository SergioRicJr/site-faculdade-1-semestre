import { memo, useState } from 'react'
import './styles.css'
import { FaGitAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightRotate, faArrowLeftRotate, faArrowLeft, faArrowCircleLeft, faArrowCircleRight, faArrowRotateRight, faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'

const CardGit = ({title, link, date, description}: any) => {
  const [virado, setVirado] = useState(false)

  console.log("renderizando " + title)
  return (
    <div className="gitCard"  onClick={()=> setVirado(virado?false:true)}>
      <div className="flipper" style={{transform: virado?'rotateY(-180deg)':''}}>
        <div className='gitCardFront' >
            <h4 id='tituloRep'>{title}</h4>
            <div id='logo'>
                <FaGitAlt size="40px" />
            </div>
            <a id='linkRep' href={link} >Ver repositório</a>
            <div className="rotateIcon">
              
              <FontAwesomeIcon icon={faArrowRotateRight} onClick={()=> console.log("cliquei")}/>
            </div>
            <p id='dataPubli'>{date}</p>
        </div>
          <div className="gitCardBack">
              <h1>Descrição</h1>
              <p style={{overflowY:virado?'scroll':'hidden'}}>{description}</p>
              <FontAwesomeIcon style={{position: 'absolute', right: '12', bottom: '12'}} icon={faArrowRotateLeft}/>
          </div>
      </div>
    </div>
  )
}

export default memo(CardGit)
