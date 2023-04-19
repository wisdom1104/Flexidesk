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
    { id: 1, component:"우리 회사에서는 자율좌석제를 도입한 이후 이전보다 업무효율성이 대폭 상승했습니다. 이는 위치 선택과 회의실 예약 시스템 덕분입니다. 예약은 간편하게 컴퓨터로 가능하고, 업무에 필요한 장비와 공간을 선택할 수 있어 매우 편리합니다." ,name: "T000사 Product Designer  이00님", },
    { id: 2, component:"저희 회사에서는 자율좌석제 운영에 앞서 위치 선택과 회의실 예약 시스템 구축을 최우선 과제로 삼았습니다. 그 결과, 직원들은 원하는 위치와 시간에 자유롭게 업무를 처리할 수 있게 되어 업무 생산성이 대폭 증가했습니다. 또한, 예약 시스템은 직원들 간 협업에도 큰 도움이 되고 있습니다." ,name: "B0000사 Talent Acquisition Manager 박00님"},
    { id: 3, component:"우리 회사는 자율좌석제 운영을 시작하면서 위치 선택과 회의실 예약 시스템을 중점적으로 개선했습니다. 그 결과, 직원들은 자유롭게 업무를 처리할 수 있게 되었고, 협업과 커뮤니케이션이 원활해졌습니다. 특히, 예약 시스템의 간편함과 신속한 대응은 직원들의 만족도를 높이는 데 큰 역할을 했습니다." ,name: "N0000사 인재문화본부장 / CHRO 김00님"},
  ]);  


  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "610px"
  });

  const genSlidersArray = (item) => {

    const idx = (item + components.length) % components.length;

    if (item === 4) {     
      return [2, item, 1].map(pre => components.at(pre));
    }
    if (item === -4) {
      return [-1, item, -2].map(pre => components.at(pre));
    }
    return [
    components[(idx - 1 + components.length) % components.length],
    components[idx],
    components[(idx + 1) % components.length]
  ];
  };


  const clickLeftHandler = () => {
    setAnimate(() => ({ on: true, value: "610px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "610px" }));
      setIndex((pre) => {
        if (pre === -2) return (pre = 0);
        else return pre - 1;
      });
    }, 400);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-610px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-610px" }));
      setIndex((pre) => {
        if (pre === 2) return (pre = 0);
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
            <StSmallFont height='50%' fontSize='1.6rem' align='start' weight='700'> "{item?.component}" </StSmallFont>
            <StFont fontSize='20px' align='end' paddingTop='150px'>{item?.name}</StFont>
          </StSlider>
          ))}
        </StSliders>
        
      </SliderContainer>
  );
};

export default Carousel;
