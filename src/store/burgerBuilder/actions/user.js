import * as actionTypes  from './actionTypes'

export const login = (email, token) => {
    return {
        type: actionTypes.LOGIN,
        email,
        token
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};
