import React from 'react';
import { Wrapper, Container, Titulo, Lista, Item, ImageContainer } from './Portifolio.style';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';
import PedidosPIC from '../../assets/pedidos.png'
import ArianePIC from '../../assets/ariane-site.png'
import FortyPIC from '../../assets/forty.png'
import TransitPIC from '../../assets/transit.png'

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
            <a href="https://forty.diego-nascimento.com" target="blank">
            <ImageContainer>
              <img src={FortyPIC} alt="Pagina Forty" />
            </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Pedidos</h2>
            <a href="https://pedidos.diego-nascimento.com" target="blank">
            <ImageContainer>
              <img src={PedidosPIC} alt="Pagina de Pedidos" target="blank"/>
            </ImageContainer>
            </a> 
          </Item>
          <Item>
            <h2>Site de Portifolio</h2>
            <a href="https://arianemiranda.com" target="blank">
            <ImageContainer>
              <img src={ArianePIC} alt="Ariane Miranda Copy" />
            </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Transit</h2>
            <a href="https://transit.diego-nascimento.com" target="blank">
            <ImageContainer>
              <img src={TransitPIC} alt="Pagina Transit" />
            </ImageContainer>
            </a>
            
          </Item>
        </Lista>
      </Container>
    </Wrapper>
  );
}

export default connect()(Portifolio);
