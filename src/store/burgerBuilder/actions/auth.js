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
                const {status, token, expiration_time} = response.data;
                if (status === 'ok') {
                    const expirationDate = new Date(new Date().getTime() + expiration_time * 1000);
                    localStorage.setItem('email', email);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expirationDate', expirationDate);
                    dispatch(loginSuccess(email, token));
                    dispatch(actions.notify('Přihlášení úspěšné', 'Nyní můžete prohlížet svoje objednávky'));
                    dispatch(checkAuthTimeout(expiration_time));
                } else {
                    dispatch(loginFailed(response.data.message));
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

export const logout = (notify = true) => {
    return dispatch => {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        dispatch(logoutSuccess());
        if (notify) dispatch(actions.notify('Odhlášení úspěšné', 'Odhlášení bylo úspěšné'));
    };
};

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout(false));
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout(false));
            } else {
                const email = localStorage.getItem('email');
                dispatch(loginSuccess(email, token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};
