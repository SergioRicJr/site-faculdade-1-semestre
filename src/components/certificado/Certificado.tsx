import { Button, Link, Tooltip } from '@chakra-ui/react'
import './styles.css'
import ConteudoCertificado from './ConteudoCertificado'
import { LinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faInfo, faLink } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

const Certificado = ({svgIcon, titulo, link, listaConteudos, cargaHoraria}: any) => {
  const [estadoAberto, setEstadoAberto] = useState(false)
  
  return (
      <div className='certificado' style={{width: estadoAberto?"220px":"44px"}} onClick={()=> estadoAberto?null:setEstadoAberto(true)}>
        <div className="certificadoEsquerda" style={{width:estadoAberto?"176px":"0px", padding: estadoAberto?"5px":"0px"}}>
          <div className="cimaCertificado">
            {estadoAberto?svgIcon:null}
            <h2 className='tituloCertificado' style={{width: estadoAberto?"206px":"177px",fontSize: estadoAberto?"16px":"14px",right: estadoAberto?"":"-66px",top: estadoAberto?"60px":"65.1px", transform: estadoAberto?"":"rotate(-90deg)"}}>{titulo}</h2>
          </div>
          {estadoAberto?(
              <div className="baixoCertificado">
              <Tooltip label={<ConteudoCertificado listaConteudos={listaConteudos} cargaHoraria={cargaHoraria} />} openDelay={50}>
                <div className="containerInfo">
                  <FontAwesomeIcon icon={faInfo} />
                </div>
              </Tooltip>
              <a className="containerLink" href={link}>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          ):''}
        </div>
        <div className="certificadoDireita" style={{padding: estadoAberto?"5px":"0px"}}>
          {estadoAberto?(
            <div onClick={() => {
              setEstadoAberto(() => false)
              console.log(estadoAberto)
              }} className="containerFechaCert">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          ):''}
        </div>
      </div>
  )
}

export default Certificado
