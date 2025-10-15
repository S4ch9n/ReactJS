import React from 'react';

const FirstComponents = ({ count, onClickHandler }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClickHandler}>Increment</button>
    </div>
  );
};

export default FirstComponents;
