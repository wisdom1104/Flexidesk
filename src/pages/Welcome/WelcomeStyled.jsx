import styled from 'styled-components';

export const StBackground = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: center;

  background: ${props => props.background || '#d2ece9'};
`;

export const StColumnDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StButtonGap = styled.div`
  gap: 60px;
  display: flex;
  justify-content: center;
`;

export const StBlueButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;

  width: 307px;
  height: 94px;
  left: 386px;
  top: 450px;

  background: #07133b;
  border-radius: 50px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 34px;
`;

export const StFont = styled.p`
  width: ${props => props.width || '750px'};
  height: ${props => props.height || '144px'};
  left: 459px;
  top: 937px;

  font-weight: 700;
  font-size: ${props => props.fontSize || '48px'};

  line-height: 150%;

  text-align: ${props=>props.align || 'center'};

  color: ${props => props.color || '#07133b'};

  background: aquamarine;
`;

export const StSmallFont = styled.p`
  width: ${props => props.width || '280px'};
  height: ${props => props.height || '108px'};
  max-width: 1200px;
  min-width: 800px;
  left: ${props => props.left || '597px'};
  top: ${props => props.top || '1105px'};

  font-weight: ${props => props.weight || '500'};
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  text-align: ${props=>props.align || 'center'};

  color: ${props => props.color || '#6A7B8F'};

    background: black;
`;

export const StIntroDiv = styled.div`
  width: 1280px;
  height: 363px;
  left: 80px;
  top: 2593px;

  display: flex;
  gap: 20px;
`;

export const StIntroPhoto = styled.div`
  width: 363px;
  height: 363px;

  background: #d9d9d9;
`;

export const StIntroWrite = styled.div`
  width: 600px;
  height: 363px;

  background: #d9d9d9;
`;

export const StSpacePhoto = styled.div`
width: 1280px;
height: 720px;
left: 80px;
top: 4966px;

background: #D9D9D9;
box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
border-radius: 8px;
`