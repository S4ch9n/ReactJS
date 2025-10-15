import React from 'react'
import { useReducer } from 'react';
import Counter from './Components/Counter'; // (Optional) Not used in current code, may be part of another component

// 🔹 Step 1: Initial state
const initialState = { count: 0 };  // This is the initial state passed to useReducer

// 🔹 Step 2: Reducer function - defines how state should change based on action type
const reducer = (state, action) => {
  // state: current state object (e.g., {count: 0})
  // action: object that describes how to change the state (e.g., {type: 'increment'})

  switch (action.type) {
    case 'increment':
      // If the action type is 'increment', increase count by 1
      return { ...state, count: state.count + 1 }; // Copy existing state, update only count

    case 'decrement':
      // If action type is 'decrement', decrease count by 1
      return { ...state, count: state.count - 1 };

    case 'reset':
      // If action type is 'reset', reset count to 0
      return { ...state, count: 0 };

    default:
      // If action type is unknown, return current state unchanged
      return state;
  }
};

// 🔹 Step 3: Main App component
const App = () => {
  // useReducer returns the current state and a dispatch function to send actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Dispatch an 'increment' action when + button is clicked */}
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>

      {/* Dispatch a 'decrement' action when - button is clicked */}
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>

      {/* Dispatch a 'reset' action when reset button is clicked */}
      <button onClick={() => dispatch({ type: 'reset' })}> reset </button>

      {/* Display the current count from state */}
      <h1>Count : {state.count}</h1>

      <Counter />
    </div>
  )
}

export default App;
