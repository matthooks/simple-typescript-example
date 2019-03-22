import React from 'react';
import { History } from 'history';

import Container from '../components/Container';
import Toggle from '../components/Toggle';

type Props = {
  history: History;
}

const NonIndexRoute: React.FC<Props> = ({ history }) => {
  const [isToggled, setIsToggled] = React.useState(false);

  function handleClick() {
    history.push('/');
  }

  return (
    <React.Fragment>
      <Container>
        Is it toggled? {isToggled ? 'Yes' : 'No'}
      </Container>

      <Container>
        <button onClick={handleClick}>Go elsewhere</button>
        <Toggle isToggled={isToggled} onToggle={setIsToggled} />
      </Container>
    </React.Fragment>
  );
};

export default NonIndexRoute;
