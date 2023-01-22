import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
