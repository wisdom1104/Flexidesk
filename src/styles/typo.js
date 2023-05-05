import { css } from 'styled-components';

const globalTypo = (fw, fs, lh) => {
  return css`
    font-weight: ${fw};
    font-size: ${fs}px;
    line-height: ${lh}px;
  `;
};

export const globalTypoes = {
  T11_000: globalTypo(0, 11, 0),
  T32_000: globalTypo(0, 32, 0),
  T28_000: globalTypo(0, 28, 22),

  T12_400: globalTypo(400, 12, 15),

  T14_400_14: globalTypo(400, 14, 14),
  T14_400_17: globalTypo(400, 14, 17),
  T14_400_30: globalTypo(400, 14, 30),

  T16_400: globalTypo(400, 16, 19),
  T16_500: globalTypo(500, 16, 30),
  T20_500: globalTypo(500, 20, 0),

  T12_500_15: globalTypo(500, 12, 15),
  T14_500_17: globalTypo(500, 14, 17),
  T20_500_30: globalTypo(500, 20, 30),

  T14_600: globalTypo(600, 14, 17),
  T16_600: globalTypo(600, 16, 19),
  T20_600: globalTypo(600, 20, 30),

  T14_700: globalTypo(700, 14, 30),
  T14_700_17: globalTypo(700, 14, 17),

  T16_700: globalTypo(700, 16, 19),
  T16_700_17: globalTypo(700, 16, 17),
  T16_700_19: globalTypo(700, 16, 19),

  T18_700: globalTypo(700, 18, 0),
  T18_700_22: globalTypo(700, 18, 22),
  T20_700_24: globalTypo(700, 20, 24),
  T20_700_30: globalTypo(700, 20, 30),
  T18_700_96: globalTypo(700, 18, 96),

  T24_700: globalTypo(700, 24, 30),
  T28_700_30: globalTypo(700, 28, 30),
  T28_700_34: globalTypo(700, 28, 34),

  T40_700: globalTypo(700, 40, 0),
  T48_700: globalTypo(700, 48, 30),
  T64_700: globalTypo(700, 64, 30),

  T64_800C: globalTypo(800, 64, 96),
};
