import React from 'react'

export const CienciaDeDados = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Ciência de dados</h1>
        <div className="conteudoMateria">
            <ul style={{paddingLeft: "0px"}}>
              <li>
                <p>População</p>
              </li>
              <li>
                <p><h2>Amostra</h2> - Subconjunto</p> 
                <blockquote>
                  <ul>
                    <li>
                      Probabilistica
                        <blockquote>
                          <ul>
                            <li><h2>Aleatória</h2>
                              - A amostragem não é feita a partir de nenhum padrão ou separação.
                            </li>
                            <li>
                              <h2>Sistemática</h2>
                              - Os elementos são selecionados a partir de um padrão ou intervalo fixo.
                            </li>
                            <li>
                              <h2>Estratificada</h2>
                              - Separa a população em grupos homogêneos e nela se aplica a seleção aleatória
                            </li>
                          </ul>
                        </blockquote>
                    </li>
                    <li>Não probabilística</li>
                  </ul>
                </blockquote>
              </li>
              <li><h2>Tipos de variavel</h2>
                <blockquote>
                  <ul>
                    <li>Qualitativa</li>
                    <li>Quantitativa</li>
                    <li>Qualitativa nominal</li>
                  </ul>
                </blockquote>
              </li>
              <li>
                <h2>Escalas de medição</h2>
                <blockquote>
                  <ul>
                    <li>
                      <h2>Qualitativas</h2>
                      <blockquote>
                        <ul>
                          <li>
                            <h2>Nominal</h2>
                            - Variaveis "nomeadas" e sem ordem específica, coletdas através de perguntas abertas (qualquer variavel) ou fechadas (múltipla escolha)
                          </li>
                          <li>
                            <h2>Ordinal</h2>
                            - Variaveis com ordem de valor definidas
                          </li>
                        </ul>
                      </blockquote>
                    </li>
                    <li>
                      <h2>Quantitativas</h2>
                      <blockquote>
                        <ul>
                          <li>
                            <h2>Intervalar</h2>
                            - Demonstra quantidade e relação a partir de um intervalo numérico
                          </li>
                          <li>
                            <h2>Razão</h2>
                            - Escala onde não há valor numérico negativo, é usada para medidas absolutas ou proporções
                          </li>
                        </ul>
                      </blockquote>
                    </li>
                  </ul>
                </blockquote>
              </li>
            </ul>
        </div>
    </div>
  )
}
