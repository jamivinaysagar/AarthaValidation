import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';

const store = configureStore(browserHistory, window.__initialState__);
// const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/visa" component={App} />
        </Router>
    </Provider>
);

export default Root;
