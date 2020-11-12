import styled from 'styled-components';

export const Container = styled.main`
  transition: 0.5s;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  flex-grow: 1;
  background-color: red;
  background: url('https://images.squarespace-cdn.com/content/v1/5438bd1be4b0446f6692b906/1442817982928-UNLP5V4V9TUGJLJBOMNC/ke17ZwdGBToddI8pDm48kK-V3XxKymP1Vt_OGJmnXNlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIshkjMHdjAGw8lXULR5mMSnf_4nvXDNz4CXC6rFBblD4/Goo.gif?format=1000w');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1200px) {
    position: absolute;
    left: ${(props) => (props.MenuState === 0 ? '0px' : '425px')};
    z-index: 1;
  }

  @media (max-width: 550px) {
    position: absolute;
    left: ${(props) => (props.MenuState === 0 ? '0px' : '70%')};
    z-index: 1;
  }
`;
