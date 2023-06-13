import { ListItem, UnorderedList, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, AccordionProvider } from '@chakra-ui/react'
import './styles.css'

export const BancoDeDados = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Banco de dados</h1>
        <div className="conteudoMateria">
        <h1>O que é um banco de dados:</h1>
          <ul>
            <li>Estrutura física onde os dados são armazenados.</li>
          </ul>

          <h2>Modelagem de banco de dados:</h2>
          <ul>
            <li>Modelo conceitual:</li>
            <ul>
              <li>MER (Modelo entidade relacionamento) – Descreve objetos através de entidades com atributos e relacionamentos.</li>
            </ul>
            <li>Modelo Lógico:</li>
            <ul>
              <li>DER (Diagrama Entidade Relacionamento) – Representa de forma gráfica o MER.</li>
            </ul>
            <li>Modelo Físico:</li>
            <ul>
              <li>Representado pelo banco de dados real.</li>
            </ul>
          </ul>

          <h2>Características de banco de dados:</h2>
          <ul>
            <li>Atomicidade – Garantia que a transação será feita totalmente ou não será feita.</li>
            <li>Consistência – Proteção de integridade dos dados.</li>
            <li>Isolamento – Cada transação é feita de forma individual.</li>
            <li>Durabilidade – Garantir preservação de dados.</li>
          </ul>

          <h2>Entidades:</h2>
          <ul>
            <li>Fortes – Não dependem de outras entidades</li>
            <li>Fracas – Dependem de outras entidades</li>
          </ul>

          <h3>Tipos de atributos:</h3>
          <ul>
            <li>Atômico – Possui um único valor</li>
            <li>Multivalorado – Possui mais de um valor</li>
            <li>Composto – É composto por mais de um tipo de valor</li>
            <li>Único – Não é repetido na tabela</li>
          </ul>

          <h3>Relacionamentos:</h3>
          <ul>
            <li>Auto relacionamento – um campo da tabela referencia um registro da própria tabela.</li>
            <li>Generalização – Uma entidade possui atributos que pertencem a mais de uma entidade específica.</li>
            <li>Especialização – Uma entidade traz atributos novos a uma referência da entidade generalista.</li>
          </ul>

          <h3>Cardinalidades:</h3>
          <ul>
            <li>1:1 (Um para um)</li>
            <li>1:m (Um para muitos)</li>
            <li>m:m (Muitos para muitos)</li>
          </ul>

          <h2>SQL:</h2>
          <h3>DML (Data Manipulation Language):</h3>
          <ul>
            <li>Insert – insere registro em tabela do banco de dados.</li>
            <li>Update – Atualiza registro em tabela do banco de dados.</li>
            <li>Delete – Deleta registro do banco de dados.</li>
            <li>Select – Seleciona Registros do banco de dados.</li>
          </ul>

          <h3>DDL (Data Definition Language):</h3>
          <ul>
            <li>Definição de tabelas de banco de dados</li>
            <li>Comandos:</li>
            <ul>
              <li>Alter table – Altera tabela</li>
              <li>Drop table – Remove tabela</li>
            </ul>
            <li>Tipos de dados:</li>
            <ul>
              <li>Numéricos</li>
              <li>Monetários</li>
              <li>Caracteres</li>
              <li>Boleanos</li>
              <li>Data e tempo</li>
            </ul>
            <li>Restrições:</li>
            <ul>
              <li>Check – Checa condição a cada inserção na tabela.</li>
              <li>Not null – Não permite que o campo seja nulo.</li>
              <li>Unique – O campo precisa ser único na tabela.</li>
              <li>Primary Key – Chave primaria e única de uma tabela.</li>
              <li>Foreign Key – Chave estrangeira, que referencia outro campo comumente de outra tabela, mas pode ser da mesma.</li>
            </ul>
          </ul>

          <h3>DCL (Data Control Language):</h3>
          <ul>
            <li>Controla a parte de segurança e acesso ao banco de dados</li>
            <li>Comandos:</li>
            <ul>
              <li>Grant – conceder permissão a um banco, tabela ou view.</li>
              <li>Deny – Negar permissão a um banco, tabela ou view.</li>
              <li>Revoke – Para remover a concessão ou negar a permissão.</li>
            </ul>
          </ul>

          <h3>DTL (Data Transaction Language):</h3>
          <ul>
            <li>Controla as transações de banco de dados</li>
            <li>Comandos:</li>
            <ul>
              <li>Begin transaction – Inicia a transação</li>
              <li>Commit – Confirma os comados no banco de dados</li>
              <li>Rollback – reverte todos os comandos de uma transação.</li>
            </ul>
          </ul>

          <h3>DQL (Data Query Language):</h3>
          <ul>
            <li>Realiza pesquisas em tabelas</li>
            <li>Comandos:</li>
            <ul>
              <li>Select – seleciona um registro ou mais de uma ou mais tabelas baseadas em condições.</li>
              <li>Operadores</li>
              <li>Funções</li>
              <li>Order By – Ordena tabela de forma crescente ou decrescente a partir de um campo.</li>
              <li>Join – Realiza a junção de duas tabelas a partir de uma condição.</li>
              <li>Group By – Agrupa a tabela a partir de um campo.</li>
              <li>Union – Combina o resultado de duas subconsultas.</li>
              <li>Intersect – Combina resultado de duas consultas em um único resultado.</li>
              <li>Except – Localiza a diferença entre duas consultas.</li>
            </ul>
          </ul>

          <h2>Normalização de banco de dados:</h2>
          <ul>
            <li>1FN (Primeira forma normal) – A entidade não pode possuir atributos multivalorados ou compostos.</li>
            <li>2FN (Segunda forma normal) – A entidade não pode possuir dependências parciais.</li>
            <li>3FN (Terceira forma normal) – A entidade não pode possuir dependências transitivas.</li>
          </ul>
          {/* <Accordion allowMultiple>
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
          </div>*/}
        </div> 
    </div>
  )
}
