import React from 'react'

const Expression = () => {
  const myName = "Coder"
  const multiply = (a,b) => a * b
  const simpleClass = 'simple-class'
  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>

      <p>My friend list : {["John" , "Nick" , "Fury"]}</p>

      <p>2 * 2 =  {multiply(2,2)}</p>

      <p className={simpleClass}>This is simple class</p>
    </section>
  )
}

export default Expression
