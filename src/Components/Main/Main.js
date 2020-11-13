import React from 'react';
import { Container } from './Main.style';
import { connect } from 'react-redux';

import Route from '../../route';

function Main({ MenuState }) {
  return (
    <Container MenuState={MenuState}>
      <Route />
    </Container>
  );
}

const StateToProps = (state) => ({
  MenuState: state.MenuState,
});

export default connect(StateToProps)(Main);
