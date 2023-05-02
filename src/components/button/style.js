import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const sizes = {
  medium: {
    height: '2.25rem',
    //   width: '20rem',
    fontSize: '1rem',
    //   alignItems: 'center',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const styledColor = css`
  ${props => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.2, selected)};
      }
      &:active {
        background: ${darken(0.2, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 2px solid ${selected};
          &:hover {
            background-color: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${styledColor}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function ButtonStyled({ children, color, size, outline, ...rest }) {
  return (
    <StyledButton color={color} size={size} outline={outline} {...rest}>
      {children}
    </StyledButton>
  );
}
//기본색상설정
ButtonStyled.defaultProps = {
  color: '#07133B',
  size: 'medium',
};

export default ButtonStyled;
