import styled from 'styled-components'
import backgroundImg from '../../assets/sights/fundo_principal.png'
import mapaImg from "../../assets/mapa.png";

export const Container = styled.div`
    width: 100vw;
    background: var(--background);

    display: flex;
    flex-direction: column;

    >header {
        height: 100vh;

        background: url(${backgroundImg}) no-repeat;
        background-size: 100% 100%;

        display: flex;
        justify-content: center;
        & > div {
            width: 80%;
        }
    }
`;

export const ContentMain = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;

    p {
        text-align: justify;
        margin-bottom: 1rem;
        color: var(--text-body);
    }
    h1 {
        font-size: 2.5rem;
        color: var(--salmon);
        margin: 2rem 0;
    }
    >div {
     width: 90%;
    }
`;
export const Cotacao = styled.div`
  p {
    margin-bottom: 5px;
  }
  div {
    width: 100%;
    height: 50vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-image: url(${mapaImg});
    background-size: cover;

    img {
        margin-bottom: 5px;
    }
    button {
        background: #ffff;
        border: 0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        padding: 10px;
        color: #484848;
        svg {
            font-size: 1rem;
        }
    }
    button:hover {
        filter: brightness(0.9);
    }
  }
  
`;
