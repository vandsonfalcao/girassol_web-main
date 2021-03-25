/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";

import companyLogo from "../../assets/girassol_logo_branco.png";
import Casa from "../../assets/casa.png";
import Seta from "../../assets/seta.png";
import Mapa from "../../assets/mapa.png";
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

import { Form } from "@unform/web";
import Input from "../../components/Input";

import {
  Container,
  FundoMenu,
  Simular,
  Explorar,
  Dados,
  Cotacao,
  Grid,
  Economia,
  Custo,
  Futuro,
} from "./styles";

import { Link } from "react-router-dom";
import Folder from "../../components/Folder";

const Home = () => {
  const inputRef = useRef(null);
  return (
    <Container>
      <FundoMenu>
        <header>
          <div>
            <img
              height={29}
              width={29}
              src={companyLogo}
              alt="BigCo Inc. logo"
            />
          </div>
          <div style={{ color: "#fff" }}>
            <a>Português (BR)</a>
            <a>Home</a>
            <a>Nossa Solução</a>
            <Link to="/consumidor">Consumidor</Link>
            <a>Parceiros Solar</a>
            <a>Contato</a>
            <a>Blog</a>
          </div>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Simular>
            <div>
              <div>
                <strong style={{ fontSize: "1.5rem" }}>
                  Vamos simular o quanto você poderá economizar?
                </strong>
                <Form ref={inputRef}>
                  <div>
                    <h1 style={{ fontSize: "0.75rem", paddingTop: 32 }}>
                      Seu endereço
                      <Input
                        name="email"
                        placeholder="Av. Ipiranga, 1000 CEP 00000-000"
                      />
                    </h1>
                  </div>
                  <div style={{ marginTop: 32 }}>
                    <h1 style={{ fontSize: "0.75rem" }}>
                      média mensal da conta de energia
                      <Input name="email" placeholder="R$ 100,00" />
                    </h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "1rem",
                      marginTop: 36,
                    }}
                  >
                    <button
                      style={{
                        background: "#f79662",
                        border: 0,
                        borderRadius: 5,
                        padding: 10,
                        color: "#ffff",
                      }}
                    >
                      Pesquisar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Simular>
          <div style={{ marginLeft: 55 }}>
            <img height={295} width={599} src={Casa} alt="BigCo Inc. logo" />
          </div>
        </div>
      </FundoMenu>
      <div style={{ padding: 80 }}>
        <h1 style={{ paddingBottom: 24 }}>O que explorar ...</h1>
        <Explorar>
          <Dados>
            <img height={65} width={100} src={Foto} alt="BigCo Inc. logo" />
            <h1>Potencial de uma área</h1>
          </Dados>
          <Dados>
            <img
              height={65}
              width={100}
              src={Explorar1}
              alt="BigCo Inc. logo"
            />
            <h1>Leads qualificados</h1>
          </Dados>
          <Dados>
            <img
              height={65}
              width={100}
              src={Explorar2}
              alt="BigCo Inc. logo"
            />
            <h1>Estimativa personalizada</h1>
          </Dados>
        </Explorar>
        <Cotacao>
          <h1>Estimativa de economia</h1>
          <p>
            A economia solar é calculada usando o tipo de telhado, média do
            consumo Elétrico, custo da sua ultima conta, clima local, custos
            solares e incentivos estimados ao longo do tempo.
          </p>
          <div
            style={{
              backgroundImage: `url(${Mapa})`,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundSize: "cover",
              height: 310,
              flexDirection: "column",
            }}
          >
            <img
              height={87}
              width={87}
              src={companyLogo}
              alt="BigCo Inc. logo"
            />
            <button
              style={{
                background: "#ffff",
                border: 0,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                padding: 10,
                color: "#484848",
              }}
            >
              vamos refinar cotação
              <img
                height={8}
                width={4}
                style={{ marginTop: 5, marginLeft: 8 }}
                src={Seta}
                alt="BigCo Inc. logo"
              />
            </button>
          </div>
        </Cotacao>
        <div style={{ marginBottom: 25 }}>
          <h1 style={{ marginBottom: 25, fontSize: "1.5rem" }}>
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
        </div>

        <Grid>
          <div>
            <div
              style={{
                backgroundImage: `url(${Quarto})`,
                height: "40vh",
                width: "25vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                backgroundSize: "cover",
              }}
            >
              <img
                height={55}
                width={55}
                src={companyLogo}
                alt="BigCo Inc. logo"
              />
            </div>
            <h1>PROSPECÇÃO</h1>
            <p>
              Analisamos até 90% das residencias em sua área usando dados de
              satélite e geoespaciais para lhe dar uma vantagem inicial em suas
              vendas externas e prospecção.{" "}
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Quarto_Azul})`,
                height: "40vh",
                width: "25vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                backgroundSize: "cover",
              }}
            >
              <img
                height={55}
                width={55}
                src={companyLogo}
                alt="BigCo Inc. logo"
              />
            </div>
            <h1>TRIAGEM </h1>
            <p>
              Concentre-se nos projetos que são importantes para você. Use nossa
              plataforma para selecionar e filtrar leads em sua região por
              tamanho de projeto, tipo de construção e muito mais.
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Sol})`,
                height: "40vh",
                width: "25vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                opacity: 0.8,
                backgroundSize: "cover",
              }}
            >
              <img
                height={55}
                width={55}
                src={companyLogo}
                alt="BigCo Inc. logo"
              />
            </div>
            <h1>DIVULGAÇÃO</h1>
            <p>
              Pronto para entrar em contato com seus clientes em potencial, mas
              não tem certeza de como fazer isso da melhor forma? Utilize nossa
              Plataforma para entender o cliente em potencial e fechar a venda.
            </p>
          </div>
        </Grid>
        <div>
          <div>
            <strong style={{ fontSize: "1.5rem" }}>
              QUANTO A ENERGIA SOLAR PODE ECONOMIZAR NAS CONTAS DE LUZ?{" "}
            </strong>
            <p style={{ fontSize: "1rem", marginBottom: 20, marginTop: 12 }}>
              Alguns fatores pode influenciar como o espaço disponível, hábitos
              de consumo e etc.
            </p>
          </div>
        </div>
        <Economia>
          <div>
            <div style={{ maxWidth: 188, marginRight: 14 }}>
              <img height={240} width={188} src={Gelo} alt="BigCo Inc. logo" />
              <h3>Contas</h3>
              <h1>Contas de eletricidade mensais mais baixas</h1>
            </div>
            <div style={{ maxWidth: 346, marginRight: 74 }}>
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
            <div style={{ maxWidth: 188, marginRight: 14 }}>
              <img
                height={240}
                width={188}
                src={Cachoeira}
                alt="BigCo Inc. logo"
              />
              <h3>sucesso</h3>
              <h1>Fatores-Chave</h1>
            </div>
            <div style={{ maxWidth: 346 }}>
              <p>
                - Quanto sol atinge seu telhado
                <br />
                <br />- Quanta energia você consome
                <br />
                <br />- Taxas de eletricidade
                <br />
                <br />- Incentivos aplicáveis
                <br />
                <br />- Políticas solares de apoio
                <br />
                <br />- Custos de hardware, instalação e monitoramento
              </p>
            </div>
          </div>
        </Economia>
        <Custo>
          <strong>A ENERGIA SOLAR AUMENTA O VALOR DA SUA CASA? </strong>
          <div>
            <div>
              <img src={Nuvens} alt="BigCo Inc. logo" />
              <div>
                <h1>MAIOR VALOR</h1>
              </div>
              <p>
                Os compradores de residências estâo dispostos a pagar um prêmio
                por uma casa com uma instalaçâo solar adquirida.
              </p>
            </div>
            <div>
              <img src={Horizonte} alt="BigCo Inc. logo" />
              <div>
                <h1>CUSTO BAIXO</h1>
              </div>
              <p>
                Para proprietários preocupados com o aumento dos preços da
                eletricidade, uma casa com energia solar ajuda a controlar os
                custos de eletricidade e pode proporcionar economia ao longo do
                tempo. Este aumento no valor se aplica a casas com instalações
                solares adquiridas, não sistemas financiados.
              </p>
            </div>
          </div>
        </Custo>
        <Futuro>
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
        </Futuro>
      </div>

      <Folder />
    </Container>
  );
};

export default Home;
