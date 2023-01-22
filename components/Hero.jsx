import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import Container from '../utils/Container';
import Button from '../utils/Buttons';

import HeroImg from '../assets/images/hero.png';
import BgImg from '../assets/images/bg.png';

const StyledHero = styled.div`
  background-image: url(${BgImg});
  background-position: top right;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroSection = styled.section``;
const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 500px;
  height: 600px;
  margin-right: -70px;
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 72px;
  line-height: 84px;
  color: ${(props) => props.c};
`;

const Text = styled.p`
  font-size: 18px;
  color: ${(props) => props.c1};
  margin: 24px 0;

  span {
    color: ${(props) => props.c2};
  }
`;
export default function Hero() {
  const theme = useContext(Context);
  return (
    <StyledHero>
      <Container>
        <HeroContent>
          <HeroSection>
            <Heading c={theme.blends['gray-900']}>
              Hello, I&apos;m Brooklyn Gilbert
            </Heading>
            <Text c1={theme.blends['gray-600']} c2={theme.blends['gray-900']}>
              I'm a Freelance <span>UI/UX Designer</span> and{' '}
              <span>Developer</span> based in London, England. I strives to
              build immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </Text>
            <Button color={'#ffffff'} bgc={theme.color['primary-500']}>
              Say Hello!
            </Button>
          </HeroSection>
          <Image src={HeroImg} />
        </HeroContent>
      </Container>
    </StyledHero>
  );
}
