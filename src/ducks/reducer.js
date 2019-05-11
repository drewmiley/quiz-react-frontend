import * as actiontypes from './actiontypes';

const loadQuiz = state => payload => {
    state.quiz = payload.quiz;
    state.code = payload.code;
    state.leaderboard = payload.leaderboard;
    return state;
}

const generateQuiz = state => payload => {
    state.quiz = payload.quiz;
    state.code = payload.code;
    return state;
}

const setAnswer = state => payload => {
    const answers = state.answers.find(d => d.question == payload.question) ?
        state.answers.map(d => {
            return d.question == payload.question ? payload : d;
        }) :
        state.answers.concat([payload]);
    state.answers = answers;
    return state;
}

const submitAnswers = state => payload => {
    state.leaderboard = payload.leaderboard;
    return state;
}

const getLeaderboards = state => payload => {
    state.leaderboards = payload.leaderboards;
    return state;
}

const getValidQuizCodes = state => payload => {
    state.validQuizCodes = payload.validQuizCodes;
    return state;
}

const getValidQuizOptions = state => payload => {
    state.validQuizOptions = payload.validQuizOptions;
    return state;
}

export default function(state = {}, action) {
    const newState = () => Object.assign({}, state);
    switch (action.type) {
        case actiontypes.LOAD_QUIZ:
            return loadQuiz(newState())(action.payload);
        case actiontypes.GENERATE_QUIZ:
            return generateQuiz(newState())(action.payload);
        case actiontypes.SET_ANSWER:
            return setAnswer(newState())(action.payload);
        case actiontypes.SUBMIT_ANSWERS:
            return submitAnswers(newState())(action.payload);
        case actiontypes.GET_LEADERBOARDS:
            return getLeaderboards(newState())(action.payload);
        case actiontypes.GET_VALIDQUIZCODES:
            return getValidQuizCodes(newState())(action.payload);
        case actiontypes.GET_VALIDQUIZOPTIONS:
            return getValidQuizOptions(newState())(action.payload);
        default:
            return newState();
    }
}
