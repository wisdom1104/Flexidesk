import styled from 'styled-components';

export const StHeader = styled.div`
  height: 6vh;
  max-width: 1200px;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

export const HeaderContain = styled.div`
  display: flex;
  width: 100%;
  height: 6vh;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const StHeaderButtonBox = styled.div`
  display: flex;
  gap: 35px;
`;

export const StHeaderContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const StHeaderContentButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-left: 1px solid lightgray;
  padding: 0 10px 0 20px;
`;

export const StHeaderLogo = styled.img`
  width: 150px;
  margin-right: 50px;
  cursor: pointer;
`;
