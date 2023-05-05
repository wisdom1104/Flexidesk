import styled from 'styled-components';

export const OfHidden = styled.div`
  overflow: hidden;
  overflow-x: hidden;
`;

export const OfScroll = styled.div`
  overflow: scroll;
  overflow-x: hidden;
`;

export const Pointer = styled.div`
  cursor: pointer;
`;
export const Cursor = styled.div`
  cursor: default;
`;

//예외 버튼
export const GradationBtn = styled.button`
  width: 512px;
  height: 80px;
  left: 392px;
  top: 632px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;

  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;

  background: linear-gradient(
    276.35deg,
    var(--blue) 10.61%,
    var(--lightblue) 85.36%
  );
  border-radius: 64px;
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    background: var(--blue);
  }
`;

//직급수정할때 사용하는 버튼
export const SelectorBtn = styled.button`
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

//시간선택버튼
export const CalendartimeBtn = styled.button`
  border-radius: 5px;
  border: 1px solid var(--blue);
  margin: 5px;
  padding: ${props => props.padding || '5px 0px'};
  font-family: inherit;
  color: ${props => (props.isSelected ? 'white' : '#07133b')};
  background-color: ${props => (props.isSelected ? 'var(--blue)' : 'white')};
  width: ${props => props.width || '70px'};

  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
    background-color: white;
  }
`;

export const CalendarDayBtn = styled.button`
  min-width: ${props => props.width || 'calc(100% / 7.5)'};
  background-color: transparent;
  border: 1px solid transparent;
  width: 3vw;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  padding: 0px 0px 15px 0px;
  margin: 0px 3px;
  //글자
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #65bab6;
`;

export const CalendarDateBtn = styled.button`
  min-width: ${props => props.width || 'calc(100% / 7.5)'};
  background-color: ${props => props.background || '#ffffff'};
  /* background-color: lightblue; */
  border: none;
  border-top: 0.627857px solid #c9cdd6;
  /* height: 6vh; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0px;
  margin: 0px 3px;
`;
