import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {AppContainer} from './AppContainer';

import store from './ducks/store';

// import { PersistGate } from 'redux-persist/integration/react'
//
// // ... normal setup, create store and persistor, import components etc.
//
// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <RootComponent />
//       </PersistGate>
//     </Provider>
//   );
// };

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
