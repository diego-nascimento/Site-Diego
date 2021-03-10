import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import { Wrapper, Container, Titulo, Lista, Item } from './Servicos.style';

import { CgWebsite } from 'react-icons/cg';
import { FaServer } from 'react-icons/fa';

function Servicos(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(3));
  });

  return (
    <Wrapper>
      <Container>
        <Titulo>Serviços</Titulo>
        <Lista>
          <Item>
            <CgWebsite />
            <h2>Desenvolvedor de WebSites</h2>
            <p>
              HTMl, CSS, Javascript, ReactJs... Sempre focado no desenvolvimento
              de páginas responsivas, bonitas e funcionais.
            </p>
          </Item>
          <Item>
            <FaServer />
            <h2>Desenvolvedor Backend</h2>
            <p>NodeJs, Express, Docker, Postgres, Firebird... </p>
          </Item>
        </Lista>
      </Container>
    </Wrapper>
  );
}

export default connect()(Servicos);
