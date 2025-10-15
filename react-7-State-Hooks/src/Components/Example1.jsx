import React from 'react'
import { useState } from 'react'

const Example1 = () => {
  const [count , setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const increment = () =>{
      setCount((prevcount) => prevcount + 1);
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

export default Example1
