import React from 'react';
import { Container } from './Main.style';
import { connect } from 'react-redux';
import Introducao from '../../Pages/Introducao/Introducao';

function Main({ MenuState }) {
  return (
    <Container MenuState={MenuState}>
      <Introducao />
    </Container>
  );
}

const StateToProps = (state) => ({
  MenuState: state.MenuState,
});

export default connect(StateToProps)(Main);
