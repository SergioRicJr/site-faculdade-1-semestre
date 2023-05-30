import { FaGithub } from 'react-icons/fa'
import './styles.css'
import CardGit from '../../components/cardsGit/CardGit'

const Projetos = () => {
  return (
    <div className='github'>
        <header id='headerGit'>
            <div id='containerLogo'>
              <FaGithub size="80px" />
            </div>
            <h2>My Projects</h2>
            <select id='contasGit' >
              <option>@SergioRicJr</option>
              <option>@SergioRicJr72</option>
            </select>

        </header>
        <main id='areaCards'>
          <CardGit/>
          <CardGit/>
          <CardGit/>
          <CardGit/>
          <CardGit/>
          <CardGit/>
          <CardGit/>
          <CardGit/>
        </main>
        <div id='contButtonLoad'>
          <button id='loadReps'>Carregar mais</button>
        </div>
    </div>
  )
}

export default Projetos
