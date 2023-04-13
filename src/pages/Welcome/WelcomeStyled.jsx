import styled from "styled-components";

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#d2ece9'};
  height: ${props => props.height || ''};
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

  padding: ${props => props.padding || ''};
  padding-top: ${props => props.paddingtop || ''};
  /* background: blue; */
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
// welcome 4
export const StIntroArray = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 100px;

  border: 5px solid green;
`

export const StIntroDiv = styled.div`
  width: 166vh;
  height: 360px;
  display:flex;
  gap: 100px;

  align-items: center;

  border: 2px solid yellow;
`;

export const StIntroPhoto = styled.div`
  width: 363px;
  height: 363px;
  display: inline-block;

  background: #d9d9d9;
`;

export const StIntroWrite = styled.div`
  width: 770px;
  height: 363px;
  display: inline-block;

  background: #fdffdc;
`;

// welcome 5
export const StSpaceDiv = styled.div`
  margin-bottom: 100px;
`

export const StSpacePhoto = styled.div`
  width: 62vw;
  height: 37vw;

  background: #eeeded;
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
`;
