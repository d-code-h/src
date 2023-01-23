import React from 'react';
import styled from 'styled-components';

import HeroImg from '../assets/images/hero.png';

const ProfileStyled = styled.div`
  width: 100%;
  height: 560px;
  padding: 10px 5px 0 5px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 24px 116px rgba(43, 56, 76, 0.09);
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Profile passport',
}))`
  width: 100%;
  height: 100%;
  margin-right: -70px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export default function Profile() {
  return (
    <ProfileStyled>
      <Image src={HeroImg} />
    </ProfileStyled>
  );
}
