import styled from 'styled-components';

export const Container = styled.main`
  transition: 0.5s;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1200px) {
    position: absolute;
    left: ${(props) => (props.MenuState === 0 ? '0px' : '425px')};
  }

  @media (max-width: 550px) {
    position: absolute;
    left: ${(props) => (props.MenuState === 0 ? '0px' : '70%')};
  }
`;
