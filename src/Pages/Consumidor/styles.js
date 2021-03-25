import styled from "styled-components";
import background from "../../assets/sights/fundo_principal.png";

export const Container = styled.div`
  header {
    display: flex;
    flex-flow: wrap;

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
`;

export const Simular = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 0px;
  max-width: 320vw;
  display: flex;
  margin-right: 30px;
  flex-flow: column wrap;
  strong {
    font-size: 2rem;
  }
`;

export const Explorar = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export const Dados = styled.div`
  box-shadow: 0 0 0.3em black;
  border-radius: 5px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  width: 560vw;
  margin-right: 15px;
  h1 {
    font-size: 16px;
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
  max-width: 391vw;
  display: flex;
  padding-bottom: 15px;
  flex-flow: wrap;

  justify-content: space-between;
  h1 {
    font-size: 0.75rem;
    color: #008489;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
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
  margin-top: 80px;
  justify-content: space-between;
  h1 {
    color: #484848;
    font-size: 24px;
  }
  p {
    color: #484848;
    font-size: 16px;
  }
`;
