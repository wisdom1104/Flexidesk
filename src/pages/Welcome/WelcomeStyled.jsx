import styled, { css, keyframes } from 'styled-components';

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#DEF1EF'};
  height: ${props => props.height || ''};
`;

//그라데이션 배경
export const StGradationBackground = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #def1ef 100%);
  height: 155vh;
`;

// 전체 공통 스타일
export const StOverall = styled.div`
  max-width: 1440px;
  min-width: 410px;
  height: ${props => props.height || '785px'};
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StWrapDiv = styled.div`
  width: ${props => props.width || '50vw'};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: ${props => props.margin || '120px'};
`;

// 폰트
export const StFont = styled.p`
  width: ${props => props.width || '48vw'};
  margin-bottom: ${props => props.marginBottom || ''};

  font-weight: 700;
  font-size: ${props => props.fontSize || '4rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || 'var(--blue)'};

  padding: ${props => props.padding || ''};
  padding-top: ${props => props.paddingTop || ''};
`;
//작은 폰트
export const StSmallFont = styled.p`
  width: ${props => props.width || '48vw'};
  height: ${props => props.height || ''};
  margin-bottom: ${props => props.marginBottom || ''};
  margin-top: ${props => props.marginTop || ''};

  font-weight: ${props => props.weight || '500'};
  font-size: ${props => props.fontSize || '1.25rem'};
  line-height: 200%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#6A7B8F'};
`;

//그라데이션 폰트
export const StGradationFont = styled.p`
  width: ${props => props.width || '48vw'};
  padding: 150px;

  font-weight: 800;
  font-size: ${props => props.fontSize || '4rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  background: linear-gradient(180deg, var(--blue) 15.36%, #acdad8 119.53%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

// 버튼
export const StButtonGap = styled.div`
  position: absolute;
  width: 660px;
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
  width: 512px;
  height: 80px;
  left: 392px;
  top: 632px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;

  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;

  background: linear-gradient(
    276.35deg,
    var(--blue) 10.61%,
    var(--lightblue) 85.36%
  );
  border-radius: 64px;
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    background: var(--blue);
  }
`;
///////////////////////////위에까진 스타일 나눠놓았음///////////

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
  margin-top: ${props => props.marginTop || ''};
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
  width: ${props => props.width || ''};
  margin-bottom: 100px;
`;

export const StSpacePagePhoto = styled.img`
  max-width: 100%;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '1200px'};

  object-fit: contain;

  margin-top: ${props => props.marginTop || '40px'};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: url(image.png);
  filter: drop-shadow(0px 8px 40px rgba(140, 159, 157, 0.25));
  border-radius: 8px;
  z-index: 2;
`;

export const StImgeContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
`;
export const StImgeSecond = styled.img`
  position: absolute;
  top: 20%;
  left: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

//welcome 7
export const StfontA = styled.a`
  text-decoration: none;
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

  background: var(--white);
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === 'right') {
      return css`
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
`;

//애니메이션
const animation = keyframes`
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1100px);
    opacity: 0;
  }
`;

export const StAnimationBox = styled.div`
  height: 200px;
  width: 200px;
  /* animation: ${animation} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; */

  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  /* animation:${animation} 5s linear infinite; //1초동안 선형 무한 속성값주기 */
`;
