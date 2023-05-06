import { css } from 'styled-components';

const globalTypo = (fw, fs, lh) => {
  return css`
    font-weight: ${fw};
    font-size: ${fs}px;
    line-height: ${lh};
  `;
};

export const globalTypoes = {
  T11_000: globalTypo(0, 11, ' 0px'),
  T32_000: globalTypo(0, 32, ' 0px'),
  T28_000: globalTypo(0, 28, '22px'),

  T12_400: globalTypo(400, 12, '15px'),

  T14_400_14: globalTypo(400, 14, '14px'),
  T14_400_17: globalTypo(400, 14, '17px'),
  T14_400_30: globalTypo(400, 14, '30px'),

  T16_400: globalTypo(400, 16, '19px'),
  T16_500: globalTypo(500, 16, '30px'),
  T20_500: globalTypo(500, 20, ' 0px'),

  T12_500_15: globalTypo(500, 12, '15px'),
  T14_500_17: globalTypo(500, 14, '17px'),
  T20_500_30: globalTypo(500, 20, '30px'),

  T14_600: globalTypo(600, 14, '17px'),
  T16_600: globalTypo(600, 16, '19px'),
  T20_600: globalTypo(600, 20, '30px'),

  T14_700: globalTypo(700, 14, '30px'),
  T14_700_17: globalTypo(700, 14, '17px'),

  T16_700: globalTypo(700, 16, '19px'),
  T16_700_17: globalTypo(700, 16, '17px'),
  T16_700_19: globalTypo(700, 16, '19px'),

  T18_700: globalTypo(700, 18, '150%'),
  T18_700_22: globalTypo(700, 18, '22px'),
  T20_700_24: globalTypo(700, 20, '24px'),
  T20_700_30: globalTypo(700, 20, '30px'),
  T18_700_96: globalTypo(700, 18, '96px'),

  T24_700: globalTypo(700, 24, '30px'),
  T27_700_22: globalTypo(700, 27, '22px'),
  T28_700_30: globalTypo(700, 28, '30px'),
  T28_700_34: globalTypo(700, 28, '34px'),

  T40_700: globalTypo(700, 40, ' 0px'),
  T48_700: globalTypo(700, 48, '30px'),
  T64_700: globalTypo(700, 64, '30px'),

  T64_800C: globalTypo(800, 64, '96px'),
};
