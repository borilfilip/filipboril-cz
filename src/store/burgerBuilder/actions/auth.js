import * as actionTypes from './actionTypes'
import axios from "axios";

const url = 'https://www.filipboril.cz/api/user';

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

const loginSuccess = (email, token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        email,
        token
    };
};

const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error
    }
};

const request = (action, email, password) => {
    return dispatch => {
        dispatch(loginStart());
        axios.post(url + '/' + action, {email, password})
            .then(response => {
                if (response.data.status === 'ok') {
                    dispatch(loginSuccess(email, response.data.token));
                } else {
                    dispatch(loginFailed(response.data.message));
                }
            })
            .catch(() => {
                dispatch(loginFailed(null));
            });
    }
};

export const login = (email, password) => {
    return request('login', email, password);
};

export const register = (email, password) => {
    return request('register', email, password);
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};
