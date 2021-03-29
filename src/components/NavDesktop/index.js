import companyLogo from '../../assets/girassol_logo_branco.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Container, Menu } from './styles'

export function NavDesktop() {
    return (
        <Container>
            <section>
                <span>Português (BR)<MdKeyboardArrowDown /></span>
            </section>
            <Menu>
                <img src={companyLogo} alt="BigCo Inc. logo" />
                <div>
                    <a href="/">Home</a>
                    <a href="/" >Nossa Solução</a>
                    <a href="/consumidor">Consumidor</a>
                    <a href="/" >Parceiros Solar</a>
                    <a href="/" >Contato</a>
                    <a href="/" >Blog</a>
                </div>
            </Menu>
        </Container>
    )
}