import { decode } from 'he';
import * as actiontypes from './actiontypes';

const endpoint = process.env.NODE_ENV == 'production' ?
    'https://quiz-node-backend.herokuapp.com' :
    'http://localhost:8080';

export const mapDispatchToProps = dispatch => ({
    loadQuiz: code => dispatch(loadQuiz(code)),
    generateQuiz: options => dispatch(generateQuiz(options)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    submitAnswers: (code, user, answers) => dispatch(submitAnswers(code, user, answers))
});

const decodeQuiz = quiz => quiz
    .map(d => ({
        question: decode(d.question),
        answer: decode(d.answer),
        incorrectAnswers: d.incorrectAnswers.map(ia => decode(ia))
    }))

const loadQuiz = code => async dispatch => {
    const quizResponse = await fetch(`${ endpoint }/api/quiz/${ code }`);
    const quiz = await quizResponse.json();
    const leaderboardResponse = await fetch(`${ endpoint }/api/leaderboard/${ code }`);
    const leaderboard = await leaderboardResponse.json();
    const loadQuizAction = (quiz, code, leaderboard) => {
        return {
            type: actiontypes.LOAD_QUIZ,
            quiz,
            code,
            leaderboard
        }
    }
    dispatch(loadQuizAction(decodeQuiz(quiz.quiz), code, leaderboard.results));
};

const generateQuiz = options => async dispatch => {
    const quizResponse = await fetch(`${ endpoint }/api/newquiz`,
        { method: "POST", body: JSON.stringify({ options }), headers: { "Accept": "application/json", "Content-Type": "application/json" }});
    const quiz = await quizResponse.json();
    const generateQuizAction = (quiz, code) => {
        return {
            type: actiontypes.GENERATE_QUIZ,
            quiz,
            code
        }
    }
    dispatch(generateQuizAction(decodeQuiz(quiz.quiz), quiz.code));
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
    const submitAnswersResponse = await fetch(`${ endpoint }/api/answers/${ code }/${ user }`,
        { method: "POST", body: JSON.stringify({ answers }), headers: { "Accept": "application/json", "Content-Type": "application/json" }});
    const submitAnswers = await submitAnswersResponse.json();
    const leaderboardResponse = await fetch(`${ endpoint }/api/leaderboard/${ code }`);
    const leaderboard = await leaderboardResponse.json();
    const submitAnswersAction = leaderboard => {
        return {
            type: actiontypes.SUBMIT_ANSWERS,
            leaderboard
        }
    }
    dispatch(submitAnswersAction(leaderboard.results));
};
