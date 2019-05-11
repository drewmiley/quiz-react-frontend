import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(reducer, {
    code: '',
    quiz: [],
    leaderboard: [],
    leaderboards: [],
    answers: [],
    validQuizCodes: [],
    validQuizOptions: { category: [], difficulty: [], type: [] }
}, applyMiddleware(thunk));
