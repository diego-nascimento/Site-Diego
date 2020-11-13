import React from 'react';
import { Container, Star } from './IntroBackground.styles';

function IntroBackground() {
  const [Stars, setStars] = React.useState([]);
  const [AmountStars, setAmountStars] = React.useState(50);

  React.useCallback();

  React.useEffect(() => {
    if (Stars.length < AmountStars) {
      CreateStars();
    }
  });

  function CreateStars() {
    for (let i = 0; i < AmountStars; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const duration = Math.random() * (3 - 1 + 1) + 1;
      const height = Math.random() * 6;
      setStars([...Stars, <Star Size={height} Left={x} Duration={duration} key={Math.random()} />]);
    }
  }

  return <Container>{Stars.map((Star) => Star)}</Container>;
}

export default IntroBackground;
