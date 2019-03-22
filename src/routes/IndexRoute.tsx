import React from 'react';

import Container from '../components/Container';
import Toggle from '../components/Toggle';

type Props = {}

const IndexRoute: React.FC<Props> = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <React.Fragment>
      <Container>
        Is it toggled? {isToggled ? 'Yes' : 'No'}
      </Container>

      <Container>
        <Toggle isToggled={isToggled} onToggle={setIsToggled} />
      </Container>
    </React.Fragment>
  );
};

export default IndexRoute;
