import styled from 'styled-components';

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#F5F5F5'};
  height: ${props => props.height || ''};
`

// 전체 공통 스타일 (min은 px)
export const StOverall = styled.div`
  max-width: 62vw;
  min-width: 41vw;
  height: ${props=>props.height || '40vw'};
  display: flex;
  justify-content: center;
  margin: 0 auto;

  /* border: 1px solid red; */
`

export const StLoginForm = styled.form`
  width: 480px;
  height: ${props => props.height || '393px'};
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(175, 200, 197, 0.25);
  border-radius: 8px;
  padding: 20px;

  /* border: 4px solid red; */
`;

// 폼 전체 감싸는 div
export const StForm = styled.div`
  width: ${props => props.width || '31vw'};
  height: ${props => props.height || '380px'};
  left: 560px;
  top: 348px;
  /* margin-top: ${props => props.margintop || '100px'}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  /* border: 2px solid blue; */
`

export const StFormBox = styled.div`
    width: 420px;
    height: 78px;
`

// 버튼
export const StLongButton = styled.button`
  width: 422px;
  height: 60px;

  align-items: center;
  color: #fff;
  background: #07133b;
  border-radius: 8px;

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 22px;

  margin-top: 16px;
`;

export const StSmallButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;

  background: #F1F2F4;
  border: 1px solid #A6AEBB;
  border-radius: 4px;
`

// signup
export const StTextInput = styled.div`
  width: 27.5vw;
  height: ${props => props.height || '108px'};

  margin-top: 10px;

  /* border: 4px solid yellow; */
`