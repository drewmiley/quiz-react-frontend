import * as actiontypes from './actiontypes';

const setNumber = number => {
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}

export const mapDispatchToProps = dispatch => ({
    setNumber: number => dispatch(actionSetNumber(number))
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

const actionSetNumber = number => dispatch => {
    dispatch(setNumber(number));
};
