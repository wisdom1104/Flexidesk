import { css } from 'styled-components';

const globalColor = (color) => {
  return css`
    color : ${color};
  `;
};

export const colors = {
  //어두운 순
  blue_001: globalColor('#07133B'),
  blue_002: globalColor('#0B2475'),
  blue_003: globalColor('#314563'),

  mint_001: globalColor('#4A8E8B'),
  mint_002: globalColor('#65BAB6'),
  mint_003: globalColor('#B6DFDD'),
  mint_004: globalColor('#DEF1EF'),

  grey_001: globalColor('#15161A'),
  grey_002: globalColor('#8B93A6'),
  grey_003: globalColor('#C9CDD6'),
  grey_004: globalColor('#F1F2F4'),

  error: globalColor('#FF5353'),

  white: globalColor('#ffffff')
};


const bgColor = (color) => {
  return css`
    background-color : ${color};
  `;
};

export const bgColors = {
  //어두운 순
  bgBlue_001: bgColor('#07133B'),
  bgBlue_002: bgColor('#0B2475'),
  bgBlue_003: bgColor('#314563'),

  bgMint_001: bgColor('#4A8E8B'),
  bgMint_002: bgColor('#65BAB6'),
  bgMint_003: bgColor('#B6DFDD'),
  bgMint_004: bgColor('#DEF1EF'),

  bgGrey_001: bgColor('#15161A'),
  bgGrey_002: bgColor('#8B93A6'),
  bgGrey_003: bgColor('#C9CDD6'),
  bgGrey_004: bgColor('#F1F2F4'),

  bgWhite: bgColor('#ffffff'),

  bgButtonGradation: bgColor('linear-gradient(276.35deg, #07133B 10.61%, #0B2475 85.36%)'),
  bgSpaceBoardGradation:bgColor('linear-gradient(291.78deg, #a2cecf 0%, #b6dfdd 100%'),
  bgWelcomeGradation:bgColor('linear-gradient(180deg, #FFFFFF 0%, #DEF1EF 100%)'),
}