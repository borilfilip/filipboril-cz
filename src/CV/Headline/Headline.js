import React from 'react';

const Headline = (props) => {
  return (
      <tr>
          <th scope="row" colSpan="2"><h2>{props.children}</h2></th>
      </tr>
  );
};

export default Headline;
