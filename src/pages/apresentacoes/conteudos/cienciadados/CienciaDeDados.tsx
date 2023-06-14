import { Button } from '@chakra-ui/react'
import './styles.css'

export const CienciaDeDados = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Ciência de dados</h1>
        <div className="conteudoMateria">
          <p><strong>População</strong> – Conjunto de elementos que possuem pelo menos uma característica em comum</p>
          <p><strong>Amostra</strong> – Subconjunto da população, quando é inviável analisar o conjunto completo:</p>
          <ul>
            <li><strong>Probabilística:</strong>
              <ul>
                <li>Aleatória - A amostragem não é feita a partir de nenhum padrão ou separação.</li>
                <li>Sistemática - Os elementos são selecionados a partir de um padrão ou separação.</li>
                <li>Estratificada – Separa a população em grupos homogêneos e neles aplicam a aleatoriedade.</li>
              </ul>
            </li>
          </ul>
          <p><strong>Tipos de variável:</strong></p>
          <ul>
            <li>Qualitativa</li>
            <li>Quantitativa</li>
            <li>Qualitativa nominal</li>
          </ul>
          <p><strong>Escalas de medição:</strong></p>
          <ul>
            <li><strong>Qualitativas:</strong>
              <ul>
                <li>Nominal – Variáveis nomeadas e sem ordem específica.</li>
                <li>Ordinal – Variáveis com ordem de valor definidas.</li>
              </ul>
            </li>
            <li><strong>Quantitativa:</strong>
              <ul>
                <li>Intervalar – Demonstra quantidade e relação a partir de um intervalo numérico.</li>
                <li>Razão – Não há valor numérico negativo, usado para medidas absolutas ou proporções.</li>
              </ul>
            </li>
          </ul>
          <p><strong>Tendência central</strong> – Representam um conjunto com um único valor:</p>
          <ul>
            <li>Moda – Dado que aparece com maior frequência:
              <ul>
                <li>Modal – Conjunto com única moda.</li>
                <li>Bimodal – Conjunto com duas modas.</li>
                <li>Polimodal – Conjunto com mais de duas modas.</li>
                <li>Amodal – Não possui moda.</li>
              </ul>
            </li>
            <li>Mediana – Valor que ocupa o meio de um conjunto
              <ul>
                <li>Conjunto ímpar – valor do meio.</li>
                <li>Conjunto par – Média aritmética dos dois valores do meio.</li>
              </ul>
            </li>
          </ul>
          <p><strong>Percentil</strong> – Divide o conjunto em 100 partes iguais</p>
          <p><strong>Quartil</strong> – Divide conjunto em 4 partes iguais, o mesmo que 25%</p>
          <p><strong>Medidas de dispersão</strong> – Para enxergar se os dados são homogêneos ou heterogêneos:</p>
          <ul>
            <li>Amplitude – Diferença entre o maior e menor valor.</li>
            <li>Variância – Quanto menor, mais denso é o grupo.</li>
            <li>Desvio padrão – Distância dos valores de um conjunto para a sua média.</li>
            <li>Grau de liberdade – Valores que temos pré-determinados.</li>
          </ul>
          <p><strong>Inferência</strong> – Dedução, raciocínio usado para chegar a uma conclusão com base nos dados:</p>
          <ul>
              <li>Qui quadrado – Para dizer a diferença entre a frequência esperada e a frequência alcançada.</li>
              <li>Kolmogorov-Smirnov - Testa se amostra vem ou não de certa distribuição</li>
              <li>Shapiro-Wilk - Testa a normalidade de uma amostra, em relação à distribuição dela</li>
              <li>Anderson Darling - Testa a qualidade do ajuste de dados a uma determinada distribuição</li>
              <li>Distribuição probabilística binomial</li>
              <li>Regressão Logística - Técnica estatística que permite a predição de valores, completamente baseado em uma variável categórica, que são variáveis também conhecidas como qualitativas, ou que apresentam valor fixo ou determinado para representar série de dados.</li>
          </ul>
          <p><strong>Funções</strong> – Possuem variável X e Y:</p>
          <ul>
            <li>Domínio – X</li>
            <li>Contradomínio – Y:
              <ul>
                <li>Imagem – Conjunto de elementos que correspondem a um valor no domínio.</li>
              </ul>
            </li>
          </ul>
          <p><strong>Tipos de funções:</strong></p>
          <ul>
            <li>Injetora – Todo valor de X recebe um único de Y</li>
            <li>Sobrejetora – Todo contradomínio está na imagem</li>
            <li>Bijetora – Injetora + Sobrejetora</li>
          </ul>
          <p><strong>Nomio</strong> – Expressão composta por letras e números</p>
          <ul>
            <li>Monômio – 2x</li>
            <li>Binômio – 2x + 3</li>
            <li>Polinômio – 2x^2 + 3x + 10</li>
          </ul>
          <p><strong>Lei da função</strong> – ax + b:</p>
          <ul>
            <li>a – Coeficiente angular</li>
            <li>b – Coeficiente linear</li>
          </ul>
          <p><strong>2º grau ou quadrática</strong> – f(x) = ax^2 + bx + c</p>
          <ul>
            <li>a &gt; 0 – Abertura virada para cima</li>
            <li>a &lt; 0 – Abertura virada para baixo</li>
          </ul>
          <p><strong>Funções exponenciais</strong> – f(x) = 2^x</p>
          <p><strong>Funções logarítmicas</strong> – possui base positiva e diferente de 1:</p>
          <ul>
            <li>f(x) = log a x</li>
            <li>a &gt; 1 – f(x) é crescente</li>
            <li>a &lt; 1 – f(x) é decrescente</li>
          </ul>
          <p><strong>Funções trigonométricas:</strong></p>
          <ul>
            <li>seno – f(x) = sem(x)</li>
            <li>cos – f(x) = cos(x)</li>
            <li>tan – f(x) = tan(x)</li>
          </ul>
          <p><strong>Produtos notáveis</strong> – ax^2+bx+c = a(x-x^1) (x-x^n)</p>
          <ul>
            <li>Quadrado da diferença de 2 termos - (a - b) ^2 = a^2 - 2ab + b^2</li>
            <li>Produto da soma pela diferença - a^2-b^2 = (a+b) (a-b)</li>
            <li>Cubo da soma de dois termos - (a+b) ^3 = a^3 + 3a^2b + 3ab^2+b^3</li>
            <li>Cubo da diferença de dois termos - (a-b) ^3 = a^3 - 3a^2b + 3ab^2 + b^3</li>
          </ul>
          <p><strong>Definição de limite:</strong></p>
          <ul>
            <li>Limite – Descreve o comportamento à medida que o argumento se aproxima de um determinado valor:</li>
            <li>Só faz sentido em funções descontínuas</li>
          </ul>
          <p><strong>O que é infinito:</strong></p>
          <ul>
            <li>Matemática – Não tem fim, mas tem começo</li>
            <li>Física – “Mundo real”:</li>
            <ul>
              <li>Incerto, necessário medir para saber se existe</li>
              <li>Instante é único</li>
              <li>Só há o presente</li>
            </ul>
          </ul>
          <p><strong>Paradoxos:</strong></p>
          <ul>
            <li>Hotel infinito</li>
            <li>Cidade</li>
          </ul>
          <p><strong>Existem infinitos de tamanhos diferentes</strong></p>
          <p><strong>Constante de Plank</strong> – Menor unidade relativa de espaço</p>
          <p><strong>Círculo</strong> – Número infinito de lados, distante de um centro</p>
          <p><strong>Mundo das ideias X mundo material</strong></p>
          <p><strong>Mito da caverna</strong> – Para Platão o mundo material é a sombra do mundo perfeito</p>
          <p><strong>Questionamento sobre tempo:</strong></p>
          <ul>
            <li>Caixa de maca com tempo infinito – Nada se perde, matéria vira energia, energia vira matéria.</li>
          </ul>
          <p><strong>Derivada</strong> – Coeficiente angular da reta tangente:</p>
          <ul>
            <li>Regras:</li>
            <ul>
              <li>Derivada com constante</li>
              <li>Derivada da soma</li>
              <li>Derivada do produto</li>
              <li>Derivada do quociente</li>
              <li>Regra da cadeia</li>
              <li>Regra do tombo</li>
            </ul>
          </ul>
          <p><strong>Integral</strong> – Conhecida como antiderivada, usada para calcular a área de uma curva no plano cartesiano.</p>
          <p><strong>Integral definida</strong> – Calcula área, porém, em relação a dois pontos definidos</p>
          <div className="areaProjetos">
            <div className="projeto1">
              <h1 style={{textAlign: 'center'}}>Notebook colab com manipulações em dataframe dos vingadores</h1>
              <div style={{display: 'block', textAlign: 'center', paddingTop: '10px'}}>
                <h2>Descrição:</h2>
                <p>Neste notebook foram usadas as bibliotecas pandas, numpy e matplotlib para colocar em prática alguns conteúdos aprendidos em sala de aula, sobre seleções e métodos para realizar consultas em dataframes. Foram abordados também, diversos métodos de plotagem de gráficos, estilos e legendas que podem ser adicionados neles</p>
                <Button marginTop={'10px'}><a style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} href="https://colab.research.google.com/drive/1f5LlUEWqgqGPtkluphOY2wEReG1r3_R3#scrollTo=yBCR1GcnjySt" target='_blank'>Link do notebook</a></Button>
              </div>
            </div>
            <div className="projeto1">
              <h1 style={{textAlign: 'center'}}>Notebook colab com diversos conceitos sobre ciência de dados, abordados em aula</h1>
              <div style={{display: 'block', textAlign: 'center', paddingTop: '10px'}}>
                <h2>Descrição:</h2>
                <p>Neste notebook foram usadas as bibliotecas pandas, numpy e matplotlib, sob os conceitos de amostragem aleatória, estratificada e sistemática, tendência central, modal, bimodal, polimodal e amodal. Foi utilizada a plotagem de gráficos para demonstrar esses conceitos, assim como percentil, quartil, medidas de dispersão e testes de hipótese</p>
                <Button marginTop={'10px'}><a style={{height: '100%', width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}} href="https://colab.research.google.com/drive/1Td17FjZsEdnMAsQ7_nQ1qL2f5rcNMbLE#scrollTo=xSmbHGa-Rrw3" target='_blank'>Link do notebook</a></Button>
              </div>
            </div>
          </div>
        </div>
        
            {/* <ul style={{paddingLeft: "0px"}}>
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
            </ul> */}
    </div>
  )
}
