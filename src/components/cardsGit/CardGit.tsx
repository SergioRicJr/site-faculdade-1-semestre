import { memo, useState } from 'react'
import './styles.css'
import { FaGitAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightRotate, faArrowLeftRotate, faArrowLeft, faArrowCircleLeft, faArrowCircleRight, faArrowRotateRight, faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'
import { escape } from 'querystring'

const CardGit = ({title, link, date, description}: any) => {
  const [virado, setVirado] = useState(false)

  return (
    <div className="gitCard">
      <div className="flipper" style={{transform: virado?'rotateY(-180deg)':''}}>
        <div className='gitCardFront' >
            <h4 id='tituloRep'>{title}</h4>
            <div id='logo'>
                <FaGitAlt size="40px" />
            </div>
            <a target='_blank' id='linkRep' href={link}>Ver repositório</a>
            <div className="rotateIcon" onClick={()=> setVirado(virado?false:true)} style={{position: 'absolute', left: '0px', bottom: '0px'}}>
              <FontAwesomeIcon icon={faArrowRotateRight}/>
            </div>
            <p id='dataPubli'>{date}</p>
        </div>
          <div className="gitCardBack">
              <h1>Descrição</h1>
              <p style={{overflowY:virado?'scroll':'hidden'}}>{description?description:"Este repositório não possui descrição"}</p>
              <div className="rotateIcon" onClick={()=> setVirado(virado?false:true)} style={{position: 'absolute', right: '12px', bottom: '10px'}}>
                <FontAwesomeIcon icon={faArrowRotateLeft}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default memo(CardGit)
