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
    // TODO: Implement
    return newState;
}

const submitAnswers = (state, leaderboard) => {
    let newState = Object.assign({}, state);
    newState.leaderboard = leaderboard;
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
        default:
            return state;
    }
}
