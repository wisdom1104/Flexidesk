import React from 'react';
import {
  StBackground,
  StFont,
  StIntroArray,
  StIntroDiv,
  StIntroPhoto,
  StIntroWrite,
  StOverall,
} from './WelcomeStyled';

function Welcome4() {
  return (
    <>
        <StBackground background="#07133B" height='1987px'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
          >
        <StFont 
        color="#fff"
        paddingTop='200px'
        >Why flexidesk?</StFont>
        </div>

        <StOverall>
          <div>
            <StIntroArray>
              <StIntroDiv>
                <StIntroPhoto>사진1</StIntroPhoto>
                <StIntroWrite>글1</StIntroWrite>
              </StIntroDiv>

              <StIntroDiv>
              <StIntroWrite>글2</StIntroWrite>
                <StIntroPhoto>사진2</StIntroPhoto>
              </StIntroDiv>

              <StIntroDiv>
                <StIntroPhoto>사진3</StIntroPhoto>
                <StIntroWrite>글3</StIntroWrite>
              </StIntroDiv>

            </StIntroArray>
          </div>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome4;
