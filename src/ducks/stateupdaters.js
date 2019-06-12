export const loadQuiz = state => ({ quiz, code, leaderboard })  => {
    state.answers = [];
    state.quiz = quiz;
    state.code = code;
    state.leaderboard = leaderboard;
    return state;
}

export const generateQuiz = state => ({ quiz, code, validQuizCodes }) => {
    state.answers = [];
    state.quiz = quiz;
    state.code = code;
    state.validQuizCodes = validQuizCodes;
    return state;
}

export const setAnswer = state => ({ question, answer }) => {
    const answers = state.answers.find(d => d.question == question) ?
        state.answers.map(d => {
            return d.question == question ? { question, answer } : d;
        }) :
        state.answers.concat([{ question, answer }]);
    state.answers = answers;
    return state;
}

export const submitAnswers = state => ({ leaderboard }) => {
    state.answers = [];
    state.leaderboard = leaderboard;
    return state;
}

export const getLeaderboards = state => ({ leaderboards }) => {
    state.leaderboards = leaderboards;
    return state;
}

export const getValidQuizCodes = state => ({ validQuizCodes }) => {
    state.validQuizCodes = validQuizCodes;
    return state;
}

export const getValidQuizOptions = state => ({ validQuizOptions }) => {
    state.validQuizOptions = validQuizOptions;
    return state;
}
