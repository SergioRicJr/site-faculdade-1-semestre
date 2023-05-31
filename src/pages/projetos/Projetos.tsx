import { FaGithub } from 'react-icons/fa'
import './styles.css'
import CardGit from '../../components/cardsGit/CardGit'
import {useState, useEffect} from 'react'

const Projetos = () => {
  const [pageGit, setPageGit] = useState(1)
  const [repositories, setRepositories] = useState<any[]>([])
  // console.log(pageGit)
  // fetch("https://api.github.com/repos/SergioRicJr/Animation-css/languages")
  // .then((res)=> res.json())
  // .then((ress)=> console.log(ress))
  
  useEffect(()=> {
    console.log(pageGit)
    fetch(`https://api.github.com/users/SergioRicJr/repos?per_page=9&page=${pageGit}`)
    .then((response)=> response.json())
    .then((repositories)=> setRepositories(prev => {
      console.log([...prev, ...repositories])
      return [...prev, ...repositories]}))
  }, [pageGit])

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
          {repositories.map((repository)=> <CardGit key={repository.id} title={repository.name}/>)}
        </main>
        <div id='contButtonLoad'>
          <button id='loadReps' onClick={()=> setPageGit((pagePrev)=> pagePrev+1)}>Carregar mais</button>
        </div>
    </div>
  )
}

export default Projetos
