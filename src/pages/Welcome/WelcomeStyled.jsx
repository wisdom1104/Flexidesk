import styled, { css } from 'styled-components';

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#d2ece9'};
  height: ${props => props.height || ''};
`;

// 전체 공통 스타일
export const StOverall = styled.div`
  max-width: 1440px;
  min-width: 410px;
  height: ${props => props.height || '50vw'};
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StWrapDiv = styled.div`
  width: 50vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 120px;
`;

// 폰트
export const StFont = styled.p`
  width: ${props => props.width || '48vw'};
  /* height: ${props => props.height || '6vw'}; */
  margin-bottom: ${props => props.marginBottom || ''};

  font-weight: 700;
  font-size: ${props => props.fontSize || '3rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#07133b'};

  padding: ${props => props.padding || ''};
  padding-top: ${props => props.paddingTop || ''};
`;

export const StSmallFont = styled.p`
  width: ${props => props.width || '38vw'};
  height: ${props => props.height || ''};
  left: ${props => props.left || '597px'};
  margin-bottom: ${props => props.marginBottom || ''};
  margin-top: ${props => props.marginTop || ''};

  font-weight: ${props => props.weight || '500'};
  font-size: ${props => props.fontSize || '1.125rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#6A7B8F'};
`;

// 버튼
export const StButtonGap = styled.div`
  position: absolute;
  width: 600px;
  height: 110px;
  margin-top: 250px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 60px;
`;

export const StBlueButton = styled.button`
  width: 50vw;
  height: 12vh;
  left: 28.7vw;
  top: 50vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;

  background: #07133b;
  border-radius: 50px;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 34px;
`;

// welcome 4
export const StIntroArray = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 100px;
`;

export const StIntroDiv = styled.div`
  width: 1280px;
  height: 360px;
  display: flex;
  gap: 30px;

  align-items: center;
`;

export const StIntroPhoto = styled.div`
  width: 30%;
  height: 363px;
  display: inline-block;

  background: #d9d9d9;
`;

export const StIntroWrite = styled.div`
  width: 70%;
  height: 363px;
  display: inline-block;

  background: #fdffdc;
`;

// welcome 5
export const StSpaceDiv = styled.div`
  margin-bottom: 100px;
`;

export const StSpacePhoto = styled.div`
  width: 168vh;
  height: 37vw;

  margin-top: 15px;

  background: #eeeded;
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
`;

//캐러셀 슬라이드
export const SliderContainer = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

export const StSliders = styled.div`
  display: flex;
  gap: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${animate => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        transition: transform 350ms ease-in-out;
      `;
    }
  }};
`;

export const StSliderContain = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StSlider = styled.div`
  width: 1100px;
  height: 518px;
  background: #d9d9d9;
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;

  text-align: center;
  line-height: 200px;
`;

export const StSliderButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;

  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;

  ${({ dir }) => {
    if (dir === 'left') {
      return css`
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === 'right') {
      return css`
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
`;
