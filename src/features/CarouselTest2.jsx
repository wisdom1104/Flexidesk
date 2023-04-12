import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import styled from 'styled-components';

export const MAX_VISIBILITY = 1;
///////////////////////////////////////////////////////////////////
export const Card = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content.content}</p>
    </div>
  );
};

///////////////////////////////////////////////////////////////////
const CarouselTest2 = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const onPrevClickHandler = () => {
    setCurrent((current - 1 + children.length) % children.length);
  };

  const onNextClickHandler = () => {
    setCurrent((current + 1) % children.length);
  };

  // map
  const visibleCards = [];
  const leftIndex =
    (current - Math.floor(MAX_VISIBILITY / 2) + children.length) %
    children.length;
  for (let i = 0; i < MAX_VISIBILITY; i++) {
    visibleCards.push(children[(leftIndex + i) % children.length]);
  }

  return (
    <StCarousel>
      <StButton onClick={onPrevClickHandler}>
        <TiChevronLeftOutline />
      </StButton>

      {/* 왼쪽캐러셀 */}
      <StCardsRight>
        {React.cloneElement(visibleCards[0], { key: 0 })}
      </StCardsRight>
      
      <StCards>
        <div>
          {visibleCards.map((child, index) => {
            return (
              <div key={index}>{React.cloneElement(child, { key: index })}</div>
            );
          })}
        </div>
      </StCards>

      {/* 오른쪽 캐러셀 */}
      <StCardsLeft>
        {React.cloneElement(visibleCards[visibleCards.length - 1], {
          key: MAX_VISIBILITY - 1,
        })}
      </StCardsLeft>

      <StButton onClick={onNextClickHandler}>
        <TiChevronRightOutline />
      </StButton>
    </StCarousel>
  );
};

export default CarouselTest2;

const StCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const StButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
`;

const StCards = styled.div`
  top: 50%;
  left: 50%;
  width: 481px;
  height: 380px;
  z-index: 1000;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 1rem;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  transition: all 0.3s ease-out;

  :hover {
    transform: perspective(150px) translateZ(30px);
  }

  background: #efff84;
`;

const StCardsLeft = styled.div`
  position: relative;
  width: 331px;
  height: 262px;
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

  background: #0d3d08;
`;

const StCardsRight = styled.div`
  position: relative;
  width: 331px;
  height: 262px;
  z-index: 990;
  right: -50px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 1rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  transition: all 0.3s ease-out;

  background: #151c14;
`;