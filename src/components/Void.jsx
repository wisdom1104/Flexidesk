import React from 'react';
import styled from 'styled-components';

export const Void = ({
  children,
  mt,
  mb,
  ml,
  mr,
  mg,
  pt,
  pb,
  pl,
  pr,
  pd,
  bd,
  bt,
  bb,
  br,
}) => {
  return (
    <StyledVoid
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      mg={mg}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      pd={pd}
      bd={bd}
      br={br}
      bt={bt}
      bb={bb}
    >
      {children}
    </StyledVoid>
  );
};

const StyledVoid = styled.div`
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin: ${({ mg }) => mg};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-right: ${({ pr }) => pr};
  padding-left: ${({ pl }) => pl};
  padding: ${({ pd }) => pd};
  border: ${({ bd }) => bd};
  border-top: ${({ bt }) => bt};
  border-bottom: ${({ bb }) => bb};
  border-radius: ${({ br }) => br};
`;
