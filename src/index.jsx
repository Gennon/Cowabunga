import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Col } from 'react-bootstrap';

import App from './components/app';
import configureStore from './store/configure-store';
import DevTools from './containers/dev-tools';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Col md={12}>
            <Col md={8}>
                <App />
            </Col>
            <Col md={4}>
                <DevTools />
            </Col>
        </Col>
    </Provider>
    , document.querySelector('#container')
);
