import React from 'react'
import './styles.css'
import { Progress } from '@chakra-ui/react'

const BarraSkill = ({img, nomeHabilidade, nivelNome, valorProgesso}:any) => {
  return (
    <div className="profileSkill">
      <div className="logoSkill">
          <h2>Logo</h2>
          <p>Nome</p>
      </div>
      <div className="progressSkill">
        <h2 className="nivelSkill">nivel: intermediario</h2>
        <Progress style={{borderRadius: '20px'}} colorScheme='green' size='md' value={20} />
      </div>
    </div>
  )
}

export default BarraSkill
