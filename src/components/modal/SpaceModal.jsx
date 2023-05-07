import React from 'react';
import styled from 'styled-components';

function SpaceModal({ children, ...rest }) {
  return (
    <MoveModalBackground>
      <MoveModal {...rest}>{children}</MoveModal>
    </MoveModalBackground>
  );
}

const MoveModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  background: rgba(0, 0, 0, 0.2);
  top: 0px;
  z-index: 50;
  box-sizing: border-box;
  height: 593px;
  min-width: 990px;
  max-width: 990px;
  border-radius: 8px;
  margin: auto;
`;

const MoveModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #def1ef;
  box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 2px;
  width: ${props => props.width || '188px'};
  height: ${props => props.height || '174px'};
`;

export default SpaceModal;
