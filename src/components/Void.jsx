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
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
  margin: ${({ mg }) => mg};
  padding-top: ${({ pt }) => pt}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-right: ${({ pr }) => pr}px;
  padding-left: ${({ pl }) => pl}px;
  padding: ${({ pd }) => pd}px;
  border: ${({ bd }) => bd};
  border-top: ${({ bt }) => bt};
  border-bottom: ${({ bb }) => bb};
  border-radius: ${({ br }) => br}px;
`;
