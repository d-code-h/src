import React from 'react';
import styled from 'styled-components';
import Notes from '../assets/images/Notes.jsx';

const ProcessCont = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  width: 312px;

  &:hover {
    box-shadow: 0px 12px 64px rgba(28, 25, 25, 0.12);
  }

  &:hover div:first-child {
    background-color: ${(props) => props.frameBg};
    color: #fff;
  }
  &:hover path {
    fill: #fff;
  }
`;
const Frame = styled.div`
  background-color: #edd8ffff;
  padding: 20px;
  border-radius: 6px;
`;

const Heading3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;

  color: ${(props) => props.color};
  margin: 1rem 0 12px 0;
`;

const Text = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`;

export default function Process({ c1, c2, c3, title, text }) {
  return (
    <ProcessCont frameBg={c1}>
      <Frame>
        <Notes />
      </Frame>
      <Heading3 color={c3}>{title}</Heading3>
      <Text color={c2}>{text}</Text>
    </ProcessCont>
  );
}
