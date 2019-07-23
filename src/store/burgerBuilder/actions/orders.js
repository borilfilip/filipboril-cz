import * as actionTypes  from './actionTypes'
import axios from "axios";

const url = 'https://www.filipboril.cz/api/burger';

export const setOrders = (orders, count) => {
    return {
        type: actionTypes.SET_ORDERS,
        orders: orders,
        count: count
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
                    page: page
                }
            };

        axios.get(url + '/orders2', config)
            .then(res => {
                dispatch(setOrders(res.data.data, res.data.count));
            })
            .catch(err => {
                dispatch(fetchOrdersFailed());
            });
    };
};
