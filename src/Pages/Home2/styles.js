import styled from 'styled-components'
import backgroundImg from '../../assets/sights/fundo_principal.png'

export const Container = styled.div`
    width: 100vw;
    background: var(--background);

    display: flex;
    flex-direction: column;

    header {
        height: 100vh;

        background: url(${backgroundImg}) no-repeat;
        background-size: 100% 100%;

        display: flex;
        justify-content: center;
        & > div {
            width: 80%;
        }
    }
    main {
        height: 80px;
        background: var(--shape);
    }
    footer {
        height: 300px;
        background: var(--salmon);
    }
`