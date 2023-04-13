import styled from 'styled-components';

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
`

// 로그인 폼 감싸는 div
export const StForm = styled.div`
width: ${props => props.width || '480px'};
height: ${props => props.height || '380px'};
left: 560px;
top: 348px;
margin-top: ${props => props.margintop || '100px'};

display: flex;
flex-direction: column;
align-items: center;
padding: ${props => props.padding || '0px'};
gap: 16px;
`
export const StLoginForm = styled.form`
  width: 480px;
  height: 393px;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(175, 200, 197, 0.25);
  border-radius: 8px;
`;

export const StLongButton = styled.button`
  width: 400px;
  height: 60px;
  align-items: center;
  color: #fff;
  background: #07133b;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
