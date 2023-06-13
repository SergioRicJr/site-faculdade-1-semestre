import './styles.css'

export const RedesDeComputadores = () => {
  return (
    <div className='text-area'>
        <h1 className='title'>Redes de computadores</h1>
        <div className="conteudoMateria">
        <h1>Tipos de Redes:</h1>
          <ul>
            <li>CAN (Campus Area Network):
              <ul>
                <li>Possui área limitada, conecta redes de um mesmo contexto físico. Ex: Campus de uma faculdade</li>
              </ul>
            </li>
            <li>LAN (Local Area Network):
              <ul>
                <li>Rede local, conecta dispositivos próximos em um mesmo ambiente.</li>
              </ul>
            </li>
            <li>MAN (Metropolitan Area Network):
              <ul>
                <li>Estabelece conexão entre redes do mesmo município ou cidades vizinhas.</li>
              </ul>
            </li>
            <li>WAN (World Wide Network):
              <ul>
                <li>Redes de longa distância, como países ou continentes.</li>
              </ul>
            </li>
            <li>PAN (Personal Area Network):
              <ul>
                <li>Conecta aparelhos a uma curta distância. Ex: Bluetooth</li>
              </ul>
            </li>
          </ul>
          <h1>Topologia - Configurações assumidas em redes de computadores:</h1>
          <ul>
            <li>Física - Ligada por fios.</li>
            <li>Lógica - redes WiFi.</li>
          </ul>
          <div className='imgTopograf'></div>
          <h1>ISP - Provedor de serviço de internet</h1>
          
          <h1>Dispositivos finais:</h1>
          <ul>
            <li>Computadores, celulares ou outros aparelhos de usuários</li>
          </ul>
          
          <h1>Dispositivos intermediários:</h1>
          <ul>
            <li>Roteador: Conecta LAN a outras redes.</li>
            <li>HUB: Conecta aparelhos, mas não aprende seus endereços.</li>
            <li>Switch: Conecta aparelhos e aprende seus endereços.</li>
            <li>Modem: Converte meio físico.</li>
          </ul>
          
          <h1>Modelo OSI - Modelo conceitual para um padrão de comunicação entre sistemas de computadores e redes:</h1>
          <ul>
            <li>Aplicação - Para consumo de dados e programas que interagem com o usuário e protocolos como HTTP e FTP.</li>
            <li>Apresentação - Traduz e prepara os dados para a próxima camada.</li>
            <li>Sessão - Estabelece e encerra conexões.</li>
            <li>Transporte - Responsável por gerenciar transporte dos pacotes, e garantir sucesso no recebimento e entrega, possui alguns protocolos, como:
              <ul>
                <li>TCP: Orientado a conexão e confere a perda/erro nos pacotes.</li>
                <li>UDP: Não orientado a conexão e não garante o recebimento seguro dos pacotes.</li>
              </ul>
            </li>
            <li>Rede - Verifica o destinatário e remetente. Endereço IP.</li>
            <li>Enlace - Identifica o endereço MAC, checa defeitos e controla o fluxo de pacotes.
              <ul>
                <li>Subcamadas:
                  <ul>
                    <li>MAC</li>
                    <li>LLC</li>
                    <li>FCS</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Física - Transmissão de dados por pulsos elétricos, ópticos ou sem fio.
              <ul>
                <li>Clock: HZ, pulsos por segundo ou quantidade de instruções por segundo</li>
                <li>Modos de transmissão:
                  <ul>
                    <li>NRZ: A cada pulso envia 1 ou 0.</li>
                    <li>Manchester: A cada clock manda 2 sinais.</li>
                    <li>NRZI: Todo clock é 0, se torna um no momento de mudança.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          
          <h1>Cabos:</h1>
          <ul>
            <li>Par trançado - Uma ponta padrão A, outra padrão B.</li>
            <li>Direto – Para dispositivos de camadas de rede diferente. Ex: Computador para HUB.</li>
            <li>Blindado – Possui camada em torno dos condutores para reduzir a interferência eletromagnética.</li>
          </ul>
          
          <h1>Modos de transmissão:</h1>
          <ul>
            <li>Simplex – Um único sentido.</li>
            <li>Half-duplex – Sentido duplo.</li>
            <li>Full-duplex – Sentido duplo e envio simultâneo dos dois lados.</li>
          </ul>
          
          <h1>Tabelas de roteamento – Tabela com endereços de cada dispositivo conhecido.</h1>
          
          <h1>Gateway padrão – Porta de saída de uma LAN.</h1>
          
          <h1>IP – Endereço de dispositivo na rede</h1>
          <ul>
            <li>Formas de enviar dados:
              <ul>
                <li>Unicast – Para um dispositivo</li>
                <li>Multicast – Para mais de um dispositivo</li>
                <li>Broadcast – Para todos os dispositivos da rede</li>
              </ul>
            </li>
            <li>Máscara de rede – Define a divisão da rede.</li>
            <li>IPV4:
              <ul>
                <li>Possui 32 bits.</li>
              </ul>
            </li>
            <li>IPV6:
              <ul>
                <li>Encapsulado pelo IPV4.</li>
                <li>Link local e Unique global.</li>
                <li>Possui 128 bits.</li>
              </ul>
            </li>
          </ul>
          
          <h1>DMZ – Zona desmilitarizada, é uma sub rede que fica entre a rede pública e a privada para disponibilizar serviços e servir arquivos.</h1>
          
          <h1>NAT – Protocolo que faz a conversão de IP privado para IP público e vice-versa.</h1>
          
          <h1>Firewall – Monitora o tráfego e define o que pode ser acessado ou não.</h1>
          
          <h1>Modelo TCP/IP – Criado por Tunnenbaum:</h1>
          <ul>
            <li>Aplicação: Define uso/finalidade dos dados.</li>
            <li>Transporte: Responsável pela transmissão dos dados.</li>
            <li>Internet: Responsável pelo roteamento de destino e origem dos pacotes.</li>
            <li>Acesso à rede: Agrupa as camadas de enlace e Física do modelo OSI.</li>
          </ul>
          
          <h1>Classificação de redes:</h1>
          <ul>
            <li>A: Possui 8 bits designados para endereço de rede.</li>
            <li>B: Possui 16 bits designados para endereço de rede.</li>
            <li>C: Possui 24 bits designados para endereço de rede.</li>
          </ul>
          
          <h1>CIDR – Roteamento de Inter domínio sem classe</h1>
          
          <h1>DHCP:</h1>
          <ul>
            <li>Protocolo de distribuição dinâmica de Host.</li>
            <li>Distribui endereços IP dinamicamente para dispositivos na rede.</li>
          </ul>
          
          <h1>VPN (Virtual Private Network) – Cria túnel de rede para servidor que intermediará as requisições.</h1>
          
          <h1>IETF – Internet Engineering Task Force.</h1>
          
          <h1>História da internet:</h1>
          <ul>
            <li>Arpa – Pesquisa feita para alcançar a Rússia no desenvolvimento:
              <ul>
                <li>Cria Arpanet</li>
                <li>NPC</li>
                <li>Comutação de pacotes</li>
              </ul>
            </li>
            <li>WWW (World Wide Web):
              <ul>
                <li>Criado por Timothy Berners-Lee</li>
                <li>Rede mundial de computadores</li>
                <li>Fases:
                  <ul>
                    <li>Primeira – Somente leitura</li>
                    <li>Segunda – Leitura e escrita</li>
                    <li>Terceira – Leitura, escrita, Download e Upload</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          
          <h1>Principais serviços de organização de redes:</h1>
          <ul>
            <li>ICANN</li>
            <li>GNSO</li>
            <li>IANA</li>
          </ul>
          
          <h1>Formas de regulamentação de rede:</h1>
          <ul>
            <li>Neutralidade</li>
            <li>Proteção e privacidade</li>
            <li>Censura e controle de conteúdo</li>
            <li>Propriedade intelectual</li>
          </ul>
          
          <h1>TLD – Domínio de topo. Ex: “.net”, “.org”, “.gov”</h1>
          
          <h1>CGI (Comitê Gestor da Internet) – Diretrizes estratégicas relacionadas ao uso e desenvolvimento da internet.</h1>
          
          <h1>RFC (Requests for Comments):</h1>
          <ul>
            <li>São normas para internet</li>
            <li>Tipos:
              <ul>
                <li>Proposta de padrão</li>
                <li>Padrão</li>
                <li>Experimental</li>
                <li>Informativo</li>
                <li>Histórico</li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
  )
}
