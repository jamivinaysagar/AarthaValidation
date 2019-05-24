import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import App from './containers/App';

const PageRouting = () => (
    <Router>
        <Route path="/visa" component={App} />
    </Router>
);
export default PageRouting;

// import React from 'react';
// import { Router, Route } from 'react-router';
// import Home from './containers/App';
// import AddressValidation from './containers/AddressValidation';
// import AddressTransformation from './containers/AddressTransformatiion';


// export default (history, store) => {
//     let { app } = store.getState();
//     console.log('Viinay-->  app store-->', app);

//     return (
//         <Router history={history}>
//             <Route name="app" path="/" component={Home}> </Route>
//             <Route path="/addressvalidation" component={AddressValidation}> </Route>
//             <Route path="/addresstransformation" component={AddressTransformation}> </Route>
//         </Router>
//     );
// };
