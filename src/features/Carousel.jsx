import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const Button = ({ children, dir, onClick }) => {
  return (
    <Stbutton dir={dir} onClick={onClick}>
      {children}
    </Stbutton>
  );
};

const Stbutton = styled.button`
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
    if (dir === "left") {
      return css`
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
`;

const A = () => {
  return <div>회의실 예약</div>;
};

const B = () => {
  return <div>스페이스</div>;
};

const C = () => {
  return <div>스케줄 관리</div>;
};

const App = () => {
  
   const [components] = useState([
    {
      id: 1,
      Component: A,
    },
    {
      id: 2,
      Component: B,
    },
    {
      id: 3,
      Component: C,
    },
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
    <Container>
      <SliderContainer>
        <Button dir="left" onClick={clickLeftHandler}>
        <TiChevronLeftOutline />
        </Button>
        <Button dir="right" onClick={clickRightHandler}>
        <TiChevronRightOutline />
        </Button>

          <Images>
          {genImagesArray(index).map(({ id, Component }) => (
            <Image key={id} animate={animate}>
              <Component />
            </Image>
          ))}
        </Images>

      </SliderContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  padding: 100px;
`;

const SliderContainer = styled.div`
  /* width: 490px;
  height: 300px; */
  width: 690px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

const Images = styled.div`
  display: flex;
  gap: 10px;

  display : flex;
  justify-content : center;
  align-items : center;

  ${( animate ) => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        transition: transform 350ms ease-in-out;
      `;
    }
  }};
`;

const Image = styled.div`
  width: 400px;
  height: 300px;
  background: #fff;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;

  text-align: center;
  line-height : 200px;
  `;