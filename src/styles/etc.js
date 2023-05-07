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
    var(--blue_001) 10.61%,
    var(--blue_002) 85.36%
  );
  border-radius: 64px;
  &:hover {
    background: var(--blue_002);
  }
  &:focus {
    background: var(--blue_001);
  }
`;
