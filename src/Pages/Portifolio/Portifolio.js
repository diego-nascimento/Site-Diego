import React from 'react';
import {
  Wrapper,
  Container,
  Titulo,
  Lista,
  Item,
  ImageContainer,
} from './Portifolio.style';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';
import CartersBrasil from '../../assets/carters-brasil.png';
import Fanlab from '../../assets/fanlab.png';
import rchlo from '../../assets/rchlo+fanlab.png';
import ArianePIC from '../../assets/ariane-site.png';
import FortyPIC from '../../assets/forty.png';
import TransitPIC from '../../assets/transit.png';
import Dogs from '../../assets/dogs.png';
import Libidoss from '../../assets/libidoss.png';
import Aflorarse from '../../assets/aflorarse.png';
import Elegant from '../../assets/elegant.png';

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
            <h2>Carter's Brasil</h2>
            <a href="https://www.carters.com.br" target="blank">
              <ImageContainer>
                <img src={CartersBrasil} alt="Carters Brasil" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Riachuelo Fanlab</h2>
            <a href="https://www.fanlab.com.br" target="blank">
              <ImageContainer>
                <img src={rchlo} alt="Riachuelo Fanlab" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Rchlo+ - Fanlab</h2>
            <a href="https://www.fanlab.com.br/personalize" target="blank">
              <ImageContainer>
                <img src={Fanlab} alt="Rchlo+ - Fanlab" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Libido SexShop</h2>
            <a href="https://www.libidoss.com.br/" target="blank">
              <ImageContainer>
                <img src={Libidoss} alt="Libido Sexshop" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Blog Aflorar-se</h2>
            <a href="https://aflorar-se.vercel.app/" target="blank">
              <ImageContainer>
                <img src={Aflorarse} alt="Blog Aflorar-se" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Site de Portifolio</h2>
            <a
              href="https://site-portifolio-ariane-git-master-diego-nascimento.vercel.app/"
              target="blank"
            >
              <ImageContainer>
                <img src={ArianePIC} alt="Ariane Miranda Copy" />
              </ImageContainer>
            </a>
          </Item>
          <Item>
            <h2>Dogs - Rede Social</h2>
            <a href="https://dogs.diego-nascimento.com" target="blank">
              <ImageContainer>
                <img src={Dogs} alt="Dogs - Rede Social " />
              </ImageContainer>
            </a>
          </Item>

          <Item>
            <h2>Elegant - Template clone</h2>
            <a href="https://landing.diego-nascimento.com/" target="blank">
              <ImageContainer>
                <img src={Elegant} alt="Pagina Elegant" />
              </ImageContainer>
            </a>
          </Item>

          <Item>
            <h2>Forty - Template clone</h2>
            <a href="https://forty.diego-nascimento.com" target="blank">
              <ImageContainer>
                <img src={FortyPIC} alt="Pagina Forty" />
              </ImageContainer>
            </a>
          </Item>

          <Item>
            <h2>Transit - Template clone</h2>
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
