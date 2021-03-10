import React from 'react';
import { Container, Star } from './IntroBackground.styles';

function IntroBackground() {
  const [AmountStars] = React.useState(30);

  const generateStars = React.useCallback(() => {
    let estrelas = [];
    for (let i = 0; i < AmountStars; i++) {
      estrelas.push(<Star key={Math.random()} />);
    }
    return estrelas;
  }, [AmountStars]);

  const [Stars] = React.useState(generateStars);

  return <Container>{Stars.map((Star) => Star)}</Container>;
}

export default React.memo(IntroBackground);
