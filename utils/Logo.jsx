import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;x
`;

const Brand = styled.span`
  border-radius: 50%;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 56px;
  color: #ffffff;
  padding: 0 20px;
  height: 56px;
  background-color: ${(props) => props.bg};
  text-align: center;
`;
const LogoTitle = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${(props) => props.c};
`;

export default function Logo({ c, bg }) {
  return (
    <LogoStyled>
      <Brand bg={bg}>D</Brand>
      <LogoTitle c={c}>David</LogoTitle>
    </LogoStyled>
  );
}
