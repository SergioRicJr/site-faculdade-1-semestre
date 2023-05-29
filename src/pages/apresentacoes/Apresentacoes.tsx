import {FaBroadcastTower, FaDatabase, FaIndustry, FaJava, FaPython} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAtom, faDatabase, faIndustry, faNetworkWired, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import {BancoDeDados} from './conteudos/bandodedados/BancoDeDados'
import {useEffect, useMemo, useRef, useState} from 'react'
import { RedesDeComputadores } from './conteudos/redes/RedesDeComputadores'
import { AutomacaoIndustrial } from './conteudos/automacao/AutomacaoIndustrial'
import { LinguagemDeProgramacao } from './conteudos/programacao/LinguagemDeProgramacao'
import { CienciaDeDados } from './conteudos/cienciadados/CienciaDeDados'
import { motion, useInView, useAnimation} from 'framer-motion'
import BlockMatter from '../../components/matter/BlockMatter'



const Apresentacoes = () => {
  const [materia, setMateria] = useState<JSX.Element>(<BancoDeDados/>)
  const ref = useRef(null)
  const inView = useInView(ref)
  const animation = useAnimation()
  const [selectedTitle, setSelectedTitle] = useState("Banco de dados")
  
  useEffect(()=> {
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    } 
    if (!inView) {
      animation.start({
        x: "-80vw"
      })
    }
    console.log(inView)
  }, [inView])

  const handleMateria = (component: JSX.Element) => {
    setMateria(component)
    
  }

  const listaMaterias = useMemo(()=> {
    return [
      {
        title: "Banco de dados",
        icon: faDatabase,
        handleFunc: handleMateria,
        component: <BancoDeDados/>
      },
      {
        title: "Redes de computadores",
        icon: faNetworkWired,
        handleFunc: handleMateria,
        component: <RedesDeComputadores/>
      },
      {
        title: "Automação industrial",
        icon: faIndustry,
        handleFunc: handleMateria,
        component: <AutomacaoIndustrial/>
      },
      {
        title: "Linguagem de programação",
        icon: faLaptopCode,
        handleFunc: handleMateria,
        component: <LinguagemDeProgramacao/>
      },
      {
        title: "Ciência de dados",
        icon: faAtom,
        handleFunc: handleMateria,
        component: <CienciaDeDados/>
      }
    ]
  }, [])
  
  return (
      <motion.div className="sec"
          ref={ref}
          animate={animation}
        >
        <div className='materias'>
          {
            listaMaterias.map((materia)=> <BlockMatter isSelected={materia.title == selectedTitle} title={materia.title} iconn={materia.icon} 
            handleFunc={()=> {
                materia.handleFunc(materia.component)
                setSelectedTitle(materia.title)
              } 
            }/>)
          }
        </div>
        {materia}
      </motion.div>
  )
}

export default Apresentacoes
