import styled from 'styled-components';

export const ReservationTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: large;
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
`;

export const StReserTimeButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid #07133b;
  margin: 2px;
  padding: 5px;
  font-family: inherit;
  color: #07133b;
  &:hover {
    color: white;
    background-color: #07133b;
  }
  &:focus {
    color: white;
    background-color: #07133b;
  }
  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
    background-color: white;
  }
`;

export const StReserTimeBox = styled.div`
  background-color: white;
  padding: 10px;
`;

export const StReserCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
  width: 15vw;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 3px;
  height: 100%;
  border-radius: 5px;
  background-color: white;
`;

export const CheckTitle = styled.div`
  font-family: inherit;
  font-weight: 700;
  color: #5c6373;
`;
export const FinButton = styled.button`
  border: none;
  width: 17vw;
  padding: 10px;
  margin: 3px;
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
  background-color: white;
`;

export const Day = styled.button`
  min-width: calc(100% / 7);
  background-color: white;
  border: 1px solid transparent;
  color: navy;
  font-family: inherit;
  height: 3vh;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

export const StDate = styled.button`
  min-width: calc(100% / 7);
  background-color: white;
  border: 1px solid lightgray;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const SchContain = styled.div`
  width: 100vw;
  height: 50vh;
`;

export const ScheduleInput = styled.input`
  width: 100vw;
  height: 5vh;
`;
export const FontSt = styled.div`
  color: #07133b;
`;
export const DateFont = styled.div`
  color: #59aba7;
`;

export const InfoBox = styled.div`
  border: 1px solid;
  width: 30vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4fbf9;
  border: none;
  border-radius: 5px;
`;
export const InfoContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 10px;
`;
export const Info = styled.div`
  display: flex;
  border-radius: 5px;
  width: 28vw;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
export const CommentBox = styled.div`
  display: flex;
  width: 28vw;
  justify-content: space-between;
  margin: 20px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;

export const ComFont = styled.div`
  color: #5c6373;
`;

export const DelBtn = styled.button`
  background-color: white;
  color: #65bab6;
  width: 50px;
  padding: 7px;
  border: 1px solid #65bab6;
  margin-bottom: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #def1ef;
    color: #65bab6;
  }
`;
