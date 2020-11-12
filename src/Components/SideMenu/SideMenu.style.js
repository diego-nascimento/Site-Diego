import styled from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Container = styled.aside`
  height: ${(props) => props.Height + 'px'};
  width: 425px;
  background-color: ${Styles.asideBGColor};
  color: ${Styles.asideFontColor};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  max-width: 70%;
  z-index: 99;

  @media (max-width: 1200px) {
    transform: ${(props) => (props.MenuState === 0 ? 'translateX(-100%)' : 'translateX(0%)')};
  }
`;

export const ButtonMenuContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: -70px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: white;
  visibility: hidden;
  opacity: 0;

  @media (max-width: 1200px) {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 600px) {
    right: -60px;
  }

  @media (max-width: 300px) {
    width: 30px;
    height: 30px;
    right: -40px;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 1200px) {
    padding: 10px;
  }
`;

export const Avatar = styled.div`
  background: url('https://avatars1.githubusercontent.com/u/23322552?s=400&u=9462db5f7f849b4235f8dd362fd5bc388d869497&v=4');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (max-width: 330px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    color: white;
    font-size: 1.3em;
    letter-spacing: 1px;

    @media (max-width: 400px) {
      font-size: 1em;
    }

    @media (max-width: 300px) {
      font-size: 0.7em;
    }
  }

  p {
    font-size: 1em;
    letter-spacing: 1px;

    @media (max-width: 300px) {
      font-size: 0.5em;
    }
  }
`;

export const Menu = styled.nav`
  width: 100%;
`;

export const Item = styled.li.attrs((props) => ({
  MyPage: props.MyPage,
  Page: props.Page,
}))`
  width: 100%;
  height: 70px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3em;
  text-transform: capitalize;
  letter-spacing: 1px;
  user-select: none;
  transition: 0.3s;
  color: ${(props) => (props.MyPage === props.Page ? 'white' : Styles.asideFontColor)};
  background-color: ${(props) => (props.MyPage === props.Page ? Styles.asideSelectedBG : 'none')};
  box-shadow: ${(props) =>
    props.MyPage === props.Page
      ? `0px 5px 10px ${Styles.asideFontColor}, 0px -5px 10px ${Styles.asideFontColor} `
      : 'none'};
  transition: 0.5s;

  @media (max-width: 500px) {
    font-size: 1.1em;
    padding: 0px 10px;
  }

  @media (max-width: 300px) {
    font-size: 0.9em;
    padding: 0px 15px;
  }
`;

export const Social = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 24px;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 30px;
  justify-content: center;

  svg {
    cursor: pointer;
    transition: 0.3s;

    :hover {
      color: white;
    }
  }

  svg:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 1200px) {
    padding: 10px;
  }
`;