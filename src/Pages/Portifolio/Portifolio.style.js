import styled from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Wrapper = styled.div`
  width: 100%;
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

export const Lista = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 350px);
  transition: 0.5;
  padding-bottom: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0px 20px;
  }
`;

export const Item = styled.li`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid white;
  border-radius: 15px;
  transition: 0.3s;

  :hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
  }

  h2 {
    color: ${Styles.asideFontColor};
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 1.7rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow-y: hidden;
  border-radius: 10px;
`;
