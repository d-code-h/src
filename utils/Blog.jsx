import React from 'react';
import styled from 'styled-components';
import Blog1Img from '../assets/images/blog1.svg';

const BlogStyled = styled.div`
  width: 312px;
  border-radius: 8px;
  border: 1px solid #e6e8eb;

  &:hover {
    box-shadow: 0px 12px 64px rgba(28, 25, 25, 0.12);
  }
`;

const Image = styled.img.attrs({
  src: Blog1Img,
  alt: 'Blog Image',
})`
  width: 100%;
`;
const Content = styled.div`
  padding: 24px;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
  margin: 0;
  margin-top: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: ${(props) => props.c};
`;
export default function Blog({ c, blogC }) {
  return (
    <BlogStyled c={blogC}>
      <Image />
      <Content>
        <Description c={c}>22 Oct, 2020/246 Comments</Description>
        <Title>Lorem ipsum dolor sit consea. Nulla purus arcu</Title>
      </Content>
    </BlogStyled>
  );
}
