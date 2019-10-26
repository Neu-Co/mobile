const initialState = { user: null };

export default function user(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'SET_USER':
                nextState = {
                    ...state,
                    user: action.user
                }
                return nextState;
        case 'DEL_USER':
                nextState = {
                    ...state,
                    user: undefined
                }
                return nextState;
    default:
        return state;
    }
}