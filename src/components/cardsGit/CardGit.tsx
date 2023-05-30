import './styles.css'
import { FaGitAlt } from 'react-icons/fa'

const CardGit = () => {
  return (
    <div id='cardGit'>
        <h4 id='tituloRep'>Titulo</h4>
        <div id='logo'>
            <FaGitAlt size="40px" />
        </div>
        <a id='linkRep' >Ver repositório</a>
        <p id='dataPubli' >06/10/2003</p>
    </div>
  )
}

export default CardGit
