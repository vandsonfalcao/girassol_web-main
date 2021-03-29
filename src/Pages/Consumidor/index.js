import companyLogo from "../../assets/girassol_logo_branco.png";
import companyLogo2 from "../../assets/girassol_logo_salmon.png";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image-1.png";
import Image2 from "../../assets/Image-2.png";
import Image3 from "../../assets/Image-3.png";
import Image4 from "../../assets/Image-4.png";
import Image5 from "../../assets/Image-5.png";
import Produtos from "../../assets/Produtos.png";
import PainelSolar from "../../assets/PainelSolar.png";
import Fluxo from "../../assets/Fluxo.png";
import Cabo from "../../assets/Cabo.png";
import { IoIosArrowForward } from "react-icons/io";

import { ContentHeaderConsumidor } from '../../components/ContentHeaderConsumidor'
import { Footer } from '../../components/Footer'
import { NavDesktop } from '../../components/NavDesktop'
import { NavMobile } from '../../components/NavMobile'
import { Container, ContentMain, Cotacao, Grid, Economia } from './styles'

export function Consumidor() {

    return (
        <Container>
            <header>
                <div>
                    <div>
                        <NavDesktop />
                        <NavMobile />
                    </div>
                    <ContentHeaderConsumidor />
                </div>
            </header>
            <ContentMain>
                <div>
                    <Cotacao>
                        <h1>VAMOS OLHAR O QUE ESTÁ AO SEU REDOR</h1>
                        <p>
                            A economia solar é calculada usando o tipo de telhado, média do
                            consumo Elétrico, custo da sua ultima conta, clima local, custos
                            solares e incentivos estimados ao longo do tempo.
                        </p>
                        <div>
                            <img src={companyLogo} alt="BigCo Inc. logo" />
                            <button>
                                vamos refinar cotação
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </Cotacao>
                    <div>
                        <h1>REFINAR COTAÇÃO </h1>
                        <p>
                            Na Girassol.ai, usamos inteligência artificial para avaliar
                            virtualmente o seu telhado quanto à energia solar, tornando simples
                            e fácil para você aprender sobre os benefícios de um sistema solar
                            para o seu telhado. Está pensando em obter um projeto de energia
                            solar para a sua casa ou para o edifício? Deixe que a nossa
                            tecnologia trabalhe e obtenha uma avaliação solar gratuita da nossa
                            parte.
                        </p>
                    </div>
                    <Grid>
                        <div>
                            <div style={{ backgroundImage: `url(${Image})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>Qual o endereço da sua casa</h3>
                            <p>Digite um endereço válido</p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Image1})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>vamos desenhar o telhado</h3>
                            <p>Clique no primeiro ponto do telhado e siga nos demais pontos</p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Image2})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>escolha o tipo de telhado</h3>
                            <p>Qual o tipo de telhado de sua casa</p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Image3})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>Qual o tamanho da sua conta de eletricidade mensal</h3>
                            <p>E o tamanho médio de sua conta mensal</p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Image4})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>preencha os dados para receber a estimativa</h3>
                            <p>Digite seus dados para receber a proposta</p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Image5})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>aqui está o resultado e economia estimada</h3>
                            <p>Olhe a economia esperada</p>
                        </div>
                    </Grid>
                    <Economia>
                        <div>
                            <h1>COMO VOCÊ DEVE ESCOLHER UM FORNECEDOR?</h1>
                            <div>
                                <img
                                    height={150}
                                    width={197}
                                    src={Produtos}
                                    alt="BigCo Inc. logo"
                                />
                                <div>
                                    <p>
                                        Optar pela energia solar é um investimento valioso. Selecionar
                                        o fornecedor de energia solar certo é uma decisão importante
                                        que pode contribuir para uma transição suave e afetar o
                                        desempenho geral do sistema. Desde fornecer uma cotação
                                        inicial, obter financiamento, projetar, instalar o sistema,
                                        até mantê-lo ao longo do tempo, há muitos aspectos que seu
                                        provedor gerencia.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2>PRINCIPAIS FATORES NA ESCOLHA DO FORNECEDOR:</h2>
                                <div>
                                    <h3>EXPERIÊNCIA</h3>
                                    <p>
                                        Há quanto tempo o fornecedor de energia solar está no mercado
                                        não é o único sinal de um bom fornecedor, mas ajuda. Veja há
                                        quantos anos eles estão no mercado e quantos sistemas eles
                                        instalaram.{" "}
                                    </p>
                                </div>
                                <div>
                                    <h3 >
                                        AVALIAÇÃO DO CLIENTE{" "}
                                    </h3>
                                    <p>
                                        As avaliações dos clientes às vezes não contam toda a história,
                                        especialmente se a avaliação for apenas sobre a ligação inicial.
                                        Mas as avaliações e depoimentos são bons insights sobre o
                                        atendimento ao cliente em geral e o tempo de resposta.
                                    </p>
                                </div>
                                <div>
                                    <h3>TRABALHO</h3>
                                    <p>
                                        Procure certificações, empreiteiros licenciados e fotos de
                                        trabalhos concluídos.
                                    </p>
                                </div>
                                <div>
                                    <h3>COTAÇÃO FINAL </h3>
                                    <p>
                                        Um bom fornecedor de energia solar será transparente.
                                        Certifique-se de que eles listam todos os seus custos estimados
                                        com economia projetada, instalação do sistema e custos de
                                        manutenção, bem como garantias do produto para ajudar a proteger
                                        seu investimento.
                                    </p>
                                </div>
                                <div>
                                    <h3>COMPONENTES DO SISTEMA</h3>
                                    <p>
                                        Veja quais painéis e inversores eles oferecem. Alguns provedores
                                        possuem uma ampla variedade de tipos.
                                    </p>
                                </div>
                                <div>
                                    <h3>TEMPO</h3>
                                    <p>
                                        É uma boa ideia observar o tempo médio de espera de um
                                        fornecedor de energia solar para a instalação. Pergunte quando
                                        eles agendariam sua instalação.
                                    </p>
                                </div>
                                <div>
                                    <h3>GARANTIAS</h3>
                                    <p>
                                        Certifique-se de que eles fornecem garantias de produto e
                                        desempenho. Procure o comprimento da cobertura. O padrão é a
                                        garantia de 20 anos para painéis solares, o que deixa você sem
                                        preocupações durante o período de seu aluguel, empréstimo ou
                                        compra.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <section />
                        <div>
                            <div>
                                <h1>QUAIS PAINÉIS SOLARES VOCÊ DEVE USAR?</h1>
                                <div>
                                    <img
                                        height={150}
                                        width={197}
                                        src={PainelSolar}
                                        alt="BigCo Inc. logo"
                                    />
                                </div>
                                <div>
                                    <p>
                                        Ao selecionar painéis solares, revise os seguintes detalhes
                                        com seu fornecedor solar: <br />
                                        <br /> O melhor valor para sua economia desejada: Depende de
                                        quanto espaço utilizável no telhado você tem, da produção de
                                        energia do painel e do custo.
                                    </p>
                                    <p>
                                        Estética: A cor do painel e os sistemas de montagem podem ser
                                        lindamente projetados para se integrarem bem à arquitetura de sua
                                        casa.
                                        <br />
                                        <br /> Qualidade e garantias do fabricante do painel: Proteja seu
                                        investimento escolhendo painéis de alta qualidade com garantias de
                                        20 a 25 anos.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1>QUAL INVERSOR SOLAR VOCÊ DEVE ESCOLHER?</h1>
                                <div>
                                    <img
                                        height={205}
                                        width={205}
                                        src={Fluxo}
                                        alt="BigCo Inc. logo"
                                    />
                                </div>
                                <div>
                                    <p>
                                        Os inversores transformam a eletricidade solar gerada pelos
                                        painéis (energia CC) em eletricidade utilizável (energia CA)
                                        para sua casa. Normalmente instalado próximo ao painel
                                        elétrico da sua casa, o inversor que você escolher deve ser
                                        determinado pelo design do seu sistema.
                                    </p>
                                    <p>
                                        Os tipos de inversores incluem:
                                        <br />
                                        <br /> Inversores de string: convertem eletricidade de vários
                                        painéis.
                                        <br />
                                        <br /> Microinversores: converta eletricidade de um único
                                        painel. Ao selecionar painéis solares, revise os seguintes
                                        detalhes com seu fornecedor solar: <br />
                                        <br /> Histórico e garantias do fabricante do inversor: Os
                                        inversores string normalmente têm uma garantia de 10 anos e
                                        podem precisar ser substituídos durante a vida útil da sua
                                        instalação solar. Às vezes, os microinversores têm garantias de
                                        25 anos e podem não precisar ser substituídos.
                                        <br />
                                        <br /> Melhor ajuste para sua instalação solar: A escolha do fio
                                        ou microinversor geralmente depende da quantidade de sombra que
                                        seu telhado recebe. Discuta com o fornecedor de energia solar o
                                        que faz mais sentido para sua situação.{" "}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1>COMO VOCÊ PODE MONITORAR O DESEMPENHO DO SEU SISTEMA?</h1>
                                <div>
                                    <div>
                                        <img
                                            height={152}
                                            width={162}
                                            src={Cabo}
                                            alt="BigCo Inc. logo"
                                        />
                                    </div>
                                    <div>
                                        <p>
                                            Para maximizar o desempenho e a economia de sua instalação
                                            solar ao longo do tempo, a maioria dos fornecedores inclui
                                            monitoramento contínuo, bem como serviços de manutenção,
                                            caso algo dê errado com seu sistema.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Economia>
                </div>
            </ContentMain>
            <Footer />
        </Container>
    )
}