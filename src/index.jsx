import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Col } from 'react-bootstrap';
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/lib/locale-data/no';
import NavBar from './components/navbar';

import App from './components/app';
import configureStore from './store/configure-store';
import DevTools from './containers/dev-tools';
import noMessages from './intl/no';

const store = configureStore();
addLocaleData(noLocaleData);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="no" messages={noMessages}>
      <div className="container">
        <NavBar />
        <App />
        <DevTools />
      </div>
    </IntlProvider>
  </Provider>
  , document.querySelector('#container')
);
