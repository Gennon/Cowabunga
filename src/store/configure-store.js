import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';
import DevTools from '../containers/dev-tools';

const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(ReduxPromise),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
        );
    }

    return store;
}