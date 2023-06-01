import { Divider, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import {MdCheckCircle} from 'react-icons/md'

const ConteudoCertificado = ({listaConteudos, cargaHoraria}: any) => {
  return (
    <div style={{width: '170px'}}>
        <div style={{display: 'flex', gap: "5px"}}>
            <h1 style={{flex: 1}}>Conteúdos</h1>
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
