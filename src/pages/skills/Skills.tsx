import { Button } from '@chakra-ui/react'
import './styles.css'
import Certificado from '../../components/certificado/Certificado'

const listaCertificados = [
  {
    titulo: "titulo extremamente grande para testar isso",
    svgIcon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 50 50" xmlSpace="preserve"><style>.st3stroke:#444;stroke-miterlimit:10;stroke-width:.4;fill:#444</style><path fill="#afe55d" d="M6.7 38.2l5.6 3.3L45.8 23l-.1-7.3c0-1.6-.9-3.1-2.3-4l-16-9.3c-1.4-.8-3.2-.8-4.6 0L6.7 11.7c-1.4.8-2.3 2.3-2.3 4v18.6c0 1.6.9 3.1 2.3 3.9z"/><path fill="#c3ff68" d="M33.9 6.2l-6.5-3.8c-1.4-.8-3.2-.8-4.6 0L6.7 11.7c-1.4.8-2.3 2.3-2.3 4l-.3 7.8L33.9 6.2z"/><path fill="#444" d="M25 49.4c-1 0-2-.3-2.9-.8L6 39.3c-1.8-1-2.9-3-2.9-5V15.7c0-2.1 1.1-4 2.9-5l16.1-9.3c1.8-1 4-1 5.8 0L44 10.7c1.8 1 2.9 3 2.9 5v13.7c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2V15.7c0-1.2-.6-2.3-1.7-2.9L26.7 3.5c-1-.6-2.3-.6-3.3 0L7.2 12.8c-1 .6-1.7 1.7-1.7 2.9v18.6c0 1.2.6 2.3 1.7 2.9l16.1 9.3c1 .6 2.3.6 3.3 0l4.4-2.6c.6-.3 1.3-.1 1.7.4.3.6.1 1.3-.4 1.7l-4.4 2.6c-.9.5-1.9.8-2.9.8z"/><g id="_x31_2_00000133486750505226466470000001425074538917832366_"><circle cx="15.4" cy="15.4" r=".6" className="st3"/><circle cx="17.4" cy="15.4" r=".6" className="st3"/><circle cx="19.4" cy="15.4" r=".6" className="st3"/><path d="M33 36.6H14c-.9 0-1.5-.7-1.5-1.5V14.7c0-.9.7-1.5 1.5-1.5h22.2c.9 0 1.5.7 1.5 1.5v19.7c0 .2.2 0 0 0s-.8-.4-.8-.6V14.7c0-.4-.3-.8-.8-.8H13.9c-.4 0-.8.3-.8.8V35c0 .4.3.8.8.8h18.4c.3 0 .7.6.7.8 0 .2.2 0 0 0z" className="st3"/><path d="M37.3 17.7H12.8c-.2 0 .1-.2.1-.4s-.3-.4-.1-.4h24.5c.2 0 .4.2.4.4 0 .3-.2.4-.4.4zM31 29.4c-.1 0 .6-.1.2.2l-1.4-1.4-.1.1c-.2.2-.4.2-.6 0-.2-.2-.2-.4 0-.6l.3-.3c.2-.2.4-.2.6 0l1.9 1.9c.2.2.1.4 0 .3-.2-.2-.8-.2-.9-.2zm-1.6 2.7c-.1 0-.2 0-.3-.1l-1.9-1.9c-.2-.2-.2-.4 0-.6l.3-.3c.2-.2.4-.2.6 0 .2.2.2.4 0 .6l1.3 1.3c.2.2.2.4 0 .6-.1 0 .1.4 0 .4z" className="st3"/><path d="M27 30c-.8 0-1.5-.3-2.1-.9-2.7-2.7-1.5-7.6-1.5-7.8 0-.2.2-.3.3-.3.2 0 .3 0 .4.2 1.3 1.9 2.5 2.5 3.5 2.9.5.2 1 .4 1.4.8 1.2 1.2 1.2 3.1 0 4.2-.5.6-1.2.9-2 .9zm-3-7.6c-.2 1.5-.3 4.4 1.4 6.2.4.4 1 .6 1.5.6.6 0 1.1-.2 1.5-.6.9-.9.9-2.2 0-3.1-.3-.3-.7-.5-1.2-.7-.8-.3-1.9-.8-3.2-2.4zm18 21.1c-.3 0-.6-.1-.9-.3-.5-.4-1-.8-1.7-1.3-2-1.5-4.8-3.7-6.9-5.7-2.7-2.5-3.8-4.3-3.5-5.6 0-.1.1-.1.1-.2l1.5-1.5c.1-.1.2-.1.4-.1 3.4.7 7.8 6.6 10.8 10.6.5.7 1 1.3 1.3 1.7.5.6.4 1.4-.1 1.9-.3.4-.6.5-1 .5zM29.7 31c-.1.7.4 2 3.3 4.7 2.1 2 4.9 4.1 6.9 5.6.7.5 1.2.9 1.7 1.3.1.1.3.1.4.1.2 0 .3-.1.5-.2.2-.2.3-.6.1-.9-.4-.5-.8-1.1-1.3-1.8-2.7-3.5-7.1-9.4-10.1-10.2L29.7 31zM21 27h-5.5c-.2 0-.4-.2-.4-.4s.2-.4.4-.4H21c.2 0 .4.2.4.4 0 .3-.2.4-.4.4zm1 1.8h-6.6c-.2 0-.4-.2-.4-.4s.2-.4.4-.4H22c.2 0 .4.2.4.4s-.2.4-.4.4zm1.1 1.8h-7.7c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h7.7c.2 0 .4.2.4.4s-.2.4-.4.4zm-2.3-5.3h-5.2c-.2 0-.4-.2-.4-.4v-1.5c0-.2.2-.4.4-.4h5.2c.2 0 .4.2.4.4v1.5c0 .2-.1.4-.4.4zm-4.8-.8h4.4v-.7H16v.7z" className="st3"/></g><path fill="none" stroke="#444" stroke-miterlimit="10" d="M28.3 19.9h2.1V22h-2.1zm4.3 0h2.1V22h-2.1zm0 4.1h2.1v2.1h-2.1z"/></svg>,
    link: "https://google.com",
    cargaHoraria: '10h',
    listaConteudos: [
      "conteudo1 maior do que o esperado pela minha pequena tela",
      "conteudo2",
      "conteudo3",
      "conteudo4"
    ]
  }
]

const Skills = () => {
  return (
    <>
      <div id='principalSkills'>
          <header id='titleSkills'>
              <h1>Skills</h1>
          </header>
          <main id='mainSkills'>
              <section id='certificados'>
                  <div className="muralCertificados">
                      {listaCertificados.map((certificado)=> {return <Certificado cargaHoraria={certificado.cargaHoraria} link={certificado.link} listaConteudos={certificado.listaConteudos} titulo={certificado.titulo} svgIcon={certificado.svgIcon}/>})}
                  </div>
              </section>
          </main>
      </div>
      <div style={{display: "flex", justifyContent:"center"}}>
      <Button>ddd</Button>
      </div>
    </>
  )
}

export default Skills
