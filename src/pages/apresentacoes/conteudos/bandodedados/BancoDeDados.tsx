import { ListItem, UnorderedList, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, AccordionProvider } from '@chakra-ui/react'
import './styles.css'

export const BancoDeDados = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Banco de dados</h1>
        <div className="conteudoMateria">
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                  <h3>Oque é um banco de dados?</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel className='Conteudo'>
                  <p>Estrutura física onde os dados são armazenados</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                  <h3>Modelagem de BD</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel className='Conteudo'>
                  <Accordion allowMultiple>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>Modelo Conceitual</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>
                              MER (Modelo entidade relacionamento)
                            </li>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>Modelo Lógico</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>
                              DER (Diagrama Entidade Relacionamento)
                            </li>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>Modelo Físico</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                            <ul>
                              <li>
                                Representado pelo banco de dados real
                              </li>
                            </ul>
                        </AccordionPanel>
                      </AccordionItem>
                  </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                  <h3>Caracteristicas do BD</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>Atomicidade</li>
                            <li>Consistência</li>
                            <li>Isolamento</li>
                            <li>Durabilidade</li>
                          </ul>
                        </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                  <h3>Entidades</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel className='Conteudo'>
                    <UnorderedList>
                      <ListItem>Forte (Independente)</ListItem>
                      <ListItem>Fraca (Dependente)</ListItem>
                    </UnorderedList>
                  <Accordion allowMultiple>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>Atributos</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>Atômico</li>
                            <li>Multivalorado</li>
                            <li>Composto</li>
                            <li>Único</li>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>Relacionamentos</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel >
                            <ul style={{paddingLeft:"20px"}}>
                              <li>Autorelacionamento</li>
                              <li>Generalização</li>
                              <li>Especialzação</li>
                            </ul>
                            <AccordionItem className='tituloConteudo' paddingLeft="0px">
                              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                                <h3>Cardinalidades</h3>
                                <AccordionIcon/>
                              </AccordionButton>
                              <AccordionPanel paddingLeft="55px">
                                <ul>
                                  <li>1:1 (um para um)</li>
                                  <li>1:m (um para muitos)</li>
                                  <li>m:m (muitos para muitos)</li>
                                </ul>
                              </AccordionPanel>
                            </AccordionItem>
                        </AccordionPanel>
                       
                      </AccordionItem>
                  </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                  <h3>SQL</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel className='Conteudo'>
                  <Accordion allowMultiple>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>DML (Data Manipulation Language)</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>Insert</li>
                            <li>Update</li>
                            <li>Delete</li>
                            <li>Select</li>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>DDL (Data Definition Language)</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                          <ul>
                            <li>Alter Table</li>
                            <li>Drop table</li>
                            <li>
                              <AccordionItem>
                                <AccordionButton>
                                  Create table
                                  <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel>
                                    <AccordionItem>
                                      <AccordionButton>
                                        Tipos de dados
                                        <AccordionIcon/>
                                      </AccordionButton>
                                      <AccordionPanel>
                                        <ul>
                                          <li>Numéricos</li>
                                          <li>Monetários</li>
                                          <li>Caracteres</li>
                                          <li>Boleanos</li>
                                          <li>Data e tempo</li>
                                        </ul>
                                      </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                      <AccordionButton>
                                        Restrições
                                        <AccordionIcon/>
                                      </AccordionButton>
                                      <AccordionPanel>
                                        <ul>
                                          <li>Check</li>
                                          <li>Not null</li>
                                          <li>Unique</li>
                                          <li>Primary Key</li>
                                          <li>Foreign Key</li>
                                        </ul>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </AccordionPanel>
                              </AccordionItem>
                            </li>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>DCL (Data Control Language)</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                            <ul>
                              <li>Controla a parte da segurança</li>
                              <AccordionItem>
                                <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                                  <p>Comandos</p>
                                  <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel>
                                  <ul>
                                    <li>Grant</li>
                                    <li>Revoke</li>
                                    <li>Deny</li>
                                  </ul>
                                </AccordionPanel>
                              </AccordionItem>
                            </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>DTL (Data Transaction Language)</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                            <ul>
                              <li>Begin transaction</li>
                              <li>Commit</li>
                              <li>Rollback</li>
                            </ul>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem className='tituloConteudo'>
                        <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                          <h3>DQL (Data Query Language)</h3>
                          <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel paddingLeft="55px">
                            <ul>
                              <li>Select</li>
                              <li>Operadores</li>
                              <li>Funções</li>
                              <li>Order by</li>
                              <li>Join</li>
                              <li>Group by</li>
                              <li>Union, Intersect, except</li>
                              <li>Aliases</li>
                            </ul>
                        </AccordionPanel>
                      </AccordionItem>
                  </Accordion>
                  
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem className='tituloConteudo'>
              <AccordionButton style={{display: "flex", justifyContent: "space-between"}}>
                <h3>Normalização de banco de dados</h3>
                  <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel paddingLeft="55px">
                <ul>
                  <li>1FN (Somente valores atômicos)</li>
                  <li>2FN (Sem dependências parciais)</li>
                  <li>3FN (Sem dependências transitivas)</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className="projetosMateria">
            <h1>Projetos da matéria</h1>
              <div className='projeto'>
                <div className='imgProjeto'>
                  meuTexto
                </div>
                <div className='descricaoProjeto'>
                  <h1>BD Copa do mundo</h1>
                  <p>
                    Meu texto descrevendo esse maravilhoso e magnifico projeto muito interessante e bom
                  </p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
