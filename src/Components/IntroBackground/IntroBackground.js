import React from 'react';
import { Container, Star } from './IntroBackground.styles';

function IntroBackground() {
  const [AmountStars] = React.useState(200);

  const [Stars] = React.useState(() => {
    let estrelas = [];
    for (let i = 0; i < AmountStars; i++) {
      estrelas.push(<Star key={Math.random()} />);
    }
    return estrelas;
  });

  return <Container>{Stars.map((Star) => Star)}</Container>;
}

export default IntroBackground;
