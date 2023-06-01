import { Button } from '@chakra-ui/react'
import './styles.css'

const Skills = () => {
  return (
    <>
      <div id='principalSkills'>
          <header id='titleSkills'>
              <h1>Skills</h1>
          </header>
          <main id='mainSkills'>
              <section id='skills'>
                  <div className="painelSkills">

                  </div>
              </section>
              <section id='certificados'>
                  <div className="muralCertificados">
                    
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
