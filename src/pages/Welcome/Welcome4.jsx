import React from 'react';
import {
  StBackground,
  StColumnDiv,
  StFont,
  StGrid,
  StIntroDiv,
  StIntroPhoto,
  StIntroWrite,
  StOverall,
} from './WelcomeStyled';

function Welcome4() {
  return (
    <>
      {/* <StBackground background="#07133B">
                <StFont color="#fff">Why flexidesk?</StFont>
        </StBackground>
    <StBackground background="#07133B">
    <StGrid height='1987px'>
    <StColumnDiv>

    <StIntroDiv>
      <StIntroPhoto>사진</StIntroPhoto>
      <StIntroWrite>글</StIntroWrite>
    </StIntroDiv>
    
    <StIntroDiv>
        <StIntroPhoto>사진</StIntroPhoto>
        <StIntroWrite>글</StIntroWrite>
    </StIntroDiv>

    <StIntroDiv>
        <StIntroPhoto>사진</StIntroPhoto>
        <StIntroWrite>글</StIntroWrite>
    </StIntroDiv>
    </StColumnDiv>
    </StGrid>
  </StBackground> */}

      <StBackground background="#07133B">
        <StOverall>
          <div
          style={{
            marginTop:'200px',
          }}
          >
        <StFont color="#fff">Why flexidesk?</StFont>
        </div>
          <div>
            전체틀
            <div>
              박스 정렬
              <div>
                박스세트
                <div>사진</div>
                <div>글</div>
              </div>
            </div>
          </div>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome4;
