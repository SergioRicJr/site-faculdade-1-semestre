import ImgTech from '../../components/imgtech/imgtech'
import Waves from '../../components/waves/waves'
import Header from '../../components/header/header'
import './styles.css'
import { Button } from '@chakra-ui/react'

const Inicial = () => {
  return (
    <div id='principal'>
        <Header></Header>
          <main id='mainPrincipal1'>
            <div id='sec1'>
              <h2 id='titulo-pagina'>Primeiro semestre ADS</h2>
            </div>
            <ImgTech/>
          </main>
          <Waves/>
    </div>
  )
}

export default Inicial
