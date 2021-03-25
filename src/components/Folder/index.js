import Linkedin from "../../assets/social/LinkedIn.png";
import Facebook from "../../assets/social/Facebook.png";
import Twitter from "../../assets/social/Twitter.png";
import Instagram from "../../assets/social/instagram.png";
import Pinterest from "../../assets/social/Pinterest.png";
import companyLogo from "../../assets/girassol_logo_branco.png";
import Youtube from "../../assets/social/YouTube.png";

import { Foolter, Container } from "./styles";

const Folder = () => {
  return (
    <Container>
      <Foolter>
        <div>
          <div>
            <img
              height={25}
              width={25}
              src={companyLogo}
              alt="BigCo Inc. logo"
            />
          </div>
          <div style={{ flexDirection: "column" }}>
            <h3>Girassol.ai</h3>
            <p style={{ marginBottom: 47, marginTop: 30 }}>
              São Paulo, SP.
              <br /> <br />
              Brasil - BR
            </p>
            <p>© 2021 Girassol Solar AI</p>
          </div>
        </div>
        <div>
          <div>
            <h3>NAVEGUE</h3>
            <div></div>
            <p>Home</p>
            <p>Nossa Soluçâo</p>
            <p>Sobre Nós</p>
            <p>Perguntas Frequentes</p>
            <p>Blog</p>
          </div>
          <div>
            <h3>FALE CONOSCO</h3>
            <div />
            <p>Entre em Contato</p>
            <p>contato@girassol.ai</p>
          </div>
          <div>
            <h3>LEGAL</h3>
            <div />
            <p>Política Privacidade</p>
            <p>Termos de Uso</p>
          </div>
        </div>
      </Foolter>
      <div style={{ marginTop: 2, marginLeft: "80%" }}>
        <img
          src={Linkedin}
          style={{ margin: 5 }}
          height={29}
          width={29}
          alt="BigCo Inc. logo"
        />
        <img
          height={29}
          style={{ margin: 5 }}
          width={29}
          src={Facebook}
          alt="BigCo Inc. logo"
        />
        <img
          height={29}
          width={29}
          style={{ margin: 5 }}
          src={Twitter}
          alt="BigCo Inc. logo"
        />
        <img
          height={29}
          width={29}
          style={{ margin: 5 }}
          src={Instagram}
          alt="BigCo Inc. logo"
        />
        <img
          height={29}
          width={29}
          style={{ margin: 5 }}
          src={Pinterest}
          alt="BigCo Inc. logo"
        />
        <img
          height={29}
          width={29}
          style={{ margin: 5 }}
          src={Youtube}
          alt="BigCo Inc. logo"
        />
      </div>
    </Container>
  );
};

export default Folder;
