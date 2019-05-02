import React from 'react';
import BTable from 'react-bootstrap/Table'

const Table = (props) => {
  return (
      <BTable size="sm" borderless>
          <tbody>
              {props.children}
          </tbody>
      </BTable>
  );
};

export default Table;
