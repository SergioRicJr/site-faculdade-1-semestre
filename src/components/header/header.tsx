import Switch from '../switch/switch'
import './index.css'
import { useState } from 'react';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <header id='headerPrincipal'>
      <svg className='button-header' onClick={toggleMenu} width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 12L7 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 8L21 12L17 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 4L9.8589 19.4548" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <div id='links-header' style={menuVisible ? {
        display: 'block'
      } : {
        display: 'none'
      }}>
        <h5 className='header-link'><a href="#conteudosPro">Conteúdos</a></h5>
        <h5 className='header-link'><a href="#gitHub">Projetos</a></h5>
        <h5 className='header-link'><a href="#titleSkills">Habilidades</a></h5>
        <h5 className='header-link'><a href="#certificados">Certificados</a></h5>
      </div>
    </header>
  )
}

export default Header
