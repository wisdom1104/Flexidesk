import styled from 'styled-components';

export const StBackground = styled.div`
  background: ${props => props.background || '#d2ece9'};
`
export const StGrid = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width:75vw;
  height: ${props=>props.height || '68vh'};
  margin: 0 auto;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: center;
`;

export const StColumnDiv = styled.div`
  height: ${props=>props.height || '100vh'};
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: center;
`;

// 버튼
export const StButtonGap = styled.div`
  /* gap: 60px;
  display: flex;
  justify-content: center; */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 60px;

  position: absolute;
  width: 600px;
  height: 110px;
  left: 444px;
  top: 450px;
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
// 폰트
export const StFont = styled.p`
  width: ${props => props.width || '39vw'};
  height: ${props => props.height || '6vw'};

  font-weight: 700;
  font-size: ${props => props.fontSize || '3rem'};
  line-height: 150%;
  text-align: ${props => props.align || 'center'};

  color: ${props => props.color || '#07133b'};

  background: aquamarine;
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

export const StIntroDiv = styled.div`
  width: 1280px;
  height: 363px;
  left: 80px;
  top: 2593px;
  margin-top: 300px;

  display: grid;
  grid-template-columns: 1fr 1fr; /* 두 개의 열로 구성 */
  grid-gap: 10px; /* 아이템 사이의 간격 */
  align-items: center;
`;

export const StIntroPhoto = styled.div`
  width: 363px;
  height: 363px;
  
  background: #d9d9d9;
`;

export const StIntroWrite = styled.div`
  /* width: 600px;
  height: 363px; */
  width: 770px;
  height: 363px;

  background: #d9d9d9;
`;

export const StSpacePhoto = styled.div`
  /* width: 1280px; */  
  /* height: 720px; */

  width: 1200px;
  height: 720px;
  left: 80px;

  background: #d9d9d9;
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
`;

////////////////////캐러셀//////////////////////////
export const StCard = styled.div`
  border: 2px solid #995454;
  width: 600px;
  height: 300px;
  background-color: #efadad;
  font-size: 32px;
  
`

export const StCard2 = styled.div`
  border: 2px solid #1d5e25;
  width: 600px;
  height: 300px;
  background-color: #adefb5;
  font-size: 32px;
`

export const StCard3 = styled.div`
  border: 2px solid #1d2d5e;
  width: 600px;
  height: 300px;
  background-color: #c7ccfe;
  font-size: 32px;
`