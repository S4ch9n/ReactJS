import React from 'react'

const Greetings = () => {
  const name = "hello"
  const date = new Date()
  return (
    <div>
      <h1>{name}</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greetings