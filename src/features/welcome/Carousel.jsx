import React from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { useCarouselHook } from '../../hooks/useCarouselHook';
import styled, { css } from 'styled-components';
import Text from '../../components/Text';
import Page from '../../components/Page';

const CarouselButton = ({ children, dir, onClick }) => {
  return (
    <StSliderButton dir={dir} onClick={onClick}>
      {children}
    </StSliderButton>
  );
};

const Carousel = () => {
  const {
    index,
    animate,
    genSlidersArray,
    onClickLeftHandler,
    onClickRightHandler,
  } = useCarouselHook();

  return (
    <SliderContainer>
      <CarouselButton dir="left" onClick={onClickLeftHandler}>
        <TiChevronLeftOutline />
      </CarouselButton>
      <CarouselButton dir="right" onClick={onClickRightHandler}>
        <TiChevronRightOutline />
      </CarouselButton>

      <StSliders animate={animate}>
        {genSlidersArray(index).map((item, index) => (
          <StSlider key={index}>
            <Text shape="T24_700" color="var(--grey_002)" pd="120px">
              {item?.component}
            </Text>
            <Text shape="T20_500" mg="50px" ta="end">
              {item?.name}
            </Text>
          </StSlider>
        ))}
      </StSliders>
    </SliderContainer>
  );
};

export default Carousel;

//캐러셀 슬라이드
const SliderContainer = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

const StSliders = styled.div`
  display: flex;
  gap: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${animate => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        transition: transform 350ms ease-in-out;
      `;
    }
  }};
`;

const StSlider = styled.div`
  width: 1100px;
  height: 518px;

  background: var(--white);
  box-shadow: 0px 8px 20px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
  background-position: center center;
  background-size: cover;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSliderButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;

  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;

  ${({ dir }) => {
    if (dir === 'left') {
      return css`
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === 'right') {
      return css`
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
`;
