// import styled from 'styled-components'

// const FontStyled = {
//     //size제일 큰 폰트
//   StFont : styled.p`
//   width: ${props => props.width || '48vw'};
//   margin-bottom: ${props => props.marginBottom || ''};

//   font-weight: 700;
//   font-size: ${props => props.fontSize || '3rem'};
//   line-height: 150%;
//   text-align: ${props => props.align || 'center'};

//   color: ${props => props.color || 'var(--blue)'};

//   padding: ${props => props.padding || ''};
//   padding-top: ${props => props.paddingTop || ''};
//     `,

//     //size제일 작은 폰트
//     StSmallFont : styled.p`
//   width: ${props => props.width || '48vw'};
//   height: ${props => props.height || ''};
//   margin-bottom: ${props => props.marginBottom || ''};
//   margin-top: ${props => props.marginTop || ''};

//   font-weight: ${props => props.weight || '500'};
//   font-size: ${props => props.fontSize || '1.125rem'};
//   line-height: 200%;
//   text-align: ${props => props.align || 'center'};

//   color: ${props => props.color || '#6A7B8F'};
//     `,

//     //그라데이션 폰트
//     StGradationFont : styled.p`
//     width: ${props => props.width || '48vw'};
//     padding: 100px;
  
//     font-weight: 700;
//     font-size: ${props => props.fontSize || '3rem'};
//     line-height: 150%;
//     text-align: ${props => props.align || 'center'};
  
//     background: linear-gradient(180deg, var(--blue) 15.36%, #ACDAD8 119.53%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     color: transparent;
//   `

//   };

// export default FontStyled

import styled from 'styled-components';

const createStyledFont = (defaultFontSize, defaultColor, defaultwidth) => ({
  StFont: styled.p`
    width: ${props => props.width || defaultwidth};
    margin-bottom: ${props => props.marginBottom || ''};

    font-weight: 700;
    font-size: ${props => props.fontSize || defaultFontSize};
    line-height: 150%;
    text-align: ${props => props.align || 'center'};

    color: ${props => props.color || defaultColor};

    padding: ${props => props.padding || ''};
    padding-top: ${props => props.paddingTop || ''};
  `,
  StSmallFont: styled.p`
    width: ${props => props.width || defaultwidth};
    height: ${props => props.height || ''};
    margin-bottom: ${props => props.marginBottom || ''};
    margin-top: ${props => props.marginTop || ''};

    font-weight: ${props => props.weight || '500'};
    font-size: ${props => props.fontSize || '1.125rem'};
    line-height: 200%;
    text-align: ${props => props.align || 'center'};

    color: ${props => props.color || '#6A7B8F'};
  `,
  StGradationFont: styled.p`
    width: ${props => props.width || defaultwidth};
    padding: 100px;

    font-weight: 700;
    font-size: ${props => props.fontSize || defaultFontSize};
    line-height: 150%;
    text-align: ${props => props.align || 'center'};

    background: linear-gradient(180deg, var(--blue) 15.36%, #ACDAD8 119.53%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  `
});

const FontStyled = createStyledFont('3rem', 'var(--blue)','48vw');

export default FontStyled;
