import React from 'react';
import { Container, ButtonMenuContainer, Header, Avatar, ContainerInfo, Menu, Item, Social } from './SideMenu.style';
import { FaHome, FaUser, FaLinkedin, FaGithub, FaFacebook, FaBars } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { connect } from 'react-redux';
import * as MenuStateActions from '../../store/modules/MenuState/actions';

function SideMenu({ Page, MenuState, dispatch }) {
  const [Height, setHeight] = React.useState(window.innerHeight);

  function handleButtonState() {
    dispatch(MenuStateActions.MenuState());
  }

  window.addEventListener('resize', () => {
    setHeight(window.innerHeight);
  });

  return (
    <Container MenuState={MenuState} Height={Height}>
      <ButtonMenuContainer onClick={() => handleButtonState()}>
        <FaBars />
      </ButtonMenuContainer>
      <Header>
        <Avatar />
        <ContainerInfo>
          <h2>Diego Nascimento</h2>
          <p>Desenvolvedor</p>
        </ContainerInfo>
      </Header>
      <Menu>
        <Item MyPage={0} Page={Page}>
          <FaHome />
          <span>Introdução</span>
        </Item>
        <Item MyPage={1} Page={Page}>
          <FaUser />
          <span>Quem Sou</span>
        </Item>
        <Item MyPage={2} Page={Page}>
          <BsGrid3X3GapFill />
          <span>Portifolio</span>
        </Item>
        <Item MyPage={3} Page={Page}>
          <GrMail />
          <span>Contato</span>
        </Item>
      </Menu>
      <Social>
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
      </Social>
    </Container>
  );
}

const stateToProps = (state) => ({
  Page: state.Page,
  MenuState: state.MenuState,
});

export default connect(stateToProps)(SideMenu);
