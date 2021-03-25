/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";

import companyLogo from "../../assets/girassol_logo_branco.png";
import Casa from "../../assets/casa.png";
import Mapa from "../../assets/mapa.png";
import Seta from "../../assets/seta.png";
import Produtos from "../../assets/Produtos.png";
import PainelSolar from "../../assets/PainelSolar.png";
import Fluxo from "../../assets/Fluxo.png";
import Cabo from "../../assets/Cabo.png";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image-1.png";
import Image2 from "../../assets/Image-2.png";
import Image3 from "../../assets/Image-3.png";
import Image4 from "../../assets/Image-4.png";
import Image5 from "../../assets/Image-5.png";

import { Form } from "@unform/web";
import Input from "../../components/Input";

import {
  Container,
  FundoMenu,
  Simular,
  Cotacao,
  Grid,
  Economia,
} from "./styles";
import { Link } from "react-router-dom";
import Folder from "../../components/Folder";

const Consumidor = () => {
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
            <Link to="/">Home</Link>
            <a>Nossa Solução</a>
            <a>Consumidor</a>
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
            <strong style={{ fontSize: 25 }}>
              Vamos simular o quanto você poderá economizar?
            </strong>
            <Form ref={inputRef}>
              <div>
                <h1 style={{ fontSize: 12, paddingTop: 32 }}>
                  Seu endereço
                  <Input
                    name="email"
                    placeholder="Av. Ipiranga, 1000 CEP 00000-000"
                  />
                </h1>
              </div>
              <div style={{ marginTop: 32 }}>
                <h1 style={{ fontSize: 12 }}>
                  média mensal da conta de energia
                  <Input name="email" placeholder="R$ 100,00" />
                </h1>
              </div>
              <div style={{ marginTop: 32 }}>
                <h1 style={{ fontSize: 12 }}>
                  Potência em kW
                  <Input name="email" placeholder="100 kW" />
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 16,
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
          </Simular>
          <div style={{ marginLeft: 55 }}>
            <img height={295} width={599} src={Casa} alt="BigCo Inc. logo" />
          </div>
        </div>
      </FundoMenu>
      <div style={{ padding: 80, paddingTop: 0 }}>
        <Cotacao>
          <h1>VAMOS OLHAR O QUE ESTÁ AO SEU REDOR</h1>
          <p>
            A economia solar é calculada usando o tamanho e a forma do telhado,
            áreas sombreadas do telhado, clima local, preços locais de
            eletricidade, custos solares e incentivos estimados ao longo do
            tempo. Usando um endereço válido, dê uma olhada na estimativa
            detalhada que o Girassol.ai pode fornecer.
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
          <h1 style={{ marginBottom: 25, fontSize: 24 }}>REFINAR COTAÇÃO </h1>
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
            <div
              style={{
                backgroundImage: `url(${Image})`,
                height: 240,
                width: 391,
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
            <h1>Qual o endereço da sua casa</h1>
            <p>Digite um endereço válido</p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Image1})`,
                height: 240,
                width: 391,
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
            <h1>vamos desenhar o telhado</h1>
            <p>Clique no primeiro ponto do telhado e siga nos demais pontos</p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Image2})`,
                height: 240,
                width: 391,
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
            <h1>escolha o tipo de telhado</h1>
            <p>Qual o tipo de telhado de sua casa</p>
          </div>
        </Grid>
        <Grid>
          <div>
            <div
              style={{
                backgroundImage: `url(${Image3})`,
                height: 240,
                width: 391,
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
            <h1>Qual o tamanho da sua conta de eletricidade mensal</h1>
            <p>E o tamanho médio de sua conta mensal</p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Image4})`,
                height: 240,
                width: 391,
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
            <h1>preencha os dados para receber a estimativa</h1>
            <p>Digite seus dados para receber a proposta</p>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${Image5})`,
                height: 240,
                width: 391,
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
            <h1>aqui está o resultado e economia estimada</h1>
            <p>Olhe a economia esperada</p>
          </div>
        </Grid>

        <Economia>
          <div style={{ maxWidth: 602 }}>
            <h1 style={{ marginBottom: 8 }}>
              COMO VOCÊ DEVE ESCOLHER UM FORNECEDOR?{" "}
            </h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ maxWidth: 188, marginRight: 14 }}>
                <img
                  height={150}
                  width={197}
                  src={Produtos}
                  alt="BigCo Inc. logo"
                />
              </div>
              <div style={{ maxWidth: 346, marginRight: 74 }}>
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
            <h1 style={{ marginTop: 40, marginBottom: 42 }}>
              PRINCIPAIS FATORES NA ESCOLHA DO FORNECEDOR{" "}
            </h1>
            <div>
              <h1 style={{ marginBottom: 8 }}>EXPERIÊNCIA</h1>
              <p>
                Há quanto tempo o fornecedor de energia solar está no mercado
                não é o único sinal de um bom fornecedor, mas ajuda. Veja há
                quantos anos eles estão no mercado e quantos sistemas eles
                instalaram.{" "}
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 8, marginTop: 33 }}>
                AVALIAÇÃO DO CLIENTE{" "}
              </h1>
              <p>
                As avaliações dos clientes às vezes não contam toda a história,
                especialmente se a avaliação for apenas sobre a ligação inicial.
                Mas as avaliações e depoimentos são bons insights sobre o
                atendimento ao cliente em geral e o tempo de resposta.
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 13, marginTop: 11 }}>TRABALHO</h1>
              <p>
                Procure certificações, empreiteiros licenciados e fotos de
                trabalhos concluídos.
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 8, marginTop: 21 }}>COTAÇÃO FINAL </h1>
              <p>
                Um bom fornecedor de energia solar será transparente.
                Certifique-se de que eles listam todos os seus custos estimados
                com economia projetada, instalação do sistema e custos de
                manutenção, bem como garantias do produto para ajudar a proteger
                seu investimento.
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 8, marginTop: 22 }}>
                COMPONENTES DO SISTEMA{" "}
              </h1>
              <p>
                Veja quais painéis e inversores eles oferecem. Alguns provedores
                possuem uma ampla variedade de tipos.
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 8, marginTop: 24 }}>TEMPO</h1>
              <p>
                É uma boa ideia observar o tempo médio de espera de um
                fornecedor de energia solar para a instalação. Pergunte quando
                eles agendariam sua instalação.
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 8, marginTop: 4 }}>GARANTIAS</h1>
              <p>
                Certifique-se de que eles fornecem garantias de produto e
                desempenho. Procure o comprimento da cobertura. O padrão é a
                garantia de 20 anos para painéis solares, o que deixa você sem
                preocupações durante o período de seu aluguel, empréstimo ou
                compra.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 602 }}>
            <h1 style={{ marginBottom: 12 }}>
              QUAIS PAINÉIS SOLARES VOCÊ DEVE USAR?{" "}
            </h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ maxWidth: 188, marginRight: 14 }}>
                <img
                  height={150}
                  width={197}
                  src={PainelSolar}
                  alt="BigCo Inc. logo"
                />
              </div>
              <div style={{ maxWidth: 346 }}>
                <p>
                  Ao selecionar painéis solares, revise os seguintes detalhes
                  com seu fornecedor solar: <br />
                  <br /> O melhor valor para sua economia desejada: Depende de
                  quanto espaço utilizável no telhado você tem, da produção de
                  energia do painel e do custo.
                </p>
              </div>
            </div>
            <p>
              Estética: A cor do painel e os sistemas de montagem podem ser
              lindamente projetados para se integrarem bem à arquitetura de sua
              casa.
              <br />
              <br /> Qualidade e garantias do fabricante do painel: Proteja seu
              investimento escolhendo painéis de alta qualidade com garantias de
              20 a 25 anos.
            </p>
            <div>
              <h1 style={{ marginBottom: 2, marginTop: 44 }}>
                QUAL INVERSOR SOLAR VOCÊ DEVE ESCOLHER?{" "}
              </h1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ maxWidth: 188, marginRight: 14 }}>
                  <img
                    height={205}
                    width={205}
                    src={Fluxo}
                    alt="BigCo Inc. logo"
                  />
                </div>
                <div style={{ maxWidth: 346 }}>
                  <p>
                    Os inversores transformam a eletricidade solar gerada pelos
                    painéis (energia CC) em eletricidade utilizável (energia CA)
                    para sua casa. Normalmente instalado próximo ao painel
                    elétrico da sua casa, o inversor que você escolher deve ser
                    determinado pelo design do seu sistema.
                  </p>
                </div>
              </div>
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
              <div>
                <h1 style={{ marginBottom: 3, marginTop: 11 }}>
                  COMO VOCÊ PODE MONITORAR O DESEMPENHO DO SEU SISTEMA?{" "}
                </h1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ maxWidth: 188, marginRight: 14 }}>
                    <img
                      height={152}
                      width={162}
                      src={Cabo}
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div style={{ maxWidth: 346 }}>
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
          </div>
        </Economia>
      </div>

      <Folder />
    </Container>
  );
};

export default Consumidor;
