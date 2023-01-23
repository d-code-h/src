import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.bg || '#FFFFFF'}};
  border: 1px solid ${(props) => props.bg || props.color}};
  border-radius: 4px;
  line-height: 1.5;
  color: ${(props) => props.color || '#FFFFFF'};
  padding: 12px 24px;
  margin: 4px 2px;
  text-align: center;
  text-decoration: none;
  display: flex;
  & span {
    line-height: 1.5;
  }
  & svg {
    height: 24px;
    width: 24px;
    ${(props) =>
      props.icon === 'left'
        ? css`
            margin-right: 12px;
          `
        : css`
            margin-left: 12px;
          `}
  }
`;

export default function Buttons({ children, bg, color, icon }) {
  return (
    <Button color={color} bg={bg} icon={icon}>
      {children}
    </Button>
  );
}
