import styled from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  flex-direction: column;
  z-index: 50;
  position: relative;

  div {
    margin-bottom: 20px;
  }
`;

export const Titulo = styled.h1`
  color: ${Styles.asideFontColor};
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  margin-top: 30px;

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
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 20px;
  align-items: center;
  transition: 0.5s;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  transition: 0.7s;
  border-radius: 25px;
  width: 92%;
  max-width: 450px;
  margin: 20px 20px;

  :hover {
    border: 1px solid white;
  }

  svg {
    font-size: 40px;
    color: white;
  }

  h2 {
    font-size: 1.3rem;
    color: ${Styles.asideFontColor};
    margin-top: 20px;
    white-space: nowrap;
  }

  p {
    color: white;
    text-align: center;
    font-size: .7rem;
    letter-spacing: 1px;
    line-height: 1.8rem;
    margin-top: 20px;
  }
`;
