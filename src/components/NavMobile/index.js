import { useState } from 'react';
import companyLogo from '../../assets/girassol_logo_branco.png'
import { Container, MenuColumn, MenuBar, ButtonBurger } from './styles';

export function NavMobile() {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    function handleShowMenu() {
        const btns = document.querySelectorAll('.menu-btn');
        const itens = document.querySelectorAll('.menu-item');
        if (!isVisibleMenu) {
            btns.forEach((btn) => {
                btn.classList.add('open')
            })
            itens.forEach((item) => {
                item.classList.add('hidden-menu')
            })
            setIsVisibleMenu(!isVisibleMenu);

        } else {
            btns.forEach((btn) => {
                btn.classList.remove('open')
            })
            itens.forEach((item) => {
                item.classList.remove('hidden-menu')
            })
            setIsVisibleMenu(!isVisibleMenu);
        }
    }
    return (
        <Container>
            <MenuBar>
                <div>
                    <img src={companyLogo} alt="BigCo Inc. logo" />
                    <span>Girassol.ai</span>
                </div>
                <div onClick={handleShowMenu}>
                    <ButtonBurger>
                        <div className="menu-btn up" />
                        <div className="menu-btn mid" />
                        <div className="menu-btn down" />
                    </ButtonBurger>
                </div>
            </MenuBar>
            <MenuColumn>
                <a href="/" className="menu-item">Home</a>
                <a href="/" className="menu-item">Nossa Solução</a>
                <a href="/consumidor" className="menu-item">Consumidor</a>
                <a href="/" className="menu-item">Parceiros Solar</a>
                <a href="/" className="menu-item">Contato</a>
                <a href="/" className="menu-item">Blog</a>
            </MenuColumn>
        </Container>
    )
};