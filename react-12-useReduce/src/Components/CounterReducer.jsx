

// 🔹 Initial state for the counter
const initialState = { count: 0 };

// 🔹 Reducer function to manage counter state
function CounterReducer(state, action) {
  // The action object has a 'type' and optionally a 'payload'
  // Based on the type, we decide how to update the state
  switch (action.type) {
    case 'increment':
      // Increase count by 1
      return { count: state.count + 1 };

    case 'decrement':
      // Decrease count by 1
      return { count: state.count - 1 };

    case 'incrementByAmount':
      // Increase count by a specific amount passed in action.payload
      return { count: state.count + action.payload };

    case 'decrementByAmount':
      // Decrease count by a specific amount passed in action.payload
      return { count: state.count - action.payload }; 

    default:
      // If action type is unknown, return the current state unchanged
      return state;
  }
}

// 🔹 Export both reducer and initial state so they can be used in components
export { initialState, CounterReducer };
