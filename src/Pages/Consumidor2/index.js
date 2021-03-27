import companyLogo from "../../assets/girassol_logo_branco.png";
import { IoIosArrowForward } from "react-icons/io";

import { ContentHeaderConsumidor } from '../../components/ContentHeaderConsumidor'
import { Footer } from '../../components/Footer'
import { NavDesktop } from '../../components/NavDesktop'
import { NavMobile } from '../../components/NavMobile'
import { Container, ContentMain, Cotacao } from './styles'

export function Consumidor2() {

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
                </div>
            </ContentMain>
            <Footer />
        </Container>
    )
}