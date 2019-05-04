import * as actiontypes from './actiontypes';

const setNumberAction = number => {
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}

const setNumber = number => dispatch => {
    dispatch(setNumberAction(number));
};

export const mapDispatchToProps = dispatch => ({
    setNumber: number => dispatch(setNumber(number)),
    loadQuiz: code => dispatch(loadQuiz()),
    generateQuiz: options => dispatch(generateQuiz()),
    setAnswer: (question, answer) => dispatch(setAnswer()),
    submitAnswers: user => dispatch(submitAnswers())
});

// export const LOAD_QUIZ = 'LOAD_QUIZ';
// export const GENERATE_QUIZ = 'GENERATE_QUIZ';
// export const SET_ANSWER = 'SET_ANSWER';
// export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

// const fetchData = () => dispatch => {
//     const url = 'https://randomuser.me/api/';
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             }
//             return response;
//         })
//         .then(response => response.json())
//         .then(response => response.results[0])
//         .then(user => dispatch(fetchDataSuccess(user)));
// };

// const fetchDataSuccess = user => ({
//     type: 'FETCH_DATA_SUCCESS',
//     user
// });

const loadQuiz = code => async dispatch => {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const json = await response.json();
    const loadQuizAction = (quiz, code, leaderboard) => {
        return {
            type: actiontypes.LOAD_QUIZ,
            quiz,
            code,
            leaderboard
        }
    }
    dispatch(loadQuizAction(null, code, null));
};

const generateQuiz = options => async dispatch => {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const json = await response.json();
    const generateQuizAction = (quiz, code) => {
        return {
            type: actiontypes.GENERATE_QUIZ,
            quiz,
            code
        }
    }
    dispatch(generateQuizAction(null, null));
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

const submitAnswers = user => async dispatch => {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const json = await response.json();
    const submitAnswersAction = leaderboard => {
        return {
            type: actiontypes.SUBMIT_ANSWERS,
            leaderboard
        }
    }
    dispatch(submitAnswersAction(null));
};
