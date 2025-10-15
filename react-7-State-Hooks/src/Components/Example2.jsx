import React, { useState } from 'react';

const Example2 = () => {
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 10));

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100);
    setRandomNumber(number);
  }

  return (
    <div>
      <h1>Random Number : {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Random number</button>
    </div>
  );
};

export default Example2;
