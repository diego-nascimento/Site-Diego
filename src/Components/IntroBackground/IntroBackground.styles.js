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

export const Star = styled.div`
  width: 1px;
  height: ${(props) => props.Size + 'px'};
  position: absolute;
  animation: ${AnimateStars} ${(props) => props.Duration + 's'} linear infinite;
  left: ${(props) => props.Left + 'px'};
  top: -10vh;
  background-color: white;
`;
