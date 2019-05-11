import * as actiontypes from './actiontypes';

const loadQuiz = state => ({ quiz, code, leaderboard })  => {
    state.quiz = quiz;
    state.code = code;
    state.leaderboard = leaderboard;
    return state;
}

const generateQuiz = state => ({ quiz, code }) => {
    state.quiz = quiz;
    state.code = code;
    return state;
}

const setAnswer = state => ({ question, answer }) => {
    const answers = state.answers.find(d => d.question == question) ?
        state.answers.map(d => {
            return d.question == question ? { question, answer } : d;
        }) :
        state.answers.concat([{ question, answer }]);
    state.answers = answers;
    return state;
}

const submitAnswers = state => ({ leaderboard }) => {
    state.leaderboard = leaderboard;
    return state;
}

const getLeaderboards = state => ({ leaderboards }) => {
    state.leaderboards = leaderboards;
    return state;
}

const getValidQuizCodes = state => ({ validQuizCodes }) => {
    state.validQuizCodes = validQuizCodes;
    return state;
}

const getValidQuizOptions = state => ({ validQuizOptions }) => {
    state.validQuizOptions = validQuizOptions;
    return state;
}

const actionTypeMap = {
    [actiontypes.LOAD_QUIZ]: loadQuiz,
    [actiontypes.GENERATE_QUIZ]: generateQuiz,
    [actiontypes.SET_ANSWER]: setAnswer,
    [actiontypes.SUBMIT_ANSWERS]: submitAnswers,
    [actiontypes.GET_LEADERBOARDS]: getLeaderboards,
    [actiontypes.GET_VALIDQUIZCODES]: getValidQuizCodes,
    [actiontypes.GET_VALIDQUIZOPTIONS]: getValidQuizOptions
}

export default (state, action) => {
    const newState = () => Object.assign({}, state);
    return (actionTypeMap[action.type] || (() => newState))
        (newState())
        (action.payload);
}
