import React from 'react'

const ProductList = () => {
   const products = [
  { id: 1, name: "Wireless Mouse", price: 29.99 },
  { id: 2, name: "Bluetooth Keyboard", price: 49.99 },
  { id: 3, name: "USB-C Hub", price: 39.99 },
];

  return (
    <div>
      {products.map(({id , name , price}) => 
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      )}
    </div>
  )
}

export default ProductList
