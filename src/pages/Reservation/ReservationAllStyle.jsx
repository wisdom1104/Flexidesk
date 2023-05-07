import styled from 'styled-components';

export const InfoContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin: 10px;
`;

export const SchContain = styled.div`
  width: ${props => props.width || '800px'};
  height: ${props => props.height || '530px'};
  background: #def1ef;
  border-radius: 10px;
  margin: 30px 11px;
`;
export const StSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const StSelectDay = styled.div`
  display: flex;
  gap: 5px;
  margin: 0px 30px;
  color: #59aba7;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const DayContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: ${props => props.width || '92%'};
  height: ${props => props.height || '450px'};
  background: #ffffff;
  box-shadow: 0px 5.02286px 37.6714px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 0px 15px;
`;

export const Day = styled.button`
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

export const StDate = styled.button`
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
export const UserList = styled.div`
  /* background-color: steelblue; */
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.ml || '10px'};
  margin-right: 10px;
  padding: ${props => props.padding || '10px 0px'};
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '80px'};
  gap: 10px;
  overflow: scroll;
  overflow-x: hidden;
  border-top: ${props => props.border || '1px solid var(--lightgrey)'};
  border-bottom: ${props => props.border || '1px solid var(--lightgrey)'};
  /* 스크롤바 스타일 변경 */
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바 너비 */
  }
  /* 스크롤바 썸네일 스타일 변경 */
  ::-webkit-scrollbar-thumb {
    background-color: #b6dfdd;
    border-radius: 50px; /* 스크롤바 모양 */
  }
`;
export const CheckContainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* background-color: transparent; */
  /* background-color: steelblue;s */
  padding: 10px 0px;
  width: ${props => props.width || '95%'};
  margin: auto;
  border-radius: 8px;
`;

export const CheckContain = styled.div`
  border: none;
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 3px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
`;
export const FontSt = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  color: #07133b;
`;

export const StReserTimeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background || 'white'};
  padding: 10px 0px;
  width: ${props => props.width || '90%'};
  margin: auto;
  border-radius: 8px;
`;
export const StReserTimeButton = styled.button`
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
export const ScheduleUsers = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 15px 0px;
`;
export const ScheduleUser = styled.div`
  display: flex;
  margin-left: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #07133b;
`;
