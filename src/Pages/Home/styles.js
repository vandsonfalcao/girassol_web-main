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
        font-size: 2.5rem;
        color: var(--salmon);
        margin: 2rem 0;
    }
    >div {
     width: 90%;
    }
`;
export const Explorar = styled.div`
  >div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Dados = styled.div`
  box-shadow: 0 0 0.3em black;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 300px;
  margin-right: 1rem;
  h2 {
    font-size: 1rem;
    padding: 0 1rem;
  }
  img {
    width: 6.25rem;
    height: 4rem;
    border-radius: 5px;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    }

    h3 {
        color: var(--green);
        margin-top: 10px;
    }
    p {
        font-size: 0.8rem;
    }
    >div {
        div {
            height: 40vh;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            background-size: cover;
        }
    }
`;

export const Economia = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3.5rem;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
    ul {
        color: var(--text-body);
        list-style-type: circle;
        line-height: 2.5rem;
        margin-left: 1rem;
    }
    h3 {
        font-size: 0.7rem;
        color: #767676;
        margin: 0.5rem 0;
    }
    > div {
        display: grid;
        grid-template-columns: 16vw 1fr;
        gap: 1rem;
        @media screen and (max-width: 768px){
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        div {
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
            }
            
        }
    }
`;
export const CustoFuturo = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;
export const Custo = styled.div`
    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    > div {
      margin-right: 18px;
      max-width: 290px;
      img {
        width: 100%;
      }
      > div {
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid var(--salmon);
        max-width: 97px;
        margin: 0.5rem 0;
        h2 {
          font-size: 0.75rem;
          color: var(--text-title);
        }
      }
    }
  }
`;
