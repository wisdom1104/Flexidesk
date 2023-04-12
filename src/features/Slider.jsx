import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2; // 전체 슬라이드 개수

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  // 사진 클릭 시 문구 나오기
  const photoClickBtn = () => {
    console.log('사진 클릭되랏');
  }

  return (
    <Container>
      <Text>
        <p>Flexidesk는 회사생활을 어떻게 쉽게 만들어주나요?</p>
        {/* <p>{currentSlide + 1}번 째</p> */}
      </Text>
      <SliderContainer ref={slideRef}>
      <StImg key="cat1.jpg" src="img\photo (1).jpg" onClick={photoClickBtn} />
      <StImg key="cat2.jpg" src="img\photo (2).jpg" onClick={photoClickBtn} />
      <StImg key="cat3.jpg" src="img\photo (3).jpg" />
      <StImg key="cat4.jpg" src="img\photo (4).jpg" />

      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </Container>
  );
}
export default Slider;

const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: #D2ECE9;
  border-radius: 10px;
  border: 1px solid #D2ECE9;
  cursor: pointer;
  &:hover {
    background-color: #D2ECE9;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Text = styled.div`
  text-align: center;
  color: #D2ECE9;
  p {
    color: #fff;
    font-size: 20px;
    background-color: #D2ECE9;
    display: inline-block;
    border-radius: 50px;
    padding: 0.5em 1em;
  }
`;
const Center = styled.div`
  text-align: center;
`;

const StImg = styled.img`
  /* position: absolute; */
  width: 481px;
  height: 380px;
  left: 480px;
  top: 8718px;

  background: #FFFFFF;
  box-shadow: 0px 16px 40px rgba(140, 159, 157, 0.2);
  border-radius: 8px;
  border: 1px solid #D2ECE9;

`