import React from 'react'

const Greeting = ({timeOfDay}) => {
//   let message;
//   if(timeOfDay == 'morning'){
//     message = "Good morning";
//   }else{
//     message = "Good night";
//   }
//   return message


return timeOfDay == 'morning' ? <h1>Good morning </h1> : <h1>Good night</h1>
}

export default Greeting
