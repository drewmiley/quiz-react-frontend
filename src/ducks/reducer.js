import * as actiontypes from './actiontypes';

const setNumber = (state, number) => {
    let newState = Object.assign({}, state);
    newState.number = number;
    return newState;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actiontypes.SET_NUMBER:
            return setNumber(state, action.number);
        case actiontypes.LOAD_QUIZ:
            return state;
        case actiontypes.GENERATE_QUIZ:
            return state;
        case actiontypes.SET_ANSWER:
            return state;
        case actiontypes.SUBMIT_ANSWERS:
            return state;
        default:
            return state;
    }
}
