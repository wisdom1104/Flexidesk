import styled from 'styled-components'

const BackgroundStyled = {
    
    StBackground: styled.div`
      background: ${props => props.background || '#DEF1EF'};
      height: ${props => props.height || ''};
    `,
    StGradationBackground: styled.div`
      background: linear-gradient(180deg, #FFFFFF 0%, #DEF1EF 100%);
      height: 155vh;
    `
  };

export default BackgroundStyled