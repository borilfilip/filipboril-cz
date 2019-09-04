import * as actionTypes from './actionTypes'

export const notify = (title, message, notificationType = 'success') => {
    return {
        type: actionTypes.NOTIFY,
        title,
        message,
        notificationType
    };
};
