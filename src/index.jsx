import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './store/configure-store';
import DevTools from './containers/dev-tools';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>
    , document.querySelector('#container')
);
