import React from 'react';
import {
  Wrapper,
  Container,
  ButtonMenuContainer,
  Header,
  Avatar,
  ContainerInfo,
  Menu,
  Item,
  Social,
} from './SideMenu.style';
import {
  FaHome,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaBars,
  FaInstagram,
} from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { connect } from 'react-redux';
import * as MenuStateActions from '../../store/modules/MenuState/actions';
import { Link } from 'react-router-dom';

function SideMenu({ Page, MenuState, dispatch }) {
  const [Height, setHeight] = React.useState(window.innerHeight);

  const handleButtonState = React.useCallback(() => {
    dispatch(MenuStateActions.MenuState());
  }, [dispatch]);

  window.addEventListener('resize', () => {
    setHeight(window.innerHeight);
  });

  const handleMenuClick = React.useCallback(
    (page) => {
      handleButtonState();
    },
    [handleButtonState],
  );

  return (
    <Wrapper MenuState={MenuState} Height={Height}>
      <ButtonMenuContainer onClick={() => handleButtonState()}>
        <FaBars />
      </ButtonMenuContainer>
      <Container Height={Height}>
        <Header>
          <Avatar />
          <ContainerInfo>
            <h2>Diego Nascimento</h2>
            <p>Desenvolvedor</p>
          </ContainerInfo>
        </Header>
        <Menu>
          <Link to="/">
            <Item MyPage={0} Page={Page} onClick={() => handleMenuClick()}>
              <FaHome />
              <span>Introdução</span>
            </Item>
          </Link>
          <Link to="/sobre">
            <Item MyPage={1} Page={Page} onClick={() => handleMenuClick(1)}>
              <FaUser />
              <span>Quem Sou</span>
            </Item>
          </Link>
          <Link to="/experiencias">
            <Item MyPage={2} Page={Page} onClick={() => handleMenuClick(2)}>
              <BsGrid3X3GapFill />
              <span>Experiencias</span>
            </Item>
          </Link>
          <Link to="/portifolio">
            <Item MyPage={2} Page={Page} onClick={() => handleMenuClick(2)}>
              <BsGrid3X3GapFill />
              <span>Portifolio</span>
            </Item>
          </Link>

          <Link to="/contato">
            <Item MyPage={4} Page={Page} onClick={() => handleMenuClick(4)}>
              <GrMail />
              <span>Contato</span>
            </Item>
          </Link>
        </Menu>
        <Social>
          <a href="https://www.linkedin.com/in/diego-carvalhais-de-almeida-nascimento-650970143/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/diego-nascimento">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/diego.carvalhaes">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/diego_carvalhais/">
            <FaInstagram />
          </a>
        </Social>
      </Container>
    </Wrapper>
  );
}

const stateToProps = (state) => ({
  Page: state.Page,
  MenuState: state.MenuState,
});

export default connect(stateToProps)(React.memo(SideMenu));
