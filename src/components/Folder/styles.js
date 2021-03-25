import styled from "styled-components";

export const Foolter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 12px;
  padding-left: 21px;
  background-color: #f79862;
  height: auto;
  height: 100%;
  color: #ffffff;
  font-size: 14px;
  h3 {
    font-size: 1.25rem;
  }
  > div {
    display: flex;

    flex-wrap: wrap;
    > div {
      padding: 20px;
      img {
        margin-right: 10%;
      }
      p {
        line-height: 20px;
      }
      > div {
        width: 13vw;
        margin-bottom: 12.5px;
        margin-top: 3px;
        border: 0.5px solid #ffffff;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: #f79862;
  height: 100%;
  width: 100%;
`;
