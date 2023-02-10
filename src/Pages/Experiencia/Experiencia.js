import React from 'react';
import * as PageActions from '../../store/modules/Page/actions';
import { connect } from 'react-redux';
import { Wrapper, Container, Titulo } from './Experiencia.style';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Contato(props) {
  React.useEffect(() => {
    props.dispatch(PageActions.AlterarPagina(4));
  });
  return (
    <Wrapper>
      <Container>
        <Titulo>Experiencias</Titulo>
        <VerticalTimeline animate layout="2-columns">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021 - 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Analista de Sistemas Senior
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Riachuelo</h4>
            <p>
              Trabalhei no desenvolvimento de dois produtos dessa empresa
              (Carter's e Fanlab). Algumas funções: Criação de novas
              funcionalidades, resoluções de bugs, testagens e revisões de
              códigos. Um destaque dessa atuação foi participar como
              Especialista React no programa Up!Tech auxiliando na formação de
              novos Trainee’s
            </p>
            <p>
              Tecnologias: Cognito, Keycloak, Material-UI, Jest, React Testing
              libary, Next.js ,TypeScript , Styledcomponents, React.js, Node.js,
              Dynatrace.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019 - 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Desenvolvedor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DN Desenvolvimento
            </h4>
            <p>
              Atuação independente na criação e desenvolvimento de websites e
              blogs para empresas, tendo como destaque a criação e execução de
              um e-commerce completo com integrações de soluções de pagamento.
            </p>
            <p>
              Tecnologias: React, Next.js, TypeScript, API(pagar.me), Strapi,
              Tailwind, AWS S3, Heroku, Netlify e Vercel.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0277bd', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #0277bd' }}
            date="2019 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Consultor e Desenvolvedor de Software
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Qiralab</h4>
            <p>
              Trabalho focado na plataforma Qira. A atividade principal era o
              desenvolvimento de páginas de dashboard, implantação em clientes,
              criação de SQL, desenvolvimento de API e aplicativo mobile.
            </p>
            <p>
              Tecnologias: React, Nodejs, MySQL, Firebird, Flutter, Google
              Charts
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Wrapper>
  );
}

export default connect()(Contato);
