import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {
  // 'count' is state that updates every second
  const [count, setCount] = useState(0);

  // 'intervalRef' will hold a mutable reference to the interval ID
  // Unlike state, updating this value won't cause a re-render
  const intervalRef = useRef(null);

  useEffect(() => {
    // When the component mounts, start an interval
    // The returned interval ID is stored inside intervalRef.current
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1); // increment count every second
    }, 1000);

    // Cleanup function: when the component unmounts
    // clear the interval using the stored interval ID
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); 
  // [] ensures this effect runs only once (on mount and unmount)

  return (
    <div>
      <h1>Timer: {count} seconds</h1>

      {/* 
        When the Stop button is clicked, 
        we access intervalRef.current to clear the active interval.
        Since useRef doesn’t trigger re-renders, we can safely store
        this changing value (the interval ID) without affecting the UI.
      */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
