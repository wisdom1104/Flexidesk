import React from 'react';
import {
  StBackground,
  StFont,
  StOverall,
} from './WelcomeStyled';
import { Link } from 'react-router-dom';

function Welcome7() {

  return (
    <>

      {/* 방법2 */}
      <StBackground background="#fff">
        <StOverall>

        <Link to="#signup">
            <StFont>
              간단한 회원가입으로 Flexidesk의 솔루션 만나보세요.
            </StFont>
          </Link>
          
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome7;
