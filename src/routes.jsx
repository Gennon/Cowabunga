import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';
import Dashboard from './components/dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="home" component={Dashboard}>
    </Route>
  </Route>
);