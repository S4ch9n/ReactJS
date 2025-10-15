import React from 'react'

const User = ({name , age , isAvailable , hobbies}) => { //destructuring
  return (
    <section>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Is available : {isAvailable}</h3>
      <h4>Hobbies : {hobbies}</h4>
    </section>
  );
}

export default User
