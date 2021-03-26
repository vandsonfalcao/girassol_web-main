import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --red: #e52e4d;
    --green: #33cc95;
    --salmon: #f79862;

    --text-title: #363f5f;
    --text-body: #b1b1b1;
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
  body, input, textarea, button{
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

//        SCREEN SIZE
  @media screen and (max-width: 3840px) {
    html {
      font-size: 100%;
    }
    .navMobile {
      display: none;
    }
  }
  @media screen and (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
    .navDesktop {
      display: none;
    }
    .navMobile {
      display: flex;
    }
    .content-header {
      flex-direction: column;
      h1 {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
    }
    .rodape {
      flex-direction: column!important;
      >footer {
        width: 100%;
        flex-direction: column!important;
      }
    }
  }
  @media screen and (max-width: 360px) {
    html {
      font-size: 87.5%;
    }
    .navDesktop {
      display: none;
    }
    .navMobile {
      display: flex;
    }
    .content-header {
      flex-direction: column;
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }

  // ANIMATIONS
  @keyframes appearing-from-right {
      0% {
          transform: translate(1vw,0);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes appearing-from-left {
      0% {
          transform: translate(-1vw,0);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes appearing-from-top {
      0% {
          transform: translate(0,-1vh);
          opacity: 0;
      }
      100% {
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes sliding-from-top {
      0% {
          transform: translate(0,-1vh);
      }
      100% {
          transform: translate(0,0);
      }
  }
`;