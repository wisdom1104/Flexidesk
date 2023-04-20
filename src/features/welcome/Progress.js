import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBar = styled.div`
  width: 100vw;
  height: 0.5em;
  background: red;
  transform-origin: 0 50%;
  transform: scaleX(0);

  position: fixed;
  top: 0;
  left: 0;
`;

const progressAnimation = keyframes`
  from {
    background-color: red;
    transform: scaleX(0);
  }
  to {
    background-color: darkred;
    transform: scaleX(1);
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #fff;
`;

function Progress() {
  const [isAnimating, setIsAnimating] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setIsAnimating(true);
  }

  return (
    <Wrapper>
      <button onClick={handleClick}>Animate Progress Bar</button>
      {isAnimating && (
        <ProgressBar
          className="progressbar"
          style={{ animation: `${progressAnimation} 2.5s linear forwards` }}
        />
      )}
    </Wrapper>
  );
}

export default Progress;
