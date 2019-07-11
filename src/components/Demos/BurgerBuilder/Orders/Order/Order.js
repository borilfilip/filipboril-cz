import React from 'react';

const order = (props) => {
    let deliveryMethod = "Neznámé";
    switch (props.method) {
        case 'fast':
            deliveryMethod = "Rychlé";
            break;
        case 'cheap':
            deliveryMethod = "Levné";
            break;
    }

    let state = "Neznámý";
    switch (props.state) {
        case 'waiting_to_pay':
            state = "Čeká na zaplacení";
            break;
    }

    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.name}</td>
            <td>{deliveryMethod}</td>
            <td>{props.price} Kč</td>
            <td>{props.state}</td>
        </tr>
    );
};

export default order;
