import React from 'react'
import ComponentA from './Components/ComponentA'

const App = () => {
  const name = 'John';
  return (
    <div>
      <ComponentA name = {name} />
    </div>
  )
}

export default App
