import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Col } from 'react-bootstrap';
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/lib/locale-data/no';
import configureStore from './store/configure-store';
import noMessages from './intl/no';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();
addLocaleData(noLocaleData);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="no" messages={noMessages}>
      <Router history={browserHistory} routes={routes} />
    </IntlProvider>
  </Provider>
  , document.querySelector('#container')
);
