import { Link } from 'react-router-dom';
import styled from 'styled-components';

//배경
export const StBackground = styled.div`
  background: ${props => props.background || '#F5F5F5'};
  height: ${props => props.height || ''};
`;

// 전체 공통 스타일 (min은 px)
export const StOverall = styled.div`
  max-width: 10vw;
  min-width: 21vw;
  min-height: 35vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const StLoginContain = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StLoginForm = styled.form`
  width: 420px;
  height: 100%;

  background: var(--white);
  box-shadow: 0px 8px 20px rgba(175, 200, 197, 0.25);

  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  margin-top: 100px;
`;

// 폼 전체 감싸는 div
export const StForm = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
`;

export const StFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

// 버튼
export const StLongButton = styled.button`
  width: 420px;
  height: 60px;
  margin-top: 20px;

  align-items: center;
  border-radius: 8px;
  border: none;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 22px;
  color: var(--white);
  background: var(--blue);
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    color: var(--blue);
    background: var(--white);
    border: 1px solid var(--blue);
  }
`;

export const StSmallButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  margin-top: 10px;

  background: var(--lightgrey);
  border: 1px solid #a6aebb;

  border-radius: 4px;
`;

//login
export const StLoginInputIconBox = styled.div`
  width: 100%;
  height: 60px;
  border: 2px solid #a6aebb;
  border-radius: 8px;

  align-items: center;
  display: flex;
`;

export const StLoginIconDiv = styled.div`
  width: 15%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
export const StLoginIcon = styled.img`
  width: 20px;
  display: inline-block;
  margin-left: 20px;
  z-index: 1;
`;

export const StLink = styled(Link)`
  width: 90px;
  margin-top: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: end;

  color: var(--darkgrey);
`;

// signup
export const StTextInput = styled.div`
  height: ${props => props.height || '75px'};
  margin-top: ${props => props.marginTop || '16px'};
`;

//오류메시지
export const SterrorFont = styled.p`
  text-align: start;
  margin-top: 10px;
`;

//////////////////////////////////////////////////////////
export const Container = styled.div`
  width: 420px;
  height: 35px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const InlineInput = styled.input`
  width: 80%;
  height: 50px;
  display: block;

  border: 1px solid #a6aebb;
  border-radius: 8px;

  font-size: 1em;
  padding: 0 10px;
  padding-left: 5px;

  outline: none;
  box-sizing: border-box;

  font-weight: 700;
  line-height: 17px;
  color: #a6aebb;
  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue);
  }
`;

export const InlinButton = styled.input`
  width: 20%;
  height: 48px;

  outline: none;
  margin-left: 10px;
  padding: 8px 16px;

  cursor: pointer;

  border: 1px solid #a6aebb;
  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: var(--white);
  background: var(--blue);
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    color: var(--blue);
    background: var(--white);
    border: 1px solid var(--blue);
  }
`;

//managmentPage
export const DropdownMenu = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

export const DropdownButton = styled.button`
  width: 160px;
  height: 40px;
  color: #15161a;
  padding: 12px;
  margin-bottom: 45px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  border: 1px solid #65bab6;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
`;

export const DropdownContent = styled.div`
  width: 160px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: -45px;

  border: 1px solid #65bab6;
  border-radius: 8px;
`;

export const DropdownItem = styled.button`
  color: black;
  width: 160px;
  padding: 12px 16px;
  text-decoration: none;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  display: block;
  background-color: #fff;
  border: 1px transparent;
  border-radius: ${props => props.borderRadius || '8px 8px 0 0'};

  &:hover {
    background-color: #e9f6f4;
    color: #65bab6;
  }
`;
