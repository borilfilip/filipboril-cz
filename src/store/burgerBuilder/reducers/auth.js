import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    token: null,
    sending: false,
    error: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                sending: true,
                error: null
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                email: action.email,
                token: action.token,
                sending: false,
                error: false
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                sending: false,
                error: action.error
            };
        case actionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default auth;
