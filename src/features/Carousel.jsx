import React, { useState } from "react";
import styled, { css } from "styled-components";

const images = [
  {
    id: 1,
    text: '안녕1'
  },
  {
    id: 2,
    text: '안녕2'
  },
  {
    id: 3,
    text: '안녕3'
},
];

console.log(images[0].text);
console.log(images[1].text);
console.log(images[2].text);

const Button = ({ children, dir, onClick }) => {
  return (
    <Stbutton dir={dir} onClick={onClick}>
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

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "310px"
  });

  const genImagesArray = (target) => {
    if (target === 4) {
      return [3, target, 0].map((el) => images.at(el));
    }
    if (target === -4) {
      return [0, target, -3].map((el) => images.at(el));
    }
    return [target - 1, target, target + 1].map((el) => images.at(el));
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
        <Button dir="left" onClick={clickLeftHandler} />
        <Button dir="right" onClick={clickRightHandler} />
        <Images animate={animate}>
          {genImagesArray(index).map((el,i) => (
            <Image text={el.images[i].text} key={el.id}></Image>
          ))}
        </Images>
      </SliderContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  padding: 100px;
`;

const SliderContainer = styled.div`
  width: 490px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

const Images = styled.div`
  height: 200px;
  display: flex;
  gap: 10px;

  ${({ animate }) => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        transition: transform 350ms ease-in-out;
      `;
    }
  }};
`;

const Image = styled.div`
  width: 300px;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  background: #921919;
  color: #fff;
`;
