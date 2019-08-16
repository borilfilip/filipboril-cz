import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    token: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                email: action.email,
                token: action.token
            };
        case actionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default user;
