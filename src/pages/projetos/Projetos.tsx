import { FaGithub } from 'react-icons/fa'
import './styles.css'
import CardGit from '../../components/cardsGit/CardGit'
import {useState, useEffect} from 'react'
import { Spinner } from '@chakra-ui/react'

const Projetos = () => {
  const [pageGit, setPageGit] = useState(1)
  const [repositories, setRepositories] = useState<any[]>([])
  const [userSelect, setUserSelect] = useState('SergioRicJr')
  const [isLoading, setIsLoading] = useState(true)
  // console.log(pageGit)
  // fetch("https://api.github.com/repos/SergioRicJr/Animation-css/languages")
  // .then((res)=> res.json())
  // .then((ress)=> console.log(ress))
  console.log("o loading " + isLoading)
  useEffect(()=> {
    const getDataGit = async ()=> {
      setIsLoading(()=> true)
      const data = await fetch(`https://api.github.com/users/${userSelect}/repos?per_page=9&page=${pageGit}`)
      const repositories = await data.json()
      setRepositories((prev)=> {
        return [...prev, ...repositories]
      })
    }
    getDataGit().then(()=> setIsLoading(()=> false))
  }, [pageGit, userSelect])
  
  return (
    <div className='github' id='gitHub'>
        <header id='headerGit'>
            <div id='containerLogo'>
              <FaGithub size="80px" />
            </div>
            <h2 id='title-github-projects'>My Projects</h2>
            <div id='paiContasGit'>
              <select id='contasGit' onChange={(event)=> {
                    setRepositories(()=> [])
                    setUserSelect(event.target.value)
                    setPageGit(()=> 1)
                  }
                }>
                <option value='SergioRicJr'>@SergioRicJr</option>
                <option value='SergioNascimento07'>@SergioNascimento07</option>
              </select>
            </div>
        </header>
        <main id='areaCards'>
          {repositories.map((repository)=> <CardGit key={repository.id} title={repository.name} link={repository.html_url} date={repository.created_at.split('T')[0]} description={repository.description}/>)}
        </main>
        <div id='contButtonLoad'>
          {
            isLoading?<Spinner
            marginTop='20px'
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'/>:<button id='loadReps' onClick={()=> setPageGit((pagePrev)=> pagePrev+1)}>Mostrar mais</button>
          }
        </div>
    </div>
  )
}

export default Projetos
