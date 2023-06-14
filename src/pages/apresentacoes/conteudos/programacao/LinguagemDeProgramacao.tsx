import React from 'react'
import video1 from '../../../../assets/2023-06-13 23-29-12.mp4'
import video2 from '../../../../assets/2023-03-22 11-10-03.mp4'

export const LinguagemDeProgramacao = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Linguagem de programação</h1>
        <div className="conteudoMateria">
        <h1>História Javascript:</h1>
          <ul>
            <li>1970 – Desenvolvimento da ARPANET, uso do TCP/IP</li>
            <li>1993 – Desenvolvimento do protocolo HTTP e navegador Mosaic</li>
            <li>1994 – Criação do navegador Netscape</li>
            <li>1995 – Lançamento do navegador Internet Explorer e linguagem JAVA</li>
            <li>1997 – Padronização do Javascript</li>
            <li>2002 – Netscape faliu e os funcionários da empresa criaram o Mozilla Firefox.</li>
            <li>2008 – Google desenvolve o Chrome.</li>
            <li>2009 – Motor de interpretação do Javascript, o V8, se torna Open Source.</li>
            <li>2010 – A partir do V8, foi desenvolvido o Node.JS que roda Javascript fora do navegador.</li>
          </ul>
          <h1>Arquitetura de computadores:</h1>
          <ul>
            <li>HS/SSD – Memória de longo prazo, armazena mesmo depois da máquina desligada</li>
            <li>RAM – Random Access Memory, quando desliga, apaga o que está guardando</li>
            <li>BIOS – Basic Instruction Operational System</li>
            <li>Bit – Unidade mínima</li>
            <li>Alocação de memória</li>
          </ul>
          <h1>HTML – Linguagem de marcação de hipertexto:</h1>
          <ul>
            <li>Tags – usadas para marcar o texto e posteriormente selecioná-lo e estilizá-lo</li>
            <li>HTML Semântico – Uso de tags com nome significativo e que melhor representa as partes e separações da página.</li>
          </ul>
          <h1>CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata):</h1>
          <p>Documento que estiliza e modifica os objetos do HTML.</p>
          <h1>Linguagem de programação:</h1>
          <h2>Declaração de variável:</h2>
          <ul>
            <li>Let – Escopo de bloco</li>
            <li>Var – Escopo global</li>
            <li>Const – Escopo de bloco e imutável</li>
          </ul>
          <h2>Tipos de variável:</h2>
          <ul>
            <li>Number</li>
            <li>String</li>
            <li>Boolean</li>
          </ul>
          <h2>Estruturas de repetição:</h2>
          <ul>
            <li>For (valor inicial; valor parada; incremento) – Cria loop com quantidade de repetições definidas onde podem ser
              passadas instruções</li>
            <li>For (item of array) – Cria loop que itera sobre cada item de um array</li>
            <li>While (condição) – Cria um loop que roda enquanto a condição é atendida</li>
            <li>Do {"{instrução}"} While (condição) – Cria loop que roda pelo menos uma vez mesmo que a condição nunca seja atendida</li>
          </ul>
          <h2>Estrutura de decisão:</h2>
          <ul>
            <li>If (condição) – Define instrução caso a condição seja atendida.</li>
            <li>Else – Define instrução caso a condição do IF não seja atendida.</li>
            <li>Else if (condição) – Define instrução caso a condição do IF não seja atendida e essa condição seja.</li>
            <li>If ternário – Define condições de if e else em uma única linha. Ex: condição? “Instrução caso seja verdade”:
              “Instrução caso seja falso”</li>
            <li>Switch (variável) – Cria estrutura para decidir instrução baseado no valor da variável, uma forma diferente de
              escrever if e else.</li>
          </ul>
          <h2>Operadores:</h2>
          <ul>
            <li>Lógicos:</li>
            <ul>
              <li>! – not</li>
              <li>&& - and</li>
              <li>|| - or</li>
            </ul>
            <li>Matemáticos:</li>
            <ul>
              <li>+</li>
              <li>-</li>
              <li>%</li>
              <li>/</li>
              <li>*</li>
              <li>**</li>
            </ul>
            <li>Igualdade ou relacional:</li>
            <ul>
              <li>&gt;</li>
              <li>&lt;</li>
              <li>&gt;=</li>
              <li>&lt;=</li>
              <li>==</li>
              <li>!=</li>
            </ul>
          </ul>
          <h2>Funções:</h2>
          <p>Formas de colocar instruções em blocos e chamá-las pelo nome, podendo também adicionar parâmetros e possuir retorno ou
            não.</p>
          <h2>Estruturas de dados:</h2>
          <ul>
            <li>Nós – Formas de conectar/associar os itens das estruturas de dados</li>
            <li>Tipos:</li>
            <ul>
              <li>Fila – Primeiro que entra, primeiro que sai.</li>
              <li>Lista – Conjunto de objetos, podendo ser retirados e adicionados sem ordem definida.</li>
              <li>Pilha – Último que entra, primeiro que sai.</li>
              <li>Árvores – Estrutura não sequencial.</li>
              <li>Grafo – Não sequencial, onde cada objeto pode ter diversas ligações.</li>
              <li>Hashmap – Guarda dados com chave e valor.</li>
            </ul>
          </ul>
          <h1>Cliente X Servidor – Requisições e resposta</h1>
          <h1>DOM (Document Object Model):</h1>
          <ul>
            <li>Seletores – Por classe, ID, tag HTML, ou nome</li>
            <li>Eventos – Podem acontecer eventos que podem disparar ações dentro do DOM:</li>
            <ul>
              <li>Click</li>
              <li>Hover</li>
              <li>Focus</li>
              <li>Scroll</li>
              <li>Entre outros...</li>
            </ul>
          </ul>
          <h1>SEO (Search Engine Optimization):</h1>
          <p>São otimizações e estratégias no código para melhora do ranqueamento da página e auxílio nos mecanismos de busca dos
            navegadores.</p>
          <h2>Funcionamento dos motores de busca:</h2>
          <ol>
            <li>Crawling</li>
            <li>Indexação</li>
            <li>Ranqueamento</li>
          </ol>
          <h2>Tipos de busca:</h2>
          <ul>
            <li>Paga</li>
            <li>Orgânica:</li>
            <ul>
              <li>0,78% das pessoas acessam páginas que não estão na primeira página de busca.</li>
            </ul>
          </ul>
          <h2>Estratégias:</h2>
          <ul>
            <li>Uso de meta tags – Descrevem o conteúdo da página e palavras-chave, encontradas no head do documento HTML.</li>
          </ul>
          <div className="areaProjetos">
            <div className="projeto1">
              <h1>Calculadora salário</h1>
              <div style={{display: 'block', textAlign: 'center', paddingTop: '10px'}}>
                <h2>Descrição</h2>
                <p>Página feita em HTML, CSS e JS para cálculo de salário liquido</p>
              </div>
              <video controls={true}>
                <source src={video1}/>
              </video>
              <h2>Repositório GIT:</h2>
              <a href="https://github.com/SergioRicJr/calculadora-salario" target='_blank'>https://github.com/SergioRicJr/calculadora-salario</a>
            </div>
            <div className="projeto1">
              <h1>To do</h1>
              <div style={{display: 'block', textAlign: 'center', paddingTop: '10px'}}>
                <h2>Descrição</h2>
                <p>Página feita em HTML, CSS e JS onde é possível salvar, editar, deletar, filtrar, pesquisar e marcar como concluidas tarefas, que estaão salvas no localStorage</p>
              </div>
              <video controls={true}>
                <source src={video2}/>
              </video>
              <h2>Repositório GIT:</h2>
              <a href="https://github.com/SergioRicJr/to-do-list" target='_blank'>https://github.com/SergioRicJr/to-do-list</a>
            </div>
            <div className="projeto1">
              <h1>Muito mais projetos de programação disponiveis abaixo, em duas contas minhas do GitHub, com links diretos para o repositório...</h1>
              </div>
          </div>
        </div>
    </div>
  )
}
