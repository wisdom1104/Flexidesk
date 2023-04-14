import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const Button = ({ children, dir, disabled, onClick }) => {
  return (
    <Stbutton disabled={disabled} dir={dir} onClick={onClick}>
      {children}
    </Stbutton>
  );
};

const Stbutton = styled.button`
  background-color: red;
  width: 40px;
  height: 40px;
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

const CarouselTest = () => {
  const [components] = useState([
    {
      id: 1,
      Component: A
    },
    {
      id: 2,
      Component: B
    },
    {
      id: 3,
      Component: C
    }
  ]);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    dir: ""
  });
  const [disabled, setDisabled] = useState(false);

  const genCarousesArray = (target) => {
    return [target - 1, target, target + 1].map((el) => {
      if (el === 3) {
        return components.at(0);
      }
      return components.at(el);
    });
  };

  const clickLeftHandler = () => {
    setDisabled(true);
    setAnimate(() => ({ on: true, dir: "left" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "left" }));

      if (index === 2) {
        setDisabled(false);
        return setIndex(0);
      }

      setDisabled(false);
      return setIndex((pre) => pre + 1);
    }, 400);
  };

  const clickRightHandler = () => {
    setDisabled(true);
    setAnimate(() => ({ on: true, dir: "right" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, dir: "right" }));

      if (index === -2) {
        setDisabled(false);
        return setIndex(0);
      }

      setDisabled(false);
      setIndex((pre) => pre - 1);
    }, 400);
  };

  return (
    <Container>
      <CarouseContainer>
        <Button dir="left" onClick={clickLeftHandler} disabled={disabled}><TiChevronLeftOutline />
</Button>
        <Button dir="right" onClick={clickRightHandler} disabled={disabled}><TiChevronRightOutline />
</Button>
        <Carouses>
          {genCarousesArray(index).map(({ id, Component }) => (
            <Carouse src={id} key={id} animate={animate}>
              <Component />
            </Carouse>
          ))}
        </Carouses>
      </CarouseContainer>
    </Container>
  );
};

export default CarouselTest;

const Container = styled.div`
  padding: 100px;
`;

const CarouseContainer = styled.div`
  width: 1090px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

const Carouses = styled.div`
  height: 200px;
  display: flex;
  gap: 10px;
`;

const Carouse = styled.div`
  position: relative;
  width: 200px;
  height: 180px;
  z-index: 990;
  left: -50px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 1rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  transition: all 0.3s ease-out;

  background: #fff;

  &:nth-child(1) {
    ${({ animate }) => {
      if (animate.on) {
        if (animate.dir === "right") {
          return css`
            z-index: 1;
            transform: translate(310px) scale(1.5);
            transition: transform 400ms ease-in-out;
          `;
        }
        return css`
          transform: translate(620px);
          transition: transform 400ms ease-in-out;
        `;
      }
    }};
  }

  &:nth-child(2) {
    // 결과

    transform: scale(1.5);
    ${({ animate }) => {
      if (animate.on) {
        if (animate.dir === "right") {
          return css`
            transform: translate(310px) scale(1);
            transition: transform 400ms ease-in-out;
          `;
        }
        return css`
          transform: translate(-310px) scale(1);
          transition: transform 400ms ease-in-out;
        `;
      }
    }};
  }

  &:nth-child(3) {
    ${({ animate }) => {
      if (animate.on) {
        if (animate.dir === "right") {
          return css`
            z-index: -1;
            transform: translate(-620px) scale(1);
            transition: transform 400ms ease-in-out;
          `;
        }
        return css`
          transform: translate(-310px) scale(1.5);
          transition: transform 400ms ease-in-out;
        `;
      }
    }};
  }
`;
