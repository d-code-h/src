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
  gap: 100px;
  padding: 100px 0;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 50%;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 560px;
  padding: 10px 5px 0 5px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 24px 116px rgba(43, 56, 76, 0.09);
`;
const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  margin-right: -70px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const HeroInfo = styled.section``;
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

const HeroStatus = styled.div`
  display: flex;
  border-radius: 6px;
`;

const Status = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg + '80'}} ;
  width: 200px;
  padding: 17px 12px 17px 0;
  &:not(:last-child) {
    border-right: 3px solid #FFFFFF;
  }
`;

const StatusTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${(props) => props.c};
`;

const StatusText = styled.p`
  line-height: 24px;
  color: ${(props) => props.c};
`;
export default function Hero() {
  const theme = useContext(Context);

  const status = [
    {
      title: '15 Y.',
      text: 'Experience',
    },
    {
      title: '250+',
      text: 'Project Completed',
    },
    {
      title: '58',
      text: 'Happy Client',
    },
  ];
  return (
    <StyledHero>
      <Container>
        <HeroContent>
          <HeroSection>
            <HeroInfo>
              <Heading c={theme.blends['gray-900']}>
                Hello, I&apos;m David Yunusa
              </Heading>
              <Text c1={theme.blends['gray-600']} c2={theme.blends['gray-900']}>
                I'm a Freelance <span>UI/UX Designer</span> and{' '}
                <span>Developer</span> based in London, England. I strives to
                build immersive and beautiful web applications through carefully
                crafted code and user-centric design.
              </Text>
              <Button color={'#ffffff'} bg={theme.color['primary-500']}>
                Say Hello!
              </Button>
            </HeroInfo>
            <HeroStatus>
              {status.map((item) => (
                <Status key={item.title} bg={theme.color['primary-100']}>
                  <StatusTitle c={theme.blends['gray-700']}>
                    {item.title}
                  </StatusTitle>
                  <StatusText c={theme.blends['gray-500']}>
                    {item.text}
                  </StatusText>
                </Status>
              ))}
            </HeroStatus>
          </HeroSection>

          <HeroImage>
            <Image src={HeroImg} />
          </HeroImage>
        </HeroContent>
      </Container>
    </StyledHero>
  );
}
