import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';

// utils
import Container from '../utils/Container';
import Brand from '../utils/Logo';
import Nav from '../utils/Nav';

const HeaderStyled = styled.div``;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  const theme = useContext(Context);

  const c = theme.blends['gray-900'];
  const bg = theme.color['primary-500'];
  return (
    <HeaderStyled>
      <Container>
        <HeaderContent>
          <Brand c={c} bg={bg} />
          <Nav bg={bg} />
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
}
