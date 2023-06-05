import { Divider, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import {MdCheckCircle} from 'react-icons/md'

const ConteudoCertificado = ({listaConteudos, cargaHoraria}: any) => {
  return (
    <div style={{width: '200px'}}>
        <div style={{display: 'flex', gap: "5px"}}>
            <h1 style={{fontSize: "16px",width: "50%", borderRight: "1px solid white", display: "flex", alignItems: "center", justifyContent: "center"}}>Conteúdos</h1>
            <p style={{width: "50%"}}>Carga Horária: {cargaHoraria}</p>
        </div>
        <Divider/>
        <List spacing={2}>
            {
                listaConteudos.map((conteudo: any)=> {return (
                    <ListItem>
                    <ListIcon as={MdCheckCircle} />
                        {conteudo}
                    </ListItem>
                    ) 
                }
            )  
            }
        </List>
        
    </div>
  )
}

export default ConteudoCertificado
