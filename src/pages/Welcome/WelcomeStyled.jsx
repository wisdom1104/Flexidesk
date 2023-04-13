import styled from "styled-components";

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#d2ece9'};
`

// 전체 공통 스타일
export const StOverall = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 40vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  border: 2px solid red;
`

// 폰트
export const StFont = styled.p`
  width: ${props => props.width || '48vw'};
  /* height: ${props => props.height || '6vw'}; */

  font-weight: 700;
  font-size: ${props => props.fontSize || '3rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#07133b'};

  padding-top: ${props => props.paddingtop || ''};

`;

export const StSmallFont = styled.p`
  width: ${props => props.width || '35vw'};
  height: ${props => props.height || ''};
  left: ${props => props.left || '597px'};

  font-weight: ${props => props.weight || '500'};
  font-size: ${props => props.fontSize || '1.125rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#6A7B8F'};

  background: black;
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

  border: 2px solid red;

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

export const StWrapDiv = styled.div`
  /* height: ${props=>props.height || '50vh'}; */
  display: flex;
  /* flex-direction: ${props => props.direction || 'column'}; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 500px;

  border: 2px solid yellow;
`;
