import React from 'react';
import { Container, TextContainer } from './ComingSoon.style';
import Typical from 'react-typical';

function ComingSoon(props) {
  return (
    <Container>
      <TextContainer>
        <Typical steps={['Coming Soon...']} wrapper="h1" />
      </TextContainer>
    </Container>
  );
}

export default ComingSoon;
