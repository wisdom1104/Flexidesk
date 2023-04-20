import styled from 'styled-components';

export const HeaderContain = styled.div`
  display: flex;
  position: absolute;
  width: 75vw;
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

export const StHaderFont = styled.p`
  height: 19px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #15161A;

  cursor:default
`

export const StHeaderContentButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-left: 1px solid lightgray;
  padding: 0 10px 0 20px;
`;

export const StHeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c2d68;
  padding: 8px 16px;
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  font-family: inherit;
`;

export const StHeaderLogo = styled.img`
  width: 150px;
`