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
  w,
  h,
  minw,
  minh,
  maxw,
  maxh,
  bg,
  t,
  r,
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
      bg={bg}
      w={w}
      h={h}
      minw={minw}
      minh={minh}
      maxw={maxw}
      maxh={maxh}
      t={t}
      r={r}
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
  background: ${({ bg }) => bg};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  min-width: ${({ minw }) => minw};
  max-width: ${({ maxw }) => maxw};
  min-height: ${({ minh }) => minh};
  max-height: ${({ maxw }) => maxw};
  top: ${({ t }) => t};
  right: ${({ r }) => r};
`;
