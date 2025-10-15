import React, { useState } from 'react'

const ShoppingList = () => {
  const [items , setItems] = useState([]);
  const [name , setName] = useState('')
  const [quantity , setQuanity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name || !quantity) return;

    const newItems = {
      name , quantity : parseInt(quantity),
    };

    setItems((prevItems) => [...prevItems , newItems])
    setName("");
    setQuanity("");
  };

  
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' 
      placeholder='Item Name' 
      value={name}
      onChange={(e) => setName(e.target.value)}
       />

         <input type='number' 
      placeholder='quantity' 
      value={quantity}
      onChange={(e) => setQuanity(e.target.value)}
       />

       <button type="submit">Add Item</button>
       </form>

       <ul>
        {items.map((item , index) => (
          <li key = {index}>
            {item.name} - quantity : {item.quantity}
          </li>
        ))}
       </ul>

    </div>
  )
}


export default ShoppingList
