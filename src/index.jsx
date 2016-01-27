import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Col } from 'react-bootstrap';
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/lib/locale-data/no';

import App from './components/app';
import configureStore from './store/configure-store';
import DevTools from './containers/dev-tools';
import noMessages from './intl/no';

const store = configureStore();
addLocaleData(noLocaleData);

ReactDOM.render(
    <Provider store={store}>
        <Col md={12}>
            <Col md={8}>
                <IntlProvider locale="no" messages={noMessages}>
                    <App />
                </IntlProvider>
            </Col>
            <Col md={4}>
                <DevTools />
            </Col>
        </Col>
    </Provider>
    , document.querySelector('#container')
);
