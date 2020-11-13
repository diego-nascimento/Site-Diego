import React from 'react';
import { Container, TextContainer } from './Introducao.style';

import BackgroundIntro from '../../Components/IntroBackground/IntroBackground';
import Typical from 'react-typical';
import ReactTypingEffect from 'react-typing-effect';
import { connect } from 'react-redux';
import * as PageActions from '../../store/modules/Page/actions';

function Introducao(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(0));
  });

  return (
    <Container>
      <BackgroundIntro />
      <TextContainer>
        <Typical steps={['Diego Nascimento']} wrapper="h1" />

        <h2>Desenvolvedor JAVASCRIPT</h2>

        <h2>
          <ReactTypingEffect
            cursorRenderer={(cursor) => <span>{cursor}</span>}
            eraseDelay={1000}
            eraseSpeed={100}
            typingDelay={1000}
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

export default connect()(Introducao);
