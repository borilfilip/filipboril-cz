import React from 'react';

const Table = (props) => {
  return (
      <table className="table table-sm table-borderless">
          <tbody>
              {props.children}
          </tbody>
      </table>
  );
};

export default Table;
