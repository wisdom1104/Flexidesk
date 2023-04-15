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

const Carousel = () => {
  
   const [components, setComponents] = useState([
    { id: 1, component: "회의실 예약" },
    { id: 2, component: "스페이스" },
    { id: 3, component: "스케줄 관리" },
  ]);  


  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "310px"
  });

  // const genSlidersArray = (item) => {
  //   if (item === 2) {
  //     return [1, item, 3].map((pre) =>
  //       components[pre] ? components[pre] : { id: -1, component: "1" }
  //     );
  //   }
  //   if (item === 3) {
  //     return [3, item, 0].map((pre) =>
  //       components[pre] ? components[pre] : { id: -1, component: "회의실 예약2" }
  //     );
  //   }
  //   if (item === -3) {
  //     return [0, item, -3].map((pre) =>
  //       components[pre] ? components[pre] : { id: -1, component: "3" }
  //     );
  //   }
  //   return [item - 1, item, item + 1].map((pre) =>
  //     components[pre] ? components[pre] : { id: -1, component: "스페이스2" }
  //   );
  // };

  const genSlidersArray = (item) => {
    if (item === 3) {
      console.log('1');
      return [1, item , 0].map(pre => components.at(pre));
    }
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
            {item?.component}
          </StSlider>
          ))}
        </StSliders>
        
      </SliderContainer>
  );
};

export default Carousel;
