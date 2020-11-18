import styled from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  background: ${Styles.asideSelectedBG};
  position: relative;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5vh 10px;
  flex-direction: column;
  z-index: 50;

  div {
    margin-bottom: 20px;
  }
`;

export const Titulo = styled.h1`
  color: ${Styles.asideFontColor};
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 2px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 2em;
  }

  @media (max-width: 600px) {
    font-size: 1.6em;
  }

  @media (max-width: 350px) {
    font-size: 1.4em;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;

  p,
  span,
  a {
    font-size: 1.5em;
    letter-spacing: 1.7px;
    margin-bottom: 30px;
    color: white;

    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }

    @media (max-width: 350px) {
      font-size: 0.6rem;
    }
  }

  p {
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    transition: 0.5s;
    letter-spacing: 2px;
    :hover {
      color: ${Styles.asideFontColor};
    }
  }

  h2 {
    color: ${Styles.asideFontColor};
    text-transform: uppercase;
    font-size: 2.3em;
    letter-spacing: 2px;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      font-size: 2em;
    }

    @media (max-width: 600px) {
      font-size: 1.2em;
    }

    @media (max-width: 350px) {
      font-size: 1em;
    }
  }
`;
