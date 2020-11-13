import React from 'react';
import { Container, TextContainer } from './Introducao.style';

import BackgroundIntro from '../../Components/IntroBackground/IntroBackground';
import Typical from 'react-typical';
import ReactTypingEffect from 'react-typing-effect';

function Introducao() {
  return (
    <Container>
      <BackgroundIntro />
      <TextContainer>
        <Typical steps={['Diego Nascimento']} wrapper="h1" />

        <h2>Desenvolvedor JAVASCRIPT</h2>

        <h2>
          <ReactTypingEffect
            cursorRenderer={(cursor) => <span>{cursor}</span>}
            typingDelay={200}
            eraseSpeed={100}
            speed={100}
            text={['NodeJs', 'ReactJs', 'React Native']}
            displayTextRenderer={(text, i) => {
              return <span>{text}</span>;
            }}
          />
        </h2>
      </TextContainer>
    </Container>
  );
}

export default Introducao;
