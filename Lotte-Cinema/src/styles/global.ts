import { css } from '@emotion/react';
import Reset from './reset';

const GlobalStyle = css`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    /* font-size: 62.5%; */
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  /* Chrome, Safari 등에서 스크롤바 숨김 처리 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
