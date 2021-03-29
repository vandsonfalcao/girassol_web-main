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

        overflow: hidden;
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
        color: var(--salmon);
        margin: 2rem 0;
    }
    h2 {
        color: var(--text-title);
        margin: 1rem 0;
    }
    h3 {
        margin: 0.5rem 0;
        color: var(--green);
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
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  @media screen and (max-width: 870px) {
      justify-content: center;
  }
  p {
      text-align: center;
  }
  div {
    max-width: 320px;
    text-align: center;
    div {
        width: 320px;
        height: 210px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background-size: 100% 100%;
    }

  }
`;
export const Economia = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
    img {
        float: left;
        margin: 1rem;
    }
    > div {
        width: 100%;
        padding: 1rem;
    } 
    >div:first-child {
        max-width: 40%;
        @media screen and (max-width: 768px) {
            max-width: 100%;
        }
    }
    >section {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

`;