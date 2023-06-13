import React from 'react'

export const AutomacaoIndustrial = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Automação industrial</h1>
        <div className="conteudoMateria">
        <h1>Portas lógicas</h1>
          <p>Conjunto de transistores que realiza um processo específico:</p>
          <ul>
              <li>Porta E – Propriedade de multiplicação</li>
              <li>Porta OU – Propriedade de soma</li>
              <li>Porta NOT/Inverse – Propriedade de divisão ou subtração</li>
          </ul>

          <h1>Hardware</h1>
          <ul>
              <li>Embarcado:</li>
              <ul>
                  <li>Usam pouca memória</li>
                  <li>Ex: Arduino, possui:</li>
                  <ul>
                      <li>HD</li>
                      <li>RAM</li>
                      <li>Placa mãe</li>
                      <li>Processador</li>
                  </ul>
                  <li>IOT – Internet das coisas</li>
              </ul>
              <li>Processador:</li>
              <ul>
                  <li>Registradores – Apontam o lugar de cada coisa na memória</li>
                  <li>Portas lógicas</li>
              </ul>
          </ul>

          <h1>Alan Turing</h1>
          <p>Inventor da Eniac, pai da computação:</p>
          <ul>
              <li>Uso de válvulas, onde circulavam energia, foi substituída por transistores</li>
          </ul>

          <h1>Sistema Binário</h1>
          <ul>
              <li>Cada bit é uma unidade binária (0 ou 1)</li>
              <li>As combinações de bits com diferentes valores ou unidades são usadas para representar números.</li>
              <li>Conversão de binário para decimal – Para cada casa de dígito, coloca 2 elevado a um número a mais, multiplica o dígito com o resultado e soma eles.</li>
              <li>Conversão de decimal para binário – Pega o valor, vai dividindo por 2 os resultados, no fim pega o quociente e os restos, esse será o valor em binário.</li>
          </ul>

          <h1>Introdução a microcontroladores</h1>
          <p>Características:</p>
          <ul>
              <li>Dá para reprogramar de formas diferentes</li>
              <li>Dá para fazer a mesma lógica das portas lógicas</li>
          </ul>

          <h1>1ª Revolução industrial</h1>
          <p>Mecanização, máquinas a vapor</p>

          <h1>2ª Revolução industrial</h1>
          <p>Eletricidade:</p>
          <ul>
              <li>Tensão – Quantidade de Cargas elétricas que tem carga positiva em relação a negativa. (V – Volts)</li>
              <li>Corrente – Movimentação de elétrons. (A – Amper)</li>
              <li>Resistência – Oposição do material à passagem de corrente elétrica – (OHM – Resistência ou impedância elétrica):</li>
              <ul>
                  <li>1ª Lei de OHM – Tensão = Resistência x Corrente</li>
                  <li>Quando a corrente passa por resistência, gera calor.</li>
                  <li>Material mais condutor tem menos resistência.</li>
                  <li>Curto-circuito – Ocorre quando a corrente elétrica causa superaquecimento.</li>
              </ul>
          </ul>

          <h1>3ª Revolução industrial</h1>
          <p>Computador</p>

          <h1>Sensores</h1>
          <ul>
              <li>Capacitivos – Detecta qualquer material, pois observa a carga elétrica</li>
              <li>Indutivos – Detecta metais, por estar associado a campos magnéticos</li>
              <li>Ópticos:</li>
              <ul>
                  <li>Barreira – Quando a peça impede a passagem de luz e objeto é detectado.</li>
                  <li>Reflexivo – O emissor e receptor estão do mesmo lado, a peça reflete a luz.</li>
              </ul>
              <li>Ultrassônico – Através do som, quando o objeto reverbera o som. Quanto mais distante, mais envia bits. Suas partes são:</li>
              <ul>
                  <li>VCC</li>
                  <li>Trigger</li>
                  <li>Echo</li>
                  <li>GND</li>
              </ul>
          </ul>

          <h1>Tipos de sinais</h1>
          <ul>
              <li>Digital – Binário, possui 2 valores</li>
              <li>Analógico – Infinitos valores</li>
          </ul>

          <h1>Led</h1>
          <ul>
              <li>Anodo – Positivo</li>
              <li>Catodo – Negativo</li>
          </ul>

          <h1>Programação de Arduino em C</h1>
          <ul>
              <li>Linguagem procedural</li>
              <li>Comandos básicos:</li>
              <ul>
                  <li>pinMode() – Atribui funcionalidade a um pino de Arduino.</li>
                  <li>digitalRead() – Realiza a leitura do estado da porta digital.</li>
                  <li>digitalWrite() – Realiza a alteração do estado da porta digital.</li>
                  <li>Delay () – Define um tempo de atraso para executar instruções.</li>
              </ul>
          </ul>

          <h1>Expressões</h1>
          <ul>
              <li>Infixa – Os sinais estão na ordem correta. Ex: (a+b) * c</li>
              <li>Prefixa – Os sinais estão antes dos elementos. Ex: *+ABC</li>
              <li>Pós fixa – Os sinais estão depois dos elementos. Ex: AB+C*</li>
          </ul>

          <h1>Robótica</h1>
          <p>Robô significa trabalhador escravo:</p>
          <ul>
              <li>Primeiro Robô – Unimate #001, criado em 1959.</li>
              <li>Classificação de robôs:</li>
              <ul>
                  <li>Controle:</li>
                  <ul>
                      <li>Autômato</li>
                      <li>Remoto</li>
                  </ul>
                  <li>Mobilidade:</li>
                  <ul>
                      <li>Fixo</li>
                      <li>Móvel – AGV (Veículos guiados automaticamente)</li>
                      <li>Humanoides – Usado em auxílio de idosos e contexto militar</li>
                  </ul>
                  <li>Estrutura cinemática:</li>
                  <ul>
                      <li>Eixos em série</li>
                      <li>Eixos em paralelo</li>
                  </ul>
                  <li>Tipos de geometria:</li>
                  <ul>
                      <li>Eixos – X, Y e Z</li>
                      <li>Coordenada esférica</li>
                      <li>Coordenada cilíndrica</li>
                      <li>Coordenada cartesiana</li>
                  </ul>
                  <li>Tipos de acionamento:</li>
                  <ul>
                      <li>Elétrico</li>
                      <li>Pneumático – Mais fraco, porém, mais rápido.</li>
                      <li>Hidráulico – Mais forte.</li>
                  </ul>
              </ul>
          </ul>

          <h1>Robôs colaborativos</h1>
          <p>Comumente são mais leves e com sensores, para a segurança humana.</p>

          <h1>Robôs antropomórficos</h1>
          <ul>
              <li>Partes:</li>
              <ul>
                  <li>Base</li>
                  <li>Ombro</li>
                  <li>Braço</li>
                  <li>Cotovelo</li>
                  <li>Antebraço</li>
                  <li>Punho</li>
              </ul>
              <li>Graus de liberdade – Quais movimentos o robô pode realizar:</li>
              <ul>
                  <li>São no máximo 6. X, Y, Z e a rotação nesses eixos</li>
              </ul>
              <li>TCP – Ponto central da ferramenta</li>
              <li>Numeração de juntas – Se dão de 1 até a última, e quando não possui antebraço, um número é pulado.</li>
              <li>Efetuadores – Ferramentas que podem ser acopladas na ponta do braço robótico.</li>
              <li>Interpolação – Cálculo avançado que define a posição do robô ao decorrer do trajeto.</li>
              <li>Payloud – Carga máxima que o robô pode suportar e manipular</li>
              <li>Parâmetros de movimentação:</li>
              <ul>
                  <li>Trajetória</li>
                  <li>Velocidade</li>
                  <li>Aceleração</li>
                  <li>Acurácia</li>
                  <li>Precisão</li>
              </ul>
          </ul>
        </div>
    </div>
  )
}
