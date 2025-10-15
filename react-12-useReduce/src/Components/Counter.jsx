import React, { useState, useReducer } from 'react';
// Import the reducer function and initial state from another file
import { CounterReducer, initialState } from './CounterReducer';

const Counter = () => {
  // useReducer hook manages the count state based on defined actions
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  // Local input state to hold user input for custom increment/decrement
  const [inputValue, setInputValue] = useState(0);

  // Dispatch 'increment' action to increase count by 1
  const handleIncrement = () => dispatch({ type: 'increment' });

  // Dispatch 'decrement' action to decrease count by 1
  const handleDecrement = () => dispatch({ type: 'decrement' });

  // Dispatch 'incrementByAmount' with input value converted to number
  const handleIncrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', payload: +inputValue });
    setInputValue(0); // Clear input field
  };

  // Dispatch 'decrementByAmount' with input value converted to number
  const handleDecrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', payload: +inputValue });
    setInputValue(0); // Clear input field
  };

  return (
    <div>
      {/* Display current count */}
      <h2>Count: {state.count}</h2>

      {/* Basic increment/decrement buttons */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div style={{ marginTop: "1rem" }}>
        {/* Input field for custom amount (number only) */}
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter amount"
        />

        {/* Custom increment/decrement buttons */}
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
