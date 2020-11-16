import styled, { keyframes } from 'styled-components';
import { Styles } from '../../GlobalStyles/Styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  padding: 10px 30px;
  background: ${Styles.asideSelectedBG};
  position: relative;
  overflow-x: hidden;
`;

export const RocketMoviment = keyframes`
  0%{
    transform: translate(0px, 0px);
   
  }30%{
    transform: translate(4px, 2px);
    transform: rotate(3deg);
  }

  70%{
  transform: translateX(2px);
  

  }100%{
  transform: translateY(0px);
  transform: translateX(0px);
  

  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 2fr;
    align-items: flex-start;
  }
`;

export const ImagemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${RocketMoviment} 0.2s linear infinite;
`;

export const SpaceShip = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  @media (max-width: 700px) {
    height: 100px;
  }

  img {
    margin: 30px;
    z-index: 1;
    position: absolute;

    @media (max-width: 600px) {
      transform: scale(0.8);
    }

    @media (max-width: 350px) {
      transform: scale(0.5);
    }
  }
`;

export const Textos = styled.div`
  h1 {
    color: ${Styles.asideFontColor};
    text-transform: uppercase;
    font-size: 3em;
    letter-spacing: 2px;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      font-size: 2em;
    }

    @media (max-width: 600px) {
      font-size: 1em;
    }

    @media (max-width: 350px) {
      font-size: 0.8em;
    }
  }

  p {
    color: white;
    font-size: 1.4em;
    letter-spacing: 0.12em;
    line-height: 1.8em;
    margin-bottom: 2.6em;
    text-align: justify;

    @media (max-width: 1200px) {
      font-size: 1.2em;
      margin-bottom: 2em;
    }

    @media (max-width: 1200px) {
      font-size: 0.9em;
      margin-bottom: 0.9em;
      margin-bottom: 1.5em;
    }

    @media (max-width: 720px) {
      font-size: 0.7em;
      margin-bottom: 1.4em;
    }

    @media (max-width: 350px) {
      font-size: 0.5em;
      margin-bottom: 1em;
    }
  }

  span {
    color: ${Styles.asideFontColor};
  }
`;
