import * as actiontypes from './actiontypes';

const loadQuiz = (state, quiz, code, leaderboard) => {
    state.quiz = quiz;
    state.code = code;
    state.leaderboard = leaderboard;
    return state;
}

const generateQuiz = (state, quiz, code) => {
    state.quiz = quiz;
    state.code = code;
    return state;
}

const setAnswer = (state, question, answer) => {
    const answers = state.answers.find(d => d.question == question) ?
        state.answers.map(d => {
            return d.question == question ? { question, answer } : d;
        }) :
        state.answers.concat([{ question, answer }]);
    state.answers = answers;
    return state;
}

const submitAnswers = (state, leaderboard) => {
    state.leaderboard = leaderboard;
    return state;
}

const getLeaderboards = (state, leaderboards) => {
    state.leaderboards = leaderboards;
    return state;
}

const getValidQuizCodes = (state, validQuizCodes) => {
    state.validQuizCodes = validQuizCodes;
    return state;
}

const getValidQuizOptions = (state, validQuizOptions) => {
    state.validQuizOptions = validQuizOptions;
    return state;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actiontypes.LOAD_QUIZ:
            return loadQuiz(Object.assign({}, state), action.payload.quiz, action.payload.code, action.payload.leaderboard);
        case actiontypes.GENERATE_QUIZ:
            return generateQuiz(Object.assign({}, state), action.payload.quiz, action.payload.code);
        case actiontypes.SET_ANSWER:
            return setAnswer(Object.assign({}, state), action.payload.question, action.payload.answer);
        case actiontypes.SUBMIT_ANSWERS:
            return submitAnswers(Object.assign({}, state), action.payload.leaderboard);
        case actiontypes.GET_LEADERBOARDS:
            return getLeaderboards(Object.assign({}, state), action.payload.leaderboards);
        case actiontypes.GET_VALIDQUIZCODES:
            return getValidQuizCodes(Object.assign({}, state), action.payload.validQuizCodes);
        case actiontypes.GET_VALIDQUIZOPTIONS:
            return getValidQuizOptions(Object.assign({}, state), action.payload.validQuizOptions);
        default:
            const functor = d => d;
            return functor(state);
    }
}
