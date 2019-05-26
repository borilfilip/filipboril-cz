import React from 'react';
import Alert from 'react-bootstrap/Alert'

const demosHeader = (props) => {
    return (
        <Alert variant="info">
            <p className="mb-0">
                Ukázky postupně vylepšuji a přidávám další funkcionality. K ukázkám brzy zveřejním zdrojový kód.
            </p>
        </Alert>
    );
};

export default demosHeader;
