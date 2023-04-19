import styled from 'styled-components';

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#F5F5F5'};
  height: ${props => props.height || ''};
`;

// 전체 공통 스타일 (min은 px)
export const StOverall = styled.div`
  max-width: 1440px;
  min-width: 410px;
  min-height: 680px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StLoginForm = styled.form`
  width: 420px;
  height: ${props => props.height || '450px'};
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(175, 200, 197, 0.25);
  border-radius: 8px;
  padding: 40px;
`;

// 폼 전체 감싸는 div
export const StForm = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

`;

export const StFormBox = styled.div`
  width: 420px;
  height: 84px;
`;

// 버튼
export const StLongButton = styled.button`
  width: 420px;
  height: 60px;

  align-items: center;
  color: #fff;
  background: #07133b;
  border-radius: 8px;

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 22px;

  margin-top: 5px;
`;

export const StSmallButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  margin-top: 10px;

  background: #f1f2f4;
  border: 1px solid #a6aebb;

  border-radius: 4px;
`;
//login
export const StLoginContain = styled.div`
  width: 400px;
  height: 60px;
  border: 2px solid #A6AEBB;
  border-radius: 8px;
  
  align-items: center;
  display: flex;

`

export const StLoginIconDiv = styled.div`
  width:15%;
  height: 50px;
  display:flex;
  align-items:center;
  padding-right:10px;

`
export const StLoginIcon = styled.img`
  width: 20px;
  display: inline-block;
  margin-left: 20px;
  z-index: 1;
`

// signup
export const StTextInput = styled.div`
  width: 24vw;
  height: ${props => props.height || '75px'};
  margin-top: 16px;
`;

/////////////////////////////
export const Container = styled.div`
  width: 420px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const InlineInput = styled.input`
  width: 80%;
  height: 50px;

  border: 1px solid #a6aebb;
  border-radius: 8px;

  font-size: 1em;
  padding: 0 10px;
  padding-left: 5px;

  outline: none;
  box-sizing: border-box;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #a6aebb;
`;

export const InlinButton = styled.input`
  width: 20%;
  height: 48px;

  outline: none;
  margin-left: 10px;
  padding: 8px 16px;

  box-sizing: border-box;
  background-color: #f1f2f4;
  cursor: pointer;

  border: 1px solid #a6aebb;
  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #a6aebb;
`;
