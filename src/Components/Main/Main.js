import React from 'react';
import { Container } from './Main.style';
import { connect } from 'react-redux';
import Route from '../../route';
import IntroBackground from '../../Components/IntroBackground/IntroBackground';

function Main({ MenuState }) {
  return (
    <Container MenuState={MenuState}>
      <IntroBackground />
      <Route />
    </Container>
  );
}

const StateToProps = (state) => ({
  MenuState: state.MenuState,
});

export default connect(StateToProps)(Main);
