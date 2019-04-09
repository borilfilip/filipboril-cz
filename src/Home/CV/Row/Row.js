import React from 'react';

const Row = (props) => {
  return (
      <tr>
          <th scope="row">{props.name}</th>
          <td>{props.children}</td>
      </tr>
  );
};

export default Row;
