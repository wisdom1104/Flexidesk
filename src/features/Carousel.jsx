import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { SliderContainer, StFont, StSlider, StSliderButton, StSliders, StSmallFont } from "../pages/Welcome/WelcomeStyled";

const Button = ({ children, dir, onClick }) => {
  return (
    <StSliderButton dir={dir} onClick={onClick}>
      {children}
    </StSliderButton>
  );
};

const Carousel = () => {
  
   const [components, setComponents] = useState([
    { id: 1, title: "회의실 예약", component:"누구나 눈치 보지 않고 예약이 가능해요."},
    { id: 2, title: "스페이스", component:"공간에 있다는 걸 모두가 알 수 있도록 설정이 가능해요." },
    { id: 3, title: "스케줄 관리", component:"효율적인 스케줄 관리가 가능해요."},
  ]);  


  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "610px"
  });

  const genSlidersArray = (item) => {

    if (item === 4) {     
      console.log('2');
      return [2, item, 1].map(pre => components.at(pre));
    }
    if (item === -4) {
      console.log('3');
      return [-1, item, -2].map(pre => components.at(pre));
    }
    console.log('4');
    return [ item -1, item, item +1 ].map(pre => components.at(pre))
  };


  const clickLeftHandler = () => {
    setAnimate(() => ({ on: true, value: "610px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "610px" }));
      setIndex((pre) => {
        if (pre === -3) return (pre = 0);
        else return pre - 1;
      });
    }, 400);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-610px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-610px" }));
      setIndex((pre) => {
        if (pre === 3) return (pre = 0);
        else return pre + 1;
      });
    }, 400);
  };


  return (
      <SliderContainer>
        <Button dir="left" onClick={clickLeftHandler}>
        <TiChevronLeftOutline />
        </Button>
        <Button dir="right" onClick={clickRightHandler}>
        <TiChevronRightOutline />
        </Button>

          <StSliders animate={animate}>
          {genSlidersArray(index).map((item, index) => (
          <StSlider key={index}>
            <StFont marginBottom='50px'>{item?.title}</StFont>
            <StSmallFont>{item?.component}</StSmallFont>
          </StSlider>
          ))}
        </StSliders>
        
      </SliderContainer>
  );
};

export default Carousel;
