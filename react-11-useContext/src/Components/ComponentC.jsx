import { useContext } from "react"

import { NameContext , AgeContext, RollNoContext } from "../App"


const ComponentC = () => {
const userName = useContext(NameContext);
const userAge = useContext(AgeContext);
const userRollNo = useContext(RollNoContext);
  return (
    <div>
      {/* <NameContext.Consumer>
        {(name) => {
          return(
            <AgeContext.Consumer>
              {(age) => {
                return <h1>My name is {name} and age is {age}</h1>
              }}
            </AgeContext.Consumer>
          )
        }}
      </NameContext.Consumer> */}


      <h1>Hello my name is {userName} and my age is {userAge}. Roll No. : {userRollNo}</h1>
    </div>
  )
}

export default ComponentC
