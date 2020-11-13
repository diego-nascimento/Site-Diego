import styled from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Styles.asideSelectedBG};
  position: relative;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  font-weight: 500;

  h1,
  h2 {
    text-transform: uppercase;
  }

  h1 {
    color: white;
    font-size: 3em;
    font-weight: 400;

    @media (max-width: 650px) {
      font-size: 2em;
    }

    @media (max-width: 450px) {
      font-size: 1.5em;
    }

    @media (max-width: 350px) {
      font-size: 1.1em;
    }
  }
  h2 {
    color: ${Styles.asideFontColor};
    margin-top: 10px;
    letter-spacing: 3px;

    @media (max-width: 650px) {
      font-size: 1.2em;
    }

    @media (max-width: 450px) {
      font-size: 0.9em;
    }

    @media (max-width: 350px) {
      font-size: 0.6em;
    }
  }
`;
