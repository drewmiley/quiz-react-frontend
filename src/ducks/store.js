import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(reducer, { code: '', quiz: [], leaderboard: [], answers: [] }, applyMiddleware(thunk));
