import React from 'react';
import Table from "react-bootstrap/Table";

const ordersTable = (props) => (
    <Table striped hover responsive>
        <thead>
        <tr>
            <th>Datum</th>
            <th>Jméno</th>
            <th>Doručení</th>
            <th>Cena</th>
            <th>Stav</th>
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </Table>
);

export default ordersTable;
