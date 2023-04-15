import styled from 'styled-components';

export const ReservationTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: large;
  margin-bottom: 20px;
`;

export const MainContain = styled.div`
  width: 46vw;
  height: 80vh;
  border: 1px solid;
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
  border: 1px solid;
`;
