import React from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { SliderContainer, StFont, StSlider, StSliderButton, StSliders, StSmallFont } from "../../pages/Welcome/WelcomeStyled";
import { useCarouselHook } from '../../hooks/useCarouselHook'

const CarouselButton = ({ children, dir, onClick }) => {
  return (
    <StSliderButton dir={dir} onClick={onClick}>
      {children}
    </StSliderButton>
  );
};

const Carousel = () => {
  
  const { index, animate, genSlidersArray, clickLeftHandler, clickRightHandler} = useCarouselHook();

  return (
      <SliderContainer>
        <CarouselButton dir="left" onClick={clickLeftHandler}>
        <TiChevronLeftOutline />
        </CarouselButton>
        <CarouselButton dir="right" onClick={clickRightHandler}>
        <TiChevronRightOutline />
        </CarouselButton>

          <StSliders animate={animate}>
          {genSlidersArray(index).map((item, index) => (
          <StSlider key={index}>
            <StSmallFont height='50%' fontSize='1.5rem' align='start' weight='700'> "{item?.component}" </StSmallFont>
            <StFont fontSize='20px' align='end' paddingTop='100px'>{item?.name}</StFont>
          </StSlider>
          ))}
        </StSliders>
        
      </SliderContainer>
  );
};

export default Carousel;
