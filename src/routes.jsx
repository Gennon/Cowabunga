import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';
import Dashboard from './containers/dashboard';
import Home from './components/home';
import ItemsList from './containers/items_list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="home" component={Dashboard}>
      <IndexRoute component={Home} />
      <Route path="/items" component={ItemsList} />
    </Route>
  </Route>
);