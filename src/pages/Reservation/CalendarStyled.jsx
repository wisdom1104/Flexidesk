import styled from 'styled-components';

export const ReservationTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const MainContain = styled.div`
  width: 100vw;
  height: 100%;
  padding: 10px;
  background-color: #f4fbf9;
`;

export const StMrNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 5px;
`;

export const StMrName = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 45vw;
  height: 4vh;
  border: 1px solid;
  background-color: white;
`;

export const StCalenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 28vw;
`;

export const StReserTimeButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--blue);
  margin: 5px;
  padding: ${props => props.padding || '5px 0px'};
  font-family: inherit;
  color: #07133b;
  width: ${props => props.width || '70px'};

  &:hover {
    color: white;
    background-color: var(--blue);
  }
  &:focus {
    color: white;
    background-color: var(--blue);
  }
  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
    background-color: white;
  }
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

// 버튼
export const StSubmitButton = styled.button`
  width: 348px;
  height: 60px;
  margin-left: ${props => props.marginLeft || '18px'};
  margin-top: ${props => props.marginTop || '23px'};

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

export const StReserCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

export const StReserCountButton = styled.button`
  background-color: white;
  border-radius: 50%;
  border: 1px solid lightgray;
  color: lightgray;
`;

export const BackCusor = styled.div`
  cursor: pointer;
`;

export const ReservationCheckContain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const CheckContain = styled.div`
  border: 1px solid;
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

export const CheckTitle = styled.div`
  font-family: inherit;
  font-weight: 700;
  color: #5c6373;
`;
export const FinButton = styled.button`
  border: none;
  width: 400px;
  padding: 20px;
  margin: auto;
  background-color: #07133b;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
`;

export const Calcontain = styled.div`
  width: 100vw;
  height: 63vh;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const StSubTitle = styled.div`
  display: flex;
  /* align-items: center; */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #07133b;
  margin: ${props => props.margin || '20px 34px'};
`;

export const StIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
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

export const ScheduleInput = styled.input`
  width: ${props => props.width || '100vw'};
  height: ${props => props.height || '5vh'};
  margin: ${props => props.margin};
`;

export const ScheduleUsers = styled.div`
  width: 95%;
  height: 100px;
  /* background-color: steelblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  /* margin-top: 15px; */
  padding: 15px 0px;
`;

export const ScheduleUser = styled.div`
  display: flex;
  margin-left: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #07133b;
`;

export const UserList = styled.div`
  /* background-color: steelblue; */
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 0px;
  width: 300px;
  height: 80px;
  gap: 10px;
  overflow: scroll;
  overflow-x: hidden;
  border-top: 1px solid var(--lightgrey);
  border-bottom: 1px solid var(--lightgrey);
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

export const FontSt = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  color: #07133b;
`;

export const DateFont = styled.div`
  color: #59aba7;
`;

export const InfoBox = styled.div`
  width: ${props => props.width || '400px'};
  height: ${props => props.height || '300px'};

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 20px;
  background-color: #def1ef;
  border: none;
  border-radius: 8px;
`;
export const InfoContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin: 10px;
`;
export const Info = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;
  align-items: center;
  background-color: var(--white);

  box-shadow: 0px 5.02286px 37.6714px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 0px;
  margin-top: 20px;

  min-height: 10vw;
`;
export const CommentBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`;

export const ComFont = styled.div`
  color: #5c6373;
`;

export const DelBtn = styled.button`
  background-color: #65bab6;
  color: white;
  width: 50px;
  padding: 7px;
  border: 1px solid #65bab6;
  margin-bottom: 10px;
  border-radius: 3px;
  margin-left: 10px;
  &:hover {
    background-color: #def1ef;
    color: #4a8e8b;
  }
`;

export const PathBtn = styled.button`
  background-color: #def1ef;
  color: #65bab6;
  width: 50px;
  padding: 7px;
  border: 1px solid #def1ef;
  margin-bottom: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #65bab6;
    color: #def1ef;
  }
`;
