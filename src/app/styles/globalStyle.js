import { createGlobalStyle } from 'styled-components';
import { youTubeDark, youTubeSans } from '../styles/setFonts';

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    background: #EFEFEF;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #222222;
  
  }

  p {
    margin: 0;
    color: #666666;
    
  }

  a {
    text-decoration: none;
  }

  .pswp__scroll-wrap {
    padding: 4rem;
  }

  .pswp__img {
    object-fit: contain;
  }
`;

export default GlobalStyle;
