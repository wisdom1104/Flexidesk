import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

body {
    font-family: 'Pretendard-Regular', sans-serif;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  button {
    cursor:pointer
  }

:root {
			/* color */
    --blue: #07133B;
    --lightblue: #0B2475;
    --darkblue: #314563;

    --mint1: #151515;
    --mint2: #B6DFDD;
    --mint3: #DEF1EF;
    --mint4: #F4FBF9;

    --black: #15161A;
    --darkgrey: #8B93A6;
    --grey: #C9CDD6;
    --lightgrey: #F1F2F4;

    --white : #ffffff;

    /* --line: #eaeaea;
		--white : #ffffff;
		--point : #ffcccc;
		--notice : #ff7776; */
  };
`

export default GlobalStyles;