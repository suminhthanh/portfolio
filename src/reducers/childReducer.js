export const childReducer = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case  'SET_ACTION_TYPE':
            console.log('recieve new state', action);
            newState = Object.assign({}, { someValue: action.itemId});
            return newState;

        default:
            return state;
    }
};
export default childReducer;

