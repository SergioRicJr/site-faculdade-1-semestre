import {useEffect} from 'react'
import './styles.css'
import { Progress } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

const BarraSkill = ({idClass,img, nomeHabilidade, nivelNome, valorProgesso}:any) => {
  const animateMy = useAnimation()

  useEffect(()=> {
    const intersect = new IntersectionObserver((entries)=> {
      
      if(entries.some((entry)=> entry.isIntersecting)){
        animateMy.start({
          width: `${valorProgesso}%`,
          transition: {duration: 1.7}
        })
      } else {
        animateMy.start({
          width: 0,
          transition: {duration: 1}
        })
      }

    })
    const elemento = document.querySelector(`.${idClass}`) as Element
    intersect.observe(elemento)
    return ()=> intersect.disconnect()
  }, [])

  return (
    <div className="profileSkill" id={nomeHabilidade}>
      <div className="logoSkill">
          <div className="logoSkillImg">
            {img}
          </div>
          <p>{nomeHabilidade}</p>
      </div>
      <div className={`progressSkill`}>
        <h2 className="nivelSkill">nivel: {nivelNome}</h2>
        <div className={`barraProgresso`}>
          <motion.div animate={animateMy} className={`valueProgresso ${idClass}`} style={{width:0}}></motion.div>
        </div>
      </div>
    </div>
  )
}

export default BarraSkill
