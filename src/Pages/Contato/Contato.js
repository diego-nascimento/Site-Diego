import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import { Wrapper, Container, Titulo, TextContainer } from './Contato.style';

function Contato(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(4));
  });
  return (
    <Wrapper>
      <Container>
        <Titulo>Contato</Titulo>
        <TextContainer>
          <p>Se quiser conversar, ou entrar em contato, estou sempre online!</p>
          <h2>Meus contatos estão abaixo:</h2>
          <div>
            <span>Email:</span>
            <span>diego.ca.nascimento@gmail.com</span>
          </div>
          <div>
            <span>Whatsapp:</span>
            <a
              href="https://api.whatsapp.com/send?phone=5532999107767"
              target="blank"
            >
              (32) 9 9910-7767
            </a>
          </div>

          <div>
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/diego-carvalhais-de-almeida-nascimento-650970143/"
              target="blank"
            >
              Diego Nascimento
            </a>
          </div>
          <div>
            <span>Github:</span>
            <a href="https://github.com/diego-nascimento" target="blank">
              Diego-Nascimento
            </a>
          </div>
        </TextContainer>
      </Container>
    </Wrapper>
  );
}

export default connect()(Contato);
