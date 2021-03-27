import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --green: #33cc95;
    --salmon: #f79862;

    --text-title: #363f5f;
    --text-body: #668;
  }
  * {
    margin: 0;
    border: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }
  body{
    overflow-x: hidden;
  }
  body, input, textarea, button, ul{
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, strong {
      font-weight: 600;
  }
  button { 
      cursor: pointer;
      display: inline-block;
  }
  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }
  a {
    color: var(--text-title)
  }

//        SCREEN SIZE x FONT SIZE
  @media screen and (max-width: 3840px) {
    html {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }
  @media screen and (max-width: 360px) {
    html {
      font-size: 87.5%;
    }
  }

  // ANIMATIONS
  @keyframes appearing-from-right {
      0% {
          transform: translate(5vw,0);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes appearing-from-left {
      0% {
          transform: translate(-5vw,0);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes appearing-from-top {
      0% {
          transform: translate(0,-5vh);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes sliding-from-top {
      0% {
          transform: translate(0,-5vh);
      }
      100% {
          transform: translate(0,0);
      }
  }
`;