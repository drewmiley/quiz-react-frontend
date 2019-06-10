export default actionTypeMap => (state, action) =>
        (actionTypeMap[action.type] || (d => () => d))(Object.assign({}, state))(action.payload);
