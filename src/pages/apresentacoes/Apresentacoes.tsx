import {FaBroadcastTower, FaDatabase, FaIndustry, FaJava, FaPython} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faDatabase, faIndustry, faNetworkWired, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import {BancoDeDados} from './conteudos/bandodedados/BancoDeDados'
import {useEffect, useRef, useState} from 'react'
import { RedesDeComputadores } from './conteudos/redes/RedesDeComputadores'
import { AutomacaoIndustrial } from './conteudos/automacao/AutomacaoIndustrial'
import { LinguagemDeProgramacao } from './conteudos/programacao/LinguagemDeProgramacao'
import { CienciaDeDados } from './conteudos/cienciadados/CienciaDeDados'
import { motion, useInView, useAnimation} from 'framer-motion'

const Apresentacoes = () => {
  const [materia, setMateria] = useState<JSX.Element>(<BancoDeDados/>)
  const ref = useRef(null)
  console.log(ref)
  const inView = useInView(ref)
  const animation = useAnimation()
  
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
  
  const handleDb = ()=> {
    setMateria(<BancoDeDados/>)
  }

  const handleRedes = ()=> {
    setMateria(<RedesDeComputadores/>)
  }

  const handleAut = ()=> {
    setMateria(<AutomacaoIndustrial/>)
  }

  const handleLing = ()=> {
    setMateria(<LinguagemDeProgramacao/>)
  }

  const handleCienciaDados = ()=> {
    setMateria(<CienciaDeDados/>)
  }

  return (
      <motion.div className="sec"
          ref={ref}
          animate={animation}
        >
        <div className='materias'>
          <div className='block' onClick={handleDb}>
            <FontAwesomeIcon icon={faDatabase} inverse size='3x' />
            <b>Banco de dados</b>
          </div>
          <div className='block' onClick={handleRedes}>
            <FontAwesomeIcon icon={faNetworkWired} inverse size='3x' />
            <b>Redes de computadores</b>
          </div>
          <div className='block' onClick={handleAut}>
            <FontAwesomeIcon icon={faIndustry} inverse size='3x' />
            <b>Automação indústrial</b>
          </div>
          <div className='block' onClick={handleLing}>
            <FontAwesomeIcon icon={faLaptopCode} inverse size='3x'/>
            <b>Linguagem de programação</b>
          </div>
          <div className='block' onClick={handleCienciaDados}>
            <FontAwesomeIcon icon={faAtom} inverse  size="3x"/>
            <b>Ciência de dados</b>
          </div>
        </div>
        {materia}
      </motion.div>
  )
}

export default Apresentacoes
