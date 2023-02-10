import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import {
  Wrapper,
  Container,
  ImagemContainer,
  Textos,
  SpaceShip,
} from './QuemSou.style';
import { Link } from 'react-router-dom';

function QuemSou(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(1));
  });

  const [AmountFire] = React.useState(5);

  const [Fire] = React.useState(() => {
    let chamas = [];
    for (let i = 0; i < AmountFire; i++) {
      chamas.push(<div className="chama" key={Math.random()} />);
    }
    return chamas;
  });

  return (
    <Wrapper>
      <Container>
        <ImagemContainer>
          <SpaceShip>
            <img
              src="https://site-do-diego.s3-sa-east-1.amazonaws.com/rocket.png"
              alt="Foguetinho"
            />
            {Fire.map((chama) => chama)}
          </SpaceShip>
        </ImagemContainer>
        <Textos>
          <h1>Quem Sou??</h1>
          <p>
            Desenvolvedor Sênior com 4 anos de experiência como Front-end
            atuando principalmente com: React, Typescript, Nextjs, React Native
            e Nodejs.
          </p>

          <p>
            Desde de 2008 sou o cara mais apaixonado por tecnologia que eu
            conheço! Meu primeiro contato acadêmico com TI foi na minha na
            formação técnica há cerca de 15 anos atrás. Sempre fui curioso e
            tive cede de aprender o que me interessa e foi assim que de Técnico
            em informática alcancei o Bacharel em Ciências da Computação.
          </p>
          <p>
            Para conhecer meus trabalhos, você pode
            <Link to="/portifolio">
              <span> CLICAR AQUI</span>
            </Link>{' '}
            ou clicar na aba Portifolio! Mas se eu já te convenci,{' '}
            <Link to="/contato">
              <span> CLIQUE AQUI!</span>
            </Link>{' '}
            para ser enviado a minha página de contato!
          </p>
          <p>Te aguardo lá!!</p>
        </Textos>
      </Container>
    </Wrapper>
  );
}

export default connect()(QuemSou);
