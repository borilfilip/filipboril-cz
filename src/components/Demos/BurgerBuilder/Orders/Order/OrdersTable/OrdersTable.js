import React from 'react';
import Table from "react-bootstrap/Table";
import {FormattedMessage} from "react-intl";

const ordersTable = (props) => (
    <Table striped hover responsive>
        <thead>
        <tr>
            <th><FormattedMessage id="date" /></th>
            <th><FormattedMessage id="name" /></th>
            <th><FormattedMessage id="delivery" /></th>
            <th><FormattedMessage id="ingredients" /></th>
            <th><FormattedMessage id="price" /></th>
            <th><FormattedMessage id="state" /></th>
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </Table>
);

export default ordersTable;
