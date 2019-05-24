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


// require('es6-promise').polyfill();
// require('isomorphic-fetch');

// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from '../configureStore';
// import { BrowserRouter } from 'react-router-dom';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import getRoutes from '../router';

// const store = configureStore(browserHistory, window.__initialState__);
// const history = syncHistoryWithStore(browserHistory, store);

// const Root = () => (
//     <Provider key="provider" store={store}>
//         <BrowserRouter>
//             <Router history={history} routes={getRoutes(history, store)} />
//         </BrowserRouter>
//     </Provider>
// );

// export default Root;
