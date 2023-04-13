import styled from 'styled-components';

export const StBackground = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  left: 0px;
  top: 0px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #d2ece9;
`;

// 로그인 폼 감싸는 div
export const StForm = styled.div`
width: ${props => props.width || '480px'};
height: ${props => props.height || '480px'};
left: 560px;
top: 348px;
margin-top: ${props => props.margintop || '100px'};

display: flex;
flex-direction: column;
align-items: center;
padding: ${props => props.padding || '0px'};
gap: 16px;

background: #46e3c9;
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
