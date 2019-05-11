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
    const newState = () => Object.assign({}, state);
    switch (action.type) {
        case actiontypes.LOAD_QUIZ:
            return loadQuiz(newState(), action.payload.quiz, action.payload.code, action.payload.leaderboard);
        case actiontypes.GENERATE_QUIZ:
            return generateQuiz(newState(), action.payload.quiz, action.payload.code);
        case actiontypes.SET_ANSWER:
            return setAnswer(newState(), action.payload.question, action.payload.answer);
        case actiontypes.SUBMIT_ANSWERS:
            return submitAnswers(newState(), action.payload.leaderboard);
        case actiontypes.GET_LEADERBOARDS:
            return getLeaderboards(newState(), action.payload.leaderboards);
        case actiontypes.GET_VALIDQUIZCODES:
            return getValidQuizCodes(newState(), action.payload.validQuizCodes);
        case actiontypes.GET_VALIDQUIZOPTIONS:
            return getValidQuizOptions(newState(), action.payload.validQuizOptions);
        default:
            return newState();
    }
}
