import styled, { keyframes } from 'styled-components';

export const AnimateStars = keyframes`
  from{
    transform: translate(-1vh)
  }to{
    transform: translateY(105vh)
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const Star = styled.div.attrs(() => ({
  Duration: Math.random() * (2 - 1 + 1) + 1,
  Size: Math.random() * 10,
  Left: Math.floor(Math.random() * window.innerWidth),
  Delay: Math.random() * (10 - 0 + 1) + 0,
}))`
  width: 1px;
  height: ${({ Size }) => Size + 'px'};
  position: absolute;
  animation: ${AnimateStars} ${(props) => props.Duration + 's'} linear infinite;
  animation-delay: ${({ Delay }) => Delay + 's'};
  left: ${(props) => props.Left + 'px'};
  top: -10vh;
  background-color: white;
`;
