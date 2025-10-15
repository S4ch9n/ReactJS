import React from 'react'
import { createPortal } from 'react-dom'

const Practice = ({name}) => {
  const target = document.querySelector('#practice-content');
  if(!target) return null;
  return createPortal(
    <div>
      <h1>{name}</h1>
    </div>,target
  )
}

export default Practice
