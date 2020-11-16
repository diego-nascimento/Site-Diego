import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import { Wrapper, Container, ImagemContainer, Textos } from './QuemSou.style';
import { Link } from 'react-router-dom';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';

function QuemSou(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(1));
  });

  return (
    <Wrapper>
      <IntroBackground />
      <Container>
        <ImagemContainer>
          <img src="https://site-do-diego.s3-sa-east-1.amazonaws.com/rocket.png" alt="Foguetinho" />
        </ImagemContainer>
        <Textos>
          <h1>Quem Sou??</h1>
          <p>
            Meu nome é <span>Diego Carvalhais de Almeida Nascimento</span>, sou formado em
            <span> Ciências da Computação </span> pela faculdade UNIFAGOC e sou <span>Tecnico em Informatica</span> pelo
            IFET-RP.
          </p>
          <p>
            Trabalhei durante um ano como Suporte na empresa <span> Dual Soluções</span>, onde realizava atendimentos
            para resolução de problemas, que iam de problemas em programas até realizações de configurações em Firewalls
            e Servidores.
          </p>
          <p>
            Apesar da grande gama de conhecimentos que adquiri durante essa jornada, a área de infraestrutura nunca foi
            a minha paixão.
          </p>
          <p>
            Após isso me envolvi no desenvolvimento de uma ferramenta de BI que se chamava Qira, onde a partir de meus
            conhecimentos em tecnologias <span>web</span> e <span>mobile</span>, estive durante algum tempo
            desenvolvendo <span>prototipos de telas de Dashboard</span> para a ferramenta.
          </p>
          <p>
            Com a necessidade de um backend mais proprio para a ferramenta, conheci o <span>NodeJs</span>, onde conheci
            e estudei com bem mais afinco a <span>Stack Javascript</span> que estudo até atualmente.
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

          <p style={{ textAlign: 'center' }}>Te aguardo lá!!</p>
        </Textos>
      </Container>
    </Wrapper>
  );
}

export default connect()(QuemSou);
