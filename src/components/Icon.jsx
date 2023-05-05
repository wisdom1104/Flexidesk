import React from 'react';
import styled from 'styled-components';

function Icon({ children, src, alt }) {
  return (
    <StyledIcon src={`${process.env.PUBLIC_URL}/img/${src}.png`} alt={alt}>
      {children}
    </StyledIcon>
  );
}

export default Icon;

const StyledIcon = styled.img`
  max-width: 100%;
  height: ${props => props.height || 'auto'};
  width: 52px;

  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: url(image.png);
  filter: drop-shadow(0px 8px 40px rgba(140, 159, 157, 0.25));
  border-radius: 8px;
`;
