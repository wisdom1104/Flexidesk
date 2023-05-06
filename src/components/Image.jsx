//웰컴페이지 이미지 사용
import React from 'react';
import styled from 'styled-components';

export function WelcomeImage({ src, alt }) {
  return (
    <StContain>
      <StImage src={`${process.env.PUBLIC_URL}/img/${src}.png`} alt={alt} />
    </StContain>
  );
}

export const WelcomeTitle = ({ children, w, h }) => {
  return (
    <StContain w={w} h={h}>
      {children}
    </StContain>
  );
};

export const Images = ({ src_001, alt_001, src_002, alt_002 }) => {
  return (
    <StImgeContainer>
      <StSpacePagePhoto
        src={`${process.env.PUBLIC_URL}/img/${src_001}.png`}
        alt={alt_001}
      />

      <StImgeSecond
        src={`${process.env.PUBLIC_URL}/img/${src_002}.png`}
        alt={alt_002}
      />
    </StImgeContainer>
  );
};

const StContain = styled.div`
  width: ${props => props.w || '40vw'};
  height: ${props => props.h || '40vw'};
  display: inline-block;
`;

const StImage = styled.img`
  margin-top: 20%;
`;

const StImgeContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

const StSpacePagePhoto = styled.img`
  max-width: 100%;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '1100px'};

  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: url(image.png);
  filter: drop-shadow(0px 8px 40px rgba(140, 159, 157, 0.25));
  border-radius: 8px;
  z-index: 2;
`;

const StImgeSecond = styled.img`
  position: absolute;
  height: 80%;
  top: 5%;
  left: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
