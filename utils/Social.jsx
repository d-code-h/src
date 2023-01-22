import React from 'react';
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from 'react-icons/fa';
import styled from 'styled-components';

const SocialStyled = styled.div`
  display: inline-flex;
  flex-direction: row;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.c};
  box-shadow: 0px 12px 64px rgba(28, 25, 25, 0.12);
  border-radius: 4px;
  padding: 12px;
`;

const SocialIcon = styled.div`
  padding: 15px;
  border-radius: 4px;

  & svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${(props) => props.bg};
    color: ${(props) => props.c};
    box-shadow: 0px 12px 64px rgba(28, 25, 25, 0.12);
  }
`;
export default function Social({ c, bg }) {
  return (
    <>
      <SocialStyled c={c} bg={bg}>
        <SocialIcon bg={c} c={bg}>
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon bg={c} c={bg}>
          <FaDribbble />
        </SocialIcon>
        <SocialIcon bg={c} c={bg}>
          <FaInstagram />
        </SocialIcon>
        <SocialIcon bg={c} c={bg}>
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon bg={c} c={bg}>
          <FaBehance />
        </SocialIcon>
      </SocialStyled>
    </>
  );
}
