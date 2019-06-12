export default actionMap => (state, action) =>
        (actionMap[action.type] || (d => () => d))(Object.assign({}, state))(action.payload);
