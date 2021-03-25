import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #ffff;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 8px;
  width: 100%;
  border: 2px solid #f79862;
  color: #000;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.insFocused &&
    css`
      color: #000;
      border-color: #f79862;
    `}
  ${(props) =>
    props.insFilled &&
    css`
      color: #000;
    `}
  input {
    color: #000;
    flex: 1;
    background: transparent;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    &::placeholder {
      color: #000;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
