import styled from 'styled-components'

export const ContainStyled = {
    //max,min지정 제일 상위 컴포넌트로 사용
    StOverall : styled.div`
    max-width: 1440px;
    min-width: 410px;
    height: ${props => props.height || '785px'};
    display: flex;
    justify-content: center;
    margin: 0 auto;
    `,

  };

  //세로 정렬
export const StWrapDiv = styled.div`
  width: 50vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: ${props => props.margin || '120px'};
`;

//2개 버튼 div
export const StButtonGapContain = styled.div`
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
