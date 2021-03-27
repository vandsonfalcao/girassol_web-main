
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
    FaPinterestSquare,
    FaLinkedin
} from "react-icons/fa";
import companyLogo from "../../assets/girassol_logo_branco.png";
import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div>
                <div>
                    <img
                        src={companyLogo}
                        alt="BigCo Inc. logo"
                    />
                </div>
                <div>
                    <h3>Girassol.ai</h3>
                    <p style={{ marginBottom: 47, marginTop: 30 }}>
                        São Paulo, SP.
                        <br /> <br />
                        Brasil - BR
                    </p>
                    <p>© 2021 Girassol Solar AI</p>
                </div>
            </div>
            <footer>
                <div>
                    <h3>SOCIAL</h3>
                    <div>
                        <section>
                            <a href="http://www.facebook.com/">
                                <FaFacebookSquare />
                            </a>
                            <a href="http://www.instagram.com">
                                <FaInstagramSquare />
                            </a>
                            <a href="http://www.linkedin.com">
                                <FaLinkedin />
                            </a>
                        </section>
                        <div>
                            <a href="http://www.pinterest.com">
                                <FaPinterestSquare />
                            </a>
                            <a href="http://twitter.com">
                                <FaTwitterSquare />
                            </a>
                            <a href="http://www.youtube.com">
                                <FaYoutubeSquare />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>NAVEGUE</h3>
                    <button>Home</button>
                    <button>Nossa Soluçâo</button>
                    <button>Sobre Nós</button>
                    <button>Perguntas Frequentes</button>
                    <button>Blog</button>
                </div>
                <div>
                    <h3>FALE CONOSCO</h3>
                    <p>Entre em Contato</p>
                    <p>contato@girassol.ai</p>
                </div>
                <div>
                    <h3>LEGAL</h3>
                    <a href="/#">Política Privacidade</a>
                    <a href="/#">Termos de Uso</a>
                </div>
            </footer>
        </Container>
    )
}