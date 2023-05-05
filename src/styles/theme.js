import { css } from 'styled-components';

const globalColor = color => {
  return css`
    color: ${color};
  `;
};

export const colors = {
  //어두운 순
  blue_001: globalColor('var(--blue_001)'),
  blue_002: globalColor('var(--blue_002)'),
  blue_003: globalColor('var(--blue_003)'),

  mint_001: globalColor('var(--mint_001)'),
  mint_002: globalColor('var(--mint_002)'),
  mint_003: globalColor('var(--mint_003)'),
  mint_004: globalColor('var(--mint_004)'),

  grey_001: globalColor('var(--grey_001)'),
  grey_002: globalColor('var(--grey_002)'),
  grey_003: globalColor('var(--grey_003)'),
  grey_004: globalColor('var(--grey_004)'),

  error: globalColor('var(--error)'),

  white: globalColor('var(--white)'),
};

const bgColor = color => {
  return css`
    background-color: ${color};
  `;
};

export const bgColors = {
  //어두운 순
  bgBlue_001: bgColor('var(--blue_001)'),
  bgBlue_002: bgColor('var(--blue_002)'),
  bgBlue_003: bgColor('var(--blue_003)'),

  bgMint_001: bgColor('var(--mint_001)'),
  bgMint_002: bgColor('var(--mint_002)'),
  bgMint_003: bgColor('var(--mint_003)'),
  bgMint_004: bgColor('var(--mint_004)'),

  bgGrey_001: bgColor('var(--grey_001)'),
  bgGrey_002: bgColor('var(--grey_002)'),
  bgGrey_003: bgColor('var(--grey_003)'),
  bgGrey_004: bgColor('var(--grey_004)'),

  bgWhite: bgColor('var(--white)'),

  bgButtonGradation: bgColor('var(--buttonGradation)'),
  bgSpaceBoardGradation: bgColor('var(--spaceGradation)'),
  bgWelcomeGradation: bgColor('var(--welcomeGradation)'),
};
