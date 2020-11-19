import React from 'react';
import { Wrapper, Container, Titulo, Lista, Item, ImageContainer } from './Portifolio.style';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';

function Portifolio(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(2));
  });
  return (
    <Wrapper>
      <IntroBackground />
      <Container>
        <Titulo>Portifolio</Titulo>
        <Lista>
          <Item>
            <h2>Forty</h2>
            <ImageContainer>
              <img src="https://site-do-diego.s3-sa-east-1.amazonaws.com/forty-imagem+2.png" alt="" />
            </ImageContainer>
          </Item>
          <Item>
            <h2>Pedidos</h2>
            <ImageContainer>
              <img src="https://site-do-diego.s3-sa-east-1.amazonaws.com/pedidos-+imagem+2.png" alt="" />
            </ImageContainer>
          </Item>
          <Item>
            <h2>Site de Portifolio</h2>
            <ImageContainer>
              <img src="https://site-do-diego.s3-sa-east-1.amazonaws.com/site-ori+imagem+2.png" alt="" />
            </ImageContainer>
          </Item>
          <Item>
            <h2>Transit</h2>
            <ImageContainer>
              <img src="https://site-do-diego.s3-sa-east-1.amazonaws.com/transit+imagem+2.png" alt="" />
            </ImageContainer>
          </Item>
        </Lista>
      </Container>
    </Wrapper>
  );
}

export default connect()(Portifolio);
