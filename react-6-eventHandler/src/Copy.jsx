import React from 'react'
const copyHandler = () => {
  console.log("Stop copying me ")
}
const Copy = () => {
  return(
  <p onCopy={copyHandler}>
    hello , this is content dont copy it 
  </p>
  );
}

export default Copy
