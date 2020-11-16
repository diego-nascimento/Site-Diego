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

export const ImagemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${RocketMoviment} 0.2s linear infinite;
    margin: 30px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Textos = styled.div`
  h1 {
    color: ${Styles.asideFontColor};
    text-transform: uppercase;
    font-size: 3em;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

  p {
    color: white;
    font-size: 1.4em;
    letter-spacing: 0.12em;
    line-height: 1.8em;
    margin-bottom: 30px;
  }

  span {
    color: ${Styles.asideFontColor};
  }
`;
