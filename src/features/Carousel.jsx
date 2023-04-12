import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import styled from 'styled-components';

export const MAX_VISIBILITY = 3;

export const Card = ({ title, content }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((current - 1 + children.length) % children.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % children.length);
  };

  const visibleCards = [];
  const leftIndex = (current - Math.floor(MAX_VISIBILITY / 2) + children.length) % children.length;
  for (let i = 0; i < MAX_VISIBILITY; i++) {
    visibleCards.push(children[(leftIndex + i) % children.length]);
  }

  return (
    <StCarousel>
      <StButton onClick={handlePrev}>
        <TiChevronLeftOutline />
      </StButton>
      <StCards>
        <div>
          {visibleCards.map((child, index) => {
            return (
              <div key={index} className='card-wrapper'>
                {React.cloneElement(child, { key: index })}
              </div>
            );
          })}
        </div>
        <StCard>
          {children.slice(leftIndex - 1, leftIndex)}
          {children.slice(leftIndex + MAX_VISIBILITY, leftIndex + MAX_VISIBILITY + 1)}
        </StCard>
      </StCards>
      <StButton onClick={handleNext}>
        <TiChevronRightOutline />
      </StButton>
    </StCarousel>
  );
};

const StCarousel = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

const StButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
`

const StCards = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: $color-gray;
  text-align: justify;
  transition: all 0.3s ease-out;
`

const StCard = styled.div`
      /* position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; */


  position: absolute;
  width: 100%;
  height: 100%;
  transform: 
    rotateY(calc(var(--offset) * 50deg)) 
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
`