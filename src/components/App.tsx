import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import IndexRoute from '../routes/IndexRoute';
import NonIndexRoute from '../routes/NonIndexRoute';

type Props = {}

const App: React.FC<Props> = () => {
  return (
    <Router>
      <header className='Header'>
        <nav className='Nav'>
          <Link to="/">Index</Link>

          <Link to="/non-index">Non-index</Link>
        </nav>
      </header>

      <Route path="/" exact component={IndexRoute} />
      <Route path="/non-index" component={NonIndexRoute} />
    </Router>
  );
};

export default App;
