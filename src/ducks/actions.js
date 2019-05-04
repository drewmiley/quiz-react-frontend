import * as actiontypes from './actiontypes';

const setNumberAction = number => {
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}

export const mapDispatchToProps = dispatch => ({
    setNumber: number => dispatch(setNumber(number)),
    loadQuiz: () => dispatch(loadQuiz()),
    generateQuiz: () => dispatch(generateQuiz()),
    setAnswer: () => dispatch(setAnswer()),
    submitAnswers: () => dispatch(submitAnswers())
});

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

const setNumber = number => dispatch => {
    dispatch(setNumberAction(number));
};

const loadQuiz = () => dispatch => {
    dispatch(setNumberAction(1));
};

const generateQuiz = () => dispatch => {
    dispatch(setNumberAction(1));
};

const setAnswer = () => dispatch => {
    dispatch(setNumberAction(1));
};

const submitAnswers = () => dispatch => {
    dispatch(setNumberAction(1));
};
