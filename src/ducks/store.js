import {compose, createStore} from 'redux';

import reducer from './reducer';

export default createStore(reducer, { number: 0 });
