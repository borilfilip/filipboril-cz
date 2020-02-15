import React from 'react';
import Badge from "react-bootstrap/Badge";

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
    const ingredients = Object.keys(props.ingredients).map((ingredient, index) => {
        const count = props.ingredients[ingredient];
        let color;
        switch (ingredient) {
            case 'salad': color = 'success'; break;
            case 'bacon': color = 'danger'; break;
            case 'cheese': color = 'warning'; break;
            case 'meat': color = 'dark'; break;
            default: color = 'secondary'; break;
        }

        return count ? (<Badge key={index} variant={color} style={{marginRight: '3px'}}>{count}</Badge>) : null;
    });

    return (
        <tr>
            <td>{formattedDate}</td>
            <td>{props.name}</td>
            <td>{deliveryMethod}</td>
            <td>{ingredients}</td>
            <td>{props.price} Kč</td>
            <td>{state}</td>
        </tr>
    );
};

export default order;
