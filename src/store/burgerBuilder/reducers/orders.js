import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    count: 0,
    loading: true,
    error: false
};

const orders = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORDERS:
            return {
                ...state,
                loading: false,
                orders: action.orders,
                count: action.count
            };
        case actionTypes.FETCH_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default orders;
