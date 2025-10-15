import React from 'react'

const Button = () => {
  const handleButton = () => {
    console.log("You clickd me senpaiiiiii")
  }
  return (
    <button onClick={handleButton}>
      Click me senpaiiiii
    </button>
  )
}

export default Button
