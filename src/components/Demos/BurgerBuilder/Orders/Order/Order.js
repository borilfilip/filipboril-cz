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

    const date = new Date(Date.parse(props.date));
    const format = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    };
    const formattedDate = new Intl.DateTimeFormat('cs-CZ', format).format(date);

    return (
        <tr>
            <td>{formattedDate}</td>
            <td>{props.name}</td>
            <td>{deliveryMethod}</td>
            <td>{props.price} Kč</td>
            <td>{state}</td>
        </tr>
    );
};

export default order;
