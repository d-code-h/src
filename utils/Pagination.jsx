import React from 'react';
import styled, { css } from 'styled-components';

const PaginationStyled = styled.div`
  display: flex;
  gap: 12px;
`;

const PaginationItem = styled.span`
  background: ${(props) => props.c};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  ${(props) =>
    props.main &&
    css`
      width: 30px;
      border-radius: 100px;
    `}
`;

export default function Pagination({ c1, c2 }) {
  return (
    <PaginationStyled>
      <PaginationItem main c={c1}></PaginationItem>
      <PaginationItem c={c2}></PaginationItem>
      <PaginationItem c={c2}></PaginationItem>
    </PaginationStyled>
  );
}
