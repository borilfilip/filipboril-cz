import React from 'react';
import Alert from "react-bootstrap/Alert";

const thankYou = (props) => {
    return (
        <Alert variant="success">
            <Alert.Heading>Dobrou chuť :-)</Alert.Heading>
            <p>Objednávka byla přijata. Vlastně nebyla – je to jen demo. Ale najdete ji v seznamu objednávek.</p>
        </Alert>
    );
};

export default thankYou;
