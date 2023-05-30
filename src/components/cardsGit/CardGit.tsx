import { useState } from 'react'
import './styles.css'
import { FaGitAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightRotate, faArrowLeftRotate} from '@fortawesome/free-solid-svg-icons'

const CardGit = () => {
  const [virado, setVirado] = useState(false)


  return (
    <div className="gitCard"  onClick={()=> setVirado(virado?false:true)}>
      <div className="flipper" style={{transform: virado?'rotateY(-180deg)':''}}>
        <div className='gitCardFront' >
            <h4 id='tituloRep'>Titulo</h4>
            <div id='logo'>
                <FaGitAlt size="40px" />
            </div>
            <a id='linkRep'>Ver repositório</a>
            <div className="rotateIcon">
              <FontAwesomeIcon icon={faArrowLeftRotate} onClick={()=> console.log("cliquei")}/>
            </div>
            <p id='dataPubli' >06/10/2003</p>
        </div>
          <div className="gitCardBack">
              <h1>Descrição</h1>
              <p>Este projeto é um projeto utilizado para gerar automaticamente pois nao ha nda dito que nao possa ser redito pois assim ha completa clarividencia de tamanha prolixidade</p>
              <FontAwesomeIcon style={{position: 'absolute', right: '12', bottom: '8'}} icon={faArrowRightRotate}/>
          </div>
      </div>
    </div>
  )
}

export default CardGit
