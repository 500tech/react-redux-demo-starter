import { Router, Route, browserHistory } from 'react-router'
import React from 'react';

import Sample from './components/Sample.jsx';

const NoMatch = () => (
  <h1>Oh no 404</h1>
);

const Container = ({ children }) => (
  <div className='container'>
    { children }
  </div>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={ Container }>
      <Route path="/" component={ Sample }/>
    </Route>
  </Router>
);

export default Routes;