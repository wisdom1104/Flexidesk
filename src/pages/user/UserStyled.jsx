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
  /* height: ${props => props.height || '40vw'}; */
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StLoginForm = styled.form`
  width: ${props => props.width || '460px'};
  height: ${props => props.height || '380px'};
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(175, 200, 197, 0.25);
  border-radius: 8px;
  padding: 20px;
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
  height: 78px;
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

// signup
export const StTextInput = styled.div`
  width: 27.5vw;
  height: ${props => props.height || '108px'};


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
  height: 45px;

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
  height: 45px;

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
