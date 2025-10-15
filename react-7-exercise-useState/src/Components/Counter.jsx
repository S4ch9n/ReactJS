import { useEffect, useState } from 'react'


const Counter = () => {
  // const [count , setCount] = useState(0);
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);

  //another method called lazy initialization , instead of just passing a value , you are passing a function to useState.
  const [count , setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;
