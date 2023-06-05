import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSquare, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const RedesSociais = () => {
  return (
    <div className='mainContato'>
      <div className='tituloContato'>
          <h1>Contatos</h1>
      </div>
      <div className="redesSociaisCenter">
        <div className="gridRedesSociais">
          <div className="cont Insta">
            <a href="https://instagram.com"  target='_blank'>
              <FaInstagram />
            </a>
          </div>
          <div className="espacoVazio 1"></div>
          <div className="cont Face">
            <a href="https://facebook.com" target='_blank'>
              <FaFacebookSquare />
            </a>
          </div>
          <div className="espacoVazio 2"></div>
          <div className="central">
            <div className="loader">
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
            </div>
          </div>
          <div className="cont Whats">
            <a href="https://whatsapp.com" target='_blank'>
              <FaWhatsapp />
            </a>
          </div>
          <div className="espacoVazio 3"></div>
          <div className="cont Git">
            <a href="https://github.com/SergioRicJr" target='_blank'>
              <FaGithub/>
            </a>
          </div>
          <div className="espacoVazio 4"></div>
        </div>
      </div>
    </div>
  )
}

export default RedesSociais
