import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';
import { Wrapper, Container, Titulo, TextContainer } from './Contato.style';

function Contato(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(3));
  });
  return (
    <Wrapper>
      <IntroBackground />
      <Container>
        <Titulo>Contato</Titulo>
        <TextContainer>
          <p>Se quiser conversar, ou entrar em contato, estou sempre online!</p>
          <h2>Meus contatos estão abaixo:</h2>
          <div>
            <span>Whatsapp:</span>
            <a href="google.com.br">(32) 9 9910-7767</a>
          </div>

          <div>
            <span>Instagram:</span>
            <a href="https://www.instagram.com/diego_carvalhais">@diego_carvalhais</a>
          </div>
        </TextContainer>
      </Container>
    </Wrapper>
  );
}

export default connect()(Contato);
