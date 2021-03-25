import styled from "styled-components";
import background from "../../assets/sights/fundo_principal.png";

export const Container = styled.div`
  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 15px;
    a {
      margin-left: 12px;
    }
  }
`;

export const FundoMenu = styled.div`
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 539px;
  header {
    div {
      flex-wrap: wrap;
    }
  }
`;

export const Simular = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 0px;
  width: 320px;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;

  strong {
    font-size: 2rem;
  }
`;

export const Explorar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Dados = styled.div`
  box-shadow: 0 0 0.3em black;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 27.6vw;
  margin-right: 15px;
  h1 {
    font-size: 1rem;
    padding-left: 25px;
  }
  img {
    border-radius: 5px;
  }
`;

export const Cotacao = styled.div`
  margin-top: 88px;
  margin-bottom: 61px;
  h1 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 5px;
  }
  img {
    margin-bottom: 5px;
  }
`;

export const Grid = styled.div`
  @media (max-width: 800px) {
    flex-direction: column;
    div {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  max-width: 391px;
  display: flex;
  padding-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    font-size: 0.5rem;
    color: #008489;
    margin-top: 10px;
  }
  p {
    font-size: 0.8rem;
    margin-top: 12px;
  }
  div {
    &:nth-child(2) {
      margin-left: 72px;
      margin-right: 72px;
    }
  }
`;

export const Economia = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  > div {
    display: flex;
    flex-wrap: wrap;
  }
  h3 {
    font-size: 0.6rem;
    color: #767676;
    margin-top: 8px;
    margin-bottom: 4px;
  }
  h1 {
    color: #484848;
    font-size: 1rem;
  }
  p {
    color: #484848;
    font-size: 1rem;
  }
`;

export const Custo = styled.div`
  h1 {
    font-size: 1.5rem;
  }
  strong {
    font-size: 1.5rem;
    color: #484848;
    padding-bottom: 24px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    > div {
      margin-right: 18px;
      max-width: 290px;
      img {
        margin-top: 30px;
        height: 40vh;
        width: 18vw;
      }
      p {
        color: #484848;
        font-size: 1.15rem;
        line-height: 19px;
        margin-bottom: 72px;
      }
      > div {
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid #484848;
        max-width: 97px;
        margin-bottom: 9px;
        margin-top: 8px;
        h1 {
          font-size: 0.75rem;
          color: #484848;
        }
      }
    }
  }
`;

export const Futuro = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    max-width: 670px;
    color: #484848;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 24px;
    }
    p {
      font-size: 1rem;
      margin-right: 75px;
    }
  }
`;
