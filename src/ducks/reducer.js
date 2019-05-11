import * as actiontypes from './actiontypes';

const loadQuiz = (state, quiz, code, leaderboard) => {
    let newState = Object.assign({}, state);
    newState.quiz = quiz;
    newState.code = code;
    newState.leaderboard = leaderboard;
    return newState;
}

const generateQuiz = (state, quiz, code) => {
    let newState = Object.assign({}, state);
    newState.quiz = quiz;
    newState.code = code;
    return newState;
}

const setAnswer = (state, question, answer) => {
    let newState = Object.assign({}, state);
    const answers = newState.answers.find(d => d.question == question) ?
        newState.answers.map(d => {
            return d.question == question ? { question, answer } : d;
        }) :
        newState.answers.concat([{ question, answer }]);
    newState.answers = answers;
    return newState;
}

const submitAnswers = (state, leaderboard) => {
    let newState = Object.assign({}, state);
    newState.leaderboard = leaderboard;
    return newState;
}

const getLeaderboards = (state, leaderboards) => {
    let newState = Object.assign({}, state);
    newState.leaderboards = leaderboards;
    return newState;
}

const getValidQuizCodes = (state, validQuizCodes) => {
    let newState = Object.assign({}, state);
    newState.validQuizCodes = validQuizCodes;
    return newState;
}

const getValidQuizOptions = (state, validQuizOptions) => {
    let newState = Object.assign({}, state);
    newState.validQuizOptions = validQuizOptions;
    return newState;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actiontypes.LOAD_QUIZ:
            return loadQuiz(state, action.quiz, action.code, action.leaderboard);
        case actiontypes.GENERATE_QUIZ:
            return generateQuiz(state, action.quiz, action.code);
        case actiontypes.SET_ANSWER:
            return setAnswer(state, action.question, action.answer);
        case actiontypes.SUBMIT_ANSWERS:
            return submitAnswers(state, action.leaderboard);
        case actiontypes.GET_LEADERBOARDS:
            return getLeaderboards(state, action.leaderboards);
        case actiontypes.GET_VALIDQUIZCODES:
            return getValidQuizCodes(state, action.validQuizCodes);
        case actiontypes.GET_VALIDQUIZOPTIONS:
            return getValidQuizOptions(state, action.validQuizOptions);
        default:
            return state;
    }
}
