import React from 'react';
import { Container, TextContainer } from './ComingSoon.style';
import Typical from 'react-typical';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';

function ComingSoon(props) {
  return (
    <Container>
      <TextContainer>
        <IntroBackground />
        <Typical steps={['Coming Soon...']} wrapper="h1" />
      </TextContainer>
    </Container>
  );
}

export default ComingSoon;
