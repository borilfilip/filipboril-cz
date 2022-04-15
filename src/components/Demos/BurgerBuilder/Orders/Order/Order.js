import React from "react";
import Badge from "react-bootstrap/Badge";
import { FormattedMessage } from "react-intl";

const order = (props) => {
  let deliveryMethod;
  switch (props.method) {
    case "fast":
      deliveryMethod = <FormattedMessage id="fast" />;
      break;
    case "cheap":
      deliveryMethod = <FormattedMessage id="cheap" />;
      break;
    default:
      deliveryMethod = <FormattedMessage id="unknown-f" />;
  }

  let state;
  switch (props.state) {
    case "waiting_to_pay":
      state = <FormattedMessage id="waiting-to-pay" />;
      break;
    default:
      state = <FormattedMessage id="unknown-m" />;
  }

  const date = new Date(Date.parse(props.date));
  const format = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("cs-CZ", format).format(date);
  const ingredients = Object.keys(props.ingredients).map(
    (ingredient, index) => {
      const count = props.ingredients[ingredient];
      let color;
      switch (ingredient) {
        case "salad":
          color = "success";
          break;
        case "bacon":
          color = "danger";
          break;
        case "cheese":
          color = "warning";
          break;
        case "meat":
          color = "dark";
          break;
        default:
          color = "secondary";
          break;
      }

      return count ? (
        <Badge key={index} variant={color} style={{ marginRight: "3px" }}>
          {count}
        </Badge>
      ) : null;
    }
  );

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{props.name}</td>
      <td>{deliveryMethod}</td>
      <td>{ingredients}</td>
      <td>
        {props.price} <FormattedMessage id="czk" />
      </td>
      <td>{state}</td>
    </tr>
  );
};

export default order;
