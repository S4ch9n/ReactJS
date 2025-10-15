import React, { useRef } from 'react'

const FocusInput = () => {
  // Create a reference to store the input DOM element
  const inputRef = useRef(null);

  // Function to focus the input element using the ref
  const focusInput = () => {
    // Access the actual input element through inputRef.current
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Click the button to focus" 
      />

      {/* Call 'focusInput' (the handler), not 'FocusInput' (the component) */}
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
