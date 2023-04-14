import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { SliderContainer, StSlider, StSliderButton, StSliders } from "../pages/Welcome/WelcomeStyled";

const Button = ({ children, dir, onClick }) => {
  return (
    <StSliderButton dir={dir} onClick={onClick}>
      {children}
    </StSliderButton>
  );
};

const A = () => {
  return <div>회의실 예약</div>;
};

const B = () => {
  return <div>스페이스</div>;
};

const C = () => {
  return <div>스케줄 관리</div>;
};

const Carousel = () => {
  
   const [components] = useState([
    { id: 1,Component: A},
    {id: 2,Component: B},
    {id: 3,Component: C},
  ]);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "310px"
  });

  const genImagesArray = (target) => {
    return [target - 1, target, target + 1].map((el) => {
      if (el === 3) {
        console.log('1');
        return components.at(0);
      }
      console.log('2');
      return components.at(el);
    });
  };


  const clickLeftHandler = () => {
    setAnimate(() => ({ on: true, value: "310px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "310px" }));
      setIndex((pre) => {
        if (pre === -4) return (pre = 0);
        else return pre - 1;
      });
    }, 350);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-310px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-310px" }));
      setIndex((pre) => {
        if (pre === 4) return (pre = 0);
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

          <StSliders>
          {genImagesArray(index).map(({ id, Component }) => (
            <StSlider key={id} animate={animate}>
              <Component />
            </StSlider>
          ))}
        </StSliders>

      </SliderContainer>
  );
};

export default Carousel;
