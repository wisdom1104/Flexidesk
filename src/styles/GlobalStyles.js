import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

${reset}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
//Inter
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
    --gray: #C9CDD6;
    --lightgray: #F1F2F4; 

/* 어두운 순 */
    --blue_001: #07133B;
    --blue_002: #0B2475;
    --blue_003: #314563;
    --blue_004: #A6AEBB;

    --mint_001: #4A8E8B;
    --mint_002: #65BAB6;
    --mint_003: #B6DFDD;
    --mint_004: #DEF1EF;

    --grey_001: #15161A;
    --grey_002: #8B93A6;
    --grey_003: #C9CDD6;
    --grey_004: #F1F2F4;

    --error: #FF5353;
    
    --white: #ffffff;

    --buttonGradation: linear-gradient(276.35deg, #07133B 10.61%, #0B2475 85.36%);
    --spaceGradation:linear-gradient(291.78deg, #a2cecf 0%, #b6dfdd 100%);
    --welcomeGradation:linear-gradient(180deg, #07133B 15.36%, #ACDAD8 119.53%);
  };
`;

export default GlobalStyles;
