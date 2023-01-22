import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const NavStyled = styled.nav``;
const Link = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: #333333;
  text-decoration: none;
  padding: 12px 24px;
  text-align: center;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  &:hover {
    border-radius: 4px;
    color: #ffffff;
    background-color: ${(props) => props.bg};
  }

  ${(props) =>
    props.i === 0 &&
    css`
      border-radius: 4px;
      color: #ffffff;
      background-color: ${(props) => props.bg};
    `}
`;

const nav = [
  'Home',
  'About',
  'Process',
  'Portfolio',
  'Blog',
  'Services',
  'Contact',
];

export default function Nav({ bg }) {
  const [LinkClicked, setLinkClicked] = useState(true);
  return (
    <NavStyled>
      {nav.map((item, i) => (
        <Link key={i} i={i} href={item.toLowerCase()} bg={bg}>
          {item}
        </Link>
      ))}
    </NavStyled>
  );
}
