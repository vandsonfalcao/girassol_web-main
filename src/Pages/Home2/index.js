import companyLogo from "../../assets/girassol_logo_branco.png";
import companyLogo2 from "../../assets/girassol_logo_salmon.png";
import Quarto from "../../assets/sights/triagem.png";
import Gelo from "../../assets/sights/gelo.png";
import Nuvens from "../../assets/sights/nuvens.png";
import Foto from "../../assets/sights/retangulo.png";
import Sol from "../../assets/sights/Sol.png";
import Quarto_Azul from "../../assets/sights/Quarto.png";
import Cachoeira from "../../assets/sights/cachoeira.png";
import Horizonte from "../../assets/sights/horizonte.png";
import Explorar1 from "../../assets/sights/explorar1.png";
import Explorar2 from "../../assets/sights/explorar2.png";
import { IoIosArrowForward } from "react-icons/io";

import { ContentHeaderHome } from '../../components/ContentHeaderHome'
import { Footer } from '../../components/Footer'
import { NavDesktop } from '../../components/NavDesktop'
import { NavMobile } from '../../components/NavMobile'
import { Container, ContentMain, Cotacao, Custo, CustoFuturo, Dados, Economia, Explorar, Grid } from './styles'

export function Home2() {

    return (
        <Container>
            <header>
                <div>
                    <div>
                        <NavDesktop />
                        <NavMobile />
                    </div>
                    <ContentHeaderHome />
                </div>
            </header>
            <ContentMain>
                <div>
                    <Explorar>
                        <h1>O que explorar ...</h1>
                        <div>
                            <Dados>
                                <img src={Foto} alt="BigCo Inc. logo" />
                                <h2>Potencial de uma área</h2>
                            </Dados>
                            <Dados>
                                <img src={Explorar1} alt="BigCo Inc. logo" />
                                <h2>Leads qualificados</h2>
                            </Dados>
                            <Dados>
                                <img src={Explorar2} alt="BigCo Inc. logo" />
                                <h2>Estimativa personalizada</h2>
                            </Dados>
                        </div>
                    </Explorar>
                    <Cotacao>
                        <h1>Estimativa de economia</h1>
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
                    <section>
                        <h1>
                            UMA NOVA MANEIRA DE FAZER VENDAS DE ENERGIA SOLAR{" "}
                        </h1>
                        <p>
                            Esqueça de percorrer o Google Earth ou dirigir por áreas residencias
                            e industriais para encontrar novas oportunidades. Em apenas alguns
                            segundos, simplesmente pesquise novos prospects de energia solar em
                            telhados com base em seus critérios e aproveite nossos dados para
                            turbinar suas vendas. <br />
                            <br /> Aumente suas vendas usando nossa plataforma de dados
                            proprietária para descobrir novos leads de painéis solares e
                            priorizar seus esforços de vendas.{" "}
                        </p>
                    </section>
                    <Grid>
                        <div>
                            <div style={{ backgroundImage: `url(${Quarto})` }}>
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>PROSPECÇÃO</h3>
                            <p>
                                Analisamos até 90% das residencias em sua área usando dados de
                                satélite e geoespaciais para lhe dar uma vantagem inicial em suas
                                vendas externas e prospecção.{" "}
                            </p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Quarto_Azul})` }} >
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>TRIAGEM </h3>
                            <p>
                                Concentre-se nos projetos que são importantes para você. Use nossa
                                plataforma para selecionar e filtrar leads em sua região por
                                tamanho de projeto, tipo de construção e muito mais.
                            </p>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `url(${Sol})` }} >
                                <img src={companyLogo2} alt="BigCo Inc. logo" />
                            </div>
                            <h3>DIVULGAÇÃO</h3>
                            <p>
                                Pronto para entrar em contato com seus clientes em potencial, mas
                                não tem certeza de como fazer isso da melhor forma? Utilize nossa
                                Plataforma para entender o cliente em potencial e fechar a venda.
                            </p>
                        </div>
                    </Grid>
                    <section>
                        <h1>
                            QUANTO A ENERGIA SOLAR PODE ECONOMIZAR NAS CONTAS DE LUZ?{" "}
                        </h1>
                        <p>
                            Alguns fatores pode influenciar como o espaço disponível, hábitos
                            de consumo e etc.
                        </p>
                    </section>
                    <Economia>
                        <div>
                            <div>
                                <img src={Gelo} alt="BigCo Inc. logo" />
                                <h3>Contas</h3>
                                <h4>Contas de eletricidade mensais mais baixas</h4>
                            </div>
                            <div>
                                <p>
                                    Solar é mais barato e acessível hoje porque o custo dos sistemas
                                    solares caiu e uma série de opções de financiamento podem
                                    ajudá-lo a atingir seus objetivos. Quer você alugue, tome um
                                    empréstimo ou adquira um sistema, você pode começar a gerar
                                    economia imediatamente.
                                    <br />
                                    <br /> Um bom Projeto de Solar pode economizar dinheiro
                                    substituindo a eletricidade da rede por eletricidade solar
                                    gerada em seu telhado. O custo da energia solar mais qualquer
                                    valor restante da conta de energia elétrica pode ser menor do
                                    que o que era antes da energia solar.{" "}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Cachoeira} alt="BigCo Inc. logo" />
                                <h3>sucesso</h3>
                                <h4>Fatores-Chave</h4>
                            </div>
                            <div>
                                <ul>
                                    <li>Quanto sol atinge seu telhado</li>
                                    <li>Quanta energia você consome</li>
                                    <li>Taxas de eletricidade</li>
                                    <li>Incentivos aplicáveis</li>
                                    <li>Políticas solares de apoio</li>
                                    <li>Custos de hardware, instalação e monitoramento</li>
                                </ul>
                            </div>
                        </div>
                    </Economia>
                    <CustoFuturo >
                        <Custo>
                            <h1>A ENERGIA SOLAR AUMENTA O VALOR DA SUA CASA? </h1>
                            <div>
                                <div>
                                    <img src={Horizonte} alt="BigCo Inc. logo" />
                                    <div>
                                        <h2>CUSTO BAIXO</h2>
                                    </div>
                                    <p>
                                        Para proprietários preocupados com o aumento dos preços da
                                        eletricidade, uma casa com energia solar ajuda a controlar os
                                        custos de eletricidade e pode proporcionar economia ao longo do
                                        tempo. Este aumento no valor se aplica a casas com instalações
                                        solares adquiridas, não sistemas financiados.
                                    </p>
                                </div>
                                <div>
                                    <img src={Nuvens} alt="BigCo Inc. logo" />
                                    <div>
                                        <h2>MAIOR VALOR</h2>
                                    </div>
                                    <p>
                                        Os compradores de residências estâo dispostos a pagar um prêmio
                                        por uma casa com uma instalaçâo solar adquirida.
                                    </p>
                                </div>
                            </div>
                        </Custo>
                        <section>
                            <div>
                                <h1>O FUTURO DA ENERGIA É SOLAR </h1>
                                <p>
                                    O custo da energia solar caiu 89% nos últimos 10 anos e agora é
                                    mais barato do que os combustíveis fósseis tradicionais. Esse
                                    custo só continuará a cair com o amadurecimento das novas
                                    tecnologias. O futuro da energia é solar, e o futuro está aqui.{" "}
                                </p>
                            </div>
                            <div>
                                <h1>POR QUE MUDAR PARA SOLAR? </h1>
                                <p>
                                    Obtenha a força do sol e viva de forma sustentável.
                                    <br />
                                    <br /> Reduza drasticamente ou até elimine suas contas de luz. A
                                    maioria dos proprietários de energia solar vê uma redução de 50%
                                    em suas contas mensais, enquanto se protegem do aumento dos custos
                                    de energia.
                                </p>
                            </div>
                        </section>
                    </CustoFuturo>
                </div>
            </ContentMain>
            <Footer />
        </Container>
    )
}