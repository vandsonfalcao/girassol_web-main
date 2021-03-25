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
                    <button>Home</button>
                    <button>Nossa Solução</button>
                    <button>Consumidor</button>
                    <button>Parceiros Solar</button>
                    <button>Contato</button>
                    <button>Blog</button>
                </div>
            </Menu>
        </Container>
    )
}