import React from 'react'
import { createContext } from 'react'
import ComponentA from './Components/ComponentA';



//create instance of creatContext
export const NameContext = createContext();
export const AgeContext = createContext();
export const RollNoContext = createContext();


const App = () => {
  const name = "Spiderman";
  const age = 20;
  const rollNo = 4;
  return (
    <div>
      <NameContext.Provider value={name}>
        <AgeContext.Provider value = {age}>
          <RollNoContext.Provider value={rollNo}>
          <ComponentA />
          </RollNoContext.Provider>
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  )
}

export default App;
