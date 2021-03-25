import { useState } from 'react';
import companyLogo from '../../assets/girassol_logo_branco.png'
import { MdDehaze, MdClose } from 'react-icons/md'
import { Container, MenuColumn, MenuBar } from './styles';

export function NavMobile() {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    function handleShowMenu() {
        setIsVisibleMenu(!isVisibleMenu);
    }
    return (
        <Container>
            <div>
                <MenuBar>
                    <img src={companyLogo} alt="BigCo Inc. logo" />
                    {isVisibleMenu === true ? (
                        <a href="#" onClick={handleShowMenu}><MdClose size={45} /></a>
                    ) : (
                        <a href="#" onClick={handleShowMenu}><MdDehaze size={45} /></a>
                    )}
                </MenuBar>
            </div>
            {isVisibleMenu === true ? (
                <MenuColumn>
                    <button>Home</button>
                    <button>Nossa Solução</button>
                    <button>Consumidor</button>
                    <button>Parceiros Solar</button>
                    <button>Contato</button>
                    <button>Blog</button>
                </MenuColumn>
            ) : (
                <div style={{ display: "none" }} />
            )}
        </Container>
    )
};