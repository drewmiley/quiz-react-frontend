import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
    loadQuiz: code => dispatch(loadQuiz(code)),
    generateQuiz: options => dispatch(generateQuiz(options)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    submitAnswers: (code, user, answers) => dispatch(submitAnswers(code, user, answers))
});

const loadQuiz = code => async dispatch => {
    const quizResponse = await fetch(`http://localhost:8080/api/quiz/${ code }`);
    const quiz = await quizResponse.json();
    const leaderboardResponse = await fetch(`http://localhost:8080/api/leaderboard/${ code }`);
    const leaderboard = await leaderboardResponse.json();
    const loadQuizAction = (quiz, code, leaderboard) => {
        return {
            type: actiontypes.LOAD_QUIZ,
            quiz,
            code,
            leaderboard
        }
    }
    dispatch(loadQuizAction(quiz.quiz, code, leaderboard.results));
};

const generateQuiz = options => async dispatch => {
    const quizResponse = await fetch('http://localhost:8080/api/newquiz',
        { method: "POST", body: { options }, headers: { "Content-Type": "application/x-www-form-urlencoded" }});
    const quiz = await quizResponse.json();
    const generateQuizAction = (quiz, code) => {
        return {
            type: actiontypes.GENERATE_QUIZ,
            quiz,
            code
        }
    }
    dispatch(generateQuizAction(quiz.quiz, quiz.code));
};

const setAnswer = (question, answer) => dispatch => {
    const setAnswerAction = (question, answer) => {
        return {
            type: actiontypes.SET_ANSWER,
            question,
            answer
        }
    }
    dispatch(setAnswerAction(question, answer));
};

const submitAnswers = (code, user, answers) => async dispatch => {
    const submitAnswersResponse = await fetch(`http://localhost:8080/api/answers/${ code }/${ user }`,
        { method: "POST", body: { answers }, headers: { "Content-Type": "application/x-www-form-urlencoded" }});
    const submitAnswers = await submitAnswersResponse.json();
    const leaderboardResponse = await fetch(`http://localhost:8080/api/leaderboard/${ code }`);
    const leaderboard = await leaderboardResponse.json();
    const submitAnswersAction = leaderboard => {
        return {
            type: actiontypes.SUBMIT_ANSWERS,
            leaderboard
        }
    }
    dispatch(submitAnswersAction(leaderboard.leaderboard.results));
};
