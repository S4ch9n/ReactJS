import React, { useRef } from 'react'
import FocusInput from '../FocusInput'
import Timer from '../Timer'

const App = () => {
  const inputElement = useRef(null)
  const focusInput = () => {
    inputElement.current.focus()
    inputElement.current.value = "John";
  }
  return (
    <div>
      <input type='text' ref={inputElement} />
      <button onClick = {() => focusInput()}>Focus and write</button>

      <FocusInput />
      <Timer />
    </div>
  )
}

export default App
 