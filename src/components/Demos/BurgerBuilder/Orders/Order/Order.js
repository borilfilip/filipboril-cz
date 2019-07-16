import React from 'react';

const order = (props) => {
    let deliveryMethod;
    switch (props.method) {
        case 'fast':
            deliveryMethod = "Rychlé";
            break;
        case 'cheap':
            deliveryMethod = "Levné";
            break;
        default:
            deliveryMethod = "Neznámé";
    }

    let state;
    switch (props.state) {
        case 'waiting_to_pay':
            state = "Čeká na zaplacení";
            break;
        default:
            state = "Neznámý";
    }

    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.name}</td>
            <td>{deliveryMethod}</td>
            <td>{props.price} Kč</td>
            <td>{state}</td>
        </tr>
    );
};

export default order;
