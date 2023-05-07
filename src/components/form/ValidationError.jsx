import React from 'react';
import Text from '../Text';
import { StStartText } from '../../pages/user/UserStyled';

export const ValidationError = ({ value }) => {
  if (!value && value === undefined) {
    return null;
  }
  return (
    <StStartText>
      <Text shape ta="start" mt="2.5%">
        {value && (
          <Text shape="T14_400_17" color="var(--error)">
            {value}
          </Text>
        )}
      </Text>
    </StStartText>
  );
};

export default ValidationError;
