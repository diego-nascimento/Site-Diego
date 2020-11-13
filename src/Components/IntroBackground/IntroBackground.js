import React from 'react';
import { Container, Star } from './IntroBackground.styles';

function IntroBackground() {
  const [Stars, setStars] = React.useState([]);

  React.useEffect(() => {
    CreateStars();
  }, []);

  function CreateStars() {
    for (let i = 0; i < 50; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const duration = Math.random() * (3 - 1 + 1) + 1;
      const height = Math.random() * 1;
      setStars([
        ...Stars,
        <Star Size={height} Left={x} Duration={duration} key={Math.random()} />,
      ]);
    }
  }

  console.log(Stars);

  return <Container>{Stars.map((Star) => Star)}</Container>;
}

export default IntroBackground;
