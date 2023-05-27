import ImgTech from '../../components/imgtech/imgtech'
import Waves from '../../components/waves/waves'
import Header from '../../components/header/header'
import './styles.css'

const Inicial = () => {
  return (
    <>
        <Header></Header>
          <main>
            <div id='sec1'>
              <h2 id='titulo-pagina' >Primeiro semestre ADS</h2>
              <div className='buttons' >
                <button>Saiba mais</button>
                <button>Outro botão</button>
              </div>
            </div>
            <ImgTech/>
          </main>
          <Waves/>
    </>
  )
}

export default Inicial
