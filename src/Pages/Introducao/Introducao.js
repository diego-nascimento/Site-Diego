import React from 'react';
import { Container, TextContainer } from './Introducao.style';
import { FaNodeJs, FaReact, FaMobile } from 'react-icons/fa';
import BackgroundIntro from '../../Components/IntroBackground/IntroBackground';

function Introducao() {
  return (
    <Container>
      <BackgroundIntro />
      <TextContainer>
        <h1>Diego Nascimento</h1>
        <h2>Desenvolvedor JAVASCRIPT</h2>
        <h2>
          <FaNodeJs /> NodeJs
        </h2>
        <h2>
          <FaReact /> Reactjs
        </h2>
        <h2>
          <FaMobile /> React Native
        </h2>
      </TextContainer>
    </Container>
  );
}

export default Introducao;
