import React from "react";
import Alert from "react-bootstrap/Alert";
import { FormattedMessage } from "react-intl";

const thankYou = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>
        <FormattedMessage id="enjoy-meal" />
      </Alert.Heading>
      <p>
        <FormattedMessage id="order-received" />
      </p>
    </Alert>
  );
};

export default thankYou;
