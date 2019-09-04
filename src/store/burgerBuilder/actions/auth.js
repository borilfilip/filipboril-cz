import * as actionTypes from './actionTypes'
import * as actions from '.';
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

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

const request = (action, email, password) => {
    return dispatch => {
        dispatch(loginStart());
        axios.post(url + '/' + action, {email, password})
            .then(response => {
                const {data} = response;
                if (data.status === 'ok') {
                    dispatch(loginSuccess(email, data.token));
                    dispatch(actions.notify('Přihlášení úspěšné', 'Nyní můžete prohlížet svoje objednávky'));
                    dispatch(checkAuthTimeout(data.expiration_time));
                } else {
                    dispatch(loginFailed(data.message));
                    dispatch(this.props.notify('Registrace proběhla úspěšně', 'Jste zeregistrován(a) a rovnou přihlášen(a)'));
                }
            })
            .catch(() => {
                dispatch(loginFailed('Neznámá chyba'));
            });
    }
};

export const login = (email, password) => {
    return request('login', email, password);
};

export const register = (email, password) => {
    return request('register', email, password);
};

const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT
    }
};

export const logout = () => {
    return dispatch => {
        dispatch(logoutSuccess());
        dispatch(actions.notify('Odhlášení úspěšné', 'Odhlášení bylo úspěšné'));
    };
};
