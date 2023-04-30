import React from 'react';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import { SterrorFont } from '../../pages/user/UserStyled';
export const ValidationError = ({ value }) => {
  return (
    <SterrorFont>
      {value && (
        <StSmallFont
          width="420px"
          align="start"
          fontSize="0.875rem"
          weight="400"
          color="red"
        >
          {value}
        </StSmallFont>
      )}
    </SterrorFont>
  );
};

export default ValidationError;
