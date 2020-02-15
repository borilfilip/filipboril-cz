import React from 'react';

const Block = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <div className="mt-3 mb-4">
        {props.children}
      </div>
    </>
  )
};

export default Block;
