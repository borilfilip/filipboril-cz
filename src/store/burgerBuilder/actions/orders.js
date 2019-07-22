import * as actionTypes  from './actionTypes'
import axios from "axios";

const url = 'https://www.filipboril.cz/api/burger';

export const setOrders = (orders) => {
    return {
        type: actionTypes.SET_ORDERS,
        orders: orders
    };
};

export const fetchOrdersFailed = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED
    }
};

export const fetchOrders = (limit, page) => {
    return dispatch => {
        let config = {};
        if (limit !== 'inf')
            config = {
                params: {
                    limit: limit,
                    offset: (page - 1) * limit
                }
            };

        axios.get(url + '/orders', config)
            .then(res => {
                dispatch(setOrders(res.data));
            })
            .catch(err => {
                dispatch(fetchOrdersFailed());
            });
    };
};
