import React from 'react'
import { useState } from 'react'

const Friends = () => {
  const [friends, setFriends] = useState(["John", "Nick"])

  //adding new friend to the list
  const addFriend = () => setFriends([...friends, "Thor"])

  //removing the person from the list
  const removeFriend = () => setFriends(friends.filter((f) => f !== "Thor"))

  //update friend name
  const updateButton = () => setFriends(friends.map((f) => f === "John" ? "John Smith" : f));


  return (
    <section>
      {friends.map((friend) => (
        <li key={friend}>{friend}</li>
      ))}

      
      <button onClick={addFriend}>Add friend</button>

      <button onClick={removeFriend}>Remove friend</button>

      <button onClick={updateButton}>Update friend</button>


    </section>
  )
}

export default Friends
